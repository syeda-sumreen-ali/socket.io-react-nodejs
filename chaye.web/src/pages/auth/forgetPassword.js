import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  Heading,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Card
} from "@chakra-ui/react";
import AuthLayout from "../../component/authLayout";
import { Link} from "react-router-dom"

import VerificationCode from "./verificationCode";
import ResetPassword from "./resetPassword";


const ForgetPassword = () => {
  const [forgetPassInfo, setForgetPassInfo] = useState({ email: ""});
  const [otpInfo, setOtpInfo] = useState({ code: ""});
  

  const [mode, setMode] = useState("forgetPassword")
 

  function requireValidation(value, name) {
    let error;
    if (!value) {
      console.log(value);
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    return error;
  }

  const renderForgetPasswordForm=()=>{
    return(
      <Card margin={"15% 10%"} padding={"10%"} spacing={4} bg={"white"}>
      <Heading as='h2' size='2xl' paddingBottom={"5%"}  color={"#FFB769"}>
      Chaye!
    </Heading>
    <Heading as='h3' size='lg'paddingBottom={"2%"}  color={"#052645"}>
      Forget Password
    </Heading>
    <p style={{color:"#51759A", paddingBottom:"5%"}}>Lost your password?? {"\n"} Don't worry ! We will send you an email for reset Password </p>
    <Formik
      initialValues={forgetPassInfo}
      onSubmit={(values, actions) => {
        setMode("otp")
      }}
    >
      {(props) => (
        <Form>

          <Field
            name="email"
            validate={(val) => requireValidation(val, "email")}
          >
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
              >
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

        
       
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    <p style={{color:"#51759A", paddingTop:"5%"}}>Don't have an account click on {" "}
      <Link  style={{textDecoration:"underline"}} to="/signup">Signup</Link></p>
   
  </Card>
    )
  }


  let pages={
    "forgetPassword":renderForgetPasswordForm(),
    "otp":<VerificationCode setMode={setMode} setOtpInfo={setOtpInfo}/>,
    "resetPassword": <ResetPassword  email={forgetPassInfo.email} code={otpInfo.code} setMode={setMode}/>
  }
  return (
    <AuthLayout>
        {pages[mode]}
    </AuthLayout>
  );
};

export default ForgetPassword;
