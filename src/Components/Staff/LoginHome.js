import React from 'react';
function LoginHome(props) {
    return (<div>
        <h1 className='bg-gray-800 text-3xl text-white'  >Welcome {props.data.sname} your Room Booked</h1>

        <img src={"http://localhost:6969/staff/getstaffimage/" + props.data.picname} alt="" height="500px" width="1000px" />
    </div>);
}

export default LoginHome;