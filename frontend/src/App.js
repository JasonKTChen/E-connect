import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import SearchScreen from "./components/SearchScreen";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
