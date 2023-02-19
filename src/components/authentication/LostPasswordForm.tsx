import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "../alert/Alert";
import FormikInput from "../formik/FormikInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import FormHeader from "./components/FormHeader";

const LostPasswordForm = () => {
  const [issueCode, setIssueCode] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-y-10">
      <FormHeader
        title="Lost Password"
        description="Retrieve Your Fitness Tracker Account"
      />
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email - needs a message")
            .required("Required - needs a message"),
        })}
        onSubmit={(values) => {
          setIsLoading(true);
        }}
      >
        <Form className="flex flex-col w-full h-auto gap-y-6">
          {!!issueCode && <Alert />}
          <FormikInput name="username" type="text" placeholder="Email" />

          <Button
            title={!isLoading ? "Retrieve password" : "..."}
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

export default LostPasswordForm;
