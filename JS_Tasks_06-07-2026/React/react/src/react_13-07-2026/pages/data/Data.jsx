import { Footer, Header, Profile, UserProvider } from "../../Data/Data";


function Data() {
  return (
    <UserProvider>
        <Header/>
        <Profile/>
        <Footer/>
    </UserProvider>
  );
}

export default Data;