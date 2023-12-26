import React,{useState,useEffect} from "react";
import axios from "axios";


function UpdateState()
{
    const[stid,setStId]=useState();
    const[stname,setStName]=useState();
    const[stitems,setStItems]=useState([]);
    const handleStNameText=(evt)=>{
        setStName(evt.target.value);
    }
    useEffect(()=>{
        axios.get("http://localhost:6969/state/showstate").then(res=>{
            setStItems(res.data);
        }).catch(err=>{
            alert(err);
        });
    },[])
    const handleStateSelect=(evt)=>{
        stitems.map(item=>{
        var stypeid=(evt.target.value);

            if(stypeid==item.StId){
                setStId(item.StId);
                setStName(item.StName);
            }
        });
    }
    const handleUpdateButton=()=>{
       axios.put('http://localhost:6969/state/updatestate/'+stid+"/"+stname).then(res=>{
        alert("Data Updated Successfully !");
       }).catch(err=>{
        alert(err);
       })
  }
    return(
        <div className="flex w-full min-h-screen justify-center items-center">
             <div className="flex flex-col space-y-4">
            <h4 className="flex justify-center text-lg text-white bg-green-800">UPDATE STATE DETAILS</h4>
         
                <table>
                    <tr>
                        <td>Select State</td>
                        <select className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleStateSelect}>
                        <option value="/">------ SELECT STATE-----</option>
                            {
                                stitems.map(item=>(
                                    <option value={item.StId}>{item.StName}</option>
                                ))
                            }
                        </select>
                    </tr>
                    <tr>
                        <td>State Id</td>
                        <td><input type="number" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"  value={stid} readOnly/></td>
                    </tr>
                    <tr>
                        <td>State Name </td>
                        <td><input type="text" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none" onChange={handleStNameText} value={stname}/></td>
                    </tr>
                    
                    <tr>
                        <td></td>
                        <td><button  type="submit" className="rounded-full text-lg bg-green-800 px-5 py-2" onClick={handleUpdateButton}>Update</button></td>
                    </tr>
                   
                </table>
                </div>
        </div>
    );
}
export default UpdateState;