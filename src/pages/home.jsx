import { useNavigate } from "react-router-dom";
import SearchBar from "../components/searchBar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[90vw] w-screen mx-auto flex-1 flex flex-col px-[100px]">
      <div className="max-w-screen-md mt-[15vh] flex-1 flex flex-col gap-12 items-start text-left justify-start ">
        <div className="space-y-3 ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black  drop-shadow-lg">
            Good Food Choices are Good Investments.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Discover the best dishes from around the world, curated just for
            you. Our team of culinary experts has handpicked a selection of
            recipes that are not only delicious but also nutritious.
          </p>
        </div>
        <div className="mt-6 w-full ">
          <div className="mt-6 flex space-x-4 ">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:shadow-lg"
              onClick={() => navigate("/menu")}
            >
              Menu
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-6 py-2 rounded-md shadow-md border border-red-600 transition duration-300 hover:shadow-lg"
              onClick={() => navigate("/likedMenu")}
            >
              Go to Your prefered dishes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
