import { Route, Routes } from "react-router";
import "./App.css";
import AuthForm from "./components/AuthForm";
import AuthPlaceholder from "./components/AuthPlaceholder";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
}

export default App;
