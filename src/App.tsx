import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import ComponentsPage from "./pages/ComponentsPage";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "./redux/hooks";
import AuthenticationRoot from "./pages/root/AuthenticationRoot";
import SigninPage from "./pages/authentication/SigninPage";
import SignupPage from "./pages/authentication/SignupPage";
import LostPasswordPage from "./pages/authentication/LostPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "components",
        element: <ComponentsPage />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <AuthenticationRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "lostpassword",
        element: <LostPasswordPage />,
      },
    ],
  },
]);

const App = () => {
  const locale = useAppSelector((state) => state.locale);

  return (
    <IntlProvider locale={locale.locale} messages={locale.lang}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
};

export default App;
