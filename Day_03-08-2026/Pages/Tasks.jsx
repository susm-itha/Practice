import Router from "../Routing/BrowserRouter";
import MINIP from "../Routing/MiniPractice";
import Navigation from "../Routing/Navigation";
import ReactApplication from "../Routing/React_Application";

function React(){
    return (
        <>
        <ReactApplication/>
        <Router/>
        <Navigation/>
        <MINIP/>
        </>
    )
}
export default React;