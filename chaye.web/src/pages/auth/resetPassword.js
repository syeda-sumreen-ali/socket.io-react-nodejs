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
  InputGroup,
  InputRightElement,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import AuthLayout from "../../component/authLayout";
import { Link, useHistory} from "react-router-dom"


const ResetPassword = (props) => {

  const history= useHistory()
  const [resetPasswordInfo, setresetPasswordInfo] = useState({
    email: props.email,
    code: props.code,
    password:"",
    confirmPassword:""
   });
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  function requireValidation(value, name) {
    let error;
    if (!value) {
      console.log(value);
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    return error;
  }
 
   return( <Card margin={"15% 10%"} padding={"10%"} spacing={4} bg={"white"}>
    <Heading as='h2' size='2xl' paddingBottom={"5%"}  color={"#FFB769"}>
    Chaye!
  </Heading>
  <Heading as='h3' size='lg'paddingBottom={"2%"}  color={"#052645"}>
    Reset Password
  </Heading>
  <p style={{color:"#51759A", paddingBottom:"5%"}}>Please add your new password</p>
  <Formik
    initialValues={resetPasswordInfo}
    onSubmit={(values, actions) =>history.push("/login")}>
    {(props) => (
      <Form>

      <Field
        name={"password"}
        validate={(val) => requireValidation(val, "password")}
      >
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.password && form.touched.password}
          >
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <InputRightElement w="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setshowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field
        name={"confirmPassword"}
        validate={(val) => requireValidation(val, "Confirm password")}
      >
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}
          >
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                {...field}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirmPassword"
              />
              <InputRightElement w="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setshowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
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
  }



export default ResetPassword;
