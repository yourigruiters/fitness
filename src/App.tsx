import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Components from "./pages/Components";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "./redux/hooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "components",
        element: <Components />,
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
