import Conditional from "../../Tasks/Conditionalrendering"
import LoadingEmpty from "../../Tasks/Loading&Empty";
import Mini from "../../Tasks/MiniPractice";
import ShowHide from "../../Tasks/Show&Hide";
import Status from "../../Tasks/User&Authentication";
function UsingConditional(){
    return(
        <>
        <Conditional/>
        <ShowHide/>
        <Status/>
        <LoadingEmpty/>
        <Mini/>
        </>
    )
}
export default UsingConditional;