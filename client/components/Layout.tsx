import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: "गृहपृष्ठ", href: "/" },
  { label: "आमच्याबद्दल", href: "/about" },
  { label: "प्रकल्प", href: "/projects" },
  { label: "योजना", href: "/schemes" },
  { label: "गॅलरी", href: "/documents" },
  // { label: "गॅलरी", href: "/gallery" },
  { label: "संपर्क", href: "/contact" },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Info Bar */}
      <div className="bg-maroon-dark text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-semibold">महत्वाचे नंबर:</span>
              <a href="tel:8308987907" className="hover:underline">8308987907</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">ईमेल:</span>
              <a href="mailto:gpkanholibara@gmail.com" className="hover:underline">
                gpkanholibara@gmail.com
              </a>
            </div>
          </div>
          <div className="text-sm">
            कान्होलीबारा ग्रामपंचायत, ता. हिंगणा, जि. नागपूर
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-cream border-b-4 border-maroon-light sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-maroon-dark rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">क</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-maroon-dark font-bold text-xl leading-tight">
                  कान्होलीबारा ग्रामपंचायत
                </h1>
                <p className="text-xs text-maroon-light">ता. हिंगणा | जिल्हा नागपूर | Official Website</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-maroon-dark font-semibold hover:text-gold transition-colors text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-maroon/10 rounded-lg transition hidden sm:block">
                <Search className="w-6 h-6 text-maroon-dark" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7 text-maroon-dark" />
                ) : (
                  <Menu className="w-7 h-7 text-maroon-dark" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-6 pb-6 border-t-2 border-gold/30 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-3 text-maroon-dark font-bold text-lg hover:text-gold transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-cream/30 to-white">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-maroon-dark text-white mt-auto">
        <div className="bg-maroon/90 py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* संपर्क */}
              <div>
                <h3 className="text-2xl font-bold mb-5 pb-3 border-b-4 border-gold inline-block">
                  संपर्क करा
                </h3>
                <div className="space-y-4 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-gold">पत्ता:</span>
                    <span>
                      ग्रामपंचायत कान्होलीबारा<br />
                      ता. हिंगणा, जि. नागपूर<br />
                      पिन - 441110
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold">मोबाईल:</span>
                    <a href="tel:8308987907" className="hover:text-gold">8308987907</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold">ईमेल:</span>
                    <a href="mailto:gpkanholibara@gmail.com" className="hover:text-gold break-all">
                      gpkanholibara@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* महत्त्वाचे दुवे */}
              <div>
                <h3 className="text-2xl font-bold mb-5 pb-3 border-b-4 border-gold inline-block">
                  महत्त्वाचे दुवे
                </h3>
                <ul className="space-y-3">
                  <li><Link to="/schemes" className="hover:text-gold">सरकारी योजना</Link></li>
                  <li><Link to="/documents" className="hover:text-gold">अर्ज फॉर्म</Link></li>
                  <li><Link to="/projects" className="hover:text-gold">विकास प्रकल्प</Link></li>
                  <li><Link to="/gallery" className="hover:text-gold">गॅलरी</Link></li>
                </ul>
              </div>

              {/* सेवा */}
              <div>
                <h3 className="text-2xl font-bold mb-5 pb-3 border-b-4 border-gold inline-block">
                  आमच्या सेवा
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="hover:text-gold cursor-pointer">जन्म दाखला</li>
                  <li className="hover:text-gold cursor-pointer">मृत्यू दाखला</li>
                  <li className="hover:text-gold cursor-pointer">निवासी प्रमाणपत्र</li>
                  <li className="hover:text-gold cursor-pointer">७/१२ उतारा</li>
                </ul>
              </div>

              {/* गॅलरी - Real Images */}
              <div>
                <h3 className="text-2xl font-bold mb-5 pb-3 border-b-4 border-gold inline-block">
                  गॅलरी
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "https://images.tv9marathi.com/wp-content/uploads/2024/06/Chandoli-village-1.jpg",
                    "https://tse4.mm.bing.net/th/id/OIP.vOocZkUGh2aixpU0BSkwFQHaE8?cb=ucfimg2&ucfimg=1&w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3",
                    "https://images.bhaskarassets.com/web2images/521/2024/04/30/ab744ce6-c2b2-4dfc-bd9e-94fd65b1db1a_1714441471377.jpg",
                    "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400&h=400&fit=crop",
                    "https://www.shutterstock.com/image-photo/amravati-maharashtra-india-2-july-260nw-1769542886.jpg",
                    "https://i.ytimg.com/vi/8K_3VXV6Zi0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWyhHMA8=&rs=AOn4CLA_AqdvwM7dvLTVeEknC2HVQIaKsg",
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`गावातील कार्यक्रम ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          पहा
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/gallery"
                  className="text-gold text-sm mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all font-semibold"
                >
                  संपूर्ण गॅलरी पहा →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-black/30 py-5 border-t border-gold/30 text-center text-sm">
          <p>© २०२५ कान्होलीबारा ग्रामपंचायत | सर्व हक्क राखीव</p>
          <p className="mt-2 text-gold">Developed with love by Local Team</p>
        </div>
      </footer>
    </div>
  );
}