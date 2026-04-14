import { useState } from "react";
import "./App.css";
import MainView from "./components/mainView/mainView";
import { BrowserRouter, Route, Routes } from "react-router";
import ProfileView from "./components/profileView/profileView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
