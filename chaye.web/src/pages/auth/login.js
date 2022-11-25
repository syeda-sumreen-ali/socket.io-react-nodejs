import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  Heading,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  InputRightElement,
} from "@chakra-ui/react";
import AuthLayout from "../../component/authLayout";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [requestInfo, setrequestInfo] = useState({ email: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);

  function requireValidation(value, name) {
    let error;
    if (!value) {
      console.log(value);
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    return error;
  }
  return (
    <AuthLayout>
      <Card margin={"15% 10%"} padding={"10%"} spacing={4} bg={"white"}>
        <Heading as="h2" size="2xl" paddingBottom={"5%"} color={"#FFB769"}>
          Chaye!
        </Heading>
        <Heading as="h3" size="lg" paddingBottom={"5%"} color={"#052645"}>
          Login
        </Heading>
        {/* <p style={{color:"#51759A", paddingBottom:"5%"}}>Create your account to and make your own community</p> */}
        <Formik
          initialValues={requestInfo}
          onSubmit={(values, actions) => {
            history.push("/home");
            {
              /* setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);

            }, 1000); */
            }
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
              <div>
                <Link
                  style={{ textDecoration: "underline", padding: "5% 0%" }}
                  to="/forgetPassword"
                >
                  Forget Password?
                </Link>
              </div>

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
        <p style={{ color: "#51759A", paddingTop: "5%" }}>
          Don't have an account click on{" "}
          <Link style={{ textDecoration: "underline" }} to="/signup">
            Signup
          </Link>
        </p>
      </Card>
    </AuthLayout>
  );
};

export default Login;
