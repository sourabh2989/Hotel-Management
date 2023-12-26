import React, { useState, useEffect } from "react";
import axios from "axios";

function RoomBook() {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [address, setAddress] = useState();
  const [ctid, setCtId] = useState();
  const [stid, setStId] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [chkindate, setChkInDate] = useState();
  const [chkintime, setChkInTime] = useState();
  const [chkoutdate, setChkOutDate] = useState();
  const [chkouttime, setChkOutTime] = useState();
  const [aadharno, setAadharNo] = useState();
  const [roomtypeid, setRoomTypeId] = useState();
  const [roomno, setRoomNo] = useState();
  const [noadult, setNoAdult] = useState();
  const [nochild, setNoChild] = useState();
  const [rmid, setRmId] = useState();
  const [rmtype, setRmType] = useState();
  const [ctlist, setCtList] = useState([]);
  const [stlist, setStList] = useState([]);
  const [rtypelist, setRTypeList] = useState([]);
  const [rnumlist, setRNumList] = useState([]);
  const [titems, setTItems] = useState([]);
  const handleFNameText = (evt) => {
    setFName(evt.target.value);
  };
  const handleLNameText = (evt) => {
    setLName(evt.target.value);
  };
  const handleAddressText = (evt) => {
    setAddress(evt.target.value);
  };
  const handleStId = (evt) => {
    setStId(evt.target.value);
    axios
      .get("http://localhost:6969/city/showcitybystate/" + evt.target.value)
      .then((res) => {
        setCtList(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleCtId = (evt) => {
    setCtId(evt.target.value);
  };
  const handleZip = (evt) => {
    setZip(evt.target.value);
  };
  const handlePhone = (evt) => {
    setPhone(evt.target.value);
  };
  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const handleChkInDate = (evt) => {
    setChkInDate(evt.target.value);
  };
  const handleChkInTime = (evt) => {
    setChkInTime(evt.target.value);
  };
  const handleChkOutDate = (evt) => {
    setChkOutDate(evt.target.value);
  };
  const handleChkOutTime = (evt) => {
    setChkOutTime(evt.target.value);
  };
  const handleAadharNo = (evt) => {
    setAadharNo(evt.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:6969/state/showstate")
      .then((res) => {
        setStList(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    axios
      .get("http://localhost:6969/rooms/showroomTypes")
      .then((res) => {
        setRTypeList(res.data);
        // alert(res.data[0].roomTypeName);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //////////////////////
  const handleRoomid = (evt) => {
    setRmId(evt.target.value);
  };
  const handleRoomType = (evt) => {
    setRmType(evt.target.value);
    axios
      .get("http://localhost:6969/rooms/showidbytype/" + evt.target.value)
      .then((res) => {
        setRNumList(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleRTypeList = (evt) => {
    setRTypeList(evt.target.value);
  };
  const handleRNumList = (evt) => {
    setRNumList(evt.target.value);
  };

  //////////////////////

  const handleNoAdult = (evt) => {
    setNoAdult(evt.target.value);
  };
  const handleNoChild = (evt) => {
    setNoChild(evt.target.value);
  };
  const handleBookButton = () => {
    var obj = {
      FName: fname,
      LName: lname,
      Address: address,
      CtId: ctid,
      StId: stid,
      Zip: zip,
      Phone: phone,
      Email: email,
      ChkInDate: chkindate,
      ChkInTime: chkintime,
      ChkOutDate: chkoutdate,
      ChkOutTime: chkouttime,
      AadharNo: aadharno,
      RmId: rmid,
      RmType: rmtype,
      NoAdult: noadult,
      NoChild: nochild,
    };
    axios
      .post("http://localhost:6969/booking/bookroom/", obj)
      .then((res) => {
        alert("Room Booked");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleShowButton = () => {
    var obj = {
      FName: fname,
      LName: lname,
      Address: address,
      CtId: ctid,
      StId: stid,
      Zip: zip,
      Phone: phone,
      Email: email,
      ChkInDate: chkindate,
      ChkInTime: chkintime,
      ChkOutDate: chkoutdate,
      ChkOutTime: chkouttime,
      AadharNo: aadharno,
      RmId: rmid,
      RmType: rmtype,
      NoAdult: noadult,
      NoChild: nochild,
    };
    axios
      .get("http://localhost:6969/booking/showbookroom", obj)
      .then((res) => {
        setTItems(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-4">
        <h4 className="flex justify-center text-lg text-white bg-green-800">
          BOOKING FORM
        </h4>
        <br />
        <table>
          <tr>
            <td>First Name</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="text"
                onChange={handleFNameText}
              />
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="text"
                onChange={handleLNameText}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="text"
                onChange={handleAddressText}
              />
            </td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <select
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onClick={handleStId}
              >
                {stlist.map((item) => (
                  <option value={item.StId}>{item.StName}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <select
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onClick={handleCtId}
              >
                {ctlist.map((item) => (
                  <option value={item.CtId}>{item.CtName}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Room Type</td>
            <td>
              <select
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onClick={handleRoomType}
              >
                {rtypelist.map((item) => (
                  <option value={item.RmId}>{item.roomTypeName}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Room ID</td>
            <td>
              <select
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onClick={handleRoomid}
              >
                {rtypelist.map((item) => (
                  // <option value={item.roomTypeId}>{item.RoomTypeId}</option>
                  <option value={item.RmType}>{item.roomTypeId}</option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <td>Zip</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="number"
                onChange={handleZip}
              />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="number"
                onChange={handlePhone}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="email"
                onChange={handleEmail}
              />
            </td>
          </tr>
          <tr>
            <td>Check In Data&Time</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="date"
                onChange={handleChkInDate}
              />
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="Time"
                onChange={handleChkInTime}
              />
            </td>
          </tr>
          <tr>
            <td>Check Out Date & Time</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="date"
                onChange={handleChkOutDate}
              />
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="Time"
                onChange={handleChkOutTime}
              />
            </td>
          </tr>
          <tr>
            <td>Aadhar Number</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="number"
                maxLength="12"
                min="12"
                onChange={handleAadharNo}
              />
            </td>
          </tr>
          <tr>
            <td>No. of Adult & Child</td>
            <td>
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="number"
                onChange={handleNoAdult}
                placeholder="Adult"
              />
              <input
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                type="number"
                onChange={handleNoChild}
                placeholder="Child"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button
                type="submit"
                className="rounded-full text-lg bg-green-800 px-5 py-2"
                onClick={handleBookButton}
              >
                Book Room
              </button>
              <button
                type="submit"
                className="rounded-full text-lg bg-green-800 px-5 py-2"
                onClick={handleShowButton}
              >
                Show Data
              </button>
            </td>
          </tr>
        </table>
        <table border="1 solid">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>CtId</th>
            <th>StId</th>
            <th>Zip</th>
            <th>Phone</th>
            <th>Email</th>
            <th>ChkInDate</th>
            <th>ChkInTime</th>
            <th>ChkOutDate</th>
            <th>ChkOutTime</th>
            <th>AadharNo</th>
            <th>Room type</th>
            <th>Room Id</th>
            <th>No. Of Adults</th>
            <th>No. Of Child</th>
            <th>Status</th>
          </tr>
          {titems.map((item) => (
            <tr>
              <td>{item.FName} </td>
              <td>{item.LName} </td>
              <td>{item.Address} </td>
              <td>{item.CtId} </td>
              <td>{item.StId} </td>
              <td>{item.Zip} </td>
              <td>{item.Phone} </td>
              <td>{item.Email} </td>
              <td>{item.ChkInDate} </td>
              <td>{item.ChkInTime} </td>
              <td>{item.ChkOutDate} </td>
              <td>{item.ChkOutTime} </td>
              <td>{item.AadharNo} </td>
              <td>{item.RmType} </td>
              <td>{item.RmId} </td>
              <td>{item.NoAdult} </td>
              <td>{item.NoChild} </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default RoomBook;
