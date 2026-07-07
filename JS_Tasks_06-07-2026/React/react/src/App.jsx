import {BrowserRouter, Route, Routes} from "react-router-dom";
import Components from "./pages/components_07-07-2026/Components";
import StateProps from "./pages/state&props_07-07-2026/StateProps";
import Jsx from "./pages/jsx_07-07-2026/jsx";
import MyApp from "./pages/myapp_06-07-2026/MyApp";
import Miniproject from "./pages/miniproject_07-07-2026/Miniproject";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/components' element={<Components/>}/>
      <Route path='/stateprops' element={<StateProps/>}/>
      <Route path='/jsx' element={<Jsx/>}/>
      <Route path='/myapp' element={<MyApp/>}/>
      <Route path='/miniprojects' element={<Miniproject/>}/>

      </Routes>   
       </BrowserRouter>
  )
}
export default App;
