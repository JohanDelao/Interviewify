"use client";
import Link from "next/link";
import logo from "../../public/interviewLogo.png";
import arrow from "../../public/arrow-right.svg";
import menu from "../../public/mobile-menu.png";
import history from "../../public/history.svg";
import profile from "../../public/profile.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  const menuButtonMobile = () => {
    setOpenMenuMobile(!openMenuMobile)
  }

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/auth/logout", {
        withCredentials: true,
      });
      router.push("/");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/auth/login/success",
          {
            withCredentials: true,
          }
        );
        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <div className="w-full shadow lg:h-20 md:px-5 px-2">
      <div className="lg:max-w-screen-xl h-full lg:mx-auto flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo of website"
          ></Image>
          <p className="font-bold text-2xl lg:text-3xl">Interviewify</p>
        </Link>
        {!user ? (
          <div className="flex md:w-5/12 lg:w-4/12 xl:w-3/12">
            <div className="items-center w-full justify-around hidden md:flex">
              <Link href={""}>
                <p className="font-medium text-xl">Log In</p>
              </Link>
              <Link
                className="bg-[#3772FF] text-white h-11 w-48 flex items-center justify-center rounded-md"
                href={""}
              >
                <p className="font-medium text-xl mr-2">Join for free</p>
                <Image src={arrow} alt="arrow"></Image>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex md:w-5/12 lg:w-4/12 xl:w-3/12">
            {/* <button className='bg-red-400 text-white h-11 w-48 flex items-center justify-center rounded-md' onClick={handleLogout}>
                            <p className='font-medium text-xl'>Log Out</p>
                        </button> */}
            <div className="justify-around md:flex w-full items-center hidden">
              <Link href={""} className="flex gap-1">
                <Image src={history} width={28} height={28}></Image>
                <p className="text-2xl font-medium">History</p>
              </Link>
              <div
                className="flex gap-1 cursor-pointer"
                onClick={() => setShowProfile(!showProfile)}
              >
                <Image src={profile} width={28} height={28}></Image>
                <p className="text-2xl font-medium">Profile</p>
              </div>
              <dialog
                className={
                  showProfile
                    ? "absolute lg:left-2/3 lg:h-60 lg:w-72 lg:top-16 shadow-md border-2 rounded-md border-slate-300 p-0 m-0 flex flex-col"
                    : "hidden"
                }
                id="navMenu"
              >
                <div className="font-medium text-md text-black h-1/4 flex justify-center items-center">
                  {user.email}
                </div>
                <div className="font-medium text-md text-[#696969] h-1/4 border border-t-2 border-slate-300 flex justify-center items-center">
                  Settings
                </div>
                <div className="font-medium text-md text-[#696969] h-1/4 border border-slate-300 flex justify-center items-center">
                  Report a bug
                </div>
                <div
                  className="font-medium text-md text-[#696969] h-1/4 border rounded-br-md rounded-bl-md border-slate-300 flex justify-center items-center hover:bg-red-400 hover:text-white cursor-pointer"
                  onClick={handleLogout}
                >
                  Log out
                </div>
              </dialog>
            </div>
            <div className="flex block md:hidden">
              <Image
                src={menu}
                onClick={menuButtonMobile}
                alt="three button clickable menu"
              ></Image>
              <dialog
                className={
                  openMenuMobile
                    ? "absolute left-1/4 top-10 shadow border h-44 w-60 rounded-md border-slate-300 p-0 m-0 flex flex-col ml-5"
                    : "absolute left-1/4 top-6 shadow border rounded-md border-slate-300 p-0 m-0 flex flex-col hidden"
                }
                id="navMenu"
              >
               <div className="font-medium text-md text-black h-1/4 flex justify-center items-center">
                  {user.email}
                </div>
                <div className="font-medium text-md text-[#696969] h-1/4 border border-t-2 border-slate-300 flex justify-center items-center">
                  Settings
                </div>
                <div className="font-medium text-md text-[#696969] h-1/4 border border-slate-300 flex justify-center items-center">
                  Report a bug
                </div>
                <div
                  className="font-medium text-md text-[#696969] h-1/4 border rounded-br-md rounded-bl-md border-slate-300 flex justify-center items-center hover:bg-red-400 hover:text-white cursor-pointer"
                  onClick={handleLogout}
                >
                  Log out
                </div>
              </dialog>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
