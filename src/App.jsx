import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./comp/Navbar";
import Hero from "./comp/Hero";
import Admission from "./comp/Admission";
import Programs from "./comp/Programs";
import Fees from "./comp/Fees";
import Payment from "./comp/Payment";
import Contact from "./comp/Contact";
import Footer from "./comp/Footer";


function App() {
  const [language, setLanguage] = useState("en");

  const isArabic = language === "ar";


  return (
    <BrowserRouter>

      <div
        dir={isArabic ? "rtl" : "ltr"}
        lang={language}
        className="min-h-screen"
      >

        {/* ================= NAVBAR ================= */}

        <Navbar
          language={language}
          setLanguage={setLanguage}
        />


        {/* ================= PAGES ================= */}

        <Routes>


          {/* HOME PAGE */}

          <Route
            path="/"
            element={
              <Hero language={language} />
            }
          />


          {/* ADMISSION STEPS PAGE */}

          <Route
            path="/admission"
            element={
              <Admission language={language} />
            }
          />


          {/* PROGRAMS PAGE */}

          <Route
            path="/programs"
            element={
              <Programs language={language} />
            }
          />


          {/* TUITION FEES PAGE */}

          <Route
            path="/fees"
            element={
              <Fees language={language} />
            }
          />


          {/* PAYMENT GUIDE PAGE */}

          <Route
            path="/payment"
            element={
              <Payment language={language} />
            }
          />


          {/* CONTACT PAGE */}

          <Route
            path="/contact"
            element={
              <Contact language={language} />
            }
          />


        </Routes>


        {/* ================= FOOTER ================= */}

        <Footer language={language} />


      </div>

    </BrowserRouter>
  );
}


export default App;