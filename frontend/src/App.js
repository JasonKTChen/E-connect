import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import SearchScreen from "./pages/SearchScreen";
function App() {
    useEffect(() => {
        console.log("useEffect fetching data");
        async function reloadData() {
            const g = await fetch("/getData");
            const data = await g.json();
            console.log(data);
        }
        reloadData();
    }, []);
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
