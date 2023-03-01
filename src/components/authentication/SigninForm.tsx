import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "../alert/Alert";
import FormikInput from "../formik/FormikInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import FormHeader from "./components/FormHeader";
import { authSignin } from "../../services/authentication";
import { useIntl } from "react-intl";

const SigninForm = () => {
  const [issue, setIssue] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <section className="flex flex-col gap-y-10">
      <FormHeader
        title={intl.formatMessage({
          id: "authentication.signIn",
        })}
        description={intl.formatMessage({
          id: "authentication.signInDescription",
        })}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
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
        })}
        onSubmit={async (values) => {
          setIsLoading(true);

          try {
            const result = await authSignin(values.email, values.password);

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

          <Link to="/authentication/lostpassword">
            <p className="-mt-4 text-right text-xs text-blue-700 cursor-pointer hover:text-blue-800">
              {intl.formatMessage({
                id: "authentication.lostYourPassword",
              })}
            </p>
          </Link>

          <Button
            title={
              !isLoading
                ? intl.formatMessage({
                    id: "authentication.signIn",
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
            id: "authentication.notAMemberYet",
          })}{" "}
          <Link to="/authentication/signup">
            <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
              {intl.formatMessage({
                id: "authentication.signUp",
              })}
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SigninForm;
