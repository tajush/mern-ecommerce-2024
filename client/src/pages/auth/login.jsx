import CommonForm from "@/components/common/form"
import { useState } from "react";
import { loginFormControls } from "@/config";
function onSubmit(event){
    event.preventDefault()
}
function AuthLogin() {
    const [formData,setFormData] = useState({
        email: "",
        password: ""
    });
    return ( <div>
    <CommonForm setFormData={setFormData}formControls1={loginFormControls} formData1={formData} onSubmit={onSubmit}  buttonText={"Sign In"}/>
    </div> );
}

export default AuthLogin;