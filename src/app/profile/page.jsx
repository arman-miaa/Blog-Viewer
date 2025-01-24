"use client";

import { useEffect } from "react";
import { UserData } from "../context/UserProvider";
import { redirect } from "next/navigation";

import Link from "next/link";

const page = () => {
  const { user, isAuth } = UserData();

  useEffect(() => {
    if (!isAuth) {
      redirect("/signin");
    }
  }, [isAuth]);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold">Wellcome to your Profile</h1>
      {user && (
        <>
          <img className="rounded-full w-16 h-16" src={user.picture} alt="" />
          <p>{user.email}</p>
          <p>{user.given_name}</p>
        </>
      )}

      <Link href={"/"} className="bg-blue-600 px-4 py-1 text-white">
        Back to Home
      </Link>
    </div>
  );
};

export default page;
