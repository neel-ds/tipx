import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { pathname } = useRouter();
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [dividerDisabled, setDividerDisabled] = useState(false);
  const [display, setDisplay] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 50;

      if (scrollY > triggerHeight) {
        setNavbarBg("bg-white");
        setDividerDisabled(true);
      } else {
        setNavbarBg("bg-transparent");
        setDividerDisabled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed z-10 w-full mx-auto px-2 sm:px-4 py-3 rounded drop-shadow-md ${navbarBg} ${
          isOpenMenu ? "bg-white" : "bg-transparent"
        } bg-opacity-90`}
      >
        <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center flex-1">
            <span className="flex flex-row items-center self-center text-2xl font-semibold whitespace-nowrap">
              <Image
                src="/tipX.png"
                width="40"
                height="40"
                alt="TipX"
                className="mr-3"
              />
              TipX
            </span>
          </Link>
          <div className="flex md:order-2" style={{ marginLeft: "2rem" }}>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="ml-2 md:ml-0 inline-flex items-center py-2 px-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu size="20" />
            </button>
          </div>
          <div
            className={`${
              isOpenMenu ? "block" : "hidden"
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li></li>
              <li>
                <Link
                  href="/"
                  className={`${
                    display === 1 ? "underline" : ""
                  } block underline-offset-4 py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0`}
                  aria-current="page"
                  onClick={() => {
                    setDisplay(1);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#feature"
                  className={`${
                    display === 2 ? "underline" : ""
                  } block underline-offset-4 py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0`}
                  aria-current="page"
                  onClick={() => {
                    setDisplay(2);
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className={`${
                    display === 3 ? "underline" : ""
                  } block underline-offset-4 py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0`}
                  aria-current="page"
                  onClick={() => {
                    setDisplay(3);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#flow"
                  className={`${
                    display === 4 ? "underline" : ""
                  } block underline-offset-4 py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0`}
                  aria-current="page"
                  onClick={() => {
                    setDisplay(4);
                  }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {!dividerDisabled && !isOpenMenu && (
          <div className="flex justify-center">
            <hr className="my-2 w-[90%] sm:w-[80%] md:w-[72%] h-[1px] border-t-0 bg-slate-500/40" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
