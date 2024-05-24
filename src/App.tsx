import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Courses from "./components/Courses";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index={true} path="/" element={<Counter />} />
        <Route index={true} path="/courses" element={<Courses />} />
      </Routes>
    </>
  )
}

export default App