import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Alert from "../alert/Alert";
import FormikInput from "../formik/FormikInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import FormHeader from "./components/FormHeader";
import { authResetPassword } from "../../services/authentication";
import { useIntl } from "react-intl";

const LostPasswordForm = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [issue, setIssue] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const intl = useIntl();

  return (
    <section className="flex flex-col gap-y-10">
      <FormHeader
        title={intl.formatMessage({
          id: "authentication.lostPassword",
        })}
        description={intl.formatMessage({
          id: "authentication.lostPasswordDescription",
        })}
      />
      {success ? (
        <Alert issue="auth/password-reset" />
      ) : (
        <Formik
          initialValues={{
            email: "",
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
          })}
          onSubmit={async (values) => {
            setIsLoading(true);

            try {
              const result = await authResetPassword(values.email);

              if (typeof result === "string") {
                setIssue(result);
              }

              if (result) {
                setSuccess(true);
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
              type="text"
              placeholder={intl.formatMessage({
                id: "form.email",
              })}
            />

            <Button
              title={
                !isLoading
                  ? intl.formatMessage({
                      id: "authentication.lostPasswordButton",
                    })
                  : "..."
              }
              type="submit"
              isFluid
              disabled={isLoading}
            />
          </Form>
        </Formik>
      )}
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

export default LostPasswordForm;
