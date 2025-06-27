import { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import ChildComponent from "./ChildComponent";

export const MyContext = createContext({});

function UseContextTask() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users));
  }, []);
  console.log(users);

  return (
    <>
      <MyContext.Provider value={users}>
        <ChildComponent />
      </MyContext.Provider>
      ;
    </>
  );
}

export default UseContextTask;
