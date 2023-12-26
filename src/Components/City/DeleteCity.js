import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteCity() {
  const [ctid, setCtId] = useState();
  const [ctname, setCtName] = useState();
  const [ctitems, setCtItems] = useState([]);

  const handleCtIdText = (evt) => {
    setCtId(evt.target.value);
  };
  const handleCtNameText = (evt) => {
    setCtName(evt.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:6969/city/showcity")
      .then((res) => {
        setCtItems(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const handleStateSelect = (evt) => {
    ctitems.map((item) => {
      var ctypeid = evt.target.value;

      if (ctypeid == item.CtId) {
        setCtId(item.CtId);
        setCtName(item.CtName);
      }
    });
  };
  const handleDeleteButton = () => {
    axios
      .delete("http://localhost:6969/city/deleteCity/" + ctid)
      .then((res) => {
        alert("Data Deleted Successfully !");
        setCtId(" ");
        setCtName(" ");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center">
      
        <div className="flex flex-col space-y-4">
        <div className="flex justify-center text-lg text-white bg-green-800">DELETE CITY  </div>
        <table>
          <tr>
            <td>Select City</td>
            <select className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleStateSelect}>
              <option value="/">------ SELECT CITY -----</option>
              {ctitems.map((item) => (
                <option value={item.CtId}>{item.CtName}</option>
              ))}
            </select>
          </tr>

          <tr>
            <td>City Id</td>
            <td>
              <input
                type="number"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                value={ctid}
                onChange={handleCtIdText}
                readOnly
              />
            </td>
          </tr>

          <tr>
            <td>City Name </td>
            <td>
              <input
                type="text"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleCtNameText}
                value={ctname}
                readOnly
              />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <button className="rounded-full text-lg bg-green-800 px-5 py-2" type="submit" onClick={handleDeleteButton}>
                Delete
              </button>
            </td>
          </tr>
        </table>
        </div>
      </div>
    </>
  );
}
export default DeleteCity;
