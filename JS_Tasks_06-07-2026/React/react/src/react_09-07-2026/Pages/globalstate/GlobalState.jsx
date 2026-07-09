import Header from "../../GlobalState/Header";
import Profile from "../../GlobalState/Profile";
import UserContext from "../../GlobalState/Usercontext";


function Global(){
     const userName = "Susmitha";
    return(
        <>
        <UserContext.Provider value={userName}>
        <Header/>
        <Profile/>
        </UserContext.Provider>
        
        </>
    )
}
export default Global;