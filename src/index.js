import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/Layouts'; 
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import './index.css'; // Importing the global CSS file

// App component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Ensure you're targeting the 'root' element in your HTML file
const rootElement = document.getElementById('root'); // Get the root element from HTML
const r1 = ReactDOM.createRoot(rootElement); // Create root using React 18
r1.render(<App />); // Render the App component
