import React from "react";

function Galary() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen justify-center items-center ">
        <div className="flex flex-row ">
          <img
            src="https://www.hoteltheexotica.com/wp-content/uploads/2018/04/DG6A2578.jpg"
            className="w-[30%] h-[60%] m-5"
            alt="g1i"
          />
          <img
            src="https://www.hoteltheexotica.com/wp-content/uploads/2018/04/DG6A2557.jpg"
            className="w-[30%] h-[60%] m-5"
            alt="g2i"
          />
          <img
            src="https://www.hoteltheexotica.com/wp-content/uploads/2018/04/DG6A2485.jpg"
            className="w-[30%] h-[60%] m-5"
            alt="g3i"
          />
        </div>
      </div>
    </>
  );
}

export default Galary;
