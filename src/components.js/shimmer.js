import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-white gap-8">
        {Array(16)
          .fill("")
          .map((item, index) => (
            <div>
              <div
                className=" h-52 mt-16  bg-gray-400 w-96  rounded-lg"
                key={index}
              ></div>
              <div className="flex gap-6">
                <div>
                  <div
                    className=" h-10  mt-3 bg-gray-400 w-10 rounded-full"
                    key={index}
                  ></div>
                </div>
                <div>
                <div
                  className=" h-4  mt-3 bg-gray-400 w-80 "
                  key={index}
                  ></div>
                <div
                  className=" h-4  mt-3 bg-gray-400 w-44 "
                  key={index}
                  ></div>
                  </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
