"use client";
import { UserData } from "@/app/context/UserProvider";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
const Navbar = () => {
    const { user, isAuth } = UserData();
    console.log(user);
  return (
    <div className="flex gap-10 justify-center items-center sticky top-0 z-10 bg-gray-400 p-2">
      <p>Home</p>
      <Link href={"/profile"}>Profile</Link>
      <div>
        {user ? (
          <LogoutLink className="bg-blue-400 px-4 py-1 text-white">
            Log Out
          </LogoutLink>
        ) : (
          <>
            <LoginLink className="mr-3 border border-blue-500 px-4 py-1">
              Sign in
            </LoginLink>
            <RegisterLink className="bg-blue-600 px-4 py-1 text-white">
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
