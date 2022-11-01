import React, {useState, useEffect} from "react";
import "../App.css"

export default function User(props){
  const [isToggled, setIsToggled] = useState(false)

useEffect(() => {
  console.log(isToggled);
}, [isToggled]);

  return (
    <li className='user'>
        <img src={props.user.picture.large} alt={props.user.name.first}/>
          <div className='userInfo'>
          {isToggled && <h2 className="userInfo">Name: {props.user.name.first} {props.user.name.last}</h2>}
          {isToggled && <h3>Email: {props.user.email}</h3>}
          {isToggled && <h4>Age: {props.user.dob.age}</h4>}
          {!isToggled && <button onClick= {() => setIsToggled(!isToggled)}>Show Details</button>}
          {isToggled && <button onClick= {() => setIsToggled(!isToggled)}>Hide Details</button>}
          </div>
    </li>
  );
}
