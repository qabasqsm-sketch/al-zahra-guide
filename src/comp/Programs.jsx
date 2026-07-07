import {
  BriefcaseBusiness,
  Laptop,
  Scale,
  Palette,
  Languages,
  GraduationCap,
  Landmark,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Clock3,
  WalletCards,
} from "lucide-react";


function Programs({ language }) {

  const isArabic = language === "ar";


  /* =====================================================
     BACHELOR PROGRAMS
  ===================================================== */

  const bachelorPrograms = [

    {
      icon: <TrendingUp size={30} />,

      en: {
        title: "Financial Technology",
        description:
          "A bachelor program that combines financial knowledge with modern technology and digital financial systems.",
      },

      ar: {
        title: "التكنولوجيا المالية",
        description:
          "برنامج بكالوريوس يجمع بين المعرفة المالية والتقنيات الحديثة والأنظمة المالية الرقمية.",
      },

      credits: "120",
      feePerHour: "65 OMR",
      totalFee: "7,800 OMR",
    },


    {
      icon: <Lightbulb size={30} />,

      en: {
        title: "Management and Entrepreneurship",
        description:
          "Develop knowledge and practical skills in management, innovation, entrepreneurship, and business development.",
      },

      ar: {
        title: "الإدارة وريادة الأعمال",
        description:
          "تطوير المعرفة والمهارات العملية في الإدارة والابتكار وريادة الأعمال وتطوير المشاريع.",
      },

      credits: "123",
      feePerHour: "60 OMR",
      totalFee: "7,380 OMR",
    },


    {
      icon: <Palette size={30} />,

      en: {
        title: "Digital Media Design",
        description:
          "Develop creative and technical skills in digital design, visual communication, and digital media production.",
      },

      ar: {
        title: "التصميم في الوسائط الرقمية",
        description:
          "تطوير المهارات الإبداعية والتقنية في التصميم الرقمي والاتصال البصري وإنتاج الوسائط الرقمية.",
      },

      credits: "120",
      feePerHour: "60 OMR",
      totalFee: "7,200 OMR",
    },


    {
      icon: <Scale size={30} />,

      en: {
        title: "Law",
        description:
          "Study legal principles, legislation, legal systems, and professional legal practices.",
      },

      ar: {
        title: "الحقوق",
        description:
          "دراسة المبادئ القانونية والتشريعات والأنظمة القانونية والممارسات المهنية في المجال القانوني.",
      },

      credits: "126",
      feePerHour: "59 OMR",
      totalFee: "7,434 OMR",
    },


    {
      icon: <Languages size={30} />,

      en: {
        title: "English Language and Literature",
        description:
          "Develop advanced language, communication, literature, and critical analysis skills.",
      },

      ar: {
        title: "اللغة الإنجليزية وآدابها",
        description:
          "تطوير مهارات اللغة والتواصل ودراسة الأدب والتحليل النقدي.",
      },

      credits: "120",
      feePerHour: "59 OMR",
      totalFee: "7,080 OMR",
    },


    {
      icon: <BriefcaseBusiness size={30} />,

      en: {
        title: "Business Administration",
        description:
          "Build knowledge and practical skills in management, marketing, finance, and organizational operations.",
      },

      ar: {
        title: "إدارة الأعمال",
        description:
          "بناء المعرفة والمهارات العملية في الإدارة والتسويق والتمويل وعمليات المؤسسات.",
      },

      credits: "120",
      feePerHour: "59 OMR",
      totalFee: "7,080 OMR",
    },


    {
      icon: <Laptop size={30} />,

      en: {
        title: "Computer Science",
        description:
          "Develop skills in programming, computing systems, software development, and modern technologies.",
      },

      ar: {
        title: "علوم الحاسوب",
        description:
          "تطوير المهارات في البرمجة وأنظمة الحاسوب وتطوير البرمجيات والتقنيات الحديثة.",
      },

      credits: "120",
      feePerHour: "65 OMR",
      totalFee: "7,800 OMR",
    },

  ];


  /* =====================================================
     DIPLOMA PROGRAM
  ===================================================== */

  const diplomaPrograms = [

    {
      icon: <Palette size={30} />,

      en: {
        title: "Graphic Design",
        description:
          "Develop creative and technical skills in visual communication, graphic design, and digital content creation.",
      },

      ar: {
        title: "التصميم الجرافيكي",
        description:
          "تطوير المهارات الإبداعية والتقنية في الاتصال البصري والتصميم الجرافيكي وإنشاء المحتوى الرقمي.",
      },

      credits: "60",
      feePerHour: "65 OMR",
      totalFee: "3,900 OMR",
    },

  ];


  /* =====================================================
     MASTER PROGRAMS
  ===================================================== */

  const masterPrograms = [

    {
      icon: <GraduationCap size={30} />,

      en: {
        title: "Digital Business Administration",
        description:
          "An advanced postgraduate program focused on business management in modern digital environments.",
      },

      ar: {
        title: "إدارة الأعمال الرقمية",
        description:
          "برنامج دراسات عليا متقدم يركز على إدارة الأعمال في البيئات الرقمية الحديثة.",
      },

      credits: "36",
      feePerHour: "200 OMR",
      totalFee: "7,200 OMR",
    },


    {
      icon: <Landmark size={30} />,

      en: {
        title: "Public Law",
        description:
          "Advanced postgraduate study in public law, legal systems, and contemporary legal issues.",
      },

      ar: {
        title: "القانون العام",
        description:
          "دراسة متقدمة في القانون العام والأنظمة القانونية والقضايا القانونية المعاصرة.",
      },

      credits: "36",
      feePerHour: "150 OMR",
      totalFee: "5,400 OMR",
    },

  ];


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

            <BookOpen size={30} />

          </div>


          <h1
            className="
              mt-6
              text-4xl
              font-black
              md:text-6xl
            "
          >

            {isArabic
              ? "البرامج الأكاديمية"
              : "Academic Programs"}

          </h1>


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
              ? "تعرّفي على البرامج الأكاديمية المتاحة واختاري المسار الذي يناسب أهدافكِ وطموحاتكِ المستقبلية."
              : "Explore the available academic programs and choose the path that matches your goals and future ambitions."}

          </p>

        </div>

      </section>



      {/* =====================================================
          PROGRAM LEVEL INTRODUCTION
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

          <div className="grid gap-5 md:grid-cols-3">


            <LevelCard
              number="07"
              title={
                isArabic
                  ? "برامج البكالوريوس"
                  : "Bachelor Programs"
              }
              text={
                isArabic
                  ? "سبعة برامج أكاديمية"
                  : "Seven academic programs"
              }
            />


            <LevelCard
              number="01"
              title={
                isArabic
                  ? "برنامج الدبلوم"
                  : "Diploma Program"
              }
              text={
                isArabic
                  ? "برنامج أكاديمي واحد"
                  : "One academic program"
              }
            />


            <LevelCard
              number="02"
              title={
                isArabic
                  ? "برامج الماجستير"
                  : "Master Programs"
              }
              text={
                isArabic
                  ? "برنامجان للدراسات العليا"
                  : "Two postgraduate programs"
              }
            />


          </div>

        </div>

      </section>



      {/* =====================================================
          BACHELOR PROGRAMS
      ===================================================== */}

      <ProgramSection
        number="01"

        label={
          isArabic
            ? "درجة البكالوريوس"
            : "BACHELOR'S DEGREE"
        }

        title={
          isArabic
            ? "برامج البكالوريوس"
            : "Bachelor's Programs"
        }

        description={
          isArabic
            ? "استكشفي برامج البكالوريوس المتاحة وتعرّفي على الساعات المعتمدة ورسوم الساعة والتكلفة الإجمالية لكل برنامج."
            : "Explore the available bachelor's programs and review the credit hours, fee per credit hour, and total tuition for each program."
        }

        programs={bachelorPrograms}
        isArabic={isArabic}
        background="bg-[#FCFAFF]"
      />



      {/* =====================================================
          DIPLOMA PROGRAM
      ===================================================== */}

      <ProgramSection
        number="02"

        label={
          isArabic
            ? "درجة الدبلوم"
            : "DIPLOMA DEGREE"
        }

        title={
          isArabic
            ? "برنامج الدبلوم"
            : "Diploma Program"
        }

        description={
          isArabic
            ? "برنامج الدبلوم المتاح في التصميم الجرافيكي، مع عرض الساعات المعتمدة والرسوم الدراسية."
            : "Explore the available Graphic Design diploma program, including credit hours and tuition information."
        }

        programs={diplomaPrograms}
        isArabic={isArabic}
        background="bg-white"
      />



      {/* =====================================================
          MASTER PROGRAMS
      ===================================================== */}

      <ProgramSection
        number="03"

        label={
          isArabic
            ? "درجة الماجستير"
            : "MASTER'S DEGREE"
        }

        title={
          isArabic
            ? "برامج الماجستير"
            : "Master's Programs"
        }

        description={
          isArabic
            ? "تعرّفي على برامج الماجستير المتاحة ومعلومات الساعات المعتمدة والرسوم الدراسية لكل برنامج."
            : "Explore the available master's programs and review the credit hours and tuition information for each program."
        }

        programs={masterPrograms}
        isArabic={isArabic}
        background="bg-[#F8F3FA]"
      />



      {/* =====================================================
          FEE NOTE
      ===================================================== */}

      <section className="bg-white py-16">

        <div
          className="
            mx-auto
            max-w-5xl
            px-6
            lg:px-16
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              gap-5
              rounded-[28px]
              border
              border-fuchsia-200
              bg-fuchsia-50
              p-7
              text-center
              md:flex-row
              md:text-start
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#990099]
                text-white
              "
            >

              <WalletCards size={27} />

            </div>


            <div>

              <h3
                className="
                  text-xl
                  font-black
                  text-[#2B1035]
                "
              >

                {isArabic
                  ? "معلومات الرسوم الدراسية"
                  : "Tuition Fee Information"}

              </h3>


              <p
                className="
                  mt-2
                  leading-7
                  text-gray-600
                "
              >

                {isArabic
                  ? "تعتمد الرسوم الدراسية على البرنامج الأكاديمي وعدد الساعات المعتمدة المسجلة. يمكنكِ زيارة صفحة الرسوم الدراسية للاطلاع على التفاصيل الكاملة."
                  : "Tuition fees depend on the academic program and the number of registered credit hours. Visit the Tuition Fees page for complete details."}

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}



/* =====================================================
   PROGRAM SECTION
===================================================== */

function ProgramSection({
  number,
  label,
  title,
  description,
  programs,
  isArabic,
  background,
}) {

  return (

    <section className={`${background} py-20`}>

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-16
        "
      >


        {/* SECTION HEADER */}

        <div
          className="
            mb-14
            rounded-[30px]
            border
            border-purple-100
            bg-white
            px-7
            py-8
            shadow-[0_10px_40px_rgba(61,40,88,0.06)]
            md:px-10
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
            "
          >

            <div
              className="
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
                rounded-[24px]
                bg-[#3d2858]
                text-2xl
                font-black
                text-white
                shadow-lg
              "
            >

              {number}

            </div>


            <div className="flex-1">

              <p
                className="
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#990099]
                "
              >

                {label}

              </p>


              <h2
                className="
                  mt-2
                  text-3xl
                  font-black
                  text-[#2B1035]
                  md:text-4xl
                "
              >

                {title}

              </h2>


              <p
                className="
                  mt-3
                  max-w-3xl
                  leading-7
                  text-gray-500
                "
              >

                {description}

              </p>

            </div>

          </div>


          <div
            className="
              mt-7
              h-[3px]
              w-full
              overflow-hidden
              rounded-full
              bg-purple-100
            "
          >

            <div
              className="
                h-full
                w-24
                rounded-full
                bg-[#990099]
              "
            />

          </div>

        </div>


        {/* PROGRAM CARDS */}

        <div
          className={`
            grid
            gap-7

            ${
              programs.length === 1
                ? "mx-auto max-w-xl grid-cols-1"
                : programs.length === 2
                ? "mx-auto max-w-4xl md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            }
          `}
        >

          {programs.map((program, index) => (

            <ProgramCard
              key={index}
              program={program}
              isArabic={isArabic}
            />

          ))}

        </div>

      </div>

    </section>

  );

}



/* =====================================================
   PROGRAM CARD
===================================================== */

function ProgramCard({
  program,
  isArabic,
}) {

  const content =
    program[isArabic ? "ar" : "en"];


  return (

    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-[28px]
        border
        border-purple-100
        bg-white
        p-7
        shadow-[0_10px_40px_rgba(61,40,88,0.07)]
        transition
        duration-300
        hover:-translate-y-2
        hover:border-fuchsia-200
        hover:shadow-xl
      "
    >


      {/* ICON */}

      <div
        className="
          flex
          h-14
          w-14
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


      {/* PROGRAM NAME */}

      <h3
        className="
          mt-6
          text-xl
          font-black
          leading-8
          text-[#2B1035]
        "
      >

        {content.title}

      </h3>


      {/* DESCRIPTION */}

      <p
        className="
          mt-3
          flex-grow
          leading-7
          text-gray-500
        "
      >

        {content.description}

      </p>


      {/* PROGRAM INFORMATION */}

      <div
        className="
          mt-7
          border-t
          border-gray-100
          pt-5
        "
      >

        <div className="grid grid-cols-2 gap-4">


          {/* CREDIT HOURS */}

          <div>

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-400
              "
            >

              <Clock3 size={16} />

              <span className="text-xs">

                {isArabic
                  ? "الساعات المعتمدة"
                  : "Credit Hours"}

              </span>

            </div>


            <p
              className="
                mt-2
                font-black
                text-[#2B1035]
              "
            >

              {program.credits}

            </p>

          </div>


          {/* FEE PER HOUR */}

          <div>

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-400
              "
            >

              <WalletCards size={16} />

              <span className="text-xs">

                {isArabic
                  ? "رسوم الساعة"
                  : "Fee / Hour"}

              </span>

            </div>


            <p
              dir="ltr"
              className="
                mt-2
                font-black
                text-[#2B1035]
              "
            >

              {program.feePerHour}

            </p>

          </div>

        </div>


        {/* TOTAL FEE */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            rounded-2xl
            bg-fuchsia-50
            px-4
            py-3
          "
        >

          <span
            className="
              text-sm
              font-semibold
              text-gray-500
            "
          >

            {isArabic
              ? "إجمالي التكلفة"
              : "Total Tuition"}

          </span>


          <span
            dir="ltr"
            className="
              font-black
              text-[#990099]
            "
          >

            {program.totalFee}

          </span>

        </div>

      </div>

    </article>

  );

}



/* =====================================================
   LEVEL CARD
===================================================== */

function LevelCard({
  number,
  title,
  text,
}) {

  return (

    <div
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-purple-100
        bg-white
        p-6
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-[#990099]
          text-xl
          font-black
          text-white
        "
      >

        {number}

      </div>


      <div>

        <h3
          className="
            font-black
            text-[#2B1035]
          "
        >

          {title}

        </h3>


        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >

          {text}

        </p>

      </div>

    </div>

  );

}


export default Programs;