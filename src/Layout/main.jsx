import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
const Layout = () => {
  return (
    <div className="absolute top-0 left-0  w-screen h-screen overflow-hidden flex flex-col  ">
      <img
        className="object-cover object-bottom w-screen h-screen absolute top-0 left-0 -z-10 opacity-95"
        src="/bgImg.jpg"
      />
      <Navigation />
      <main className="flex flex-col w-screen flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
