import React, {useState} from 'react';
const HookForm = (props) => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    return(
        <div>
            <form className='HookForm'>
                <div>
                    <label>First name : </label>
                    <input type="text" onChange={(e) =>setFirstname(e.target.value)}></input>
                </div>
                <div>
                    <label>Last name : </label>
                    <input type="text" onChange={(e) =>setLastname(e.target.value)}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label>Confirm Password : </label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}></input> 
                </div>
            </form>
            <h3> Your form data : </h3>
            <p> First Name : {firstname}</p>
            <p> Last Name : {lastname}</p>
            <p> Email : {email} </p>
            <p> Password : {password} </p>
            <p> Confirm Password : {confirmpassword} </p>
        </div>
    );
}
export default HookForm;
