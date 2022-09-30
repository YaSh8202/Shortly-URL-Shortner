import React from "react";
import GoogleButton from "./GoogleButton";

const MobileNav = ({
  setIsOpen,
  user,
  handleGoogleSignIn,
  logOut,
  className,
}) => {
  return (
    <div
      className={` rounded-lg z-20 w-full py-10 m-auto absolute bg-dark_voilte flex flex-col text-white font-bold ${className}`}
    >
      <div className="flex flex-col items-center child:cursor-pointer gap-6 text-base border-b border-b-Gray/25 mx-8 pb-6 ">
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className="mx-8 flex flex-col items-center child:cursor-pointer gap-6 text-base pt-6  ">
        {user ? (
          <>
            <img
              className="rounded-full cursor-pointer "
              alt="profile"
              src={user.photoURL}
              width={40}
              height={40}
            />
            <p className=" text-white font-normal ">
              Hello, {user.displayName}
            </p>
            <button
              onClick={() => {
                logOut();
              }}
              className="cursor-pointer w-10 text-white hover:text-veryDarkBlue hover:font-bold "
            >
              Logout
            </button>
          </>
        ) : (
          <GoogleButton
            handleGoogleSignIn={() => {
              handleGoogleSignIn();
              setIsOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MobileNav;
