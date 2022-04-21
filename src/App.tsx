import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { DashboardPage } from "pages/HomePage";
import { queryClient } from "queryClient";
import { Theme } from "theme";

import "react-toastify/dist/ReactToastify.css";

const location = new ReactLocation();

export const App: React.FC = () => (
  <Theme>
    <QueryClientProvider client={queryClient}>
      <Router
        location={location}
        routes={[{ path: "/", element: <DashboardPage /> }]}
      >
        <Outlet />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Theme>
);
