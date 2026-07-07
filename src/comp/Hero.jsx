import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import campus1 from "./image/Image 1.jpg";
import campus2 from "./image/Image.jpg";


function Hero({ language }) {
  const isArabic = language === "ar";

  const [currentSlide, setCurrentSlide] = useState(0);


  const slides = [
    {
      image: campus1,

      en: {
        small: "WELCOME TO AL ZAHRA COLLEGE",
        title: "Your Future Starts Here",
        description:
          "Discover a clear and simple guide to academic programs, admission steps, tuition fees, and payment methods.",
      },

      ar: {
        small: "مرحباً بكِ في كلية الزهراء للبنات",
        title: "مستقبلكِ يبدأ من هنا",
        description:
          "اكتشفي دليلاً واضحاً ومبسّطاً للتعرف على البرامج الأكاديمية وخطوات القبول والرسوم الدراسية وطرق الدفع.",
      },
    },


    {
      image: campus2,

      en: {
        small: "DISCOVER YOUR ACADEMIC PATH",
        title: "Turn Your Ambition Into Achievement",
        description:
          "Explore academic opportunities designed to support your ambitions and prepare you for a promising future.",
      },

      ar: {
        small: "اكتشفي مساركِ الأكاديمي",
        title: "حوّلي طموحكِ إلى إنجاز",
        description:
          "تعرّفي على الفرص الأكاديمية التي تساعدكِ على تحقيق طموحاتكِ والاستعداد لمستقبل واعد.",
      },
    },


    {
      image: campus1,

      en: {
        small: "A SIMPLE JOURNEY TO ADMISSION",
        title: "One Journey. Clear Steps.",
        description:
          "Understand your admission journey clearly, from discovering your options to preparing for your academic future.",
      },

      ar: {
        small: "رحلة واضحة نحو القبول",
        title: "رحلة واحدة، بخطوات واضحة",
        description:
          "تعرّفي على رحلة القبول بوضوح، من اكتشاف الخيارات المتاحة وحتى الاستعداد لمستقبلكِ الأكاديمي.",
      },
    },
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };


  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);


  const currentContent =
    slides[currentSlide][isArabic ? "ar" : "en"];


  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative
        h-screen
        min-h-[720px]
        w-full
        overflow-hidden
        bg-[#2B1035]
      "
    >


      {/* ================= BACKGROUND IMAGES ================= */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute
            inset-0
            transition-all
            duration-1000
            ease-in-out

            ${
              currentSlide === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }
          `}
        >
          <img
            src={slide.image}
            alt="Al Zahra College Campus"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>
      ))}


      {/* ================= DARK OVERLAY ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#160d2b]/90
          via-[#2B1035]/65
          to-[#2B1035]/25
        "
      />


      {/* ================= PURPLE EFFECT ================= */}

      <div className="absolute inset-0 bg-[#5c2875]/15" />


      {/* ================= DECORATIVE CIRCLES ================= */}

      <div
        className="
          absolute
          -right-40
          top-1/2
          h-[650px]
          w-[650px]
          -translate-y-1/2
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          absolute
          -right-20
          top-1/2
          h-[450px]
          w-[450px]
          -translate-y-1/2
          rounded-full
          border
          border-white/10
        "
      />


      {/* ================= HERO CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          px-6
          pt-28
          md:px-12
          lg:px-24
        "
      >
        <div className="max-w-4xl">


          {/* SMALL TITLE */}

          <div
            className={`
              mb-6
              flex
              items-center
              gap-4

              ${
                isArabic
                  ? "flex-row"
                  : "flex-row"
              }
            `}
          >
            <span
              className="
                h-[2px]
                w-12
                shrink-0
                bg-fuchsia-300
              "
            />

            <p
              key={`small-${currentSlide}-${language}`}
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-fuchsia-200
                md:text-base
              "
            >
              {currentContent.small}
            </p>
          </div>


          {/* MAIN TITLE */}

          <h1
            key={`title-${currentSlide}-${language}`}
            className="
              max-w-4xl
              text-5xl
              font-black
              leading-[1.08]
              text-white
              drop-shadow-lg
              md:text-7xl
              lg:text-[82px]
            "
          >
            {currentContent.title}
          </h1>


          {/* DESCRIPTION */}

          <p
            key={`description-${currentSlide}-${language}`}
            className="
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-white/85
              md:text-xl
              md:leading-9
            "
          >
            {currentContent.description}
          </p>

        </div>
      </div>


      {/* ================= PREVIOUS ARROW ================= */}

      <button
        type="button"
        onClick={previousSlide}
        className="
          absolute
          left-5
          top-1/2
          z-20
          hidden
          h-14
          w-14
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white
          hover:text-[#990099]
          lg:flex
        "
        aria-label={
          isArabic
            ? "الشريحة السابقة"
            : "Previous slide"
        }
      >
        <ArrowLeft size={25} />
      </button>


      {/* ================= NEXT ARROW ================= */}

      <button
        type="button"
        onClick={nextSlide}
        className="
          absolute
          right-5
          top-1/2
          z-20
          hidden
          h-14
          w-14
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white
          hover:text-[#990099]
          lg:flex
        "
        aria-label={
          isArabic
            ? "الشريحة التالية"
            : "Next slide"
        }
      >
        <ArrowRight size={25} />
      </button>


      {/* ================= SLIDER DOTS ================= */}

      <div
        className="
          absolute
          bottom-10
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-500

              ${
                currentSlide === index
                  ? "w-12 bg-white"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;