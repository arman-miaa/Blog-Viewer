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
    <div className="sticky top-0 z-10 bg-gray-300">
      <div className="flex container mx-auto gap-10 justify-between items-center  p-4">
        <div>
          <h4 className="text-xl font-bold">
            ✍️ <span>BlogNest</span>{" "}
          </h4>
        </div>
        <div className="flex gap-4 text-xl font-semibold">
          <Link href={"/"} className="hover:text-green-500">
            Home
          </Link>
          <Link href={"/profile"} className="hover:text-green-500">
            Profile
          </Link>
          <div>
            {user ? (
              <LogoutLink className="bg-blue-400 px-4 py-1 text-white">
                Log Out
              </LogoutLink>
            ) : (
              <>
                <LoginLink className="mr-3 border border-green-500 rounded hover:bg-green-500 hover:text-white px-4 py-1">
                  Sign in
                </LoginLink>
                <RegisterLink className="border-green-500 border rounded hover:bg-green-500 hover:text-white  px-4 py-1">
                  Sign up
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
