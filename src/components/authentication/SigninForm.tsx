import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "../alert/Alert";
import FormikInput from "../formik/FormikInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const SigninForm = () => {
  const [issueCode, setIssueCode] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col justify-center gap-y-1 text-center">
        <p className="font-bold text-lg">Sign In</p>
        <p className="text-gray-600 text-sm">Your Fitness Tracker</p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email - needs a message")
            .required("needs a message"),
          password: Yup.string()
            .required("needs a message")
            .min(8, "min - needs a message")
            .max(16, "max - needs a message"),
        })}
        onSubmit={(values) => {
          setIsLoading(true);
        }}
      >
        <Form className="flex flex-col w-full h-auto gap-y-6">
          {!!issueCode && <Alert />}
          <FormikInput name="email" type="email" placeholder="Email" />

          <FormikInput name="password" type="password" placeholder="Password" />

          <Link to="/authentication/lostpassword">
            <p className="-mt-4 text-right text-xs text-blue-700 cursor-pointer hover:text-blue-800">
              Lost your password?
            </p>
          </Link>

          <Button
            title={!isLoading ? "Sign In" : "..."}
            type="submit"
            isFluid
            disabled={isLoading}
          />
        </Form>
      </Formik>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Not a member yet?{" "}
          <Link to="/authentication/signup">
            <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SigninForm;
