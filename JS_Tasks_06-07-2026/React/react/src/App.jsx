import {BrowserRouter, Route, Routes} from "react-router-dom";
import Components from "./pages/components_07-07-2026/Components";
import StateProps from "./pages/state&props_07-07-2026/StateProps";
import Jsx from "./pages/jsx_07-07-2026/jsx";
import MyApp from "./pages/myapp_06-07-2026/MyApp";
import Miniproject from "./pages/miniproject_07-07-2026/Miniproject";
import PtoC from "./react_08-07-2026/pages/PtoC/PtoC";
import Props from "./react_08-07-2026/pages/Props-State/Props-State";
import PtooC from "./react_08-07-2026/pages/PtooC_Communication/PtooC";
import CtoP from "./react_08-07-2026/pages/CtoP_communications/CtoP";
import CtoC from "./react_08-07-2026/pages/CtoC/CtoC";
import MiniAssignment from "./react_08-07-2026/pages/MiniAssignment/MiniAssignment";
import Local from "./react_09-07-2026/Pages/localstate/LocalState";
import Global from "./react_09-07-2026/Pages/globalstate/GlobalState";
import State from "./react_09-07-2026/Pages/states/States";
import Fetch from "./react_10-07-2026/FetchAPI/Fetch";
import Axios from "./react_10-07-2026/AxiosAPI/Axios";
import Async from "./react_10-07-2026/AsyncAPI/Async";
import Error from "./react_10-07-2026/ErrorHandling/ErrorHandling";
import Users from "./react_10-07-2026/Components/Users";
import API from "./react_13-07-2026/ContextAPI/ContextAPI";
import Provider from "./react_13-07-2026/pages/providers&consumers/Providers&Consumers";
import Hook from "./react_13-07-2026/pages/contexthook/Contexthook";
import Data from "./react_13-07-2026/pages/data/Data";
import Theme from "./react_13-07-2026/Theme/Home";










function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/components' element={<Components/>}/>
      <Route path='/stateprops' element={<StateProps/>}/>
      <Route path='/jsx' element={<Jsx/>}/>
      <Route path='/myapp' element={<MyApp/>}/>
      <Route path='/miniprojects' element={<Miniproject/>}/>
      <Route path='/PtoC-Component' element={<PtoC/>}/>
      <Route path='/Props-State' element={<Props/>}/>
      <Route path='/PtooC_Communication' element={<PtooC/>}/>
      <Route path='/ctopcommunications' element={<CtoP/>}/>
      <Route path='/ctoc' element={<CtoC/>}/>
      <Route path='/MiniAssignment' element={<MiniAssignment/>}/>
      <Route path='/Local' element={<Local/>}/>
      <Route path='/Global' element={<Global/>}/>
      <Route path='/State' element={<State/>}/>
      <Route path='/Fetch' element={<Fetch/>}/>
      <Route path='/Axios' element={<Axios/>}/> 
      <Route path='/Async' element={<Async/>}/>
      <Route path='/Error' element={<Error/>}/> 
      <Route path='/Users' element={<Users/>}/>
      <Route path='/API' element={<API/>}/>   
      <Route path='/Provider' element={<Provider/>}/>
      <Route path='/Hook' element={<Hook/>}/>
      <Route path='/Data' element={<Data/>}/>
      <Route path='/Theme' element={<Theme/>}/>
      </Routes>   
      </BrowserRouter>

  )
}
export default App;