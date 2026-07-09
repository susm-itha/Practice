import Details from "../../Components/Details";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Profile from "../../Components/profile";
import { UserProvider } from "../../ContextApi/Usercontext";


function States() {
  return (
    <>
     <UserProvider>
        <Header/>
        <Details/>
        <Profile/>
        <Footer/>
     </UserProvider>
   
    </>
    );
}

export default States;