import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateCity() {
  const [ctid, setCtId] = useState();
  const [ctname, setCtName] = useState("");
  const [stid, setStId] = useState();
  const [stname, setStName] = useState();
  const [stitems, setStItems] = useState([]);
  const [ctitems, setCtItems] = useState([]);

  const handleCtNameText = (evt) => {
    setCtName(evt.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:6969/state/showstate")
      .then((res) => {
        setStItems(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    axios
      .get("http://localhost:6969/city/showcity")
      .then((res) => {
        setCtItems(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const handleCitySelect = (evt) => {
    var ctypeid = evt.target.value;

    ctitems.map((itemm) => {
      if (ctypeid == itemm.CtId) {
        setCtId(itemm.CtId);
        setCtName(itemm.CtName);
      }
    });
  };
  const handleStateSelect = (evt) => {
    stitems.map((item) => {
      var stypeid = evt.target.value;

      if (stypeid == item.StId) {
        setStId(item.StId);
        setStName(item.StName);
      }
    });
  };

  const handleUpdateButton = () => {
    axios
      .put(
        "http://localhost:6969/city/updatecity/" +
          ctid +
          "/" +
          ctname +
          "/" +
          stid
      )
      .then((res) => {
        alert("Data Updated Successfully !");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-4">
      <h4 className="flex justify-center text-lg text-white bg-green-800">UPDATE CITY </h4>
      <table>
        <tr>
          <td>Select State</td>
          <select className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleStateSelect}>
            <option value="/">------ SELECT STATE ---</option>

            {stitems.map((item) => (
              <option value={item.StId}>{item.StName}</option>
            ))}
          </select>
        </tr>

        <tr>
          <td>Select city</td>

          <select className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleCitySelect}>
            <option value="/">------ SELECT CITY -----</option>
            {ctitems.map((itemm) => (
              <option value={itemm.CtId}>{itemm.CtName}</option>
            ))}
          </select>
        </tr>

        <tr>
          <td>State ID</td>
          <td>
            <input className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="text" value={stid} readOnly />
          </td>
        </tr>
        <tr>
          <td>State Name</td>
          <td>
            <input className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="text" value={stname} readOnly />
          </td>
        </tr>
        <tr>
          <td>City Id</td>
          <td>
            <input className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="text" value={ctid} readOnly />
          </td>
        </tr>
        <tr>
          <td>City Name </td>
          <td>
            <input className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="text" onChange={handleCtNameText} value={ctname} />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button className="rounded-full text-lg bg-green-800 px-5 py-2" type="submit" onClick={handleUpdateButton}>
              Update
            </button>
          </td>
        </tr>
      </table>
      </div>
    </div>
  );
}
export default UpdateCity;
