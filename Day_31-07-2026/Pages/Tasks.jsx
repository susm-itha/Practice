import Destructuring from "../Rendering_Destructuring_LazyLoading/Destructuring";
import LazyLoading from "../Rendering_Destructuring_LazyLoading/LazyLoading";
import ListRendering from "../Rendering_Destructuring_LazyLoading/ListRendering"
import Dashboard from "../Rendering_Destructuring_LazyLoading/MiniProject";

function Rendering(){
    return(
        <>
        <ListRendering/>
        <Destructuring/>
        <LazyLoading/>
        <Dashboard/>
        </>
    )
}
export default Rendering;