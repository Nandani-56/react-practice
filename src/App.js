import "./App.css";
import ClassTodo from "./components/classPractice";
import FetchPractice from "./components/fetch";
import Task from "./components/task";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/mainpage";
import UseCallBackExample from "./components/useCallbackExample";
import UseMemoExample from "./components/useMemoExample";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<MainPage />} />
          <Route path="FunctionalTodo" element={<Task />} />
          <Route path="ClassTodo" element={<ClassTodo />} />
          <Route path="useCallbackExample" element={<UseCallBackExample />} />
          <Route path="fetchExample" element={<FetchPractice />} />
          <Route path="useMemoExample" element={<UseMemoExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
