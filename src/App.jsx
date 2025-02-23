
import {Routes, Route, } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import Home from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/book/create" element={<CreateBook/>} />
        <Route path="/book/delete/:id" element={<DeleteBook/>} />
        <Route path="/book/edit/:id" element={<EditBook/>} />
        <Route path="/book/details/:id" element={<ShowBook/>} />
      </Routes>
    </div>
  )
}

export default App
