import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
const Register=()=>{
    return(
        <Wrapper>
           <Form  method ='post' className="form">
            <Logo/>
            <h4>Register</h4>

                <FormRow type="text" name="name" defaultValue="john"/>
                <FormRow type="text" name="lastName" labelText="last Name" defaultValue="smith"/>
                <FormRow type="text" name="location" defaultValue="India"/>
                <FormRow type="email" name="email" defaultValue=''/>
                <FormRow type="password" name="password" defaultValue="secret123"/>
              

            <button type="submit" className="btn btn-block"> Submit</button>
            <p>
                Already a member ?
                <Link to='/login' className="member-btn">Login</Link>
            </p>
           </Form>

        </Wrapper>
    )
}

export default Register;