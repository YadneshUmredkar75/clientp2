import React from "react";
import Layout from "@/components/Layout";
import { Calendar, CheckCircle, FileText, Users, Home, Droplet, Heart, Flame, Leaf, Phone, Mail, User, MapPin, Clock } from "lucide-react";

const schemes = [
  {
    id: 1,
    title: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना (MGNREGA)",
    tag: "रोजगार हमी",
    tagColor: "bg-green-100 text-green-800",
    desc: "कान्होलीबारा गावातील प्रत्येक कुटुंबाला वर्षातून १०० दिवस हमखास रोजगार उपलब्ध करून देणारी योजना.",
    benefit: "१०० दिवस हमखास काम + मजुरी थेट बँक खात्यात जमा",
    eligibility: "कान्होलीबारा गावातील १८ वर्षावरील प्रत्येक व्यक्ती",
    documents: "आधार कार्ड, ओळखपत्र, बँक पासबुक, २ फोटो",
    applyAt: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    icon: Users,
  },
  {
    id: 2,
    title: "प्रधानमंत्री आवास योजना - ग्रामीण (PMAY-G)",
    tag: "घरकुल योजना",
    tagColor: "bg-blue-100 text-blue-800",
    desc: "कच्चे घर असलेल्या कुटुंबांना स्वतःचे पक्के घर बांधण्यासाठी अर्थसहाय्य.",
    benefit: "₹१,२०,००० + ₹१२,००० शौचालय अनुदान",
    eligibility: "SECC 2011 यादीतील पात्र कुटुंब (कान्होलीबारा)",
    documents: "आधार कार्ड, जमीन दस्तऐवज, बँक पासबुक, फोटो",
    applyAt: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    icon: Home,
  },
  {
    id: 3,
    title: "जल जीवन मिशन - हर घर जल",
    tag: "पाणी पुरवठा",
    tagColor: "bg-cyan-100 text-cyan-800",
    desc: "कान्होलीबारा गावातील प्रत्येक घरात नळाद्वारे स्वच्छ पिण्याचे पाणी पोहोचवणे.",
    benefit: "घरात नळ जोडणी + नियमित पाणी पुरवठा",
    eligibility: "कान्होलीबारा गावातील सर्व ग्रामस्थ",
    documents: "आधार कार्ड, घर मालकी दस्तऐवज, फोटो",
    applyAt: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    icon: Droplet,
  },
  {
    id: 4,
    title: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
    tag: "आरोग्य विमा",
    tagColor: "bg-red-100 text-red-800",
    desc: "कान्होलीबारा गावातील पात्र कुटुंबांना दरवर्षी ₹५ लाखांपर्यंत मोफत उपचार सुविधा.",
    benefit: "५ लाखांपर्यंत मोफत हॉस्पिटलायझेशन",
    eligibility: "कान्होलीबारा गावातील पात्र कुटुंब",
    documents: "आधार कार्ड, रेशन कार्ड, फोटो",
    applyAt: "ग्रामसेवक कार्यालय, कान्होलीबारा",
    icon: Heart,
  },
  {
    id: 5,
    title: "उज्ज्वला योजना",
    tag: "गॅस जोडणी",
    tagColor: "bg-orange-100 text-orange-800",
    desc: "कान्होलीबारा गावातील BPL महिलांना मोफत LPG गॅस जोडणी व सबसिडी.",
    benefit: "मोफत गॅस सिलेंडर + स्टोव्ह + सुरक्षा साहित्य",
    eligibility: "कान्होलीबारा गावातील BPL यादीतील महिला",
    documents: "आधार कार्ड, BPL कार्ड, फोटो, ओळखपत्र",
    applyAt: "ग्रामसेवक कार्यालय, कान्होलीबारा",
    icon: Flame,
  },
  {
    id: 6,
    title: "शेतकरी सम्मान निधी (PM-KISAN)",
    tag: "शेतकरी योजना",
    tagColor: "bg-lime-100 text-lime-800",
    desc: "कान्होलीबारा गावातील लहान व अल्पभूधारक शेतकऱ्यांना दरवर्षी ₹६,००० अर्थसहाय्य.",
    benefit: "दर ४ महिन्याला ₹२००० थेट बँक खात्यात",
    eligibility: "५ हेक्टरपर्यंत जमीन असलेले कान्होलीबारा शेतकरी",
    documents: "आधार कार्ड, ७/१२, बँक पासबुक, फोटो",
    applyAt: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    icon: Leaf,
  },
  {
    id: 7,
    title: "मुख्यमंत्री मजुरी योजना",
    tag: "राज्य योजना",
    tagColor: "bg-purple-100 text-purple-800",
    desc: "महाराष्ट्र राज्यातील बेरोजगार युवकांना कौशल्य प्रशिक्षण व रोजगार.",
    benefit: "प्रशिक्षण + रोजगार मेळावा + मार्गदर्शन",
    eligibility: "१८-४० वर्ष वयोगटातील कान्होलीबारा युवक",
    documents: "आधार कार्ड, १०वी पास पत्र, फोटो",
    applyAt: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    icon: Users,
  },
  {
    id: 8,
    title: "संत गाडगेबाबा ग्राम स्वच्छता अभियान",
    tag: "स्वच्छता योजना",
    tagColor: "bg-teal-100 text-teal-800",
    desc: "कान्होलीबारा गावातील स्वच्छता सुविधा व कचरा व्यवस्थापन योजना.",
    benefit: "शौचालय निर्माण, कचरा कंटेनर, स्वच्छता किट",
    eligibility: "कान्होलीबारा गावातील सर्व कुटुंबे",
    documents: "आधार कार्ड, घर मालकी दस्तऐवज",
    applyAt: "ग्रामपंचायत कार्यालय, कान्होलीबारा",
    icon: Calendar,
  },
];

export default function Schemes() {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-cream to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider text-sm md:text-base">
              योजना
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-maroon-dark mt-3">
              कान्होलीबारा ग्रामपंचायत योजना
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              कान्होलीबारा गावातील नागरिकांसाठी चालू असलेल्या केंद्र, राज्य व ग्रामपंचायत योजनांची सविस्तर माहिती
            </p>
          </div>

          {/* Important Notice */}
          <div className="mb-12 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">महत्वाची सूचना</h3>
                <p className="text-gray-700">
                  सर्व योजनांचे अर्ज केवळ <strong>ग्रामपंचायत कार्यालय, कान्होलीबारा</strong> येथेच स्वीकारले जातात. 
                  कोणत्याही मध्यस्थाची गरज नाही. थेट कार्यालयात संपर्क करा.
                </p>
              </div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Tag */}
                <div className={`${scheme.tagColor} font-bold text-sm px-6 py-3 text-center`}>
                  {scheme.tag}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-gradient-to-br from-maroon-light to-maroon-dark p-3 rounded-full">
                      <scheme.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-maroon-dark leading-tight">
                      {scheme.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {scheme.desc}
                  </p>

                  {/* Benefits & Eligibility */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-maroon-dark text-sm">लाभ:</p>
                        <p className="text-gray-600 text-sm mt-1">{scheme.benefit}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <User className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-maroon-dark text-sm">पात्रता:</p>
                        <p className="text-gray-600 text-sm mt-1">{scheme.eligibility}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-maroon-dark text-sm">कागदपत्रे:</p>
                        <p className="text-gray-600 text-sm mt-1">{scheme.documents}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-maroon-dark text-sm">अर्ज सादर करा:</p>
                        <p className="text-gray-600 text-sm mt-1">{scheme.applyAt}</p>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button className="w-full bg-gradient-to-r from-maroon-light to-maroon-dark hover:from-maroon-dark hover:to-maroon-light text-white font-bold py-3 rounded-xl transition-all duration-300 text-sm">
                    योजनेसाठी अर्ज करा
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-20 bg-gradient-to-r from-maroon-light to-maroon-dark text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              योजना संपर्क माहिती
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Office Contact */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">कार्यालय दूरध्वनी</h4>
                    <p className="text-gold font-bold text-xl">०२१६३-२९५५७६</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  योजना संबंधित प्रश्नांसाठी दररोज कार्यालयीन वेळेत संपर्क करा
                </p>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">ईमेल</h4>
                    <p className="text-gold font-bold text-sm break-all">gpkanholibara@gmail.com</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  योजना संबंधित कागदपत्रे व प्रश्न ईमेलद्वारे पाठवू शकता
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">कार्यालय वेळ</h4>
                    <p className="text-gold font-bold">
                      सोम - शनि<br />
                      १०:०० - ६:००
                    </p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  रविवार सुट्टी. अर्ज फक्त कार्यालयीन वेळेतच स्वीकारले जातील
                </p>
              </div>
            </div>

            {/* Sarpanch Contact */}
            <div className="mt-8 bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold mb-2">योजना मंजुरीसाठी संपर्क</h4>
                  <p className="text-white/90">
                    सरपंच: <strong className="text-gold">रुपेश सिताराम जाधव</strong><br />
                    मोबाईल: <strong className="text-gold">८३०८९८७९०७</strong>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/80">
                    उपसरपंच: <strong>किशोर वसंतराव जाधव</strong><br />
                    मोबाईल: <strong>९३५९९८७५४२</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gradient-to-r from-gold/10 to-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-maroon-dark mb-6 text-center">
              महत्वाचे सूचना
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">सर्व योजनांचे अर्ज विनामूल्य स्वीकारले जातात</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">अर्जासोबत मूळ कागदपत्रे आणि फोटोकॉपी सादर करावी</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">अर्जाची स्थिती १५ दिवसांत मिळते</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">लाभ थेट बँक खात्यात जमा केले जातात</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// AlertTriangle component definition
const AlertTriangle = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/>
    <path d="M12 17h.01"/>
  </svg>
);