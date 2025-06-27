import { useContext } from "react";
import { MyContext } from "./UseContextTask";
import Card from "react-bootstrap/Card";

function ChildComponent() {
  const users = useContext(MyContext);
  console.log(users);

  return (
    <div>
      <div className="cards-div">
         
        {users
          ? users.map((user) => (
              <Card className="cards" style={{ width: "21rem" }}>
                <Card.Title>User {user.id}</Card.Title>
                <Card.Body>
                  <Card.Text className="text">
                    {" "}
                    Name : {user.firstName} {user.lastName}{" "}
                  </Card.Text>

                  <Card.Text className="text"> Email : {user.email} </Card.Text>
                  <Card.Text className="text"> Age : {user.age} </Card.Text>
                </Card.Body>
              </Card>
            ))
          : "No Data"}
      </div>
    </div>
  );
}

export default ChildComponent;
