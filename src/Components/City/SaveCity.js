import React, { useState, useEffect } from "react";
import axios from "axios";

// import './SaveCity.css';

function SaveCity() {
  const [ctid, SetCtId] = useState();
  const [ctname, SetCtName] = useState();
  const [stid, SetStId] = useState();
  const [stitems, setStItems] = useState([]);
  const [ctitems, SetCtItems] = useState([]);
  var stnm = " ";

  const handleCtIdText = (evt) => {
    SetCtId(evt.target.value);
  };
  const handleCtNameText = (evt) => {
    SetCtName(evt.target.value);
  };
  const handleStIdText = (evt) => {
    SetStId(evt.target.value);
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
        SetCtItems(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  
  const handleSaveButton = () => {
    var obj = {
      CtId: ctid,
      CtName: ctname,
      StId: stid,
    };
    axios
      .post("http://localhost:6969/city/addcity", obj)
      .then((res) => {
        alert("City Saved");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <div className="flex w-full min-h-screen justify-center gap-5 items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center text-lg text-white bg-green-800">
            SAVE NEW CITY
          </div>
          <table>
            <tr>
              <td>State</td>
              <td>
                <select
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                  onClick={handleStIdText}
                >
                  <option value="/">------ SELECT STATE ---</option>

                  {stitems.map((item) => (
                    <option value={item.StId}>{item.StName}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>City Id</td>
              <td>
                <input
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                  type="text"
                  onChange={handleCtIdText}
                />
              </td>
            </tr>
            <tr>
              <td>City Name</td>
              <td>
                <input
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                  type="text"
                  onChange={handleCtNameText}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button
                  className="rounded-full text-lg bg-green-800 px-5 py-2"
                  type="submit"
                  onClick={handleSaveButton}
                >
                  Save City
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div>
          <h4 className="flex justify-center text-lg text-white bg-green-800">
            LIST OF CITY
          </h4>
          <form className="flex flex-col space-y-4">
            <table>
              <tr>
                <th>City Id</th>
                <th>City Name</th>
                <th>State Name</th>
              </tr>
              {ctitems.map((item) => (
                <tr>
                  <td>{item.CtId}</td>
                  <td>{item.CtName}</td>

                  {stitems.map((itemm) => {
                    if (itemm.StId == item.StId) {
                      stnm = itemm.StName;
                    }
                  })}
                  <td>{stnm}</td>
                </tr>
              ))}
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
export default SaveCity;
