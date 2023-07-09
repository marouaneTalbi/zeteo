import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Uploadownvideo = React.lazy(() => import("pages/Uploadownvideo"));
const MoviesListLeftSidebarPage = React.lazy(() =>
  import("pages/MoviesListLeftSidebarPage"),
);
const HomePage = React.lazy(() => import("pages/HomePage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/movieslistleftsidebarpage"
            element={<MoviesListLeftSidebarPage />}
          />
          <Route path="/uploadownvideo" element={<Uploadownvideo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
