import {
  ClipboardList,
  FileText,
  UserRound,
  GraduationCap,
  BadgeCheck,
  WalletCards,
  ShieldCheck,
  Landmark,
  CircleDollarSign,
  CheckCircle2,
  AlertCircle,
  BookOpenCheck,
  Users,
  Building2,
} from "lucide-react";


function Admission({ language }) {
  const isArabic = language === "ar";


  // =========================================================
  // REQUIRED DOCUMENTS
  // =========================================================

  const requiredDocuments = [
    {
      en: "Original General Education Diploma Certificate or its equivalent.",
      ar: "أصل شهادة دبلوم التعليم العام أو ما يعادلها.",
    },
    {
      en: "Two recent personal photographs.",
      ar: "عدد (2) صورة شخصية حديثة.",
    },
    {
      en: "Copy of the applicant's Civil ID card.",
      ar: "صورة من البطاقة المدنية للطالبة.",
    },
    {
      en: "Copy of the guardian's Civil ID card.",
      ar: "صورة من البطاقة المدنية لولي الأمر.",
    },
    {
      en: "Good Conduct Certificate.",
      ar: "شهادة حسن السيرة والسلوك.",
    },
    {
      en: "Written approval from the employer, where applicable.",
      ar: "تعهد خطي بعدم ممانعة جهة العمل، عند انطباق ذلك.",
    },
    {
      en: "Social Security card for transferred students sponsored through the Ministry of Higher Education, Research and Innovation, where applicable.",
      ar: "بطاقة الضمان الاجتماعي للطالبة المنتقلة المبتعثة من وزارة التعليم العالي والبحث العلمي والابتكار، عند انطباق ذلك.",
    },
  ];


  // =========================================================
  // MAIN ADMISSION JOURNEY
  // =========================================================

  const steps = [
    {
      number: "01",
      icon: <GraduationCap size={30} />,

      en: {
        title: "Select the Academic Program",
        description:
          "Begin by identifying the academic program and degree you wish to apply for. The application form includes fields for the required major, required degree and sponsorship information.",
        points: [
          "Choose the required major.",
          "Identify the required academic degree.",
          "Specify the sponsoring party, if applicable.",
          "Provide a previous student ID if one exists.",
        ],
      },

      ar: {
        title: "اختيار البرنامج الأكاديمي",
        description:
          "ابدئي بتحديد البرنامج الأكاديمي والدرجة العلمية التي ترغبين في الالتحاق بها. يتضمن نموذج طلب الالتحاق حقولًا للتخصص المطلوب والدرجة العلمية المطلوبة وجهة الابتعاث.",
        points: [
          "تحديد التخصص المطلوب.",
          "تحديد الدرجة العلمية المطلوبة.",
          "تحديد جهة الابتعاث إن وجدت.",
          "إدخال الرقم الجامعي السابق إن وجد.",
        ],
      },
    },


    {
      number: "02",
      icon: <FileText size={30} />,

      en: {
        title: "Prepare the Required Documents",
        description:
          "Prepare the documents listed in the admission application before completing the submission process. Some documents apply only to specific applicant categories.",
        points: [
          "General Education Diploma Certificate or equivalent.",
          "Two recent personal photographs.",
          "Applicant Civil ID copy.",
          "Guardian Civil ID copy.",
          "Good Conduct Certificate.",
          "Additional documents for applicable employment, transfer or sponsorship cases.",
        ],
      },

      ar: {
        title: "تجهيز الوثائق المطلوبة",
        description:
          "جهزي الوثائق الواردة في نموذج طلب الالتحاق قبل استكمال إجراءات تقديم الطلب. بعض المستندات الإضافية ترتبط بحالة الطالبة أو جهة العمل أو الابتعاث.",
        points: [
          "أصل شهادة دبلوم التعليم العام أو ما يعادلها.",
          "صورتان شخصيتان حديثتان.",
          "صورة البطاقة المدنية للطالبة.",
          "صورة البطاقة المدنية لولي الأمر.",
          "شهادة حسن السيرة والسلوك.",
          "المستندات الإضافية الخاصة ببعض حالات العمل أو الانتقال أو الابتعاث.",
        ],
      },
    },


    {
      number: "03",
      icon: <UserRound size={30} />,

      en: {
        title: "Complete Personal Information",
        description:
          "Complete the student personal information section carefully and ensure that contact and guardian information is accurate.",
        points: [
          "Name, nationality, country of origin, date and place of birth.",
          "Marital status.",
          "Address and place of residence during study.",
          "Student mobile number, home telephone and email.",
          "Mother's name and mobile number.",
          "Guardian's name, relationship and contact details.",
          "Guardian's employer and address information.",
        ],
      },

      ar: {
        title: "تعبئة البيانات الشخصية",
        description:
          "املئي قسم البيانات الشخصية للطالبة بعناية وتأكدي من صحة بيانات التواصل ومعلومات ولي الأمر.",
        points: [
          "الاسم والجنسية والموطن الأصلي وتاريخ ومكان الميلاد.",
          "الحالة الاجتماعية.",
          "العنوان ومكان الإقامة خلال فترة الدراسة.",
          "رقم هاتف الطالبة وهاتف المنزل والبريد الإلكتروني.",
          "اسم الأم ورقم هاتفها.",
          "اسم ولي الأمر وصلة القرابة وبيانات التواصل.",
          "جهة عمل ولي الأمر وعنوانه.",
        ],
      },
    },


    {
      number: "04",
      icon: <ClipboardList size={30} />,

      en: {
        title: "Complete Additional Applicant Details",
        description:
          "The form contains additional applicant classification information. Complete only the information relevant to your situation.",
        points: [
          "Admission source or sponsoring category.",
          "Disability information, if applicable.",
          "Student category information.",
          "Employment category information.",
          "How you first heard about the college.",
        ],
      },

      ar: {
        title: "استكمال البيانات الإضافية",
        description:
          "يتضمن النموذج قسمًا للبيانات الإضافية المتعلقة بفئة الطالبة وجهة القبول وبعض المعلومات الأخرى. يتم تعبئة البيانات التي تنطبق على حالة المتقدمة.",
        points: [
          "جهة القبول أو فئة الابتعاث.",
          "بيانات الإعاقة إن وجدت.",
          "فئة الطالبة حسب الخيارات الموجودة في النموذج.",
          "بيانات جهة عمل الطالبة إن وجدت.",
          "تحديد كيفية التعرف على الكلية.",
        ],
      },
    },


    {
      number: "05",
      icon: <BookOpenCheck size={30} />,

      en: {
        title: "Enter Academic Qualification Details",
        description:
          "Provide accurate information about the General Education Diploma or equivalent qualification. Diploma holders continuing toward a degree have an additional qualification section.",
        points: [
          "Country and region.",
          "School name.",
          "Academic year.",
          "Specialization or stream.",
          "Final score.",
          "For diploma completion cases: institution, specialization, academic year and CGPA.",
        ],
      },

      ar: {
        title: "إدخال بيانات المؤهل الدراسي",
        description:
          "أدخلي بيانات دبلوم التعليم العام أو ما يعادله بدقة. ويتضمن النموذج قسمًا إضافيًا لحملة الدبلوم الراغبين في استكمال الدرجة العلمية.",
        points: [
          "الدولة والمنطقة.",
          "اسم المدرسة.",
          "السنة الدراسية.",
          "الفرع أو المسار.",
          "النسبة.",
          "لحالات استكمال الدراسة: الجامعة أو الكلية والتخصص والعام الأكاديمي والمعدل التراكمي.",
        ],
      },
    },


    {
      number: "06",
      icon: <WalletCards size={30} />,

      en: {
        title: "Review the Financial Information",
        description:
          "Review the financial information shown in the application and undertaking forms. Fees and payment responsibilities differ according to the student's category and sponsorship arrangement.",
        points: [
          "The form states a non-refundable admission/registration fee of 155 OMR.",
          "The form lists Foundation Program fees of 2,000 OMR for one academic year across three levels.",
          "Specialization tuition fees depend on the program and the number of credit hours registered.",
          "Self-sponsored students have additional payment terms stated in the undertaking form.",
        ],
      },

      ar: {
        title: "مراجعة المعلومات المالية",
        description:
          "راجعي المعلومات المالية الواردة في نموذج طلب الالتحاق والتعهد. تختلف المسؤوليات المالية بحسب فئة الطالبة وجهة الابتعاث أو النفقة الخاصة.",
        points: [
          "يذكر النموذج رسوم تسجيل غير مستردة بقيمة 155 ريالًا عمانيًا.",
          "يذكر النموذج رسوم البرنامج التأسيسي بقيمة 2000 ريال عماني لعام أكاديمي واحد مكوّن من 3 مستويات.",
          "تعتمد رسوم التخصص على البرنامج وعدد الساعات المعتمدة المسجلة فصليًا.",
          "توجد شروط دفع إضافية لطالبات النفقة الخاصة موضحة في نموذج التعهد.",
        ],
      },
    },


    {
      number: "07",
      icon: <ShieldCheck size={30} />,

      en: {
        title: "Read the Declarations and Undertakings",
        description:
          "Before signing, read all declarations carefully. The application contains academic integrity, intellectual property, research ethics and information authorization declarations.",
        points: [
          "Compliance with academic integrity policies.",
          "Proper citation of sources used in research and coursework.",
          "Respect for intellectual property rights.",
          "Compliance with research ethics where research is conducted.",
          "Authorization concerning academic information as stated in the form.",
          "Confirmation that the submitted information is accurate.",
        ],
      },

      ar: {
        title: "قراءة الإقرارات والتعهدات",
        description:
          "قبل التوقيع، اقرئي جميع الإقرارات بعناية. يحتوي الطلب على إقرارات مرتبطة بالنزاهة الأكاديمية والملكية الفكرية وأخلاقيات البحث والتصريح المتعلق بالمعلومات الأكاديمية.",
        points: [
          "الالتزام بسياسات النزاهة الأكاديمية.",
          "الإشارة إلى المصادر والمراجع المستخدمة في الأعمال الأكاديمية.",
          "احترام حقوق الملكية الفكرية.",
          "الالتزام بأخلاقيات البحث العلمي عند إجراء البحوث.",
          "التصريح المتعلق بالمعلومات الأكاديمية وفقًا لما ورد في النموذج.",
          "الإقرار بصحة البيانات والمعلومات المقدمة.",
        ],
      },
    },


    {
      number: "08",
      icon: <BadgeCheck size={30} />,

      en: {
        title: "Review, Sign and Submit",
        description:
          "Check all information and supporting documents before signing the required sections and completing the submission process according to the college procedures.",
        points: [
          "Check that all required fields are completed.",
          "Verify the accuracy of personal and academic information.",
          "Make sure applicable supporting documents are attached.",
          "Read all financial terms and undertakings.",
          "Complete the required names, signatures and dates.",
        ],
      },

      ar: {
        title: "المراجعة والتوقيع والتقديم",
        description:
          "راجعي جميع البيانات والوثائق قبل التوقيع على الأقسام المطلوبة واستكمال تقديم الطلب وفق إجراءات الكلية.",
        points: [
          "التأكد من تعبئة جميع الحقول المطلوبة.",
          "مراجعة صحة البيانات الشخصية والأكاديمية.",
          "التأكد من إرفاق الوثائق التي تنطبق على حالة المتقدمة.",
          "قراءة الشروط المالية والتعهدات.",
          "استكمال الأسماء والتوقيعات والتواريخ المطلوبة.",
        ],
      },
    },
  ];


  // =========================================================
  // FINANCIAL INFORMATION
  // =========================================================

  const financialInfo = [
    {
      icon: <CircleDollarSign size={27} />,

      en: {
        title: "Registration Fee",
        value: "155 OMR",
        description: "Non-refundable according to the application form.",
      },

      ar: {
        title: "رسوم التسجيل",
        value: "155 ر.ع",
        description: "غير مستردة وفقًا لنموذج طلب الالتحاق.",
      },
    },

    {
      icon: <Landmark size={27} />,

      en: {
        title: "Foundation Program",
        value: "2,000 OMR",
        description:
          "For one academic year consisting of three levels, as stated in the form.",
      },

      ar: {
        title: "البرنامج التأسيسي",
        value: "2000 ر.ع",
        description:
          "لعام أكاديمي واحد مكوّن من ثلاثة مستويات، حسب ما ورد في النموذج.",
      },
    },

    {
      icon: <GraduationCap size={27} />,

      en: {
        title: "Specialization Fees",
        value: "Variable",
        description:
          "Depend on specialization and registered credit hours.",
      },

      ar: {
        title: "رسوم التخصص",
        value: "متغيرة",
        description:
          "تعتمد على التخصص وعدد الساعات المعتمدة المسجلة.",
      },
    },
  ];


  // =========================================================
  // APPLICANT CATEGORIES
  // =========================================================

  const applicantCategories = [
    {
      icon: <Building2 size={28} />,

      en: {
        title: "Full Ministry Scholarship",
        description:
          "The undertaking contains specific provisions for students on full Ministry scholarships, including financial responsibilities, academic duration and restrictions related to withdrawal or changing specialization.",
      },

      ar: {
        title: "البعثة الكاملة من الوزارة",
        description:
          "يتضمن نموذج التعهد أحكامًا خاصة بطالبات البعثة الكاملة من الوزارة، تشمل المسؤوليات المالية والمدة الدراسية وبعض الضوابط المتعلقة بالانسحاب أو تغيير التخصص.",
      },
    },

    {
      icon: <Users size={28} />,

      en: {
        title: "Self-Sponsorship",
        description:
          "The undertaking states that self-sponsored students pay the registration fee and follow the tuition payment structure stated in the financial terms.",
      },

      ar: {
        title: "النفقة الخاصة",
        description:
          "يوضح نموذج التعهد أن طالبات النفقة الخاصة يدفعن رسوم التسجيل ويلتزمن بآلية سداد الرسوم الدراسية الواردة في الشروط المالية.",
      },
    },
  ];


  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#FCFAFF] pt-[128px]"
    >


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#3d2858]
          px-6
          py-20
          text-white
          md:py-24
        "
      >

        <div
          className="
            absolute
            -left-32
            -top-32
            h-96
            w-96
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            -right-32
            -bottom-48
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-white/10
          "
        />


        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-white/10
              backdrop-blur-sm
            "
          >
            <ClipboardList size={38} />
          </div>


          <p
            className="
              mt-7
              text-sm
              font-bold
              uppercase
              tracking-[0.25em]
              text-fuchsia-200
            "
          >
            {isArabic
              ? "دليل طلب الالتحاق"
              : "APPLICATION FOR ADMISSION GUIDE"}
          </p>


          <h1
            className="
              mt-5
              text-4xl
              font-black
              md:text-6xl
            "
          >
            {isArabic
              ? "خطوات القبول والتسجيل"
              : "Admission & Registration Steps"}
          </h1>


          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-white/80
            "
          >
            {isArabic
              ? "دليل واضح ومفصل يساعدكِ على فهم نموذج طلب الالتحاق، تجهيز الوثائق، تعبئة البيانات، مراجعة الرسوم، وقراءة التعهدات قبل تقديم الطلب."
              : "A clear and detailed guide to understanding the admission application, preparing documents, completing information, reviewing fees and reading the required undertakings before submission."}
          </p>

        </div>

      </section>



      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span
              className="
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#990099]
              "
            >
              {isArabic
                ? "رحلة طلب الالتحاق"
                : "YOUR APPLICATION JOURNEY"}
            </span>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-[#2B1035]
                md:text-5xl
              "
            >
              {isArabic
                ? "كيف تستعدين لتقديم الطلب؟"
                : "How to Prepare Your Application"}
            </h2>


            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-8
                text-gray-500
              "
            >
              {isArabic
                ? "يعرض هذا الدليل المراحل الأساسية والمعلومات الموجودة في نموذج طلب الالتحاق بطريقة مبسطة ومنظمة."
                : "This guide presents the main stages and information included in the admission application in a simple and organized way."}
            </p>

          </div>



          {/* =================================================
              JOURNEY STEPS
          ================================================= */}

          <div className="mx-auto mt-16 max-w-5xl space-y-7">

            {steps.map((step, index) => {
              const content = step[isArabic ? "ar" : "en"];

              return (
                <article
                  key={step.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-fuchsia-100
                    bg-white
                    p-7
                    shadow-[0_10px_40px_rgba(61,40,88,0.07)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(153,0,153,0.12)]
                    md:p-9
                  "
                >

                  <span
                    className={`
                      absolute
                      top-3
                      text-[90px]
                      font-black
                      leading-none
                      text-[#990099]/[0.04]
                      ${isArabic ? "left-5" : "right-5"}
                    `}
                  >
                    {step.number}
                  </span>


                  <div className="relative z-10 flex flex-col gap-7 md:flex-row">

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#990099]
                        text-white
                        shadow-lg
                        shadow-fuchsia-900/20
                        transition
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      {step.icon}
                    </div>


                    <div className="flex-1">

                      <p
                        className="
                          text-sm
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#990099]
                        "
                      >
                        {isArabic
                          ? `المرحلة ${step.number}`
                          : `STEP ${step.number}`}
                      </p>


                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-black
                          text-[#2B1035]
                          md:text-3xl
                        "
                      >
                        {content.title}
                      </h3>


                      <p
                        className="
                          mt-4
                          max-w-3xl
                          leading-8
                          text-gray-500
                        "
                      >
                        {content.description}
                      </p>


                      <div
                        className="
                          mt-6
                          grid
                          gap-3
                          md:grid-cols-2
                        "
                      >
                        {content.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="
                              flex
                              items-start
                              gap-3
                              rounded-2xl
                              bg-[#FCF7FC]
                              p-4
                            "
                          >
                            <CheckCircle2
                              size={20}
                              className="
                                mt-0.5
                                shrink-0
                                text-[#990099]
                              "
                            />

                            <span
                              className="
                                text-sm
                                leading-6
                                text-gray-600
                              "
                            >
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          REQUIRED DOCUMENTS
      ===================================================== */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <FileText
              size={42}
              className="mx-auto text-[#990099]"
            />

            <h2
              className="
                mt-5
                text-3xl
                font-black
                text-[#2B1035]
                md:text-5xl
              "
            >
              {isArabic
                ? "الوثائق المذكورة في نموذج الطلب"
                : "Documents Listed in the Application"}
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
                ? "تأكدي من الوثائق التي تنطبق على حالة طلبكِ، لأن بعض المستندات الإضافية مرتبطة بحالات محددة."
                : "Check which documents apply to your application, as some additional documents relate only to specific applicant situations."}
            </p>

          </div>


          <div
            className="
              mt-12
              grid
              gap-4
              md:grid-cols-2
            "
          >

            {requiredDocuments.map((document, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-fuchsia-100
                  bg-[#FCFAFF]
                  p-5
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#990099]
                    text-sm
                    font-black
                    text-white
                  "
                >
                  {index + 1}
                </div>


                <p className="leading-7 text-gray-600">

                  {isArabic
                    ? document.ar
                    : document.en}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINANCIAL INFORMATION
      ===================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <WalletCards
              size={42}
              className="mx-auto text-[#990099]"
            />

            <h2
              className="
                mt-5
                text-3xl
                font-black
                text-[#2B1035]
                md:text-5xl
              "
            >
              {isArabic
                ? "معلومات مالية واردة في النموذج"
                : "Financial Information in the Form"}
            </h2>

          </div>


          <div
            className="
              mt-12
              grid
              gap-7
              md:grid-cols-3
            "
          >

            {financialInfo.map((item, index) => {

              const content = item[isArabic ? "ar" : "en"];

              return (

                <div
                  key={index}
                  className="
                    rounded-[28px]
                    border
                    border-fuchsia-100
                    bg-white
                    p-7
                    text-center
                    shadow-[0_10px_35px_rgba(61,40,88,0.07)]
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-fuchsia-100
                      text-[#990099]
                    "
                  >
                    {item.icon}
                  </div>


                  <h3
                    className="
                      mt-5
                      text-xl
                      font-black
                      text-[#2B1035]
                    "
                  >
                    {content.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-3xl
                      font-black
                      text-[#990099]
                    "
                  >
                    {content.value}
                  </p>


                  <p
                    className="
                      mt-4
                      leading-7
                      text-gray-500
                    "
                  >
                    {content.description}
                  </p>

                </div>

              );

            })}

          </div>


          <div
            className="
              mt-8
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-amber-200
              bg-amber-50
              p-5
            "
          >

            <AlertCircle
              size={24}
              className="
                mt-0.5
                shrink-0
                text-amber-700
              "
            />


            <p className="leading-7 text-amber-900">

              {isArabic
                ? "ملاحظة: الرسوم الدراسية للتخصص تعتمد على البرنامج وعدد الساعات المعتمدة المسجلة. لذلك يجب الرجوع إلى صفحة الرسوم الدراسية للحصول على تفاصيل البرامج والرسوم المتاحة."
                : "Note: Specialization tuition fees depend on the academic program and the number of registered credit hours. Refer to the Tuition Fees page for program fee details."}

            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
          APPLICANT CATEGORIES
      ===================================================== */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <h2
              className="
                text-3xl
                font-black
                text-[#2B1035]
                md:text-5xl
              "
            >
              {isArabic
                ? "تعليمات تختلف حسب فئة الطالبة"
                : "Instructions by Student Category"}
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
                ? "يتضمن نموذج التعهد أقسامًا مختلفة، لذلك يجب قراءة القسم الذي ينطبق على حالة الطالبة بعناية."
                : "The undertaking contains different sections, so applicants should carefully review the section that applies to their situation."}
            </p>

          </div>


          <div
            className="
              mt-12
              grid
              gap-7
              md:grid-cols-2
            "
          >

            {applicantCategories.map((category, index) => {

              const content =
                category[isArabic ? "ar" : "en"];

              return (

                <div
                  key={index}
                  className="
                    rounded-[28px]
                    border
                    border-fuchsia-100
                    bg-[#FCFAFF]
                    p-8
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#990099]
                      text-white
                    "
                  >
                    {category.icon}
                  </div>


                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-black
                      text-[#2B1035]
                    "
                  >
                    {content.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      leading-8
                      text-gray-500
                    "
                  >
                    {content.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CHECKLIST
      ===================================================== */}

      <section className="px-6 py-20">

        <div
          className="
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[35px]
            bg-[#3d2858]
            p-8
            text-white
            shadow-xl
            md:p-12
          "
        >

          <div className="text-center">

            <BadgeCheck
              size={48}
              className="mx-auto"
            />


            <h2
              className="
                mt-5
                text-3xl
                font-black
                md:text-4xl
              "
            >
              {isArabic
                ? "قائمة المراجعة قبل تقديم الطلب"
                : "Final Application Checklist"}
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                leading-8
                text-white/75
              "
            >
              {isArabic
                ? "قبل إنهاء الطلب، استخدمي هذه القائمة للتأكد من اكتمال المعلومات الأساسية."
                : "Before completing the application, use this checklist to review the essential information."}
            </p>

          </div>


          <div
            className="
              mt-10
              grid
              gap-4
              md:grid-cols-2
            "
          >

            {[
              {
                en: "Academic program and degree selected.",
                ar: "تم تحديد البرنامج والدرجة العلمية المطلوبة.",
              },
              {
                en: "Applicable documents prepared.",
                ar: "تم تجهيز الوثائق التي تنطبق على حالة الطلب.",
              },
              {
                en: "Personal information completed accurately.",
                ar: "تمت تعبئة البيانات الشخصية بدقة.",
              },
              {
                en: "Guardian information completed.",
                ar: "تم استكمال بيانات ولي الأمر.",
              },
              {
                en: "Academic qualification details reviewed.",
                ar: "تمت مراجعة بيانات المؤهل الدراسي.",
              },
              {
                en: "Financial terms reviewed.",
                ar: "تمت مراجعة المعلومات والشروط المالية.",
              },
              {
                en: "Declarations and undertakings read carefully.",
                ar: "تمت قراءة الإقرارات والتعهدات بعناية.",
              },
              {
                en: "Required signatures and dates completed.",
                ar: "تم استكمال التوقيعات والتواريخ المطلوبة.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  bg-white/10
                  p-4
                "
              >

                <CheckCircle2
                  size={21}
                  className="
                    mt-0.5
                    shrink-0
                    text-fuchsia-200
                  "
                />


                <span className="leading-7 text-white/90">

                  {isArabic
                    ? item.ar
                    : item.en}

                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


    </main>
  );
}


export default Admission;