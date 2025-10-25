"use client";

import Image from "next/image";
import { useState } from "react";
import {
  IoClose,
  IoMenu,
  IoHomeOutline,
  IoBagOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    // <div className="flex items-center justify-end md:order-2">
    //   <div className="hidden md:block p-[2px] rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-900 shadow-inner shadow-black/60">
    //     <Image
    //       src={"/avatar.jpg"}
    //       width={40}
    //       height={40}
    //       alt="avatar"
    //       className="rounded-full object-cover size-10 border border-gray-700"
    //     />
    //   </div>
    // </div>

    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-300 rounded-md md:hidden hover:bg-red-600"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-black md:flex-row md:items-center md:justify-center md:gap-12 md:mt-0 md:p-0 md:border-0 md:bg-black">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-gray-600 rounded-sm md:hover:bg-transparent md:p-0 transition-colors"
            >
              <IoHomeOutline className="size-6" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-gray-600 rounded-sm md:hover:bg-transparent md:p-0 transition-colors"
            >
              <IoBagOutline className="size-6" />
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-gray-600 rounded-sm md:hover:bg-transparent md:p-0 transition-colors"
            >
              <IoSpeedometerOutline className="size-6" />
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navlink;
