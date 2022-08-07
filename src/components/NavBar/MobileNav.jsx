import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore from "../../store/authStore";
import createOrGetUser from "../../util/auth";

const MobileNav = (props) => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div
      className={` rounded-lg z-20 w-full py-10 m-auto absolute bg-dark_voilte flex flex-col text-white font-bold ${props.className}`}
    >
      <div className="flex flex-col items-center child:cursor-pointer gap-6 text-base border-b border-b-Gray/25 mx-8 pb-6 ">
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className="mx-8 flex flex-col items-center child:cursor-pointer gap-6 text-base pt-6  ">
        {userProfile ? (
          <>
            <img
              className="rounded-full cursor-pointer "
              alt="profile"
              src={userProfile.image}
              width={40}
              height={40}
            />
            <p className=" text-white font-normal ">
              Hello, {userProfile.userName}
            </p>
            <button
              onClick={() => {
                googleLogout();
                removeUser();
              }}
              className="cursor-pointer w-10 text-white hover:text-veryDarkBlue hover:font-bold "
            >
              Logout
            </button>
          </>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("error")}
          ></GoogleLogin>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
