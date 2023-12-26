import React,{useState} from "react";
import axios from "axios";


function ShowState()
{
    const[stid,setStId]=useState();
    const[stname,setStName]=useState();
    const[stitems,setStItems]=useState([]);
    const handleShowButton=()=>{
        axios.get("http://localhost:6969/state/showstate").then(res=>{
            setStItems(res.data);
        }).catch(err=>{
            alert(err);
        });
    } 
    return(
        <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col space-y-4">
            <table>
                <tr><td></td>
                <td><button className="rounded-full text-lg bg-green-800 px-5 py-2"  type="submit" onClick={handleShowButton}>show</button></td>

                </tr>
                <tr>
                    <th>State ID</th>
                    <th>State Name</th>
                </tr>
                {
                    stitems.map((item)=>(
                        <tr>
                            <td>{item.StId}</td>
                            <td>{item.StName}</td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </div>
    );
}

export default ShowState;