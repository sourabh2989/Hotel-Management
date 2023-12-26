import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


import LoginHome from './LoginHome';
function StaffLogin() {
    const [suid, setSUId] = useState();
    const [supass, setSUPass] = useState();
    const [slist, setSList] = useState([]);

    const handleSUId = (evt) => {
        setSUId(evt.target.value);
    }
    const handleSUPass = (evt) => {
        setSUPass(evt.target.value);
    }

    useEffect(() => {
        axios.get("http://localhost:6969/staff/showstaff")
            .then(res => {
                setSList(res.data);
            }).catch(err => {
                alert(err);
            });
    }, []);

    const handleLoginButton = () => {
        if (suid.length > 0 && supass.length > 0) {
            var found = false;
            slist.map((item) => {
                if (item.SUserId === suid && item.SUserPass === supass) {
                    found = true;
                    const root = ReactDOM.createRoot(document.getElementById("root"));
                    var obj = { sname: item.SName, picname: item.SUserpicname }
                    root.render(<LoginHome data={obj}></LoginHome>)
                }
            })
            if (found === false) {
                alert("Invalid User id or Password");
            }
        } else {
            alert("Fill User Id and Password")
        }
    }

    return (
        <div className="flex w-full min-h-screen justify-center items-center" >
          <div className="flex flex-col space-y-4">
                <h4 className="flex justify-center text-lg text-white bg-green-800">Sign-In</h4>
                <table>
                    <tr>
                        <td>User Id</td>
                        <td><input className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="text" onChange={handleSUId} /></td>
                    </tr>
                     <tr>
                        <td>Password</td>
                        <td><input className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" type="password"  onChange={handleSUPass} /></td>
                    </tr>
                     <tr>
                        <td></td>
                        <td><button className="rounded-full text-lg bg-green-800 px-5 py-2" type='submit' onClick={handleLoginButton}>Login</button></td>
                    </tr>
                </table>
                </div>
        </div>
    );
}

export default StaffLogin;