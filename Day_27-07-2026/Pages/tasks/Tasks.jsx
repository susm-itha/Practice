import MiniAss from "../../MiniAssignment/Mini";
import Exercises from "../../PracticalExercises/Exercises";
import Memo from "../../React.memo()/Memo";
import Services from "../Services/APICallsReact";


function API(){
    return(
        <>
        <Services/>
        <Memo/>
       <Exercises/>
       <MiniAss/>
        </>
    )
}
export default API;