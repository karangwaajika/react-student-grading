import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/style.css";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomeDashboard from './pages/HomeDashboard.jsx';
import AddSubject from "./pages/AddSubject.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import ViewStudent from "./pages/ViewStudent.jsx";
import ProvideMarks from "./pages/ProvideMarks.jsx";
import ViewMarks from "./pages/ViewMarks.jsx";
import SubjectMarks from "./components/SubjectMarks.jsx";
import SocialMarks from "./components/SocialMarks.jsx";
import BehaviorMarks from "./components/BehaviorMarks.jsx";
import SportMarks from "./components/SportMarks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFoundPage />,
    children:[
      {
        path:"/dashboard",
        element:<HomeDashboard />,
        errorElement: <NotFoundPage />,
      },
      {
        path:"/dashboard/add_subject",
        element:<AddSubject />,
        errorElement: <NotFoundPage />,
      },
      {
        path:"/dashboard/add_student",
        element:<AddStudent />,
        errorElement: <NotFoundPage />,
      },
      {
        path:"/dashboard/view_student",
        element:<ViewStudent />,
        errorElement: <NotFoundPage />,
      },
      {
        path:"/dashboard/provide_marks",
        element:<ProvideMarks />,
        errorElement: <NotFoundPage />,
        children:[
          {
          path:"/dashboard/provide_marks/:studentCode/subject-marks",
          element:<SubjectMarks />,
          },
          {
          path:"/dashboard/provide_marks/:studentCode/social-marks",
          element:<SocialMarks />,
          },
          {
          path:"/dashboard/provide_marks/:studentCode/behavior-marks",
          element:<BehaviorMarks />,
          },
          {
          path:"/dashboard/provide_marks/:studentCode/sport-marks",
          element:<SportMarks />,
          },
        ]
      },
      {
        path:"/dashboard/view_marks",
        element:<ViewMarks />,
        errorElement: <NotFoundPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
