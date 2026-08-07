import { useContext } from "react";
import UserContext from "./Usercontext";

function Header() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Header Component</h2>
      <p>Welcome {user}</p>
    </div>
  );
}

export default Header;