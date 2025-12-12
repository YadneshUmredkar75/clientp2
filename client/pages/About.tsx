import Layout from "@/components/Layout";
import { Users, Home, MapPin, Calendar, Building2, Target, Mail, Phone } from "lucide-react";

export default function About() {
  const villageStats = [
    { label: "एकूण लोकसंख्या", value: "१,६८७", icon: Users },
    { label: "एकूण घरे", value: "३५४", icon: Home },
    { label: "क्षेत्रफळ", value: "५८० हेक्टर", icon: MapPin },
    { label: "स्थापना वर्ष", value: "१९६२", icon: Calendar },
    { label: "वार्ड संख्या", value: "०७", icon: Building2 },
    { label: "एकूण मतदार", value: "६,८४४", icon: Target },
  ];

  const voterStats = [
    { label: "पुरुष मतदार", value: "३,४९०" },
    { label: "महिला मतदार", value: "३,३५४" },
  ];

  const contactInfo = [
    { label: "ईमेल", value: "gpkanholibara@gmail.com", icon: Mail },
    { label: "कार्यालय दूरध्वनी", value: "०२१६३-२९५५७६", icon: Phone },
    { label: "पिन कोड", value: "४४१११०", icon: MapPin },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-2">
              परिचय
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-maroon-dark mb-4">
              कान्होलीबारा ग्रामपंचायत
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              हिंगणा तालुका, नागपूर जिल्हा, महाराष्ट्र राज्य
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl p-8 md:p-12 border-l-8 border-gold shadow-xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-maroon-dark mb-6">
              ग्रामपंचायत परिचय
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>कान्होलीबारा ग्रामपंचायत</strong> ही महाराष्ट्र राज्यातील नागपूर जिल्ह्यातील 
                हिंगणा तालुक्यातील एक सुंदर व विकासशील गाव आहे. आमचे गाव संस्कृती, 
                परंपरा आणि आधुनिक विकास यांचा उत्तम मिलाफ साधणारे आहे.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                ग्रामपंचायत १९६२ साली स्थापन झाल्यापासून ग्रामीण विकास कार्यात अग्रेसर 
                भूमिका बजावत आहे. आम्ही शिक्षण, आरोग्य, स्वच्छता, पाणीपुरवठा, 
                कृषी विकास, महिला सशक्तीकरण आणि सामाजिक कल्याण योजनांवर भर देत 
                समाजाचा सर्वांगीण विकास साधण्यासाठी कटिबद्ध आहोत.
              </p>

              <div className="mt-8 p-6 bg-gradient-to-r from-maroon-light/10 to-gold/10 rounded-lg border border-gold/30">
                <h4 className="text-xl font-bold text-maroon-dark mb-4">सध्याची नेतृत्व</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">सरपंच:</p>
                    <p className="text-lg text-maroon-dark font-bold">रुपेश सिताराम जाधव</p>
                    <p className="text-sm text-gray-600">मोबाईल: ८३०८९८७९०७</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">उपसरपंच:</p>
                    <p className="text-lg text-maroon-dark font-bold">किशोर वसंतराव जाधव</p>
                    <p className="text-sm text-gray-600">पिता: वासंत किसान उमाटे</p>
                    <p className="text-sm text-gray-600">मोबाईल: ९३५९९८७५४२</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-maroon-light to-maroon-dark text-white rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">दृष्टिकोन</h4>
              <p className="leading-relaxed">
                एक सुंदर, स्वच्छ, विकसित आणि समृद्ध गाव तयार करणे जिथे प्रत्येक 
                नागरिकास आधुनिक सुविधा, शिक्षण, आरोग्य सेवा आणि रोजगाराच्या 
                संधी उपलब्ध होतील. "स्वच्छ भारत, सुंदर भारत" या राष्ट्रीय संकल्पनेचा 
                भाग बनून गावाचा सर्वांगीण विकास साधणे.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold to-amber-600 text-white rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">मिशन</h4>
              <p className="leading-relaxed">
                ग्रामीण विकास कार्यक्रमांची प्रभावी अंमलबजावणी करून गावातील प्रत्येक 
                घटकाचा विकास साधणे. सर्व नागरिकांना मूलभूत सुविधा पुरवणे, 
                महिला सक्षमीकरण, युवक रोजगार, शेती आधुनिकीकरण आणि पर्यावरण 
                संवर्धन यावर भर देत गावाचा विकास गतीने पुढे नेणे.
              </p>
            </div>
          </div>

          {/* Village Statistics */}
          <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-300 shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-maroon-dark mb-8 text-center">
              ग्राम सांख्यिकी
            </h3>
            
            {/* Main Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
              {villageStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon-light to-maroon-dark flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-maroon-dark mb-2">{stat.value}</div>
                  <p className="text-gray-700 font-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Voter Statistics */}
            <div className="bg-gradient-to-r from-cream to-amber-50 rounded-xl p-8 border border-amber-200">
              <h4 className="text-xl font-bold text-maroon-dark mb-6 text-center">
                मतदार यादी सांख्यिकी
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-maroon-dark mb-2">६,८४४</div>
                  <p className="text-gray-700 font-medium">एकूण मतदार</p>
                </div>
                {voterStats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-maroon-dark mb-2">{stat.value}</div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-amber-300 text-center">
                <p className="text-gray-600 text-sm">
                  विधानसभा क्षेत्र: ६४ | ग्राम कोड: ५५५६०१
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-maroon-light/10 to-gold/10 rounded-xl p-8 border border-maroon-light/30">
            <h3 className="text-2xl font-bold text-maroon-dark mb-8 text-center">
              संपर्क माहिती
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-maroon-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="font-bold text-maroon-dark text-lg">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Address Section */}
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-maroon-light/20 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-maroon-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-maroon-dark text-xl mb-3">पत्ता</h4>
                  <p className="text-gray-700 leading-relaxed">
                    ग्रामपंचायत कान्होलीबारा,<br />
                    ता. हिंगणा, जि. नागपूर,<br />
                    महाराष्ट्र राज्य - ४४१११०
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>कार्यालयीन वेळ: सोम - शनि, सकाळ १०:०० - संध्याकाळ ६:००</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/20 to-amber-100 px-6 py-4 rounded-full">
              <Calendar className="w-6 h-6 text-amber-700" />
              <span className="text-amber-800 font-semibold">
                १९६२ सालापासून ग्रामसेवेत अग्रेसर
              </span>
            </div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              कान्होलीबारा ग्रामपंचायत गेल्या अनेक दशकांपासून ग्रामीण विकासाचे कार्य 
              सातत्याने करत आहे. आमच्या गावाने शिक्षण, स्वच्छता, आरोग्य व 
              कृषीक्षेत्रात उल्लेखनीय प्रगती केली आहे.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}