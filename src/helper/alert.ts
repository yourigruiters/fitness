export const getAlertContent = (issue: number | string) => {
  console.log("getAlertContent", issue);
  switch (issue) {
    case "auth/password-reset":
      return {
        title: "Password reset send",
        description:
          "A password reset link has been succesfully send to your email address.",
        type: "success",
      };
    case "auth/email-already-in-use":
      return {
        title: "Email already in use",
        description:
          "This email address is already in use, please login to your account or use a different email address.",
      };
    case "auth/wrong-password":
      return {
        title: "Incorrect password",
        description:
          "The password you entered does not seem to match the password needed for this account.",
      };
    case "auth/user-not-found":
      return {
        title: "Email address not found",
        description:
          "The email address you entered does not seem to match to an account in this application.",
      };
    default:
      return {
        title: "Internal error",
        description: "An internal error has appeared, please try again later.",
      };
  }
};
