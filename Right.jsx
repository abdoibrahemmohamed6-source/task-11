import "./Right.css"
import { useState } from "react";

export default function Right() {
  const [userName, setUserName] = useState("")
   const [userEmail, setUserEmail] = useState("")
    const [userNumber, setUserNumber] = useState("")

  const Handlesubmit = (e) => {

    const user ={
     name: userName,
     Email:userEmail,
     Number: userNumber,
    };
    if (userName && userEmail && userNumber){
        console.log(user)
    }
    setUserName("");
    setUserEmail("");
    setUserNumber("");
}
  return (
    <div className="main-right-div">
      <div className="h1-div">
        <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="input">
        <span>Name</span>
        <input 
        onChange={(e) => {
            setUserName(e.target.value)
        }}
        type="text" placeholder="Add Name" value={userName} />
      </div>
      <div className="input">
        <span>Email Address</span>
        <input  onChange={(e) => {
            setUserEmail(e.target.value)
        }}
        type="email" placeholder="Add Email" value={userEmail} />
      </div>
      <div className="input">
        <span>Phone Number</span>
        <input  onChange={(e) => {
            setUserNumber(e.target.value)
        }}
         type="number" placeholder="Add Number" value={userNumber} />
      </div>
      <div className="button-div">
        <button onClick={Handlesubmit}>Next Step</button>
      </div>
    </div>
  )
}
