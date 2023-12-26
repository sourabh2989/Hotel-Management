import React from "react";

function About() {
  return (
    <div className="ml-10 mr-10">
      <h1 className="flex items-center justify-center text-7xl text-green-500">
        The Exotica
      </h1>
      <div className="flex   ">
        <div className="flex flex-row w-[50%] m-5 break-all text-xl text-gray-500">
          <p>
            The Exotica is situated in the lap of nature where serenity is well
            felt in the breeze. It is close to the airport and key commercial
            and business locations, yet significantly distanced to maintain the
            beauty of a destination which is perfect for world class events and
            weddings. It operates 108 luxurious rooms and suites and offers over
            19000 square feet of conference and banqueting space, for organizing
            both indoor and outdoor events of grand level.
          </p>
        </div>
        <div className="flex flex-row w-[50%] m-5">
          <img
            className=""
            src="https://www.hoteltheexotica.com/wp-content/uploads/2018/05/DG6A2515.jpg"
            alt="ab1"
          />
        </div>
      </div>

      <div className="flex m-10">
        <div className="flex flex-row w-[50%] m-5">
          <img
            src="https://www.hoteltheexotica.com/wp-content/uploads/2018/04/DG6A2525.jpg"
            alt="ab1"
          />
        </div>
        <div className="flex flex-row w-[50%] m-5 break-all text-xl text-gray-500">
          <p>
            Founders of The Exotica have the legacy of 22 years in crafting the
            perfect wedding destination. They gifted the second open-air wedding
            place named Swagat Garden to the city, in the year 1996. Swagat
            Garden is located on A.B. Road, near C21 Mall and it is known as the
            most talked about wedding venue of that time. Since then, they are
            flourishing the culture of big fat weddings in Indore. In the year
            2000, they came up with Kalash Mandapam at Sapna Sangeeta. With time
            it became the place for a budget wedding and thus, catering the
            segment which was left untouched earlier. Now with The Exotica,
            Indore is all set to host the destination weddings. One place where
            all the guests can stay together for attending all the events and
            enjoy the services that are class apart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
