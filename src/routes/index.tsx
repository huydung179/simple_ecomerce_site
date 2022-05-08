import { Navigate, useRoutes, BrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboard";

export default function Router() {
  let Routes = () => {
    return useRoutes([
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { element: <Navigate to="/wallet" replace /> },
          { path: "wallet", element: <></> },
        ],
      },
      // { path: "*", element: <Navigate to="/404" replace /> },
    ]);
  };

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
