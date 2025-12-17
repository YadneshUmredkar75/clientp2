import Layout from "@/components/Layout";
import { ChevronRight, MapPin, Users, Building2, Calendar, Phone, Mail, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-maroon-light to-maroon-dark text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="text-gold font-semibold mb-3 uppercase tracking-wider text-sm">
                कुदळापूर ग्रामपंचायत
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                स्वच्छ व सुंदर गावाकडे...
              </h1>
              <p className="text-gray-100 mb-8 text-lg leading-relaxed">
                आम्ही सर्व नागरिकांना चांगले रस्ते, स्वच्छ पाणी, योग्य कचरा व्यवस्थापन,
                शिक्षण, आरोग्य व डिजिटल सुविधा देण्यासाठी कटिबद्ध आहोत.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:02163295576"
                  className="bg-gold text-maroon-dark font-bold py-3 px-8 rounded hover:bg-yellow-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  
०२१६३-२९५५७६
                </a>
                <Link
                  to="/contact"
                  className="bg-white/20 backdrop-blur border border-white/30 text-white font-bold py-3 px-8 rounded hover:bg-white/30 transition"
                >
                  संपर्क साधा →
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-72 md:h-96">
              <div className="w-full h-full bg-white/20 rounded-lg overflow-hidden">
                <img 
                  src="/img1.jpg" 
                  alt="कुदळापूर ग्रामपंचायत" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Corrected Names */}
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
      <h2 className="text-red-600 font-semibold uppercase tracking-wider mb-2">
        नेतृत्व
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
        सरपंच, उपसरपंच व सचिव
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
      {/* सरपंच */}
      <div className="text-center">
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-lg shadow-2xl ring-4 ring-red-500/50">
          <img 
            src="/img2.jpg" 
            alt="सौ. पल्लवीताई उमेशराव कुकडकर - सरपंच"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h4 className="text-2xl font-bold text-gray-800">
          मा. सौ. पल्लवीताई उमेशराव कुकडकर
        </h4>
        <p className="text-red-600 text-xl font-bold mt-2">सरपंच</p>
      </div>

      {/* उपसरपंच */}
      <div className="text-center">
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-lg shadow-2xl ring-4 ring-orange-500/50">
          <img 
            src="/img3.jpg" 
            alt="श्री. निशांत शिवशंकर बोटरे - उपसरपंच"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h4 className="text-2xl font-bold text-gray-800">
          मा. निशांत शिवशंकर बोटरे
        </h4>
        <p className="text-orange-600 text-xl font-bold mt-2">उपसरपंच</p>
      </div>

      {/* सचिव */}
      <div className="text-center">
        <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-lg shadow-2xl ring-4 ring-blue-500/50">
          <img 
            src="/img4.jpg" 
            alt="वसंत किसन उमाटे - सचिव"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h4 className="text-2xl font-bold text-gray-800">
          श्री. वसंत किसन उमाटे
        </h4>
        <p className="text-blue-600 text-xl font-bold mt-2">सचिव</p>
      </div>
    </div>
  </div>
</section>

      {/* Quick Info Cards - Updated with screenshot data */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-maroon-dark mx-auto mb-4" />
              <h4 className="font-bold text-maroon-dark text-xl mb-2">ई-मेल</h4>
              <p className="text-gray-700 mt-2 font-medium">gpkanholibara@gmail.com</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-maroon-dark mx-auto mb-4" />
              <h4 className="font-bold text-maroon-dark text-xl mb-2">कार्यालय पत्ता</h4>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                ग्रामपंचायत कान्होलीबारा,<br />
                ता. हिंगणा, जि. नागपूर<br />
                पिन कोड: ४४१११०
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 text-maroon-dark mx-auto mb-4" />
              <h4 className="font-bold text-maroon-dark text-xl mb-2">स्थापना वर्ष</h4>
              <p className="text-4xl font-bold text-gold mt-3">१९६२</p>
              <p className="text-gray-600 text-sm mt-2">(१९६२ साली स्थापना)</p>
            </div>
          </div>
          
          {/* Additional Contact Information from Screenshot */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-maroon-dark text-center mb-6">
              अतिरिक्त संपर्क माहिती
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-10 h-10 text-maroon-dark mx-auto mb-3" />
                <p className="font-semibold text-gray-800">दुय्यम दूरध्वनी</p>
                <p className="text-gray-600 mt-1">०२१६३-२९५५७६</p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-maroon-dark mx-auto mb-3" />
                <p className="font-semibold text-gray-800">निर्वाचन क्षेत्र</p>
                <p className="text-gray-600 mt-1">विधानसभा क्षेत्र: ६४</p>
              </div>
              <div className="text-center">
                <Building2 className="w-10 h-10 text-maroon-dark mx-auto mb-3" />
                <p className="font-semibold text-gray-800">जनगणना कोड</p>
                <p className="text-gray-600 mt-1">ग्राम कोड: ५५५६०१</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village Statistics - Updated Numbers */}
      <section className="py-16 md:py-24 bg-maroon-light text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-2">
              गाव माहिती
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              प्रमुख सांख्यिकी
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "लोकसंख्या", value: "१,६८७", icon: Users },
              { label: "क्षेत्रफळ", value: "५८० है.", icon: MapPin },
              { label: "वार्ड संख्या", value: "०७", icon: Building2 },
              { label: "एकूण घरे", value: "३५४", icon: Home },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-8 text-center hover:bg-white/15 transition">
                <stat.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-gold">{stat.value}</div>
                <p className="mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Additional Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gold">३४९०</div>
              <p className="mt-2 text-sm">मतदार यादी (पुरुष)</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gold">३३५४</div>
              <p className="mt-2 text-sm">मतदार यादी (स्त्री)</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gold">६८४४</div>
              <p className="mt-2 text-sm">एकूण मतदार</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gram Panchayat Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-maroon-dark mb-10">
            ग्रामपंचायत कान्होलीबारा
          </h3>
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="/img1.jpg"
              alt="कान्होलीबारा ग्रामपंचायत कार्यालय"
              className="w-full h-96 object-cover"
            />
          </div>
          <p className="mt-8 text-xl text-gray-700 font-medium">
            आपल्या गावाची सेवा करणे, हेच आमचे कर्तव्य!
          </p>
          <div className="mt-6 text-gray-600">
            <p>ता. हिंगणा, जि. नागपूर, महाराष्ट्र - ४४१११०</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-maroon-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            आपल्या गावाचा भाग आहात
          </h2>
          <p className="text-xl mb-10 opacity-90">
            काही तक्रार, सूचना किंवा मदत हवी असल्यास आम्ही नेहमीच उपलब्ध आहोत.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8308987907"
              className="bg-gold text-maroon-dark font-bold text-xl py-4 px-10 rounded-xl hover:bg-yellow-300 transition transform hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              सरपंचांशी संपर्क
            </a>
            <Link
              to="/contact"
              className="bg-white/20 backdrop-blur border border-white/30 text-white font-bold text-xl py-4 px-10 rounded-xl hover:bg-white/30 transition transform hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              संपर्क फॉर्म भरा <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="mt-8 text-white/80">
            <p>कार्यालयीन वेळ: सोमवार ते शनिवार, सकाळ १०:०० ते संध्याकाळ ६:००</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}