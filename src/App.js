import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authprovider from "./context/AuthProvider";
import PrivateRoute from "./componnent/PrivateRoute/PrivateRoute";
import Login from "./Views/Login/Login";
import Registration from "./Views/Registration/Registration";
import NotFound from "./Views/NotFound/NotFound";
import Home from "./Views/Home/Home";
import Dashboard from "./Views/Dashboard/Dashboard";
import Teacher from "./Views/Dashboard/Teacher/Teacher";
import Student from "./Views/Dashboard/Student/Student";
import ShowTeacher from "./Views/ShowTeacher/ShowTeacher";
import Blog from "./Views/Dashboard/Blog/Blog";
import StudentLogin from "./Views/StudentLogin/StudentLogin";
import WelcomePage from "./Views/Dashboard/WelcomePage/WelcomePage";
import StudentProfile from "./Views/Dashboard/StudentProfile/StudentProfile";
import History from "./Views/History/History";
import ChMessage from "./Views/ChMessage/ChMessage";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/allteacher" element={<ShowTeacher />} />
          <Route path="/history" element={<History />} />
          <Route path="/chmessage" element={<ChMessage />} />
          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<WelcomePage />} />
            <Route path="/dashboard/teacher" element={<Teacher />} />
            <Route
              path="/dashboard/studentprofile"
              element={<StudentProfile />}
            />
            <Route path="/dashboard/student" element={<Student />} />
            <Route path="/dashboard/blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
