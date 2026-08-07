import DevServer from "../WEB_PACK/DevServer/DevServer";
import Bundle from "../WEB_PACK/Generatedbundle/Bundle";
import Webpack from "../WEB_PACK/WebPack/webpack";

function Pack(){
    return(
        <>
        <Webpack/>
        <DevServer/>
        <Bundle/>
        </>
    )
}
export default Pack;