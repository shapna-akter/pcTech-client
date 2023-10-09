import { signOut, useSession } from "next-auth/react";
import { signOut as logOut } from "firebase/auth";
import { useRouter } from "next/router";

import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import React from "react";
import auth from "@/firebase/firebaseAuth";

const Header = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const logout = () => {
    logOut(auth);
    router.push("https://pc-build-client-shapna28.vercel.app/");
  };
  return (
    <div className="bg-white flex flex-col  gap-4 items-center justify-between lg:container w-[95%] mx-auto p-2 z-50">
      <Link href="/">
        <p className="text-fuchsia-800 text-3xl font-bold">PCTech</p>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="relative group ">
          <div className="text-lg px-3  h-8 w-28 bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-none text-white font-bold cursor-pointer">
            Categories
          </div>
          <ul className="absolute bg-fuchsia-800 hidden group-hover:block p-4 space-y-2 list-none w-40 rounded-lg">
            <li>
              <Link
                href="/cpu"
                className="text-white hover:text-black font-semibold"
              >
                Processor
              </Link>
            </li>
            <li>
              <Link
                href="/motherboard"
                className="text-white hover:text-black font-semibold"
              >
                Motherboard
              </Link>
            </li>
            <li>
              <Link
                href="/ram"
                className="text-white hover:text-black font-semibold"
              >
                RAM
              </Link>
            </li>
            <li>
              <Link
                href="/psu"
                className="text-white hover:text-black font-semibold"
              >
                Power Supply Unit
              </Link>
            </li>
            <li>
              <Link
                href="/storage"
                className="text-white hover:text-black font-semibold"
              >
                Storage Device
              </Link>
            </li>
            <li>
              <Link
                href="/monitor"
                className="text-white hover:text-black font-semibold"
              >
                Monitor
              </Link>
            </li>
            <li>
              <Link
                href="/others"
                className="text-white hover:text-black font-semibold"
              >
                Others
              </Link>
            </li>
            {session?.user && (
              <li>
                <button
                  onClick={() => {
                    signOut({
                      callbackUrl:
                        "https://pc-build-client-shapna28.vercel.app/",
                    });
                  }}
                  className="text-white hover:text-black font-semibold bg-blue-800 outline-none "
                >
                  Log out
                </button>
              </li>
            )}
            {user?.email && (
              <li>
                <button
                  onClick={logout}
                  className="text-white hover:text-black font-semibold bg-blue-800 outline-none "
                >
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link href="/build-pc">
          {" "}
          <button className="h-8 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 border border-none text-white font-bold cursor-pointer">
            Build
          </button>
        </Link>
        <Link
          href="/login"
          className="bg-blue-600 text-white font-bold p-2 rounded-md cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
