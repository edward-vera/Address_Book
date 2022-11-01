import React, {useState, useEffect} from 'react';
import User from "./user"
import "../App.css"

// export default class Users extends React.Component {
//   constructor(props){
//     console.log("constructor");
//     super(props);

//     this.state = {
//       users : [],
//     }
//   }
export default function Users() {
  const [submitDetails, setSubmitDetails] = useState(true);
  const [user, setUser] = useState([]);

//   componentDidMount(){
//     console.log("Mounted");
//     fetch("https://randomuser.me/api?results=25")
//     .then((response) => response.json())
//     .then((data) => {
//       this.setState({
//       users: [...data.results],
//     })
//   });
// }
  useEffect(() => {
    console.log("Mounted");
    fetch("https://randomuser.me/api?results=25")
    .then((response) => response.json())
    .then((data) => {
      setUser(data.results);
  });
  }, []);

//   componentDidUpdate(){
  useEffect(() => {
    console.log("UPDATED", user);
  }, [user])

const handleClick = () => {
  setSubmitDetails(!submitDetails);
  setUser([...user]);
};

//   render() {
//     return ( <div>
//       <ul>
//         {this.state.users.map(user => {
//           return (
//             <li className='user'>
//               <img src={user.picture.large} alt={user.name.first}/>
//               <div className='userInfo'></div>
//               <h2>Name: {user.name.first} {user.name.last}</h2>
//             </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
  return(
    <div className='users'>
      <ul>
        {user.map(user => {
          return <User user={user} setSubmitDetails = {false}/>
        })}
      </ul>
    </div>
  )
}