import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from "react-toastify";

import { AccountChainIdListener } from "components/AccountChainIdListener";
import { ComingSoonPage } from "pages/ComingSoonPage";
import { HomePage } from "pages/HomePage";
import { MintPage } from "pages/MintPage";
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
            { path: "/mint", element: <MintPage /> },
            { path: "/roadmap", element: <ComingSoonPage /> },
            { path: "*", element: <NotFoundPage /> },
          ]}
        >
          <Outlet />
          <ToastContainer
            theme="dark"
            position="bottom-right"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Theme>
  </ParallaxProvider>
);
