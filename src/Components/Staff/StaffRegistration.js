import React, { useState, useEffect } from "react";
import axios from "axios";

function StaffRegistration() {
  const [sid, setSId] = useState();
  const [sname, setSName] = useState();
  const [gender, setGender] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [ctid, setCtId] = useState();
  const [stid, setStId] = useState();
  const [suserid, setSUserId] = useState();
  const [suserpass, setSUserPass] = useState();
  const [suserpicname, setSUserpicname] = useState();
  const [stlist, setStList] = useState([]);
  const [ctlist, setCtList] = useState([]);
  const [image, setImage] = useState({ preview: " ", data: " " });
  const [status, setStatus] = useState(" ");

  const handleSIdText = (evt) => {
    setSId(evt.target.value);
  };
  const handleSNameText = (evt) => {
    setSName(evt.target.value);
  };
  const handleGender = (evt) => {
    setGender(evt.target.value);
  };
  const handleContactText = (evt) => {
    setContact(evt.target.value);
  };
  const handleEmailText = (evt) => {
    setEmail(evt.target.value);
  };
  const handleAddressText = (evt) => {
    setAddress(evt.target.value);
  };
  const handleStateSelect = (evt) => {
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
  const handleCitySelect = (evt) => {
    setCtId(evt.target.value);
  };
  const handleSUserIdText = (evt) => {
    setSUserId(evt.target.value);
  };
  const handleSUserPassText = (evt) => {
    setSUserPass(evt.target.value);
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
  }, []);

  //Code for Image
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);

    const response = await fetch("http://localhost:6969/uploadstaffimage", {
      method: "POST",
      body: formData,
    });
    if (response) {
      setStatus(response.statusText);
    }
  };
  const handleFileChange = (evt) => {
    const img = {
      preview: URL.createObjectURL(evt.target.files[0]),
      data: evt.target.files[0],
    };
    setImage(img);
    setSUserpicname(evt.target.files[0].name);
  };
  const handleRegButton = () => {
    var obj = {
      SId: sid,
      SName: sname,
      Gender: gender,
      Contact: contact,
      Email: email,
      Address: address,
      StId: stid,
      CtId: ctid,
      SUserId: suserid,
      SUserPass: suserpass,
      SUserpicname: suserpicname,
    };
    axios
      .post("http://localhost:6969/staff/addstaff", obj)
      .then((res) => {
        alert("Registration Done");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleUpdateButton = () => {
    const requestData = {
      SId: sid,
      SName: sname,
    };
    axios
      .put("http://localhost:6969/staff/updatestaff/" + sid + "/" + sname)
      .then((res) => {
        alert("staff Updated");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <h4 className="flex justify-center text-lg text-white bg-green-800">
        Sign-up
      </h4>
      <div className="flex w-full min-h-screen justify-center items-center">
        <table>
          <tr>
            <td>ID</td>
            <td>
              <input
                type="text"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleSIdText}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleSNameText}
              />
            </td>
          </tr>
          <tr>
            <td>Grnder</td>
            <td>
              <input
                type="radio"
                onClick={handleGender}
                name="gender"
                value="Male"
              />
              <span>Male</span>
              <input
                type="radio"
                onClick={handleGender}
                name="gender"
                value="Female"
              />
              <span>Female</span>
            </td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>
              <input
                type="text"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleContactText}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="mail"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleEmailText}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleAddressText}
              />
            </td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <select
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onClick={handleStateSelect}
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
                onClick={handleCitySelect}
              >
                {ctlist.map((item) => (
                  <option value={item.CtId}>{item.CtName}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>User ID</td>
            <td>
              <input
                type="text"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleSUserIdText}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                onChange={handleSUserPassText}
              />
            </td>
          </tr>
          <tr>
            <td>Select Image</td>
            <td>
              {<img src={image.preview} width="100" alt="img" height="100" />}
              <hr />
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"
                  name="file"
                  onChange={handleFileChange}
                />
                <button
                  type="submit"
                  className="rounded-full text-lg bg-green-800 px-5 py-2"
                >
                  Submit Image
                </button>
              </form>
              {<h4>"File Uploaded"{status}</h4>}
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="submit"
                className="rounded-full text-lg bg-green-800 px-5 py-2"
                onClick={handleRegButton}
              >
                Register
              </button>
            </td>
            <td>
              <button
                type="submit"
                className="rounded-full text-lg bg-green-800 px-5 py-2"
                onClick={handleUpdateButton}
              >
                Update
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default StaffRegistration;
