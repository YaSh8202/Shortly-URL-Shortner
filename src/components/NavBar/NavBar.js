import React, { useContext } from "react";
import { Menu } from "../UI/AllSvgs";
import MobileNav from "./MobileNav";
import AuthContext from "../../context/AuthContext";
import GoogleButton from "react-google-button";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { googleSignIn, user, logOut, loading } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" relative lg:w-9/12 w-[85%]  m-auto mt-6 flex items-center justify-between lg:justify-start">
      <h2 className="text-3xl font-bold text-veryDarkBlue mr-8 ">Shortly</h2>
      <div className="lg:hidden">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Menu />
        </button>
      </div>
      <MobileNav
        user={user}
        handleGoogleSignIn={handleGoogleSignIn}
        logOut={logOut}
        className={`${isOpen ? "visible" : "invisible"} top-14`}
      />
      <nav className="hidden lg:flex text-sm font-bold  flex-1 justify-between  items-center container ">
        <div>
          <ul className="flex gap-6 items-center text-grayishViolet">
            <li>
              <a
                href="/"
                className="inline-block cursor-pointer hover:text-veryDarkBlue"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="inline-block cursor-pointer hover:text-veryDarkBlue hover:font-bold"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center font-bold text-sm text-right col-span-2 gap-6">
          {user ? (
            <>
              <img
                className="rounded-full cursor-pointer "
                alt="profile"
                src={user.photoURL}
                width={40}
                height={40}
              />
              <p className="  text-gray-600 font-semibold ">
                Hello, {user.displayName}
              </p>
              <button
                onClick={() => {
                  logOut();
                }}
                className="cursor-pointer w-10 hover:text-veryDarkBlue hover:font-bold text-grayishViolet"
              >
                Logout
              </button>
            </>
          ) : loading ? (
            <></>
          ) : (
            <GoogleButton onClick={handleGoogleSignIn} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
