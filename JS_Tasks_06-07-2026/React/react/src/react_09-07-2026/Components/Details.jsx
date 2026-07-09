import { useContext } from "react";
import UserContext from "../ContextApi/Usercontext";

function Details() {
  const { userName } = useContext(UserContext);

  return (
    <>
      <h4>Details Component</h4>
      <p>User : {userName}</p>
    </>
  );
}

export default Details;