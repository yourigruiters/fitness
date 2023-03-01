import { useIntl } from "react-intl";

export const getAlertContent = (issue: number | string) => {
  console.log("getAlertContent", issue);

  const intl = useIntl();

  switch (issue) {
    case "auth/password-reset":
      return {
        title: intl.formatMessage({
          id: "alert.titlePassReset",
        }),
        description: intl.formatMessage({
          id: "alert.descriptionPasswordReset",
        }),
        type: "success",
      };
    case "auth/email-already-in-use":
      return {
        title: intl.formatMessage({
          id: "alert.titleEmailInUse",
        }),
        description: intl.formatMessage({
          id: "alert.descriptionEmailInUse",
        }),
      };
    case "auth/wrong-password":
      return {
        title: intl.formatMessage({
          id: "alert.titleWrongPassword",
        }),
        description: intl.formatMessage({
          id: "alert.descriptionWrongPassword",
        }),
      };
    case "auth/user-not-found":
      return {
        title: intl.formatMessage({
          id: "alert.titleUserNotFound",
        }),
        description: intl.formatMessage({
          id: "alert.descriptionUserNotFound",
        }),
      };
    default:
      return {
        title: intl.formatMessage({
          id: "alert.titleInternalError",
        }),
        description: intl.formatMessage({
          id: "alert.descriptionInternalError",
        }),
      };
  }
};
