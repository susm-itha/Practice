import Controlled from "../DynamicFormHandling/Controlled";
import Errors from "../DynamicFormHandling/Errorsdynamically";
import Form from "../DynamicFormHandling/Form";
import Handling from "../DynamicFormHandling/Handling";
import RegistrationForm from "../DynamicFormHandling/RegistrationForm";

function controlled(){
    return(
        <>
        <Controlled/>
        <Handling/>
        <Form/>
        <Errors/>
        <RegistrationForm/>
        </>
    )
}
export default controlled;