import Page from "../Routes/Navigation_authentication_404";
import Nested from "../Routes/NestedRoutes";
import Data from "../Routes/PassingData_ SeparateRouting";
import Params from "../Routes/UseParams";

function Routes(){
    return(
        <>
        <Nested/>
        <Params/>
        <Page/>
        <Data/>
        </>
    )
}
export default Routes;