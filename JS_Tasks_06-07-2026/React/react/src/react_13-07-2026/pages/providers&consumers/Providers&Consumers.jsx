import Profile from "../../Providers&Consumers/Profile";
import UserContext from "../../Providers&Consumers/Usercontexts";


function Provider() {
  return (
    <>
    <UserContext.Provider value="Susmitha">
    <Profile/>
    </UserContext.Provider>
    </>
  );
}
export default Provider;