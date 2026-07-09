import { useContext } from "react";
import UserContext from "./Usercontext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile Component</h2>
      <p>User Name : {user}</p>
    </div>
  );
}

export default Profile;