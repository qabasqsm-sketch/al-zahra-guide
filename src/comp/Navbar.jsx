import { useState } from "react";
import logo from "./image/Image 2.jpg";
import {
  Menu,
  X,
  Globe2,
} from "lucide-react";


function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isArabic = language === "ar";


  // ================= WEBSITE PAGES =================

  const links = [
    {
      en: "Home",
      ar: "الرئيسية",
      href: "/",
    },

    {
      en: "Admission Steps",
      ar: "خطوات التسجيل",
      href: "/admission",
    },

    {
      en: "Programs",
      ar: "البرامج",
      href: "/programs",
    },

    {
      en: "Tuition Fees",
      ar: "الرسوم الدراسية",
      href: "/fees",
    },

    {
      en: "Payment Guide",
      ar: "دليل الدفع",
      href: "/payment",
    },

    {
      en: "Contact",
      ar: "التواصل",
      href: "/contact",
    },
  ];


  // ================= LANGUAGE =================

  const toggleLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
    setMenuOpen(false);
  };


  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
      "
    >


      {/* ==================================================
          TOP BAR
      ================================================== */}

      <div className="bg-[#3d2858] text-white">

        <div
          className="
            flex
            h-10
            items-center
            justify-between
            px-6
            lg:px-16
          "
        >

          {/* GUIDE TITLE */}

          <p className="text-xs font-medium md:text-sm">

            {isArabic
              ? "دليل القبول والتسجيل"
              : "Admission & Registration Guide"}

          </p>


          {/* LANGUAGE BUTTON */}

          <button
            type="button"
            onClick={toggleLanguage}
            className="
              flex
              items-center
              gap-2
              rounded-full
              px-3
              py-1
              text-sm
              transition-all
              duration-300
              hover:bg-white/10
            "
          >

            <Globe2 size={16} />

            <span>
              {isArabic ? "English" : "العربية"}
            </span>

          </button>

        </div>

      </div>



      {/* ==================================================
          MAIN NAVBAR
      ================================================== */}

      <nav
        className="
          w-full
          border-b
          border-gray-100
          bg-white/95
          shadow-[0_8px_30px_rgba(43,16,53,0.08)]
          backdrop-blur-xl
        "
      >

        <div
          className="
            flex
            h-[88px]
            items-center
            justify-between
            px-6
            lg:px-16
          "
        >


          {/* ==================================================
              BRAND
          ================================================== */}

          <a
            href="/"
            className="
              flex
              items-center
              gap-4
            "
          >

            <img
              src={logo}
              alt="Al Zahra College for Women"
              className="
                h-16
                w-16
                rounded-full
                bg-white
                object-contain
                p-1
                shadow-sm
              "
            />


            <div>

              <h1
                className="
                  text-lg
                  font-extrabold
                  text-[#2B1035]
                  lg:text-xl
                "
              >

                {isArabic
                  ? "كلية الزهراء للبنات"
                  : "Al Zahra College"}

              </h1>


              <p
                className="
                  mt-1
                  text-sm
                  font-semibold
                  text-[#990099]
                "
              >

                {isArabic
                  ? "دليل القبول والتسجيل"
                  : "Admission & Registration Guide"}

              </p>

            </div>

          </a>



          {/* ==================================================
              DESKTOP LINKS
          ================================================== */}

          <ul
            className="
              hidden
              items-center
              gap-7
              xl:flex
            "
          >

            {links.map((link) => (

              <li key={link.href}>

                <a
                  href={link.href}
                  className="
                    group
                    relative
                    block
                    px-1
                    py-3
                  "
                >

                  <span
                    className="
                      whitespace-nowrap
                      text-[14px]
                      font-bold
                      text-[#33283d]
                      transition-colors
                      duration-300
                      group-hover:text-[#990099]
                    "
                  >

                    {isArabic
                      ? link.ar
                      : link.en}

                  </span>


                  {/* HOVER LINE */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[3px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#990099]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </a>

              </li>

            ))}

          </ul>



          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#990099]
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#760076]
              xl:hidden
            "
          >

            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>



        {/* ==================================================
            MOBILE MENU
        ================================================== */}

        {menuOpen && (

          <div
            className="
              border-t
              border-gray-100
              bg-white
              px-6
              py-5
              shadow-xl
              xl:hidden
            "
          >

            <ul className="space-y-2">

              {links.map((link) => (

                <li key={link.href}>

                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      font-semibold
                      text-[#2B1035]
                      transition-all
                      duration-300
                      hover:bg-fuchsia-50
                      hover:text-[#990099]
                    "
                  >

                    {isArabic
                      ? link.ar
                      : link.en}

                  </a>

                </li>

              ))}



              {/* MOBILE LANGUAGE BUTTON */}

              <li className="pt-3">

                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#990099]
                    px-4
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#760076]
                  "
                >

                  <Globe2 size={18} />

                  {isArabic
                    ? "Switch to English"
                    : "التحويل إلى العربية"}

                </button>

              </li>

            </ul>

          </div>

        )}

      </nav>

    </header>
  );
}


export default Navbar;