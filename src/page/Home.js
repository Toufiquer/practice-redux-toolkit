import React from "react";
import Nav from "../components/Nav/Nav";

const Home = () => {
  return (
    <>
      {/* <!-- navigation --> */}
      <Nav />

      {/* <!-- Tags --> */}
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            react
          </div>
          {/* <!-- selected --> */}
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
            redux
          </div>
        </div>
      </section>

      {/* <!-- Video Grid --> */}
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* <!-- single video --> */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
              <div className="w-full flex flex-col">
                <div className="relative">
                  <a href="video.html">
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      className="w-full h-auto"
                      alt="Some video title"
                    />
                  </a>

                  <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    12:10
                  </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      className="rounded-full h-6 w-6"
                      alt="Learn with Sumit"
                    />
                  </a>

                  <div clas="flex flex-col">
                    <a href="video.html">
                      <p className="text-slate-900 text-sm font-semibold">
                        Video title
                      </p>
                    </a>
                    <a
                      className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                      href="#"
                    >
                      Learn with Sumit
                    </a>
                    <p className="text-gray-400 text-xs mt-1">
                      200 views . May 3, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
          </div>
        </section>
      </section>

      {/* <!-- pagination--> */}
      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full">1</div>
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            2
          </div>
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            3
          </div>
          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            4
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <section className="pt-6">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
          <div>Copyright 2022 Learn with Sumit.</div>
          <div>
            <a
              href="https://youtube.com/learnwithsumit"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
