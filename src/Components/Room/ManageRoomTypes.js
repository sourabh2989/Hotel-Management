import React, { useState, useEffect } from "react";

import axios from "axios";

function ManageRoomTypes() {
  const [roomTypeId, SetroomTypeId] = useState();
  const [roomTypeName, SetroomTypeName] = useState();
  const [roomCharges, SetroomCharges] = useState();
  const [titems, setTItems] = useState([]);

  const handleroomTypeId = (evt) => {
    SetroomTypeId(evt.target.value);
  };
  const handleroomTypeName = (evt) => {
    SetroomTypeName(evt.target.value);
  };
  const handleroomCharges = (evt) => {
    SetroomCharges(evt.target.value);
  };

  const handleSaveButton = () => {
    var obj = {
      roomTypeId: roomTypeId,
      roomTypeName: roomTypeName,
      roomCharges: roomCharges,
    };
    axios
      .post("http://localhost:6969/rooms/addroomtypes", obj)
      .then((res) => {
        alert("room type saved");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:6969/rooms/showroomtypes")
      .then((res) => {
        setTItems(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-4">
        <h1 className="flex justify-center text-lg text-white bg-green-800">
          ADD NEW ROOM TYPE
        </h1>
        <table>
          <tr>
            <td>Type Id</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="text"
                onChange={handleroomTypeId}
              />
            </td>
          </tr>
          <tr>
            <td>Type Name</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="text"
                onChange={handleroomTypeName}
              />
            </td>
          </tr>
          <tr>
            <td>Type Charges</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="text"
                onChange={handleroomCharges}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <button
                onClick={handleSaveButton}
                className="rounded-full text-lg bg-green-800 px-5 py-2"
              >
                Save
              </button>
            </td>
            <td></td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Type Id</th>
            <th>Room Type</th>
            <th>Charges</th>
          </tr>
          {titems.map((item) => (
            <tr>
              <td>{item.roomTypeId} </td>
              <td>{item.roomTypeName} </td>
              <td>{item.roomCharges} </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default ManageRoomTypes;
