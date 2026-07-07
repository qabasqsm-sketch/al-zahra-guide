import {
  Landmark,
  CreditCard,
  Mail,
  Phone,
  ReceiptText,
  AlertCircle,
  CheckCircle2,
  Building2,
  Send,
} from "lucide-react";

function Payment({ language }) {
  const isArabic = language === "ar";

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#FCFAFF]"
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#3d2858] pb-20 pt-44 text-white">
        {/* Decorative Effects */}

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-300/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <CreditCard size={30} />
          </div>

          <h1 className="mt-6 text-4xl font-black md:text-6xl">
            {isArabic
              ? "دليل سداد الرسوم الدراسية"
              : "Tuition Fee Payment Guide"}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-purple-100">
            {isArabic
              ? "دليل مبسط يوضح طرق سداد الرسوم الدراسية، بيانات التحويل البنكي، وطريقة تأكيد عملية الدفع."
              : "A simple guide to tuition fee payment methods, bank transfer details, and payment confirmation."}
          </p>
        </div>
      </section>


      {/* =====================================================
          SIMPLE STEPS
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="text-center">
            <p className="font-bold uppercase tracking-wider text-[#990099]">
              {isArabic
                ? "عملية دفع بسيطة وواضحة"
                : "SIMPLE PAYMENT PROCESS"}
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#2B1035] md:text-4xl">
              {isArabic
                ? "كيف تتم عملية الدفع؟"
                : "How Does Payment Work?"}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              {isArabic
                ? "يمكنكِ إتمام عملية الدفع والتأكيد من خلال ثلاث خطوات بسيطة."
                : "Complete and confirm your tuition fee payment in three simple steps."}
            </p>
          </div>


          {/* Steps */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              icon={<CreditCard size={27} />}
              title={
                isArabic
                  ? "اختاري طريقة الدفع"
                  : "Choose a Payment Method"
              }
              text={
                isArabic
                  ? "اختاري إحدى طرق الدفع المتاحة: التحويل البنكي، بطاقة الخصم المباشر، أو البطاقة الائتمانية."
                  : "Choose bank transfer, debit card, or credit card as your preferred payment method."
              }
            />

            <StepCard
              number="02"
              icon={<ReceiptText size={27} />}
              title={
                isArabic
                  ? "احتفظي بإيصال الدفع"
                  : "Keep Your Receipt"
              }
              text={
                isArabic
                  ? "بعد إتمام عملية الدفع، احتفظي بإيصال أو إثبات عملية الدفع."
                  : "After completing the payment, keep your payment receipt or proof of payment."
              }
            />

            <StepCard
              number="03"
              icon={<Send size={27} />}
              title={
                isArabic
                  ? "أرسلي إثبات الدفع"
                  : "Send Payment Confirmation"
              }
              text={
                isArabic
                  ? "أرسلي الإيصال مع الاسم والرقم الجامعي إلى قسم المالية."
                  : "Send the receipt with your name and Student ID to the Finance Department."
              }
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          PAYMENT METHODS
      ===================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="text-center">
            <p className="font-bold uppercase tracking-wider text-[#990099]">
              {isArabic
                ? "طرق الدفع المتاحة"
                : "AVAILABLE PAYMENT METHODS"}
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#2B1035] md:text-4xl">
              {isArabic
                ? "اختاري طريقة الدفع المناسبة"
                : "Choose Your Payment Method"}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              {isArabic
                ? "تتوفر عدة خيارات لسداد الرسوم الدراسية."
                : "Several payment options are available for tuition fee payment."}
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Bank Transfer */}

            <PaymentMethodCard
              icon={<Landmark size={28} />}
              title={
                isArabic
                  ? "التحويل البنكي"
                  : "Bank Transfer"
              }
              text={
                isArabic
                  ? "يمكن تحويل الرسوم مباشرة إلى الحساب البنكي الرسمي للكلية باستخدام البيانات الموضحة أدناه."
                  : "Transfer the tuition fees directly to the College's official bank account using the details below."
              }
            />


            {/* Debit Card */}

            <PaymentMethodCard
              icon={<CreditCard size={28} />}
              title={
                isArabic
                  ? "بطاقة الخصم المباشر"
                  : "Debit Card"
              }
              text={
                isArabic
                  ? "يمكن سداد الرسوم الدراسية باستخدام بطاقة الخصم المباشر."
                  : "Tuition fees can be paid using a debit card."
              }
            />


            {/* Credit Card */}

            <PaymentMethodCard
              icon={<CreditCard size={28} />}
              title={
                isArabic
                  ? "البطاقة الائتمانية"
                  : "Credit Card"
              }
              text={
                isArabic
                  ? "يمكن سداد الرسوم الدراسية باستخدام البطاقة الائتمانية."
                  : "Tuition fees can be paid using a credit card."
              }
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          BANK TRANSFER DETAILS
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="overflow-hidden rounded-[35px] bg-[#18233f] text-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Left Side */}

              <div className="relative overflow-hidden bg-[#3d2858] p-10 md:p-14">
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                    <Landmark
                      size={32}
                      className="text-fuchsia-200"
                    />
                  </div>

                  <h2 className="mt-7 text-3xl font-black md:text-4xl">
                    {isArabic
                      ? "بيانات التحويل البنكي"
                      : "Bank Transfer Details"}
                  </h2>

                  <p className="mt-5 max-w-md leading-8 text-purple-100">
                    {isArabic
                      ? "استخدمي بيانات الحساب التالية عند اختيار التحويل البنكي لسداد الرسوم الدراسية."
                      : "Use the following account details when paying tuition fees by bank transfer."}
                  </p>

                  <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                    <AlertCircle
                      size={21}
                      className="mt-1 shrink-0 text-fuchsia-200"
                    />

                    <p className="text-sm leading-6 text-purple-100">
                      {isArabic
                        ? "تأكدي من الاحتفاظ بإيصال التحويل لإرساله إلى قسم المالية."
                        : "Remember to keep the transfer receipt so it can be sent to the Finance Department."}
                    </p>
                  </div>
                </div>
              </div>


              {/* Account Details */}

              <div className="p-10 md:p-14">
                <div className="mb-8 flex items-center gap-3">
                  <Building2
                    size={24}
                    className="text-fuchsia-300"
                  />

                  <h3 className="text-xl font-bold">
                    {isArabic
                      ? "معلومات الحساب"
                      : "Account Information"}
                  </h3>
                </div>

                <div className="space-y-7">
                  <DetailRow
                    label={
                      isArabic
                        ? "اسم الحساب"
                        : "Account Name"
                    }
                    value={
                      isArabic
                        ? "كلية الزهراء للبنات"
                        : "Al Zahra College for Women"
                    }
                  />

                  <DetailRow
                    label={
                      isArabic
                        ? "اسم البنك"
                        : "Bank Name"
                    }
                    value={
                      isArabic
                        ? "بنك عمان العربي"
                        : "Oman Arab Bank"
                    }
                  />

                  <DetailRow
                    label={
                      isArabic
                        ? "رقم الحساب"
                        : "Account Number"
                    }
                    value="3128-882996-500"
                    ltr
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          PAYMENT CONFIRMATION
      ===================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="mx-auto max-w-4xl">
            {/* Header */}

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-100 text-[#990099]">
                <ReceiptText size={30} />
              </div>

              <p className="mt-6 font-bold uppercase tracking-wider text-[#990099]">
                {isArabic
                  ? "تأكيد الدفع"
                  : "PAYMENT CONFIRMATION"}
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#2B1035] md:text-4xl">
                {isArabic
                  ? "بعد إتمام عملية التحويل"
                  : "After Completing the Transfer"}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
                {isArabic
                  ? "يرجى إرسال إيصال التحويل مرفقًا بالاسم والرقم الجامعي إلى قسم المالية عبر إحدى وسائل التواصل التالية:"
                  : "Please send the transfer receipt together with your name and Student ID to the Finance Department using one of the following contact methods:"}
              </p>
            </div>


            {/* What to Include */}

            <div className="mt-10 rounded-3xl border border-purple-100 bg-[#FCFAFF] p-7">
              <h3 className="text-lg font-black text-[#2B1035]">
                {isArabic
                  ? "تأكدي من إرفاق:"
                  : "Make sure to include:"}
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <CheckItem
                  text={
                    isArabic
                      ? "إيصال التحويل"
                      : "Transfer Receipt"
                  }
                />

                <CheckItem
                  text={
                    isArabic
                      ? "اسم الطالبة"
                      : "Student Name"
                  }
                />

                <CheckItem
                  text={
                    isArabic
                      ? "الرقم الجامعي"
                      : "Student ID"
                  }
                />
              </div>
            </div>


            {/* Contact Methods */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {/* Email */}

              <a
                href="mailto:finance@zcw.edu.om"
                className="group flex items-center gap-4 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-6 text-start transition duration-300 hover:-translate-y-1 hover:border-[#990099] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#990099] text-white">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">
                    {isArabic
                      ? "البريد الرسمي لقسم المالية"
                      : "Finance Department Email"}
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 break-all font-bold text-[#2B1035]"
                  >
                    finance@zcw.edu.om
                  </p>
                </div>
              </a>


              {/* Phone */}

              <a
                href="tel:24512838"
                className="group flex items-center gap-4 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-6 text-start transition duration-300 hover:-translate-y-1 hover:border-[#990099] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#990099] text-white">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {isArabic
                      ? "رقم الهاتف / واتساب"
                      : "Phone / WhatsApp"}
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 font-bold text-[#2B1035]"
                  >
                    24512838
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          IMPORTANT NOTE
      ===================================================== */}

      <section className="bg-[#FCFAFF] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-16">
          <div className="flex flex-col items-center gap-5 rounded-[28px] border border-fuchsia-200 bg-fuchsia-50 p-7 text-center md:flex-row md:text-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#990099] text-white">
              <AlertCircle size={27} />
            </div>

            <div>
              <h3 className="text-xl font-black text-[#2B1035]">
                {isArabic
                  ? "ملاحظة مهمة"
                  : "Important Note"}
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {isArabic
                  ? "طرق الدفع المقبولة هي التحويل البنكي، بطاقة الخصم المباشر، أو البطاقة الائتمانية. عند استخدام التحويل البنكي، يرجى الاحتفاظ بالإيصال وإرساله إلى قسم المالية مع الاسم والرقم الجامعي."
                  : "Accepted payment methods are bank transfer, debit card, and credit card. For bank transfers, please keep the receipt and send it to the Finance Department with your name and Student ID."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


/* =====================================================
   STEP CARD
===================================================== */

function StepCard({ number, icon, title, text }) {
  return (
    <div className="relative rounded-[28px] border border-purple-100 bg-white p-8 shadow-[0_10px_40px_rgba(61,40,88,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <span className="absolute right-6 top-5 text-5xl font-black text-purple-50">
        {number}
      </span>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#990099]/10 text-[#990099]">
        {icon}
      </div>

      <h3 className="relative mt-6 text-xl font-black text-[#2B1035]">
        {title}
      </h3>

      <p className="relative mt-3 leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}


/* =====================================================
   PAYMENT METHOD CARD
===================================================== */

function PaymentMethodCard({ icon, title, text }) {
  return (
    <div className="group rounded-[28px] border border-purple-100 bg-[#FCFAFF] p-8 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-200 hover:bg-white hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#990099]/10 text-[#990099] transition group-hover:bg-[#990099] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-black text-[#2B1035]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>
    </div>
  );
}


/* =====================================================
   DETAIL ROW
===================================================== */

function DetailRow({ label, value, ltr }) {
  return (
    <div className="border-b border-white/10 pb-6 last:border-none">
      <p className="text-sm text-gray-400">
        {label}
      </p>

      <p
        dir={ltr ? "ltr" : undefined}
        className="mt-2 text-xl font-bold"
      >
        {value}
      </p>
    </div>
  );
}


/* =====================================================
   CHECK ITEM
===================================================== */

function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={20}
        className="shrink-0 text-[#990099]"
      />

      <span className="font-semibold text-[#2B1035]">
        {text}
      </span>
    </div>
  );
}


export default Payment;