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
    <div className="sticky top-0 z-10 bg-gray-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h4 className="text-2xl font-bold">
            ✍️ <span>BlogNest</span>
          </h4>
        </div>

        {/* Navbar Links & Auth Buttons */}
        <div className="flex gap-6 items-center">
          <Link
            href={"/"}
            className="text-lg font-semibold hover:text-green-500 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href={"/profile"}
            className="text-lg font-semibold hover:text-green-500 transition-all duration-200"
          >
            Profile
          </Link>

          {/* Conditional rendering of auth buttons */}
          <div className="flex gap-4 items-center">
            {user ? (
              <LogoutLink className="mr-4 border border-green-500 rounded-lg px-6 py-2 hover:bg-green-500 hover:text-white transition duration-300">
                Log Out
              </LogoutLink>
            ) : (
              <>
                <LoginLink className="mr-4 border border-green-500 rounded-lg px-6 py-2 hover:bg-green-500 hover:text-white transition duration-300">
                  Sign In
                </LoginLink>
                <RegisterLink className="border-green-500 border rounded-lg px-6 py-2 hover:bg-green-500 hover:text-white transition duration-300">
                  Sign Up
                </RegisterLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
