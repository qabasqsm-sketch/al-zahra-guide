function Footer({ language }) {
  const isArabic = language === "ar";

  return (
    <footer
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#18233f] text-white"
    >
      {/* Decorative Background */}

      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#990099]/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />


      {/* Main Content */}

      <div className="relative z-10 px-6 py-14 text-center lg:px-16">

        {/* College Name */}

        <h2 className="text-3xl font-bold md:text-4xl">
          {isArabic
            ? "كلية الزهراء للبنات"
            : "Al Zahra College for Women"}
        </h2>


        {/* Short Description */}

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
          {isArabic
            ? "دليلك المبسط للتعرف على خطوات التسجيل والبرامج الأكاديمية والرسوم الدراسية وطرق الدفع."
            : "Your simple guide to admission steps, academic programs, tuition fees, and payment methods."}
        </p>


        {/* Divider */}

        <div className="mx-auto my-9 h-px max-w-4xl bg-white/10" />


        {/* Contact Information */}

        <div
          className="
            mx-auto
            flex
            max-w-4xl
            flex-col
            items-center
            justify-center
            gap-4
            md:flex-row
            md:gap-8
          "
        >

          {/* Phone */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              transition
              hover:bg-white/10
            "
          >
            <span className="text-xl">☎</span>

            <div className={isArabic ? "text-right" : "text-left"}>

              <p className="text-xs text-gray-400">
                {isArabic ? "رقم التواصل" : "Phone"}
              </p>

              <p className="font-semibold text-white">
                24512838
              </p>

            </div>
          </div>


          {/* Email */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              transition
              hover:bg-white/10
            "
          >
            <span className="text-xl">✉</span>

            <div className={isArabic ? "text-right" : "text-left"}>

              <p className="text-xs text-gray-400">
                {isArabic ? "البريد الإلكتروني" : "Email"}
              </p>

              <p
                dir="ltr"
                className="font-semibold text-white"
              >
                finance@zcw.edu.om
              </p>

            </div>
          </div>


          {/* Location */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              transition
              hover:bg-white/10
            "
          >
            <span className="text-xl">📍</span>

            <div className={isArabic ? "text-right" : "text-left"}>

              <p className="text-xs text-gray-400">
                {isArabic ? "الموقع" : "Location"}
              </p>

              <p className="font-semibold text-white">
                {isArabic
                  ? "مسقط، سلطنة عُمان"
                  : "Muscat, Sultanate of Oman"}
              </p>

            </div>
          </div>

        </div>

      </div>


      {/* Copyright */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/10
          bg-[#111a31]
          px-6
          py-5
          text-center
        "
      >
        <p className="text-sm text-gray-400">
          {isArabic
            ? "© 2026 كلية الزهراء للبنات. جميع الحقوق محفوظة."
            : "© 2026 Al Zahra College for Women. All Rights Reserved."}
        </p>

      </div>

    </footer>
  );
}

export default Footer;