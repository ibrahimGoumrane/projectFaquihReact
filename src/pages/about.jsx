const About = () => {
  return (
    <div className="max-w-[90vw] w-screen mx-auto flex-1 flex flex-col px-6 lg:px-24">
      <div className="flex items-start w-full max-h-[50vh] mt-24 overflow-hidden justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-start">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-primary pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-secondary-200">
            Welcome to
            <span className="font-semibold text-accent text-xl italic p-2 m-2">
              {" "}
              IbraResto{" "}
            </span>
            , where passion meets flavor! Our mission is to create unforgettable
            dining experiences with exquisite dishes inspired by both tradition
            and innovation. Come savor a unique blend of culinary artistry,
            fresh ingredients, and exceptional service that turns every meal
            into a celebration.
          </p>
        </div>
        <img
          className="border-8 rounded-md border-white object-cover object-center shadow-lg"
          src="/restaurant.jpg"
          alt="Restaurant Interior"
        />
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-primary pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-secondary-100">
            Since our humble beginnings, we have been inspired by the art of
            bringing people together through food. Our talented chefs craft
            every dish with love and creativity, ensuring each bite tells a
            story of its own. At{" "}
            <span className="font-semibold text-accent text-xl italic p-2 m-2">
              IbraResto
            </span>
            , we believe in making memories around the table.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="w-32 h-32 rounded-full shadow-md"
                src="/chef1.jpg"
                alt="Chef Maria"
              />
              <p className="font-medium text-xl leading-5 text-secondary-100 mt-4">
                Chef Maria
              </p>
              <p className="text-sm text-secondary-100/90">
                Specializes in Italian Cuisine
              </p>
            </div>

            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="w-32 h-32 rounded-full shadow-md"
                src="/chef2.jpg"
                alt="Chef Thomas"
              />
              <p className="font-medium text-xl leading-5 text-secondary-100 mt-4">
                Chef Thomas
              </p>
              <p className="text-sm text-secondary-100/90">
                Master of French Pastry
              </p>
            </div>

            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="w-32 h-32 rounded-full shadow-md"
                src="/chef3.jpg"
                alt="Chef Aisha"
              />
              <p className="font-medium text-xl leading-5 text-secondary-100 mt-4">
                Chef Aisha
              </p>
              <p className="text-sm text-secondary-100/90">
                Fusion Cuisine Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
