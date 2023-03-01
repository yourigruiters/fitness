import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "../alert/Alert";
import FormikInput from "../formik/FormikInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import FormHeader from "./components/FormHeader";
import { authSignup } from "../../services/authentication";
import { useIntl } from "react-intl";

const SignupForm = () => {
  const [issue, setIssue] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <section className="flex flex-col gap-y-10">
      <FormHeader
        title={intl.formatMessage({
          id: "authentication.signUp",
        })}
        description={intl.formatMessage({
          id: "authentication.signUpDescription",
        })}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
          rePassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(
              intl.formatMessage({
                id: "formerror.emailInvalid",
              })
            )
            .required(
              intl.formatMessage({
                id: "formerror.required",
              })
            ),
          password: Yup.string()
            .required(
              intl.formatMessage({
                id: "formerror.required",
              })
            )
            .min(
              8,
              intl.formatMessage({
                id: "formerror.passwordMin",
              })
            )
            .max(
              16,
              intl.formatMessage({
                id: "formerror.passwordMax",
              })
            ),
          rePassword: Yup.string().oneOf(
            [Yup.ref("password"), null as any],
            "Passwords must match"
          ),
        })}
        onSubmit={async (values) => {
          setIsLoading(true);

          try {
            const result = await authSignup(values.email, values.password);

            if (typeof result === "string") {
              setIssue(result);
            }
          } catch (e) {
            setIssue("Internal error");
          }

          setIsLoading(false);
        }}
      >
        <Form className="flex flex-col w-full h-auto gap-y-6">
          {issue && <Alert issue={issue} />}
          <FormikInput
            name="email"
            type="email"
            placeholder={intl.formatMessage({
              id: "form.email",
            })}
          />

          <FormikInput
            name="password"
            type="password"
            placeholder={intl.formatMessage({
              id: "form.password",
            })}
          />

          <FormikInput
            name="rePassword"
            type="password"
            placeholder={intl.formatMessage({
              id: "form.passwordConfirmation",
            })}
          />

          <Button
            title={
              !isLoading
                ? intl.formatMessage({
                    id: "authentication.signUp",
                  })
                : "..."
            }
            type="submit"
            isFluid
            disabled={isLoading}
          />
        </Form>
      </Formik>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          {intl.formatMessage({
            id: "authentication.alreadyHaveAnAccount",
          })}{" "}
          <Link to="/authentication/signin">
            <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
              {intl.formatMessage({
                id: "authentication.signIn",
              })}
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
