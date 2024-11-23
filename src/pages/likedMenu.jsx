import LikedMenuList from "../components/likedMenuList";
const LikedMenu = () => {
  return (
    <div className="max-w-[90vw] w-screen mx-auto flex-1 flex flex-col items-center justify-center">
      <div className="max-w-screen-2xl w-full bg-white p-20 rounded-t-2xl flex-1 flex flex-col items-start  justify-start ">
        <div className="flex-1 w-full flex flex-col justify-start items-center space-y-6  ">
          <h1 className="text-4xl text-center font-extrabold text-black  drop-shadow-lg">
            Your Liked Dishes
          </h1>
          <div className="max-h-[700px] overflow-y-auto w-full">
            <LikedMenuList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedMenu;
