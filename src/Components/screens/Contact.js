import React from "react";

function Contact() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen justify-center items-center">
        <span className="text-white text-5xl m-5 p-6 bg-green-800 rounded-lg  ">
          Get In Touch
        </span>

        <div className="flex flex-col ">
          <span className="text-gray-500 text-3xl m-5">
            Location : Mangliya, Indore, MadhyaPradesh 453771
          </span>
          <span className="text-gray-500 text-3xl m-5">
            Email : hoteltheexotica@gmail.com
          </span>
          <span className="text-gray-500 text-3xl m-5">
            Phone : +91 98260 89987, +91 731 249 1000 ,+91 731 249 6000
          </span>
        </div>
      </div>
    </>
  );
}

export default Contact;
