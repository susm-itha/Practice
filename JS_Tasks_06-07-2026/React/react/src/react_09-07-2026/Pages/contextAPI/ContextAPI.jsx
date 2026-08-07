import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Profile from "../../Components/profile";
import { UserProvider } from "./ContextAPI";


function API() {
  return (
    <UserProvider>
     <Header/>
     <Profile/>
     <Footer/>
    </UserProvider>
  );
}

export default API;