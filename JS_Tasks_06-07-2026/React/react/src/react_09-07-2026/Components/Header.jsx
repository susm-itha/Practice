import { useContext } from "react";
import UserContext from "../ContextApi/Usercontext";

function Header() {
  const { userName } = useContext(UserContext);

  return (
    <>
      <h2>Header Component</h2>
      <h3>Welcome {userName}</h3>
    </>
  );
}

export default Header;