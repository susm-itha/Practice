import Profile from "../../Contexthook/Profile";
import Contexthook from "../contexthook/Contexthook";

function Hook() {
  return (
    <Contexthook.Provider value="Susmitha">
      <Profile />
    </Contexthook.Provider>
  );
}

export default Hook;