import {
  Mail,
  Phone,
  Building2,
  CreditCard,
  CircleHelp,
  MessageCircle,
  Clock3,
  Send,
  MapPin,
} from "lucide-react";


function Contact({ language }) {
  const isArabic = language === "ar";


  const contactInfo = [
    {
      icon: <Building2 size={28} />,

      en: {
        title: "Finance Department",
        subtitle: "Financial Affairs",
        description:
          "Contact the Finance Department for questions related to tuition fees, payments, and payment confirmation.",
      },

      ar: {
        title: "القسم المالي",
        subtitle: "الشؤون المالية",
        description:
          "يمكنكِ التواصل مع القسم المالي للاستفسارات المتعلقة بالرسوم الدراسية وطرق الدفع وتأكيد عملية السداد.",
      },
    },


    {
      icon: <Mail size={28} />,

      en: {
        title: "Email",
        subtitle: "Send us an email",
        description:
          "For payment confirmation and financial inquiries, contact the Finance Department by email.",
      },

      ar: {
        title: "البريد الإلكتروني",
        subtitle: "تواصلي معنا عبر البريد",
        description:
          "لتأكيد عملية الدفع والاستفسارات المالية، يمكنكِ التواصل مع القسم المالي عبر البريد الإلكتروني.",
      },

      value: "finance@zcw.edu.om",
      href: "mailto:finance@zcw.edu.om",
    },


    {
      icon: <MessageCircle size={28} />,

      en: {
        title: "WhatsApp",
        subtitle: "WhatsApp Contact",
        description:
          "Contact the Finance Department through WhatsApp for assistance with tuition fees and payment procedures.",
      },

      ar: {
        title: "الواتساب",
        subtitle: "تواصل عبر الواتساب",
        description:
          "تواصلي مع القسم المالي عبر الواتساب للحصول على المساعدة بشأن الرسوم الدراسية وإجراءات الدفع.",
      },

      value: "24512838",
      href: "tel:24512838",
    },


    {
      icon: <Phone size={28} />,

      en: {
        title: "Phone",
        subtitle: "Direct Phone Contact",
        description:
          "Call the college directly for assistance and general inquiries.",
      },

      ar: {
        title: "الهاتف",
        subtitle: "تواصل هاتفي مباشر",
        description:
          "يمكنكِ الاتصال مباشرة للحصول على المساعدة والاستفسارات العامة.",
      },

      values: [
        {
          number: "24512848",
          href: "tel:24512848",
        },
        {
          number: "24512849",
          href: "tel:24512849",
        },
      ],
    },
  ];


  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#FCFAFF]"
    >

      {/* ================= HERO ================= */}

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
            <MessageCircle size={30} />
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
              ? "معلومات التواصل"
              : "Contact Information"}
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
              ? "نحن هنا لمساعدتكِ. تواصلي معنا للاستفسارات المتعلقة بالرسوم الدراسية وطرق الدفع وتأكيد عملية السداد."
              : "We are here to help. Contact us for inquiries about tuition fees, payment methods, and payment confirmation."}
          </p>

        </div>

      </section>


      {/* ================= HELP INTRODUCTION ================= */}

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
              <CircleHelp size={18} />

              {isArabic
                ? "هل تحتاجين إلى مساعدة؟"
                : "Need Help?"}
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
                ? "كيف يمكننا مساعدتكِ؟"
                : "How Can We Help?"}
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
                ? "اختاري وسيلة التواصل المناسبة للحصول على المساعدة أو إرسال استفساركِ."
                : "Choose the most convenient contact method to get assistance or send your inquiry."}
            </p>

          </div>


          {/* ================= CONTACT CARDS ================= */}

          <div
            className="
              mt-14
              grid
              gap-7
              md:grid-cols-2
              lg:grid-cols-2
            "
          >

            {contactInfo.map((item, index) => {
              const content = item[isArabic ? "ar" : "en"];

              return (
                <article
                  key={index}
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
                    {item.icon}
                  </div>


                  <h3
                    className="
                      mt-6
                      text-xl
                      font-black
                      text-[#2B1035]
                    "
                  >
                    {content.title}
                  </h3>


                  <p
                    className="
                      mt-2
                      font-semibold
                      text-[#990099]
                    "
                  >
                    {content.subtitle}
                  </p>


                  <p
                    className="
                      mt-4
                      flex-grow
                      leading-7
                      text-gray-500
                    "
                  >
                    {content.description}
                  </p>


                  {/* SINGLE VALUE */}

                  {item.value && (
                    <div
                      className="
                        mt-6
                        rounded-2xl
                        bg-fuchsia-50
                        px-4
                        py-4
                      "
                    >
                      <a
                        href={item.href}
                        dir="ltr"
                        className="
                          block
                          break-all
                          text-center
                          font-black
                          text-[#990099]
                          transition
                          hover:text-[#760076]
                        "
                      >
                        {item.value}
                      </a>
                    </div>
                  )}


                  {/* MULTIPLE PHONE NUMBERS */}

                  {item.values && (
                    <div
                      className="
                        mt-6
                        grid
                        gap-3
                        sm:grid-cols-2
                      "
                    >
                      {item.values.map((phone, phoneIndex) => (

                        <a
                          key={phoneIndex}
                          href={phone.href}
                          dir="ltr"
                          className="
                            rounded-2xl
                            bg-fuchsia-50
                            px-4
                            py-4
                            text-center
                            font-black
                            text-[#990099]
                            transition
                            hover:bg-fuchsia-100
                            hover:text-[#760076]
                          "
                        >
                          {phone.number}
                        </a>

                      ))}
                    </div>
                  )}

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= CONTACT STEPS ================= */}

      <section className="bg-white py-20">

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
            lg:px-16
          "
        >

          <div className="text-center">

            <p
              className="
                font-bold
                uppercase
                tracking-wider
                text-[#990099]
              "
            >
              {isArabic
                ? "لخدمة أسرع"
                : "FOR FASTER ASSISTANCE"}
            </p>


            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[#2B1035]
                md:text-4xl
              "
            >
              {isArabic
                ? "عند التواصل مع القسم المالي"
                : "When Contacting the Finance Department"}
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                leading-7
                text-gray-500
              "
            >
              {isArabic
                ? "للمساعدة في معالجة طلبكِ بشكل أوضح وأسرع، احرصي على تقديم المعلومات الأساسية المتعلقة بطلبكِ."
                : "To help process your request clearly and efficiently, provide the essential information related to your inquiry."}
            </p>

          </div>


          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-3
            "
          >

            <HelpStep
              number="01"
              icon={<Send size={24} />}
              title={
                isArabic
                  ? "وضحي نوع الاستفسار"
                  : "Explain Your Inquiry"
              }
              text={
                isArabic
                  ? "اذكري بوضوح ما إذا كان استفساركِ متعلقاً بالرسوم أو الدفع أو تأكيد السداد."
                  : "Clearly mention whether your inquiry is about tuition fees, payment, or payment confirmation."
              }
            />


            <HelpStep
              number="02"
              icon={<CreditCard size={24} />}
              title={
                isArabic
                  ? "أرفقي إثبات الدفع"
                  : "Attach Payment Proof"
              }
              text={
                isArabic
                  ? "في حالة التحويل البنكي، أرسلي إيصال التحويل مع البيانات المطلوبة لتأكيد عملية الدفع."
                  : "For bank transfers, send the transfer receipt with the required information for payment confirmation."
              }
            />


            <HelpStep
              number="03"
              icon={<Clock3 size={24} />}
              title={
                isArabic
                  ? "انتظري الرد"
                  : "Wait for Confirmation"
              }
              text={
                isArabic
                  ? "بعد إرسال المعلومات المطلوبة، انتظري رد القسم المالي بشأن طلبكِ."
                  : "After sending the required information, wait for the Finance Department's response regarding your request."
              }
            />

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section className="py-16">

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
              gap-6
              rounded-[30px]
              border
              border-purple-100
              bg-white
              p-8
              text-center
              shadow-[0_10px_40px_rgba(61,40,88,0.07)]
              md:flex-row
              md:text-start
            "
          >

            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#3d2858]
                text-white
              "
            >
              <MapPin size={28} />
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
                  ? "كلية الزهراء للبنات"
                  : "Al Zahra College for Women"}
              </h3>


              <p
                className="
                  mt-2
                  leading-7
                  text-gray-500
                "
              >
                {isArabic
                  ? "للاستفسارات المالية، يرجى استخدام البريد الإلكتروني أو الواتساب، وللاتصال الهاتفي استخدمي أرقام الهاتف الموضحة في هذه الصفحة."
                  : "For financial inquiries, use the email or WhatsApp contact. For phone inquiries, use the telephone numbers shown on this page."}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= THANK YOU ================= */}

      <section className="pb-20">

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-16
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              bg-[#3d2858]
              px-8
              py-14
              text-center
              text-white
              shadow-xl
            "
          >

            <div
              className="
                absolute
                -left-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-fuchsia-400/10
                blur-3xl
              "
            />


            <div className="relative z-10">

              <h3
                className="
                  text-3xl
                  font-black
                  md:text-4xl
                "
              >
                {isArabic
                  ? "شكراً لزيارتكِ"
                  : "Thank You for Visiting"}
              </h3>


              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  leading-8
                  text-purple-100
                "
              >
                {isArabic
                  ? "نتمنى لكِ رحلة أكاديمية مليئة بالنجاح والتميز، ويسعدنا مساعدتكِ والإجابة عن استفساراتكِ."
                  : "We wish you a successful and rewarding academic journey. We are happy to assist you and answer your inquiries."}
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ================= HELP STEP ================= */

function HelpStep({
  number,
  icon,
  title,
  text,
}) {
  return (
    <div
      className="
        rounded-[26px]
        border
        border-purple-100
        bg-[#FCFAFF]
        p-6
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-[#990099]
            text-white
          "
        >
          {icon}
        </div>


        <span
          className="
            text-3xl
            font-black
            text-purple-100
          "
        >
          {number}
        </span>

      </div>


      <h3
        className="
          mt-6
          text-lg
          font-black
          text-[#2B1035]
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-3
          leading-7
          text-gray-500
        "
      >
        {text}
      </p>

    </div>
  );
}


export default Contact;