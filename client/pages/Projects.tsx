import React from "react";
import Layout from "@/components/Layout";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Home, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  Mail 
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "गावसभा आयोजन",
    tag: "महत्त्वाचे",
    tagColor: "bg-red-100 text-red-800",
    desc: "मासिक गावसभा - सर्व ग्रामस्थांना उपस्थित राहून महत्त्वाच्या ग्रामविकास विषयांवर चर्चा करण्यास आमंत्रित आहे.",
    time: "सकाळी १०:०० वाजता",
    date: "२५ डिसेंबर २०२४",
    location: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    status: "upcoming",
    icon: Users,
  },
  {
    id: 2,
    title: "स्वच्छता मोहीम",
    tag: "चालू",
    tagColor: "bg-blue-100 text-blue-800",
    desc: "गावातील कचरा व्यवस्थापन सुधारण्यासाठी दररोज कचरा गोळा करण्याची सेवा सुरू करण्यात आली आहे.",
    time: "दररोज सकाळी ०७:३० ते १०:००",
    date: "१ डिसेंबर २०२४ पासून",
    location: "संपूर्ण कान्होलीबारा गाव",
    status: "ongoing",
    icon: Home,
  },
  {
    id: 3,
    title: "रस्ता दुरुस्ती टेंडर",
    tag: "सूचना",
    tagColor: "bg-amber-100 text-amber-800",
    desc: "ग्रामपंचायतीतर्फे गावातील मुख्य रस्त्यांच्या दुरुस्तीसाठी टेंडर जाहीर केला आहे.",
    date: "अर्ज तारीख: १५ जानेवारी २०२५",
    deadline: "अंतिम तारीख: ३१ जानेवारी २०२५",
    location: "ग्रामपंचायत कार्यालय",
    status: "notice",
    icon: AlertTriangle,
  },
  {
    id: 4,
    title: "नवीन पाणी टाकी बांधकाम",
    tag: "प्रकल्प",
    tagColor: "bg-green-100 text-green-800",
    desc: "पिण्याच्या पाण्याची समस्या सोडवण्यासाठी ५ लाख लीटर क्षमतेची नवीन ओव्हरहेड टाकीचे काम सुरू आहे.",
    date: "जानेवारी २०२५ पासून",
    duration: "६ महिने",
    budget: "बजेट: २५ लाख रुपये",
    location: "गावच्या उंच भागात",
    status: "ongoing",
    icon: Target,
  },
  {
    id: 5,
    title: "सौर ऊर्जा दिवे प्रकल्प",
    tag: "पूर्ण",
    tagColor: "bg-purple-100 text-purple-800",
    desc: "गावातील मुख्य रस्त्यांवर १०० सौर ऊर्जेचे दिवे बसवण्याचा प्रकल्प यशस्वीरित्या पूर्ण झाला आहे.",
    date: "पूर्ण तारीख: ३० नोव्हेंबर २०२४",
    installed: "बसवलेले दिवे: १००",
    location: "संपूर्ण गावातील मुख्य रस्ते",
    status: "completed",
    icon: CheckCircle,
  },
  {
    id: 6,
    title: "अंगणवाडी सुधारणा प्रकल्प",
    tag: "प्रकल्प",
    tagColor: "bg-cyan-100 text-cyan-800",
    desc: "बालवाडीच्या इमारतीची दुरुस्ती, रंगरंगोटी व आधुनिक सुविधांची स्थापना.",
    date: "फेब्रुवारी २०२५",
    duration: "३ महिने",
    location: "कान्होलीबारा अंगणवाडी",
    status: "upcoming",
    icon: Home,
  },
  {
    id: 7,
    title: "डिजिटल ग्रामपंचायत",
    tag: "नवीन",
    tagColor: "bg-indigo-100 text-indigo-800",
    desc: "ग्रामपंचायत सेवा ऑनलाईन करण्याचा प्रकल्प - ऑनलाईन फॉर्म, ई-नोंदणी, डिजिटल बिलिंग.",
    date: "मार्च २०२५ पासून",
    duration: "१ वर्ष",
    location: "ग्रामपंचायत कार्यालय",
    status: "upcoming",
    icon: Target,
  },
  {
    id: 8,
    title: "नाला दुरुस्ती काम",
    tag: "चालू",
    tagColor: "bg-blue-100 text-blue-800",
    desc: "पावसाळ्यासाठी नाल्यांची सफाई व दुरुस्ती काम दरवर्षीच्या तयारीप्रमाणे सुरू आहे.",
    date: "जानेवारी - मार्च २०२५",
    budget: "बजेट: ८ लाख रुपये",
    location: "गावातील सर्व नाले",
    status: "ongoing",
    icon: AlertTriangle,
  },
];

export default function Projects() {
  const statusCounts = {
    all: projects.length,
    ongoing: projects.filter(p => p.status === "ongoing").length,
    completed: projects.filter(p => p.status === "completed").length,
    upcoming: projects.filter(p => p.status === "upcoming").length,
  };

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-cream to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-semibold uppercase tracking-wider text-sm md:text-base">
              विकास प्रकल्प
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-maroon-dark mt-3">
              कान्होलीबारा ग्रामपंचायत प्रकल्प
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              आमचे चालू, पूर्ण झालेले व भविष्यातील विकास प्रकल्पांची संपूर्ण माहिती
            </p>
          </div>

          {/* Statistics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-maroon-dark">{statusCounts.all}</div>
              <p className="text-gray-600 mt-2">एकूण प्रकल्प</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600">{statusCounts.ongoing}</div>
              <p className="text-gray-600 mt-2">चालू प्रकल्प</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600">{statusCounts.completed}</div>
              <p className="text-gray-600 mt-2">पूर्ण प्रकल्प</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-amber-600">{statusCounts.upcoming}</div>
              <p className="text-gray-600 mt-2">भविष्यातील प्रकल्प</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Tag Badge */}
                  <div className={`${project.tagColor} font-bold text-sm px-6 py-3 flex items-center justify-between`}>
                    <span>{project.tag}</span>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-maroon-dark mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {project.desc}
                    </p>

                    {/* Details with Icons */}
                    <div className="space-y-3">
                      {project.time && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm font-medium">{project.time}</span>
                        </div>
                      )}
                      {project.date && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm font-medium">{project.date}</span>
                        </div>
                      )}
                      {project.deadline && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{project.deadline}</span>
                        </div>
                      )}
                      {project.duration && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-sm font-medium">कालावधी: {project.duration}</span>
                        </div>
                      )}
                      {project.budget && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <Target className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{project.budget}</span>
                        </div>
                      )}
                      {project.installed && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{project.installed}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm font-medium">{project.location}</span>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">स्थिती:</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            project.status === 'ongoing' ? 'bg-blue-500' :
                            project.status === 'completed' ? 'bg-green-500' :
                            project.status === 'upcoming' ? 'bg-amber-500' : 'bg-gray-500'
                          }`}></div>
                          <span className="text-xs font-medium">
                            {project.status === 'ongoing' ? 'चालू' :
                             project.status === 'completed' ? 'पूर्ण' :
                             project.status === 'upcoming' ? 'भविष्यातील' : 'सूचना'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Information for Project Inquiries */}
          <div className="mt-20 bg-gradient-to-r from-maroon-light to-maroon-dark text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  प्रकल्प संबंधित माहिती
                </h3>
                <p className="text-white/90 mb-6">
                  कोणत्याही प्रकल्पाबद्दल अधिक माहिती, सूचना किंवा टेंडर संबंधित प्रश्न असल्यास 
                  ग्रामपंचायत कार्यालयात संपर्क करा.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold" />
                    <span>दूरध्वनी: ०२१६३-२९५५७६</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold" />
                    <span>ईमेल: gpkanholibara@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <span>कार्यालय वेळ: सोम-शनि, सकाळ १०:०० - संध्याकाळ ६:००</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <p className="text-gold font-bold text-lg mb-2">सरपंच</p>
                  <p className="font-bold text-xl mb-1">रुपेश सिताराम जाधव</p>
                  <p className="text-white/90">मोबाईल: ८३०८९८७९०७</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80">प्रकल्प मंजुरीसाठी संपर्क</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note for Future Projects */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-gold/10 to-amber-50 rounded-2xl px-8 py-6 border border-amber-200">
              <h3 className="text-xl font-bold text-maroon-dark mb-2">
                अधिक प्रकल्प लवकरच जोडले जातील
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                नवीन विकासकामे, योजना व सरकारी प्रकल्पांची माहिती नियमितपणे येथे अद्यतनित केली जाईल.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>अद्यतन तारीख: डिसेंबर २०२४</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}