import "./App.css";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProfileView from "./components/ProfileView/ProfileView";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/profile/:id" element={<ProfileView />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
