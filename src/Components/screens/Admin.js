import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center  text-slate-100 text-bold text-3xl ">
      
      <div>
        <h1 className="  m-5 p-2 rounded-md bg-black text-white text-center">
          BOOKING
        </h1>
        <div>
          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/roomBook">Room BOOKING</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/manageRoomType">ADD ROOM TYPES</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/editRoomType">EDIT ROOM TYPES</Link>
          </button>
    
        </div>
      </div>
      
      {/* state setup */}
      <div>
        <h1 className="  m-5 p-2 rounded-md bg-black text-white text-center">
          STATE SECTION
        </h1>
        <div>
          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/saveState">Add New STATE</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/updateState">UPDATE STATE</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/showState">SHOW STATE</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/deleteState">DELETE STATE</Link>
          </button>
        </div>
      </div>


      {/* city setup */}
      <div>
        <h1 className="  m-5 p-2 rounded-md bg-black text-white text-center">
          CITY SECTION
        </h1>
        <div>
          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/saveCity">ADD NEW CITY</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/updateCity">UPDATE CITY</Link>
          </button>

          <button className="rounded-full text-lg bg-green-800 px-5 py-2">
            <Link to="/deleteCity">DELETE CITY</Link>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Admin;
