import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index={true} path="/" element={<Counter />} />
        <Route index={true} path="/courses" element={<Courses />} />
        <Route index={true} path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App