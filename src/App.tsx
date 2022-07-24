import { ThemeProvider } from "@mui/material/styles";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/shared/Loader";
import theme from "./utils/theme";

const Repository = React.lazy(() => import("./pages/repository"));
const RepositoryDetail = React.lazy(() => import("./pages/respository-detail"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Repository />} />
            <Route
              path="/repository/:owner/:repo"
              element={<RepositoryDetail />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
