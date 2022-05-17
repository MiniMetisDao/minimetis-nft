import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ParallaxProvider } from "react-scroll-parallax";

import { AccountChainIdListener } from "components/AccountChainIdListener";
import { ComingSoonPage } from "pages/ComingSoonPage";
import { HomePage } from "pages/HomePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { queryClient } from "queryClient";
import { Theme } from "theme";

import "react-toastify/dist/ReactToastify.css";

const location = new ReactLocation();

export const App: React.FC = () => (
  <ParallaxProvider>
    <Theme>
      <QueryClientProvider client={queryClient}>
        <AccountChainIdListener />
        <Router
          location={location}
          routes={[
            { path: "/", element: <HomePage /> },
            { path: "/mint", element: <ComingSoonPage /> },
            { path: "/roadmap", element: <ComingSoonPage /> },
            { path: "*", element: <NotFoundPage /> },
          ]}
        >
          <Outlet />
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>{" "}
    </Theme>
  </ParallaxProvider>
);
