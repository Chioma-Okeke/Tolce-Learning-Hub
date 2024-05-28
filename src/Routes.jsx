import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurServices from "./pages/OurServices";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

export function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route eaxct path="/ourservices" element={<OurServices />} />
                <Route eaxct path="/contactus" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}
