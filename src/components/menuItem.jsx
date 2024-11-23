import { useNavigate } from "react-router-dom";
const MenuItem = ({ dish }) => {
  const {
    id,
    sourceName,
    sourceUrl,
    summary,
    title,
    vegan,
    image,
    vegetarian,
    veryHealthy,
    cheap,
    readyInMinutes,
  } = dish;
  const navigate = useNavigate();
  const truncateSummary = (text, wordLimit) => {
    const newText = text.replace(/<b>/g, "").replace(/<\/b>/g, "\n");
    const words = newText.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return newText;
  };
  const navigateToRecipe = () => {
    //set the recipe as the current recipe in the store
    navigate(`/recipes/${id}`);
  };
  return (
    <div
      id={id}
      className="bg-white p-4 group rounded-lg shadow-2xl flex flex-col items-center max-w-[400px] h-[600px] w-full hover:shadow-2xl hover:shadow-black hover:border-red-400 border-4 border-transparent transition duration-300 ease-in-out cursor-pointer"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded-md mb-4"
        />
      )}
      <h1 className="text-2xl font-bold text-black mb-2">{title}</h1>
      <a className="text-gray-600 mb-1 cursor-pointer text-lg" href={sourceUrl}>
        Source : {sourceName}
      </a>
      <p className="text-gray-600 mb-4 text-sm h-[160px] overflow-y-auto">
        {truncateSummary(summary, 50)}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {vegan && (
          <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">
            Vegan
          </span>
        )}
        {vegetarian && (
          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">
            Vegetarian
          </span>
        )}
        {veryHealthy && (
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
            Very Healthy
          </span>
        )}
        {cheap && (
          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm">
            Cheap
          </span>
        )}
        <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm">
          Ready in {readyInMinutes} minutes
        </span>
      </div>
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg invisible group-hover:visible transition duration-300 "
          onClick={navigateToRecipe}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
