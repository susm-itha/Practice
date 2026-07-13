import { useContext } from "react";
import Contexthook from "./Contexthook";

function Profile() {
  const name = useContext(Contexthook);

  return <h2>Susmitha NYB : {name}</h2>;
}

export default Profile;