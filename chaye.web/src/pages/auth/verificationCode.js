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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import AuthLayout from "../../component/authLayout";
import { Link, useHistory} from "react-router-dom"


const VerificationCode = (props) => {

  const [otpInfo, setOtpInfo] = useState({ code: ""});
  
  function requireValidation(value, name) {
    let error;
    if (!value) {
      console.log(value);
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    return error;
  }


  return(  
  <Card margin={"15% 10%"} padding={"10%"} spacing={4} bg={"white"}>
    <Heading as='h2' size='2xl' paddingBottom={"5%"}  color={"#FFB769"}>
    Chaye!
  </Heading>
  <Heading as='h3' size='lg'paddingBottom={"2%"}  color={"#052645"}>
    Verification Code
  </Heading>
  <p style={{color:"#51759A", paddingBottom:"5%"}}>Enter your verification Code to update your password</p>
  <Formik
    initialValues={otpInfo}
    onSubmit={(values, actions) => {
    props.setMode("resetPassword")
    props.setOtpInfo(otpInfo)

    }}
  >
    {(props) => (
      <Form>

        <Field
          name="code"
          validate={(val) => requireValidation(val, "code")}
        >
          {({ field, form }) => (
            <FormControl
              isInvalid={form.errors.code && form.touched.code}
            >
              <FormLabel>code</FormLabel>
              <Input {...field} placeholder="code" />
              <FormErrorMessage>{form.errors.code}</FormErrorMessage>
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
 
</Card>)



};

export default VerificationCode;
