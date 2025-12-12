import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, User, Home, Building2, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("धन्यवाद! आपला संदेश पाठवला गेला आहे.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gold font-semibold uppercase tracking-wider mb-2">
              संपर्क
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-maroon-dark">
              आमच्याशी संपर्क साधा
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              कान्होलीबारा ग्रामपंचायतीच्या कोणत्याही सेवेसाठी किंवा तक्रारीसाठी खालील संपर्क माध्यमांद्वारे आमच्याशी संपर्क साधा.
            </p>
          </div>

          {/* Leadership Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Sarpanch Contact Card */}
            <div className="bg-white rounded-xl p-8 border-l-8 border-gold shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon-light to-maroon-dark flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-maroon-dark">सरपंच</h3>
                  <p className="text-lg text-gray-700 font-semibold">रुपेश सिताराम जाधव</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-maroon-light" />
                  <div>
                    <p className="text-sm text-gray-500">मोबाईल नंबर</p>
                    <a 
                      href="tel:8308987907" 
                      className="text-lg font-bold text-maroon-dark hover:text-gold transition-colors"
                    >
                      ८३०८९८७९०७
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-maroon-light" />
                  <div>
                    <p className="text-sm text-gray-500">दुय्यम संपर्क</p>
                    <a 
                      href="tel:18309987907" 
                      className="text-lg font-bold text-maroon-dark hover:text-gold transition-colors"
                    >
                      १८३०९९८७९०७
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upsarpanch Contact Card */}
            <div className="bg-white rounded-xl p-8 border-l-8 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-maroon-dark">उपसरपंच</h3>
                  <p className="text-lg text-gray-700 font-semibold">किशोर वसंतराव जाधव</p>
                  <p className="text-sm text-gray-500">(वासंत किसान उमाटे)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">मोबाईल नंबर</p>
                    <a 
                      href="tel:9359987542" 
                      className="text-lg font-bold text-maroon-dark hover:text-blue-600 transition-colors"
                    >
                      ९३५९९८७५४२
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* General Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Contact */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-gold shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Mail className="w-10 h-10 text-maroon-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-maroon-dark text-xl mb-3">ईमेल पत्ता</h3>
                  <a
                    href="mailto:gpkanholibara@gmail.com"
                    className="text-lg text-gold hover:underline font-semibold break-all"
                  >
                    gpkanholibara@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-2">
                    सर्व अधिकृत पत्रव्यवहार या ईमेलवर करा
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-gold shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Clock className="w-10 h-10 text-maroon-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-maroon-dark text-xl mb-3">कार्यालयीन वेळ</h3>
                  <p className="text-gray-700 font-semibold">
                    सोमवार - शनिवार
                    <br />
                    सकाळ १०:०० ते संध्याकाळ ६:००
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    रविवार - सुट्टी
                  </p>
                </div>
              </div>
            </div>

            {/* Landline Contact */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-gold shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Phone className="w-10 h-10 text-maroon-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-maroon-dark text-xl mb-3">कार्यालय दूरध्वनी</h3>
                  <a
                    href="tel:02163295576"
                    className="text-lg text-gold hover:underline font-semibold"
                  >
                    ०२१६३-२९५५७६
                  </a>
                  <p className="text-gray-600 text-sm mt-2">
                    कार्यालयीन कामासाठी संपर्क
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-maroon-dark mb-8 pb-4 border-b border-gray-200">
                संदेश पाठवा
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    आपले पूर्ण नाव *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="आपले नाव लिहा"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ईमेल पत्ता *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="आपला ईमेल पत्ता"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    विषय *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="संपर्काचा विषय"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    तुमचा संदेश *
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    placeholder="आपला संदेश येथे लिहा..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-maroon-light to-maroon-dark text-white font-bold py-4 rounded-xl hover:from-maroon-dark hover:to-maroon-light transition-all duration-300 text-lg"
                >
                  संदेश पाठवा
                </button>
              </form>
            </div>

            {/* Address and Location Info */}
            <div>
              {/* Address Card */}
              <div className="bg-white rounded-xl p-8 border border-gray-300 shadow-lg mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-light to-maroon-dark flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-maroon-dark text-2xl mb-4">पत्ता</h3>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p className="text-lg font-semibold">ग्रामपंचायत कान्होलीबारा</p>
                      <p>ता. हिंगणा, जि. नागपूर</p>
                      <p>महाराष्ट्र राज्य</p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="font-bold text-maroon-dark">पिन कोड:</p>
                        <p className="text-2xl font-bold text-gold">४४१११०</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Establishment Info */}
              <div className="bg-white rounded-xl p-8 border border-gray-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-maroon-dark text-2xl mb-4">स्थापना माहिती</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">स्थापना वर्ष</p>
                        <p className="text-3xl font-bold text-amber-600">१९६२</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ग्राम कोड</p>
                        <p className="text-lg font-semibold text-gray-800">५५५६०१</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">विधानसभा क्षेत्र</p>
                        <p className="text-lg font-semibold text-gray-800">क्रमांक ६४</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="mt-8 bg-gradient-to-br from-maroon-light/20 to-maroon-dark/20 rounded-xl p-6 border-2 border-dashed border-maroon-light">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-maroon-dark mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-maroon-dark mb-2">स्थान नकाशा</h4>
                  <p className="text-gray-700 mb-4">
                    ग्रामपंचायत कान्होलीबारा, हिंगणा तालुका, नागपूर जिल्हा
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Kanholibara+Grampanchayat+Hingna+Nagpur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-maroon-dark text-white px-6 py-3 rounded-lg hover:bg-maroon-light transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                    गूगल मॅप वर पहा
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Note */}
          <div className="mt-16 p-6 bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-red-700 text-lg">अत्यावश्यक संपर्क</h4>
                <p className="text-gray-700">
                  अत्यावश्यक प्रसंगी सरपंच किंवा उपसरपंच यांच्याशी थेट संपर्क साधा. गैर-अत्यावश्यक प्रश्नांसाठी कार्यालयीन वेळेतच संपर्क करावा.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}