import "./styles.css";
import * as React from "react";

// https://randomuser.me/api

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [activeItem, setActiveItem] = React.useState(null);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        const users = data.results;
        setUsers(users);
        // console.log(users);
      });
  }, []);
  // console.log(activeItem);
  return (
    <div className="App">
      <ul>
        {users.map((user, i) => (
          <li
            className={activeItem === i ? "active" : "null"}
            onClick={() => {
              setActiveItem(i);
            }}
          >
            {user.name?.first} {user.name?.last}
          </li>
        ))}
      </ul>
    </div>
  );
}
