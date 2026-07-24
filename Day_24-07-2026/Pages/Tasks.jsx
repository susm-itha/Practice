import API from "../APIIntegration";
import Rendering from "../ConditionalRendering";
import Dynamic from "../DynamicFormHandling";
import Employee from "../HigherOrderComponents";
import MAP from "../MapMethod";
import Miniproject from "../MiniProject";
import EffectHook from "../UseEffectHook";

function Conditional(){
    return(
        <>
        <Rendering/>
        <Dynamic/>
        <EffectHook/>
        <API/>
        <MAP/>
        <Employee/>
        <Miniproject/>
        </>
    )
}
export default Conditional;