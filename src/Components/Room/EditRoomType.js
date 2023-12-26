import React, { useState, useEffect } from "react";
import axios from "axios";
function EditRoomTypes() {
    const [roomtypeid, setRoomTypeId] = useState();
    const [roomtypename, setRoomTypeName] = useState();
    const [roomcharges, setRoomCharges] = useState();
    const [ritems, setRItems] = useState([]);

    const handleroomTypeNameText = (evt) => {
        setRoomTypeName(evt.target.value);
    }
    const handleroomChargesText = (evt) => {
        setRoomCharges(evt.target.value);
    }
    useEffect(() => {
        axios.get("http://localhost:6969/rooms/showroomtypes").then(res => {
            setRItems(res.data);
        }).catch(err => {
            alert(err)
        })
    },[]);
    const handleroomTypeSelect = (evt) => {
        // var rtypeid=evt.target.value;
        ritems.map((item) => {
            var rtypeid = evt.target.value;
            if (rtypeid == item.roomTypeId) {
                setRoomTypeId(item.roomTypeId);
                setRoomTypeName(item.roomTypeName);
                setRoomCharges(item.roomCharges);
            }
        });
    }
    const handleUpdateButton = () => {
        axios.put("http://localhost:6969/rooms/updateroomtypes/" + roomtypeid + "/" + roomtypename + "/" + roomcharges).then(res => {
            alert("Room Deatils Updated");
        }).catch(err => {
            alert(err)
        })
    }
    const handleDeleteButton = () => {
        axios.delete("http://localhost:6969/rooms/deleteroomtypes/" + roomtypeid).then(res => {
            alert("Room Details Deleted");
            setRoomTypeId("");
            setRoomTypeName("");
            setRoomCharges("");
        }).catch(err => {
            alert(err)
        });
    }
    return (
        <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-4">
            <h1 className="flex justify-center text-lg text-white bg-green-800" >UPDATE ROOM TYPE</h1>
            <table>
                <tr>
                    <td>Select Room</td>
                    <td><select className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleroomTypeSelect}>
                        {
                            ritems.map((item) => (
                                <option value={item.roomTypeId}>{item.roomTypeName}</option>
                            ))
                        }
                    </select></td>
                </tr>
                <tr>
                    <td>Room Type ID</td>
                    <td>
                        {roomtypeid}
                    </td>
                </tr>
                <tr>
                    <td>Room Type Name</td>
                    <td>
                        <input type="text" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleroomTypeNameText} value={roomtypename} />
                    </td>
                </tr>
                <tr>
                    <td>Charges</td>
                    <td>
                        <input type="number" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleroomChargesText} value={roomcharges} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td><button className="rounded-full text-lg bg-green-800 px-5 py-2"  type="Submit" onClick={handleUpdateButton}>Update</button></td>
                    <td><button className="rounded-full text-lg bg-green-800 px-5 py-2"  type="Submit" onClick={handleDeleteButton}>Delete</button></td>
                </tr>

            </table>
            </div>
        </div>
    );
} export default EditRoomTypes;