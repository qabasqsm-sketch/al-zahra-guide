import { useState } from "react";

import {
  GraduationCap,
  Briefcase,
  Palette,
  Scale,
  Languages,
  Laptop,
  Building2,
  WalletCards,
  BookOpen,
  Info,
} from "lucide-react";


function Fees({ language }) {
  const isArabic = language === "ar";

  const [activeCategory, setActiveCategory] = useState("All");


  const programs = [
    {
      icon: <Building2 size={30} />,
      en: "Business Administration",
      ar: "إدارة الأعمال",
      type: "Bachelor",
      fee: "7,080",
      hours: "120",
      hourlyFee: "59",
    },

    {
      icon: <Laptop size={30} />,
      en: "Computer Science",
      ar: "علوم الحاسوب",
      type: "Bachelor",
      fee: "7,800",
      hours: "120",
      hourlyFee: "65",
    },

    {
      icon: <Scale size={30} />,
      en: "Law",
      ar: "الحقوق",
      type: "Bachelor",
      fee: "7,434",
      hours: "126",
      hourlyFee: "59",
    },

    {
      icon: <Palette size={30} />,
      en: "Digital Media Design",
      ar: "تصميم الوسائط الرقمية",
      type: "Bachelor",
      fee: "7,200",
      hours: "120",
      hourlyFee: "60",
    },

    {
      icon: <Languages size={30} />,
      en: "English Language and Literature",
      ar: "اللغة الإنجليزية وآدابها",
      type: "Bachelor",
      fee: "7,080",
      hours: "120",
      hourlyFee: "59",
    },

    {
      icon: <Languages size={30} />,
      en: "Arabic Language and Literature",
      ar: "اللغة العربية وآدابها",
      type: "Bachelor",
      fee: "7,380",
      hours: "123",
      hourlyFee: "60",
    },

    {
      icon: <Briefcase size={30} />,
      en: "Master of Digital Business Administration",
      ar: "ماجستير إدارة الأعمال الرقمية",
      type: "Master",
      fee: "7,200",
      hours: "36",
      hourlyFee: "200",
    },

    {
      icon: <GraduationCap size={30} />,
      en: "Master of Public Law",
      ar: "ماجستير القانون العام",
      type: "Master",
      fee: "5,400",
      hours: "36",
      hourlyFee: "150",
    },

    {
      icon: <Palette size={30} />,
      en: "Diploma in Graphic Design",
      ar: "دبلوم التصميم الجرافيكي",
      type: "Diploma",
      fee: "3,900",
      hours: "60",
      hourlyFee: "65",
    },
  ];


  const categories = ["All", "Bachelor", "Master", "Diploma"];


  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter(
          (program) => program.type === activeCategory
        );


  const categoryName = {
    All: isArabic ? "الكل" : "All Programs",
    Bachelor: isArabic ? "البكالوريوس" : "Bachelor",
    Master: isArabic ? "الماجستير" : "Master",
    Diploma: isArabic ? "الدبلوم" : "Diploma",
  };


  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#FCFAFF]"
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#3d2858]
          pb-20
          pt-44
          text-white
        "
      >

        {/* Background Decoration */}

        <div
          className="
            absolute
            -left-32
            top-10
            h-96
            w-96
            rounded-full
            bg-fuchsia-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-96
            w-96
            rounded-full
            bg-purple-300/10
            blur-3xl
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            text-center
            lg:px-16
          "
        >

          {/* Icon */}

          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              backdrop-blur-sm
            "
          >
            <WalletCards size={30} />
          </div>


          {/* Title */}

          <h1
            className="
              mt-6
              text-4xl
              font-black
              md:text-6xl
            "
          >
            {isArabic
              ? "الرسوم الدراسية"
              : "Tuition Fees"}
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-purple-100
            "
          >
            {isArabic
              ? "اطّلعي على الرسوم الدراسية للبرامج الأكاديمية، وعدد الساعات المعتمدة، ورسوم الساعة لكل برنامج."
              : "Explore tuition fees, credit hours, and hourly fees for the available academic programs."}
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-16">

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-16
          "
        >

          <div className="text-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-fuchsia-100
                px-5
                py-2
                font-bold
                text-[#990099]
              "
            >
              <BookOpen size={18} />

              {isArabic
                ? "دليل الرسوم الدراسية"
                : "TUITION FEE GUIDE"}
            </div>


            <h2
              className="
                mt-6
                text-3xl
                font-black
                text-[#2B1035]
                md:text-5xl
              "
            >
              {isArabic
                ? "اختاري البرنامج للاطلاع على الرسوم"
                : "Explore Fees by Program"}
            </h2>


            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                leading-8
                text-gray-500
              "
            >
              {isArabic
                ? "يمكنكِ تصفية البرامج حسب الدرجة الأكاديمية ومقارنة إجمالي الرسوم وعدد الساعات المعتمدة."
                : "Filter programs by academic level and compare total tuition fees, credit hours, and hourly fees."}
            </p>

          </div>


          {/* =====================================================
              IMPORTANT NOTE
          ===================================================== */}

          <div
            className="
              mx-auto
              mt-10
              flex
              max-w-4xl
              items-start
              gap-4
              rounded-2xl
              border
              border-fuchsia-100
              bg-fuchsia-50
              p-5
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#990099]
                text-white
              "
            >
              <Info size={20} />
            </div>


            <div>

              <h3 className="font-black text-[#2B1035]">
                {isArabic
                  ? "ملاحظة حول الرسوم"
                  : "Fee Information"}
              </h3>


              <p
                className="
                  mt-1
                  leading-7
                  text-gray-600
                "
              >
                {isArabic
                  ? "القيم المعروضة توضح إجمالي تكلفة البرنامج وفق بيانات الرسوم المتاحة، إلى جانب عدد الساعات المعتمدة ورسوم الساعة."
                  : "The displayed values show the total program cost based on the available fee information, together with credit hours and hourly fees."}
              </p>

            </div>

          </div>


          {/* =====================================================
              FILTER BUTTONS
          ===================================================== */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  px-6
                  py-3
                  font-bold
                  transition-all
                  duration-300

                  ${
                    activeCategory === category
                      ? "bg-[#990099] text-white shadow-lg shadow-fuchsia-200"
                      : "border border-purple-100 bg-white text-[#3d2858] hover:border-[#990099] hover:text-[#990099]"
                  }
                `}
              >
                {categoryName[category]}
              </button>

            ))}

          </div>


          {/* =====================================================
              CURRENT CATEGORY TITLE
          ===================================================== */}

          <div
            className="
              mt-14
              flex
              items-center
              gap-4
            "
          >

            <div
              className="
                h-10
                w-1.5
                rounded-full
                bg-[#990099]
              "
            />


            <div>

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#990099]
                "
              >
                {isArabic
                  ? "البرامج المتاحة"
                  : "AVAILABLE PROGRAMS"}
              </p>


              <h2
                className="
                  mt-1
                  text-2xl
                  font-black
                  text-[#2B1035]
                "
              >
                {categoryName[activeCategory]}
              </h2>

            </div>

          </div>


          {/* =====================================================
              PROGRAM CARDS
          ===================================================== */}

          <div
            className="
              mt-8
              grid
              gap-7
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {filteredPrograms.map((program, index) => (

              <article
                key={`${program.en}-${index}`}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-purple-100
                  bg-white
                  shadow-[0_10px_40px_rgba(61,40,88,0.07)]
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-fuchsia-200
                  hover:shadow-xl
                "
              >

                {/* Top Card */}

                <div className="p-7">

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#990099]/10
                        text-[#990099]
                        transition
                        duration-300
                        group-hover:bg-[#990099]
                        group-hover:text-white
                      "
                    >
                      {program.icon}
                    </div>


                    {/* Type */}

                    <span
                      className="
                        rounded-full
                        bg-fuchsia-50
                        px-4
                        py-2
                        text-sm
                        font-bold
                        text-[#990099]
                      "
                    >
                      {categoryName[program.type]}
                    </span>

                  </div>


                  {/* Program Name */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-black
                      leading-7
                      text-[#2B1035]
                    "
                  >
                    {isArabic
                      ? program.ar
                      : program.en}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-400
                    "
                  >
                    {isArabic
                      ? program.en
                      : program.ar}
                  </p>

                </div>


                {/* Fee Section */}

                <div
                  className="
                    border-t
                    border-purple-50
                    bg-[#FCFAFF]
                    px-7
                    py-6
                  "
                >

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    {isArabic
                      ? "إجمالي رسوم البرنامج"
                      : "Total Program Fee"}
                  </p>


                  <div
                    className="
                      mt-2
                      flex
                      items-end
                      gap-2
                    "
                  >

                    <span
                      className="
                        text-3xl
                        font-black
                        text-[#990099]
                      "
                    >
                      {program.fee}
                    </span>


                    <span
                      className="
                        pb-1
                        font-bold
                        text-[#2B1035]
                      "
                    >
                      {isArabic ? "ر.ع" : "OMR"}
                    </span>

                  </div>


                  {/* Details */}

                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-2
                      gap-3
                    "
                  >

                    <div
                      className="
                        rounded-xl
                        bg-white
                        p-3
                      "
                    >
                      <p className="text-xs text-gray-400">
                        {isArabic
                          ? "الساعات المعتمدة"
                          : "Credit Hours"}
                      </p>

                      <p
                        className="
                          mt-1
                          font-black
                          text-[#2B1035]
                        "
                      >
                        {program.hours}
                      </p>
                    </div>


                    <div
                      className="
                        rounded-xl
                        bg-white
                        p-3
                      "
                    >
                      <p className="text-xs text-gray-400">
                        {isArabic
                          ? "رسوم الساعة"
                          : "Fee per Hour"}
                      </p>

                      <p
                        className="
                          mt-1
                          font-black
                          text-[#2B1035]
                        "
                      >
                        {program.hourlyFee}{" "}
                        {isArabic ? "ر.ع" : "OMR"}
                      </p>
                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}


export default Fees;