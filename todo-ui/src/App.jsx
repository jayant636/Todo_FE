import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodoComponent from "./components/AddTodoComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListTodoComponent />}></Route>
          <Route path="/todos" element={<ListTodoComponent />}></Route>
          <Route path="/addTodo" element={<AddTodoComponent />}></Route>
          <Route path="/updateTodo/:id" element={<AddTodoComponent />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
