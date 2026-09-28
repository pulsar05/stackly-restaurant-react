import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuDetails from "./pages/MenuDetails";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {

  return (
    <>
      <Navbar />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          {/* Nested route */}
          <Route path="/menu/:id" element={<MenuDetails />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/reservation"
            element={<Reservation />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

        </Routes>

      </main>

      <Footer />
    </>
  );
}

export default App;