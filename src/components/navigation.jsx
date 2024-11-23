import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navigation = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const linkClasses = (path) =>
    `text-lg font-bold italic  ${
      pathname === path
        ? "text-red-400 border-b-4 border-red-400"
        : "text-white border-b-4 border-transparent"
    } hover:border-b-4 hover:border-white   `;

  return (
    <div className="w-screen">
      <div className="flex h-24 px-5 items-center justify-between mx-auto w-[90vw]">
        <div>
          <img src="/logo.png" alt="logo" className="h-20 w-20" />
        </div>
        <ul className="flex items-center justify-center gap-x-10 w-[30vw] h-24 ">
          <li className=" basis-1/5 flex items-center justify-center">
            <Link to="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li className=" basis-1/5 flex items-center justify-center">
            <Link to="/about" className={linkClasses("/about")}>
              About
            </Link>
          </li>
          <li className=" basis-1/5 flex items-center justify-center">
            <Link to="/menu" className={linkClasses("/menu")}>
              Menu
            </Link>
          </li>

          <li className=" basis-1/5 flex items-center justify-center group">
            <Link to="/likedMenu">
              <span
                className={
                  "rounded-full  p-3 flex items-center justify-center w-[50px] group-hover:bg-red-500 " +
                  `${pathname === "/likedMenu" ? "clickedSpan" : "bg-white"}`
                }
              >
                <FaHeart
                  className={
                    "text-xl group-hover:text-white " +
                    `${
                      pathname === "/likedMenu" ? "clickedIcon" : "text-red-500"
                    }`
                  }
                />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
