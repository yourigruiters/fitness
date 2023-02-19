import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "../alert/Alert";
import FormikInput from "../formik/FormikInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [issueCode, setIssueCode] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col justify-center gap-y-1 text-center">
        <p className="font-bold text-lg">Sign Up</p>
        <p className="text-gray-600 text-sm">
          Create Your Fitness Tracker Account
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rePassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email - needs a message")
            .required("Required - needs a message"),
          password: Yup.string()
            .required("message")
            .min(8, "message")
            .max(16, "message"),
          rePassword: Yup.string().oneOf(
            [Yup.ref("password"), null as any],
            "Passwords must match"
          ),
        })}
        onSubmit={(values) => {
          setIsLoading(true);
        }}
      >
        <Form className="flex flex-col w-full h-auto gap-y-6">
          {!!issueCode && <Alert />}
          <FormikInput name="email" type="email" placeholder="Email" />

          <FormikInput name="password" type="password" placeholder="Password" />

          <FormikInput
            name="rePassword"
            type="password"
            placeholder="Re-enter password"
          />

          <Button
            title={!isLoading ? "Sign Up" : "..."}
            type="submit"
            isFluid
            disabled={isLoading}
          />
        </Form>
      </Formik>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/authentication/signin">
            <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
