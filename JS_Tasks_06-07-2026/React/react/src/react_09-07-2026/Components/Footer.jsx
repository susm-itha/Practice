import { useContext } from "react";
import UserContext from "../ContextApi/Usercontext";

function Footer() {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <>
      <h2>Footer Component</h2>
      <p>User : {userName}</p>

      <button onClick={() => setUserName("Rahul")}>
        Change Name
      </button>
    </>
  );
}

export default Footer;