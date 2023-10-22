import { Route, Routes } from "react-router-dom"
import "./App.css"
import LoginForm from "./Component/LoginForm/LoginForm"
import RegisterForm from "./Component/RegisterForm/RegisterForm"
import FormPage from "./Component/FormPage/FormPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<RegisterForm/>} />
        <Route path="/" element={<LoginForm/>} />
        <Route path="/Form" element={<FormPage/>} />
      </Routes>
    </div>
  )
}

export default App
