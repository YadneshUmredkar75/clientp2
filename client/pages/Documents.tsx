import React from "react";
import Layout from "@/components/Layout";

const galleryImages = [
  "https://sknau.ac.in/storage/app/public/media/2023/07/1688629559.jpg",
  "https://tse2.mm.bing.net/th/id/OIP.pRPvQ4vuI3-F6VcIw_atvgAAAA?cb=ucfimg2&ucfimg=1&w=448&h=216&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://www.epw.in/sites/default/files/images/IMG_8533.jpeg",
  "https://static.theprint.in/wp-content/uploads/2022/03/Panchayat_India-e1648527497548.jpg",
  "https://tse1.mm.bing.net/th/id/OIP.cJEIJJSPNd0uejZ4JtwnUgHaFj?cb=ucfimg2&ucfimg=1&w=540&h=405&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse4.mm.bing.net/th/id/OIP.pBAGFYKWXAoetwyE2fVa5AHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://i.ytimg.com/vi/8K_3VXV6Zi0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWyhHMA8=&rs=AOn4CLA_AqdvwM7dvLTVeEknC2HVQIaKsg",
  "https://t4.ftcdn.net/jpg/05/24/27/89/360_F_524278955_3c95QyZFsKy1pUFrUPljyWJ5kEdMBkAz.jpg",
  "https://tse1.mm.bing.net/th/id/OIP.vAQWwdm95GZDv10RTRU5GAHaEA?cb=ucfimg2&ucfimg=1&w=1070&h=580&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse1.mm.bing.net/th/id/OIP.-LQxevGezO4zFwlJq2StqwHaFB?cb=ucfimg2&ucfimg=1&w=1024&h=694&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse4.mm.bing.net/th/id/OIP.ciPzOnMfxahD0e5NXLkmRAHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  // "hhttps://i.ytimg.com/vi/qUwICqq_yWw/maxresdefault.jpg",
  "https://tse1.mm.bing.net/th/id/OIP.7tZMHzTHAQqLWSn2XeidvwHaF7?cb=ucfimg2&ucfimg=1&w=500&h=400&rs=1&pid=ImgDetMain&o=7&rm=3",
  
];

export default function Gallery() {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-cream to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-wider text-sm md:text-base">
              गॅलरी
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-maroon-dark mt-3">
              गावातील ग्रामीण जीवन, घटना आणि नैसर्गिक सौंदर्य
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              कुदळापूर ग्रामपंचायतीच्या विविध कार्यक्रम, स्वच्छता मोहीम, सण-समारंभ व दैनंदिन जीवनातील क्षणांचा फोटो संग्रह
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`गावातील कार्यक्रम ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Image Description Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                  <p className="text-white opacity-0 group-hover:opacity-100 font-semibold p-3 text-sm transition-opacity duration-300">
                    {index === 0 && "ग्रामीण घरांसह नैसर्गिक दृश्य"}
                    {index === 1 && "शेतीचे काम करणारे शेतकरी"}
                    {index === 2 && "गावातील मुख्य रस्ता"}
                    {index === 3 && "सणाविशेषी सजलेले गाव"}
                    {index === 4 && "तलावाजवळील वस्ती"}
                    {index === 5 && "ग्रामीण भागातील झोपडया"}
                    {index === 6 && "तंत्रज्ञान व ग्रामीण युवक"}
                    {index === 7 && "गावातील हिरवेगार शेत"}
                    {index === 8 && "पावसाळी ग्रामीण भाग"}
                    {index === 9 && "पारंपारिक वेशभूषा"}
                    {index === 10 && "ग्रामीण महिलांचे उद्योग"}
                    {index === 11 && "शेतीची तयारी"}
                    {index === 12 && "ग्रामीण मुलांचे खेळ"}
                    {index === 13 && "ग्रामीण बाजार"}
                    {index === 14 && "ग्रामीण सण उत्सव"}
                    {index === 15 && "ग्रामीण कुटुंब जीवन"}
                    {index === 16 && "पारंपारिक ग्रामीण वास्तू"}
                    {index === 17 && "ग्रामीण शाळा कार्यक्रम"}
                    {index === 18 && "ग्रामीण सौंदर्य"}
                    {index === 19 && "ग्रामीण वास्तुशैली"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-16">
            <p className="text-gray-600 italic">
              अधिक फोटो लवकरच जोडले जातील...
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}