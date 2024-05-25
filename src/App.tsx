import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index={true} path="/" element={<Counter />} />
        <Route index={true} path="/courses" element={<Courses />} />
        <Route index={true} path="/users" element={<Users />} />
        <Route index={true} path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App