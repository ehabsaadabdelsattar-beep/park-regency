const fs = require("fs");
const path = require("path");

const arPath = path.join(__dirname, "src/i18n/locales/ar.json");
const ar = JSON.parse(fs.readFileSync(arPath, "utf8"));

ar.nav = {
  stay: "الإقامة",
  rooms: "الغرف والأجنحة",
  regencyClub: "نادي ريجنسي",
  offers: "عروض خاصة",
  experience: "التجربة",
  beaches: "الشواطئ",
  diveCenter: "مركز الغوص",
  spa: "السبا والعافية",
  virtualTour: "جولة افتراضية",
  dining: "المطاعم",
  celebrate: "المناسبات",
  weddings: "حفلات الزفاف",
  meetings: "الاجتماعات والفعاليات",
  gallery: "الصور",
  about: "عن المنتجع",
  aboutResort: "نبذة عن المنتجع",
  reviews: "التقييمات",
  faqs: "الأسئلة الشائعة",
  careers: "الوظائف",
  contact: "اتصل بنا",
  bookNow: "احجز الآن",
  suitesVillas: "الأجنحة والفلل",
  facilities: "المرافق والخدمات",
  attractions: "معالم المنطقة",
};

ar.home.eyebrow = "تجربة منتجع فاخر على البحر الأحمر";
ar.home.heroSub = "حيث تلتقي الصحراء بالبحر — ملاذ من الأناقة الخالدة على شواطئ شبه جزيرة سيناء.";
ar.home.exploreResort = "استكشف المنتجع";
ar.home.welcome = "أهلاً بكم";
ar.home.welcomeTitle = "ملاذ من الأناقة الراقية بجوار البحر";
ar.home.welcomeP1 =
  "يقع منتجع بارك ريجنسي على امتداد شاطئ خاص على ساحل شرم الشيخ الأكثر شهرة، وهو أكثر من مجرد منتجع — إنه وجهة منسوجة من الضوء والماء والرفاهية المطلقة.";

fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
console.log("ar.json translated successfully.");
