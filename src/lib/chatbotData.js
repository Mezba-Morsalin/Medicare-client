
const faqRules = [
  {
    id: "greeting",
    keywords: [
      "hello", "hi", "hey", "heya", "hiya", "hello there",
      "good morning", "good afternoon", "good evening",
      "assalamu alaikum", "salam", "as salamualaikum",
      "হ্যালো", "হাই", "হেই", "আসসালামু আলাইকুম",
      "আসসালামু আলাইকুম ভাই", "সালাম", "শুভ সকাল",
      "শুভ সন্ধ্যা", "শুভ অপরাহ্ন",
    ],
    en: [
      "Hey there! 👋 Welcome to MediCare Connect. What can I help you with today?",
      "Hello! 😊 Are you looking for a doctor or need help with an appointment?",
      "Hi! Welcome to MediCare Connect. I'm here to help you find doctors and explore our website.",
    ],
    bn: [
      "আসসালামু আলাইকুম! 👋 MediCare Connect-এ স্বাগতম। আজ কীভাবে সাহায্য করতে পারি?",
      "হ্যালো! 😊 ডাক্তার খুঁজছ, নাকি অ্যাপয়েন্টমেন্ট নিয়ে সাহায্য দরকার?",
      "স্বাগতম! ❤️ আমি ডাক্তার খোঁজা, specialization ও ওয়েবসাইট ব্যবহার করতে সাহায্য করতে পারি।",
    ],
  },
  {
    id: "wellbeing",
    keywords: [
      "how are you", "how are you doing", "are you okay",
      "how is it going", "how have you been", "what's up",
      "কেমন আছ", "কেমন আছেন", "তুমি কেমন", "আপনি কেমন",
      "কি খবর", "কী খবর", "সব কেমন", "ভালো আছ",
    ],
    en: [
      "I'm doing well, thanks for asking! 😊 How can I help you today?",
      "I'm great and ready to help! What would you like to know about MediCare Connect?",
    ],
    bn: [
      "আমি ভালো আছি! 😊 খোঁজ নেওয়ার জন্য ধন্যবাদ। কীভাবে সাহায্য করব?",
      "ভালো আছি! ❤️ তুমি কেমন আছ? ডাক্তার বা অ্যাপয়েন্টমেন্ট নিয়ে কিছু জানতে চাও?",
    ],
  },
  {
    id: "identity",
    keywords: [
      "who are you", "what are you", "your name", "who is this",
      "introduce yourself", "what is your name",
      "তোমার নাম", "তুমি কে", "আপনি কে", "তোমার পরিচয়",
      "তোমার পরিচয়", "তোমাকে কি বলে", "তোমার নাম কি",
    ],
    en: [
      "I'm MediCare Assistant! 🤖 Your virtual guide to MediCare Connect. I can help you explore doctors, specializations, appointments, and website features.",
    ],
    bn: [
      "আমি MediCare Assistant! 🤖 MediCare Connect-এর virtual assistant। ডাক্তার খোঁজা, specialization, অ্যাপয়েন্টমেন্ট এবং ওয়েবসাইট ব্যবহার করতে সাহায্য করতে পারি।",
    ],
  },
  {
    id: "capabilities",
    keywords: [
      "what can you do", "how can you help", "what can you help",
      "what do you do", "help me", "help me please",
      "your features", "your services",
      "কি করতে পারো", "কী করতে পারো", "সাহায্য করো",
      "সাহায্য চাই", "কীভাবে সাহায্য", "কি কি করতে পার",
      "তুমি কি করতে পার", "তোমার কাজ কি",
    ],
    en: [
      "I can help you find doctors by specialization, explore the doctor directory, navigate sign-in and sign-up, and understand appointment booking. What would you like to do?",
    ],
    bn: [
      "আমি specialization অনুযায়ী ডাক্তার খোঁজা, ডাক্তারদের তালিকা দেখা, লগইন, নতুন অ্যাকাউন্ট তৈরি এবং অ্যাপয়েন্টমেন্ট সম্পর্কে সাহায্য করতে পারি। কী জানতে চাও?",
    ],
  },
  {
    id: "doctor",
    keywords: [
      "find a doctor", "find doctor", "search doctor",
      "doctor list", "show doctors", "doctors", "doctor",
      "physician", "need a doctor", "looking for a doctor",
      "doctor directory", "available doctors",
      "ডাক্তার খুঁজ", "ডাক্তার দেখ", "ডাক্তার তালিকা",
      "ডাক্তার কোথায়", "চিকিৎসক", "ডাক্তার লাগবে",
      "ডাক্তারদের তালিকা", "ডাক্তার দেখাতে চাই",
    ],
    en: [
      "You can explore the doctors listed on MediCare Connect and review their specializations on our Find Doctor page.",
    ],
    bn: [
      "MediCare Connect-এর Find Doctor পেজে গেলে তালিকাভুক্ত ডাক্তার ও তাঁদের specialization দেখতে পারবে। 😊",
    ],
    href: "/find-doctor",
    linkTextEn: "Explore Doctors",
    linkTextBn: "ডাক্তার খুঁজুন",
  },
  {
    id: "appointment",
    keywords: [
      "book an appointment", "book appointment", "appointment",
      "booking", "schedule", "consultation",
      "make an appointment", "schedule an appointment",
      "appointment booking", "doctor appointment",
      "how to book", "book a doctor",
      "অ্যাপয়েন্টমেন্ট", "এপয়েন্টমেন্ট", "সিরিয়াল",
      "ডাক্তারের সময়", "ডাক্তার দেখানোর সময়",
      "সিরিয়াল নিতে চাই", "ডাক্তার দেখাব",
      "কিভাবে অ্যাপয়েন্টমেন্ট", "বুকিং করতে চাই",
    ],
    en: [
      "To get started, open Find Doctor, select a doctor, and review the booking options available on their profile. The exact steps depend on the features enabled on the website.",
    ],
    bn: [
      "প্রথমে Find Doctor পেজে যাও, তারপর একজন ডাক্তার নির্বাচন করো। তাঁর প্রোফাইলে থাকা booking option অনুসরণ করো। 😊",
    ],
    href: "/find-doctor",
    linkTextEn: "Find a Doctor",
    linkTextBn: "ডাক্তার দেখুন",
  },
  {
    id: "login",
    keywords: [
      "log in", "login", "sign in", "signin", "log me in",
      "access my account", "login help",
      "লগইন", "লগ ইন", "সাইন ইন", "অ্যাকাউন্টে ঢুক",
      "অ্যাকাউন্টে লগইন", "লগইন করতে চাই",
    ],
    en: [
      "You can access your account from the Sign In page. If you don't have an account yet, you'll need to register first.",
    ],
    bn: [
      "তোমার অ্যাকাউন্টে ঢুকতে Sign In পেজে যাও। অ্যাকাউন্ট না থাকলে আগে Sign Up করতে হবে। 😊",
    ],
    href: "/signin",
    linkTextEn: "Go to Sign In",
    linkTextBn: "লগইন পেজে যাও",
  },
  {
    id: "signup",
    keywords: [
      "sign up", "signup", "register", "registration",
      "create account", "new account", "join",
      "register me", "create an account",
      "রেজিস্টার", "রেজিস্ট্রেশন", "অ্যাকাউন্ট তৈরি",
      "একাউন্ট খুল", "অ্যাকাউন্ট খুল", "নতুন অ্যাকাউন্ট চাই",
      "নতুন একাউন্ট", "অ্যাকাউন্ট বানাতে চাই",
    ],
    en: [
      "To create an account, visit the Sign Up page and complete the requested information.",
    ],
    bn: [
      "নতুন অ্যাকাউন্ট তৈরি করতে Sign Up পেজে যাও এবং সেখানে চাওয়া তথ্যগুলো পূরণ করো। 😊",
    ],
    href: "/signup",
    linkTextEn: "Create Account",
    linkTextBn: "অ্যাকাউন্ট তৈরি",
  },
  {
    id: "password",
    keywords: [
      "forgot password", "reset password", "password problem",
      "forgot my password", "change password",
      "পাসওয়ার্ড", "পাসওয়ার্ড", "পাসওয়ার্ড ভুলে",
      "পাসওয়ার্ড ভুলে গেছি", "পাসওয়ার্ড পরিবর্তন",
    ],
    en: [
      "Check whether the Sign In page offers password recovery. Never share your password or verification codes in this chat.",
    ],
    bn: [
      "Sign In পেজে পাসওয়ার্ড পুনরুদ্ধারের অপশন আছে কি না দেখো। এখানে পাসওয়ার্ড বা verification code শেয়ার কোরো না।",
    ],
    href: "/signin",
    linkTextEn: "Open Sign In",
    linkTextBn: "লগইন পেজ",
  },
  {
    id: "contact",
    keywords: [
      "contact us", "contact", "support", "customer service",
      "help center", "customer support", "complaint",
      "যোগাযোগ", "সাপোর্ট", "কাস্টমার সার্ভিস",
      "অভিযোগ", "যোগাযোগ করতে চাই",
    ],
    en: [
      "For account-specific or booking-related help, check the Contact or Support information listed on the website.",
    ],
    bn: [
      "অ্যাকাউন্ট বা বুকিং নিয়ে নির্দিষ্ট সাহায্যের জন্য ওয়েবসাইটের Contact বা Support তথ্য দেখো।",
    ],
  },
  {
    id: "thanks",
    keywords: [
      "thank you", "thanks", "thank u", "thanks a lot",
      "thank you so much", "many thanks", "much appreciated",
      "ধন্যবাদ", "অনেক ধন্যবাদ", "থ্যাংক ইউ",
      "অসংখ্য ধন্যবাদ", "কৃতজ্ঞ",
    ],
    en: [
      "You're very welcome! 😊 Let me know if there's anything else I can help you with.",
      "Anytime! ❤️ I'm happy to help. Have another question?",
      "Glad I could help! 😊 Feel free to ask me anything about MediCare Connect.",
    ],
    bn: [
      "তোমাকে স্বাগতম! 😊 আর কোনো সাহায্য লাগলে নির্দ্বিধায় বলো।",
      "কোনো ব্যাপার না! ❤️ আর কিছু জানতে চাও?",
      "সাহায্য করতে পেরে ভালো লাগল! 😊 আরও কিছু জানতে চাইলে বলো।",
    ],
  },
  {
    id: "goodbye",
    keywords: [
      "goodbye", "bye", "see you", "talk later", "see ya",
      "take care", "have a nice day", "good night",
      "বিদায়", "আবার কথা হবে", "আল্লাহ হাফেজ",
      "পরে কথা হবে", "ভালো থেকো", "যাই", "এখন যাই",
    ],
    en: [
      "Take care! 👋 Thanks for visiting MediCare Connect. I'm here whenever you need website help.",
      "Goodbye! 😊 Have a great day. Feel free to come back if you need any help.",
    ],
    bn: [
      "ভালো থেকো! 👋 আবার কোনো সাহায্য লাগলে এসো। আল্লাহ হাফেজ!",
      "আল্লাহ হাফেজ! ❤️ সুস্থ থেকো। আবার কোনো প্রশ্ন থাকলে চলে এসো।",
    ],
  },
  {
    id: "emergency",
    keywords: [
      "emergency", "chest pain", "can't breathe",
      "cannot breathe", "difficulty breathing", "trouble breathing",
      "severe bleeding", "heart attack", "stroke symptoms",
      "unconscious", "overdose", "suicidal",
      "জরুরি", "বুকে ব্যথা", "শ্বাসকষ্ট",
      "শ্বাস নিতে পারছি না", "অতিরিক্ত রক্তপাত",
      "হার্ট অ্যাটাক", "স্ট্রোক", "অজ্ঞান",
      "বিষ খেয়েছি", "বিষ খেয়েছি",
    ],
    en: [
      "This may be a medical emergency. Contact your local emergency service or go to the nearest emergency department immediately. Please don't wait for a chatbot response.",
    ],
    bn: [
      "এটি জরুরি চিকিৎসার বিষয় হতে পারে। অবিলম্বে স্থানীয় জরুরি সেবায় যোগাযোগ করো অথবা নিকটস্থ হাসপাতালের জরুরি বিভাগে যাও। চ্যাটবটের উত্তরের জন্য অপেক্ষা কোরো না।",
    ],
  },
  {
    id: "medicalAdvice",
    keywords: [
      "which medicine", "what medicine", "prescription",
      "diagnosis", "treatment", "medicine", "medication",
      "what should i take", "which drug", "dosage",
      "ওষুধ", "ঔষধ", "প্রেসক্রিপশন", "রোগ নির্ণয়",
      "চিকিৎসা", "কোন ওষুধ", "কি ওষুধ",
      "কী ওষুধ", "কতটুকু ওষুধ", "ওষুধ খাব",
    ],
    en: [
      "I can help you find a relevant medical specialist, but I can't diagnose a condition or prescribe medication. A qualified healthcare professional can assess your symptoms and recommend appropriate care.",
    ],
    bn: [
      "আমি উপযুক্ত specialist খুঁজতে সাহায্য করতে পারি, কিন্তু রোগ নির্ণয় বা ওষুধের প্রেসক্রিপশন দিতে পারি না। সঠিক পরামর্শের জন্য একজন যোগ্য চিকিৎসকের সঙ্গে কথা বলো।",
    ],
  },
];

const doctorDirectory = [
  { name: "Dr. Michael Carter", specialization: "Dermatology" },
  { name: "Dr. Jessica Brown", specialization: "Psychiatry" },
  { name: "Dr. James Wilson", specialization: "Cardiology" },
  { name: "Dr. Christopher White", specialization: "ENT Specialist" },
  { name: "Dr. Emily Rodriguez", specialization: "Pediatrics" },
  { name: "Dr. Ava Clark", specialization: "Endocrinology" },
  { name: "Dr. Sarah Thompson", specialization: "Neurology" },
  { name: "Dr. Benjamin Lewis", specialization: "General Physician" },
  { name: "Dr. David Anderson", specialization: "Orthopedics" },
  { name: "Dr. Daniel Harris", specialization: "Urology" },
  { name: "Dr. Olivia Martinez", specialization: "Gynecology" },
  { name: "Dr. Robert Taylor", specialization: "Ophthalmology" },
  { name: "Dr. Sophia Garcia", specialization: "Oncology" },
  { name: "Dr. Asad Khan", specialization: "ENT Specialist" },
  { name: "Dr. Shohid Khan", specialization: "Orthopedics" },
  { name: "Dr. Javed Mahmud", specialization: "Ophthalmology" },
  { name: "Dr. Ashraful Alam", specialization: "General Physician" },
];

const specializationKeywords = [
  {
    name: "General Physician",
    keywords: [
      "general physician", "general doctor",
      "জেনারেল ফিজিশিয়ান", "সাধারণ ডাক্তার",
    ],
  },
  {
    name: "Cardiology",
    keywords: [
      "cardiology", "cardiologist", "heart specialist",
      "heart doctor", "হার্টের ডাক্তার", "হৃদরোগ বিশেষজ্ঞ",
    ],
  },
  {
    name: "Dermatology",
    keywords: [
      "dermatology", "dermatologist", "skin specialist",
      "skin doctor", "চর্মরোগ বিশেষজ্ঞ", "ত্বকের ডাক্তার",
    ],
  },
  {
    name: "Psychiatry",
    keywords: [
      "psychiatry", "psychiatrist", "mental health specialist",
      "মনোরোগ বিশেষজ্ঞ",
    ],
  },
  {
    name: "ENT Specialist",
    keywords: [
      "ent specialist", "ent doctor", "ear nose throat",
      "নাক কান গলা", "নাক কান গলা বিশেষজ্ঞ",
    ],
  },
  {
    name: "Pediatrics",
    keywords: [
      "pediatrics", "pediatrician", "child specialist",
      "baby doctor", "শিশু বিশেষজ্ঞ", "বাচ্চার ডাক্তার",
    ],
  },
  {
    name: "Endocrinology",
    keywords: [
      "endocrinology", "endocrinologist", "hormone specialist",
      "thyroid specialist", "হরমোন বিশেষজ্ঞ",
    ],
  },
  {
    name: "Neurology",
    keywords: [
      "neurology", "neurologist", "nerve specialist",
      "brain specialist", "স্নায়ুরোগ বিশেষজ্ঞ",
    ],
  },
  {
    name: "Orthopedics",
    keywords: [
      "orthopedics", "orthopedic", "bone specialist",
      "joint specialist", "অর্থোপেডিক", "হাড়ের ডাক্তার",
    ],
  },
  {
    name: "Urology",
    keywords: [
      "urology", "urologist", "urinary specialist",
      "মূত্ররোগ বিশেষজ্ঞ",
    ],
  },
  {
    name: "Gynecology",
    keywords: [
      "gynecology", "gynecologist", "women's health specialist",
      "স্ত্রীরোগ বিশেষজ্ঞ",
    ],
  },
  {
    name: "Ophthalmology",
    keywords: [
      "ophthalmology", "ophthalmologist", "eye specialist",
      "eye doctor", "চক্ষু বিশেষজ্ঞ", "চোখের ডাক্তার",
    ],
  },
  {
    name: "Oncology",
    keywords: [
      "oncology", "oncologist", "cancer specialist",
      "ক্যান্সার বিশেষজ্ঞ",
    ],
  },
];

const symptomRules = [
  {
    specialization: "Cardiology",
    keywords: [
      "heart problem", "heart disease", "heart pain",
      "palpitation", "irregular heartbeat",
      "হৃদরোগ", "হার্টের সমস্যা", "বুক ধড়ফড়",
    ],
  },
  {
    specialization: "Dermatology",
    keywords: [
      "skin problem", "skin disease", "skin rash",
      "itching", "acne", "pimple",
      "চর্মরোগ", "ত্বকের সমস্যা", "চুলকানি", "ব্রণ",
    ],
  },
  {
    specialization: "Neurology",
    keywords: [
      "migraine", "frequent headache", "nerve problem",
      "seizure", "numbness",
      "মাইগ্রেন", "বারবার মাথাব্যথা", "স্নায়ুর সমস্যা",
      "খিঁচুনি", "শরীর অবশ",
    ],
  },
  {
    specialization: "Orthopedics",
    keywords: [
      "bone pain", "joint pain", "knee pain",
      "back pain", "fracture",
      "হাড়ের ব্যথা", "জয়েন্টে ব্যথা", "হাঁটু ব্যথা",
      "কোমর ব্যথা", "হাড় ভাঙা",
    ],
  },
  {
    specialization: "ENT Specialist",
    keywords: [
      "ear pain", "ear problem", "nose problem",
      "throat problem", "sinus problem",
      "কানে ব্যথা", "কানের সমস্যা", "নাকের সমস্যা",
      "গলার সমস্যা", "সাইনাস",
    ],
  },
  {
    specialization: "Ophthalmology",
    keywords: [
      "eye problem", "eye pain", "blurry vision",
      "blurred vision", "vision problem", "eyesight",
      "চোখের সমস্যা", "চোখে ব্যথা", "ঝাপসা দেখা",
      "দৃষ্টিশক্তি",
    ],
  },
  {
    specialization: "Gynecology",
    keywords: [
      "period problem", "menstrual problem",
      "pregnancy care", "women's health",
      "মাসিকের সমস্যা", "পিরিয়ডের সমস্যা",
      "গর্ভাবস্থা", "নারীদের স্বাস্থ্য",
    ],
  },
  {
    specialization: "Pediatrics",
    keywords: [
      "child doctor", "baby doctor", "child health",
      "my child", "my baby",
      "শিশুর ডাক্তার", "বাচ্চার ডাক্তার",
      "শিশুর স্বাস্থ্য", "আমার বাচ্চা",
    ],
  },
  {
    specialization: "Psychiatry",
    keywords: [
      "mental health", "anxiety", "depression",
      "panic attack", "sleep problem",
      "মানসিক স্বাস্থ্য", "উদ্বেগ", "বিষণ্নতা",
      "আতঙ্ক", "ঘুমের সমস্যা",
    ],
  },
  {
    specialization: "Endocrinology",
    keywords: [
      "diabetes", "thyroid", "hormone problem",
      "blood sugar",
      "ডায়াবেটিস", "থাইরয়েড", "হরমোনের সমস্যা",
      "রক্তে শর্করা",
    ],
  },
  {
    specialization: "Urology",
    keywords: [
      "urine problem", "urinary problem",
      "kidney stone", "bladder problem",
      "প্রস্রাবের সমস্যা", "কিডনিতে পাথর",
      "মূত্রথলির সমস্যা",
    ],
  },
  {
    specialization: "Oncology",
    keywords: [
      "cancer", "tumor", "oncology",
      "ক্যান্সার", "টিউমার",
    ],
  },
  {
    specialization: "General Physician",
    keywords: [
      "fever", "cold", "flu", "cough",
      "general health", "stomach ache", "stomach pain",
      "জ্বর", "সর্দি", "কাশি", "সাধারণ অসুস্থতা",
      "পেট ব্যথা", "পেটব্যথা",
    ],
  },
];

const banglaPattern = /[\u0980-\u09FF]/;

export function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFC")
    .replace(/[?!.,;:'"()[\]{}।,!?]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getLanguage(text = "") {
  return banglaPattern.test(text) ? "bn" : "en";
}

function getLanguageCommand(message = "") {
  const text = normalizeText(message);

  const banglaCommands = [
    "bangla",
    "bengali",
    "বাংলা",
    "বাংলায়",
    "বাংলায়",
    "বাংলায় বলো",
    "বাংলায় বলো",
    "বাংলায় কথা বলো",
    "বাংলায় কথা বলো",
    "বাংলায় উত্তর দাও",
    "বাংলায় উত্তর দাও",
    "বাংলা ভাষায়",
    "বাংলা ভাষায়",
    "বাংলা ভাষায় বলো",
    "বাংলা ভাষায় বলো",
  ];

  const englishCommands = [
    "english",
    "ইংলিশ",
    "ইংরেজি",
    "ইংরেজিতে",
    "ইংরেজিতে বলো",
    "ইংরেজিতে কথা বলো",
    "ইংরেজিতে উত্তর দাও",
  ];

  if (banglaCommands.includes(text)) return "bn";
  if (englishCommands.includes(text)) return "en";

  return null;
}

const unsupportedLanguages = [
  { names: ["hindi", "হিন্দি", "हिंदी"], label: "Hindi" },
  { names: ["urdu", "উর্দু", "اردو"], label: "Urdu" },
  { names: ["french", "ফ্রেঞ্চ", "ফরাসি", "français"], label: "French" },
  { names: ["spanish", "স্প্যানিশ", "español"], label: "Spanish" },
  { names: ["arabic", "আরবি", "العربية"], label: "Arabic" },
  { names: ["chinese", "চাইনিজ", "চীনা"], label: "Chinese" },
  { names: ["japanese", "জাপানিজ", "জাপানি"], label: "Japanese" },
  { names: ["korean", "কোরিয়ান", "কোরিয়ান"], label: "Korean" },
  { names: ["german", "জার্মান", "deutsch"], label: "German" },
  { names: ["italian", "ইতালিয়ান", "ইতালিয়ান", "italiano"], label: "Italian" },
  { names: ["portuguese", "পর্তুগিজ"], label: "Portuguese" },
  { names: ["russian", "রাশিয়ান", "রুশ"], label: "Russian" },
  { names: ["turkish", "তুর্কি", "তুর্কিশ"], label: "Turkish" },
  { names: ["persian", "ফারসি", "فارسی"], label: "Persian" },
  { names: ["thai", "থাই"], label: "Thai" },
  { names: ["vietnamese", "ভিয়েতনামিজ"], label: "Vietnamese" },
  { names: ["nepali", "নেপালি"], label: "Nepali" },
  { names: ["tamil", "তামিল"], label: "Tamil" },
  { names: ["punjabi", "পাঞ্জাবি"], label: "Punjabi" },
  { names: ["malay", "মালয়", "মালয় ভাষা"], label: "Malay" },
  { names: ["indonesian", "ইন্দোনেশিয়ান"], label: "Indonesian" },
  { names: ["dutch", "ডাচ"], label: "Dutch" },
  { names: ["greek", "গ্রিক"], label: "Greek" },
  { names: ["hebrew", "হিব্রু"], label: "Hebrew" },
];

function getUnsupportedLanguageRequest(message = "") {
  const text = normalizeText(message);

  for (const language of unsupportedLanguages) {
    for (const name of language.names) {
      const normalizedName = normalizeText(name);

      if (text === normalizedName) {
        return language.label;
      }

      const containsLanguage =
        (` ${text} `).includes(` ${normalizedName} `);

      if (!containsLanguage) continue;

      const englishIndicators = [
        "reply in",
        "answer in",
        "speak in",
        "talk in",
        "respond in",
        "write in",
        "chat in",
        "translate to",
        "switch to",
        "change to",
        "use",
        "please speak",
        "can you speak",
        "can you reply",
        "can you answer",
        "i want",
        "i need",
      ];

      const banglaIndicators = [
        "ভাষায়",
        "ভাষায়",
        "ভাষায় বলো",
        "ভাষায় বলো",
        "ভাষায় উত্তর",
        "ভাষায় উত্তর",
        "তে কথা বলো",
        "তে উত্তর দাও",
      ];

      if (
        englishIndicators.some((indicator) => text.includes(indicator)) ||
        banglaIndicators.some((indicator) => text.includes(indicator)) ||
        text.includes("please") ||
        text.includes("দয়া করে") ||
        text.includes("দয়া করে")
      ) {
        return language.label;
      }
    }
  }

  return null;
}

function getPreferredLanguage(
  message = "",
  previousMessages = []
) {
  const command = getLanguageCommand(message);

  if (command) return command;

  for (const item of [...previousMessages].reverse()) {
    if (item.role !== "user") continue;

    const previousCommand = getLanguageCommand(item.text);

    if (previousCommand) return previousCommand;
  }

  return getLanguage(message);
}

function scoreRule(message, keywords = []) {
  const normalizedMessage = normalizeText(message);
  let score = 0;

  for (const keyword of keywords) {
    const normalizedKeyword = normalizeText(keyword);

    if (!normalizedKeyword) continue;

    if (normalizedMessage === normalizedKeyword) {
      score = Math.max(score, 10 + normalizedKeyword.length / 100);
      continue;
    }

    const paddedMessage = ` ${normalizedMessage} `;
    const paddedKeyword = ` ${normalizedKeyword} `;

    if (paddedMessage.includes(paddedKeyword)) {
      score = Math.max(score, 5 + normalizedKeyword.length / 100);
    }
  }

  return score;
}

function pickResponse(responses, message) {
  if (!responses?.length) return "";

  const normalized = normalizeText(message);

  const hash = [...normalized].reduce(
    (total, char) => total + char.charCodeAt(0),
    0
  );

  return responses[hash % responses.length];
}

function findDoctorsBySpecialization(specialization) {
  return doctorDirectory.filter(
    (doctor) =>
      normalizeText(doctor.specialization) ===
      normalizeText(specialization)
  );
}

function findDoctorByName(message) {
  const normalizedMessage = normalizeText(message);

  return doctorDirectory.find((doctor) => {
    const fullName = normalizeText(doctor.name);

    const nameWithoutTitle = normalizeText(
      doctor.name.replace(/^Dr\.?\s*/i, "")
    );

    return (
      normalizedMessage.includes(fullName) ||
      normalizedMessage.includes(nameWithoutTitle)
    );
  });
}

function formatDoctorList(doctors, language) {
  if (!doctors.length) {
    return language === "bn"
      ? "এই specialization-এর কোনো ডাক্তার আমার তালিকায় নেই। Find Doctor পেজে গিয়ে তালিকাটি দেখতে পারো।"
      : "I couldn't find a doctor in this specialization in my current list. Please check the Find Doctor page.";
  }

  const list = doctors
    .map(
      (doctor, index) =>
        `${index + 1}. ${doctor.name} — ${doctor.specialization}`
    )
    .join("\n");

  return language === "bn"
    ? `ডাক্তারদের তালিকা:\n\n${list}\n\nডাক্তারের প্রোফাইল দেখে বিস্তারিত জানতে পারো।`
    : `Here is the doctor list:\n\n${list}\n\nYou can review their profiles for more information.`;
}

function findSpecialization(message) {
  const normalized = normalizeText(message);

  return specializationKeywords
    .map((item) => ({
      item,
      score: scoreRule(message, item.keywords),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.item;
}

function reply(text, href = null, linkText = null) {
  return { text, href, linkText };
}

const positiveAcknowledgements = new Set([
  "ok",
  "okay",
  "okey",
  "k",
  "kk",
  "alright",
  "all right",
  "sure",
  "fine",
  "got it",
  "understood",
  "sounds good",
  "perfect",
  "great",
  "cool",
  "awesome",
  "nice",
  "good",
  "yes",
  "yeah",
  "yep",
  "yup",
  "correct",
  "exactly",
  "i see",
  "i understand",
  "thanks",
  "thank you",
  "হ্যাঁ",
  "জি",
  "জ্বি",
  "হুম",
  "ঠিক আছে",
  "আচ্ছা",
  "বেশ",
  "বুঝেছি",
  "বুঝলাম",
  "ঠিক",
  "হ্যাঁ ঠিক আছে",
  "হ্যাঁ বুঝেছি",
  "ঠিক বলেছ",
  "ধন্যবাদ",
]);

const negativeAcknowledgements = new Set([
  "no",
  "nope",
  "nah",
  "not now",
  "no thanks",
  "no thank you",
  "না",
  "না ধন্যবাদ",
  "এখন না",
  "লাগবে না",
  "দরকার নেই",
]);

function isDoctorListRequest(message) {
  const text = normalizeText(message);

  const patterns = [
    /\b(show|give|display|list|see|view)\b.*\b(all )?doctors\b/,
    /\b(all|list of) doctors\b/,
    /\bdoctor list\b/,
    /\bwho are the doctors\b/,
    /সব ডাক্তার/,
    /সকল ডাক্তার/,
    /ডাক্তারদের তালিকা/,
    /সব ডাক্তারের তালিকা/,
    /সকল ডাক্তারের তালিকা/,
  ];

  return patterns.some((pattern) => pattern.test(text));
}

export function getBotReply(
  message,
  previousMessages = [],
  preferredLanguage = null
) {
  const normalizedMessage = normalizeText(message);

  const commandLanguage = getLanguageCommand(message);

  const language =
    commandLanguage ||
    preferredLanguage ||
    getPreferredLanguage(message, previousMessages);

  // Ignore empty input safely.
  if (!normalizedMessage) {
    return reply(
      language === "bn"
        ? "তুমি কী জানতে চাও? 😊 তোমার প্রশ্নটি লিখে পাঠাও।"
        : "What would you like to know? 😊 Type your question and I'll try to help."
    );
  }

  // Switch the conversation language.
  if (commandLanguage) {
    return reply(
      commandLanguage === "bn"
        ? "ঠিক আছে! 😊 এখন থেকে এই চ্যাটে বাংলায় উত্তর দেব। ডাক্তার, specialization বা অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে পারো।"
        : "Of course! 😊 I'll reply in English from now on in this chat. You can ask about doctors, specializations, and appointments."
    );
  }

  // Unsupported language requests.
  const unsupportedLanguage =
    getUnsupportedLanguageRequest(message);

  if (unsupportedLanguage) {
    return reply(
      language === "bn"
        ? `দুঃখিত! 😊 MediCare Assistant বর্তমানে ${unsupportedLanguage} ভাষা সাপোর্ট করে না। এই চ্যাটবট শুধু বাংলা ও ইংরেজিতে উত্তর দিতে পারে। অনুগ্রহ করে বাংলা অথবা ইংরেজিতে প্রশ্ন করো।`
        : `Sorry! 😊 MediCare Assistant doesn't support ${unsupportedLanguage} at the moment. This chatbot can only reply in English and Bangla. Please ask your question in English or Bangla.`
    );
  }

  // Emergency detection must run before ordinary matching.
  const emergencyRule = faqRules.find(
    (rule) => rule.id === "emergency"
  );

  if (scoreRule(message, emergencyRule.keywords) > 0) {
    return reply(pickResponse(emergencyRule[language], message));
  }

  // Medical advice boundary.
  const medicalRule = faqRules.find(
    (rule) => rule.id === "medicalAdvice"
  );

  if (scoreRule(message, medicalRule.keywords) > 0) {
    return reply(pickResponse(medicalRule[language], message));
  }

  // Context from the most recent assistant response.
  const lastBotMessage = [...previousMessages]
    .reverse()
    .find((item) => item.role === "assistant");

  // Positive acknowledgement: OK, okay, sure, got it, etc.
  if (positiveAcknowledgements.has(normalizedMessage)) {
    if (lastBotMessage?.href) {
      return reply(
        language === "bn"
          ? "ঠিক আছে! 😊 নিচের লিংকে চাপ দিয়ে পেজটি খুলতে পারো।"
          : "Sure! 😊 You can open the page using the link below.",
        lastBotMessage.href,
        lastBotMessage.linkText ||
          (language === "bn" ? "পেজটি খুলুন" : "Open Page")
      );
    }

    return reply(
      language === "bn"
        ? "ঠিক আছে! 😊 আমি সাহায্য করতে প্রস্তুত। ডাক্তার খোঁজা, specialization, অ্যাপয়েন্টমেন্ট বা অন্য কোনো বিষয় জানতে চাইলে বলো।"
        : "Alright! 😊 I'm here to help. You can ask me about finding doctors, specializations, appointments, or anything about MediCare Connect."
    );
  }

  // Negative acknowledgement.
  if (negativeAcknowledgements.has(normalizedMessage)) {
    return reply(
      language === "bn"
        ? "ঠিক আছে, কোনো সমস্যা নেই! 😊 অন্য কিছু জানতে চাইলে আমাকে বলো।"
        : "No problem at all! 😊 Let me know if there's anything else I can help you with."
    );
  }

  // Follow-up asking to open the previous page.
  const openPagePhrases = [
    "open it",
    "open the page",
    "go there",
    "take me there",
    "show me",
    "ওপেন করো",
    "পেজটি খোলো",
    "সেখানে যাও",
    "দেখাও",
  ];

  if (
    lastBotMessage?.href &&
    openPagePhrases.some((phrase) =>
      normalizedMessage.includes(normalizeText(phrase))
    )
  ) {
    return reply(
      language === "bn"
        ? "অবশ্যই! নিচের লিংকে চাপ দিয়ে পেজটি খুলতে পারো। 😊"
        : "Of course! Click the link below to open the page. 😊",
      lastBotMessage.href,
      lastBotMessage.linkText ||
        (language === "bn" ? "পেজটি খুলুন" : "Open Page")
    );
  }

  // Explicit requests to list all doctors.
  if (isDoctorListRequest(message)) {
    return reply(
      formatDoctorList(doctorDirectory, language),
      "/find-doctor",
      language === "bn" ? "ডাক্তার খুঁজুন" : "Find a Doctor"
    );
  }

  // Match a specific doctor by name.
  const namedDoctor = findDoctorByName(message);

  if (namedDoctor) {
    return reply(
      language === "bn"
        ? `${namedDoctor.name} আমাদের তালিকায় ${namedDoctor.specialization} specialist হিসেবে আছেন। তাঁর প্রোফাইলে থাকা তথ্য দেখে বিস্তারিত জানতে পারো।`
        : `${namedDoctor.name} is listed as a ${namedDoctor.specialization} specialist. You can review their profile for more information.`,
      "/find-doctor",
      language === "bn"
        ? "ডাক্তারের প্রোফাইল দেখুন"
        : "View Doctor Profiles"
    );
  }

  // Match symptoms to a possible specialty.
  const matchedSymptom = symptomRules
    .map((rule) => ({
      rule,
      score: scoreRule(message, rule.keywords),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.rule;

  if (matchedSymptom) {
    const doctors = findDoctorsBySpecialization(
      matchedSymptom.specialization
    );

    const doctorNames = doctors.length
      ? doctors.map((doctor) => doctor.name).join(", ")
      : language === "bn"
        ? "এই মুহূর্তে তালিকায় কোনো ডাক্তার পাওয়া যায়নি।"
        : "No doctors in this specialty were found in the current directory.";

    return reply(
      language === "bn"
        ? `তোমার বলা সমস্যার জন্য ${matchedSymptom.specialization} specialist-এর পরামর্শ নেওয়া উপযুক্ত হতে পারে। আমাদের তালিকায়: ${doctorNames}।\n\nএটি রোগ নির্ণয় নয়। উপসর্গ গুরুতর হলে, হঠাৎ শুরু হলে বা বাড়তে থাকলে দ্রুত চিকিৎসা নাও।`
        : `A ${matchedSymptom.specialization} specialist may be an appropriate starting point for the concern you described. Doctors in our list: ${doctorNames}.\n\nThis is not a diagnosis. Seek medical care promptly if symptoms are severe, sudden, or worsening.`,
      "/find-doctor",
      language === "bn" ? "ডাক্তার খুঁজুন" : "Find a Doctor"
    );
  }

  // Match a requested specialization.
  const matchedSpecialization = findSpecialization(message);

  if (matchedSpecialization) {
    return reply(
      formatDoctorList(
        findDoctorsBySpecialization(matchedSpecialization.name),
        language
      ),
      "/find-doctor",
      language === "bn" ? "ডাক্তার খুঁজুন" : "Find a Doctor"
    );
  }

  // FAQ matching.
  const matchedRule = faqRules
    .filter(
      (rule) =>
        !["emergency", "medicalAdvice"].includes(rule.id)
    )
    .map((rule) => ({
      rule,
      score: scoreRule(message, rule.keywords),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.rule;

  if (matchedRule) {
    return reply(
      pickResponse(matchedRule[language], message),
      matchedRule.href || null,
      language === "bn"
        ? matchedRule.linkTextBn || null
        : matchedRule.linkTextEn || null
    );
  }

  // Unknown question fallback.
  return reply(
    language === "bn"
      ? "দুঃখিত, এই প্রশ্নের নির্ভরযোগ্য উত্তর আমার কাছে নেই। 😊 তুমি কি কোনো নির্দিষ্ট ডাক্তার, specialization, উপসর্গ, অ্যাপয়েন্টমেন্ট বা ওয়েবসাইট সম্পর্কে জানতে চাও?"
      : "Sorry, I don't have a reliable answer for that yet. 😊 Are you asking about a particular doctor, specialization, symptoms, appointments, or the website?"
  );
}

export const quickQuestions = [
  {
    label: "Find a doctor",
    message: "Show me the doctor list",
  },
  {
    label: "Heart specialist",
    message: "Who is the heart specialist?",
  },
  {
    label: "Eye doctor",
    message: "Who is the eye specialist?",
  },
  {
    label: "Appointment",
    message: "How can I book an appointment?",
  },
  {
    label: "Login help",
    message: "How can I sign in?",
  },
  {
    label: "বাংলা",
    message: "বাংলা",
  },
];
