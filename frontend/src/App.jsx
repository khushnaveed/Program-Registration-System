import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProgramsOverview from "./pages/ProgramsOverview";
import SingleProgramPage from "./pages/SingleProgramPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ApplicationForm from "./pages/ApplicationForm";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsOverview />} />
            <Route path="/programs/:id" element={<SingleProgramPage />} />
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
