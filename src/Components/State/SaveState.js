import React,{useState} from "react";
import axios from "axios";


function SaveState() {
    const[stid,setStId]=useState();
    const[stname,setStName]=useState();
    
    const handleStIdText=(evt)=>{
        setStId(evt.target.value);
    }
    const handleStNameText=(evt)=>{
        setStName(evt.target.value);
    }
    const handleSaveButton=()=>{
    var obj={
        StId:stid,
        StName:stname
    };
    axios.post("http://localhost:6969/state/addstate",obj).then(res => {
        alert("State Saved Successfully !");
    }).catch(err => {
        alert(err);
    });

    }
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-4">
            <h4 className="flex justify-center text-lg text-white bg-green-800" >Add NEW STATE</h4>
            <table>
                <tr>
                    <td>State Id</td>
                    <td><input type="number" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleStIdText} /></td>
                </tr>
                <tr>
                    <td>State Name</td>
                    <td><input type="text" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleStNameText} /></td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td><button  type="submit" className="rounded-full text-lg bg-green-800 px-5 py-2"  onClick={handleSaveButton}>save</button></td>
                </tr>
            </table>
            </div>
     
    </div>
  );
}

export default SaveState;
