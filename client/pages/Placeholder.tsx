import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  subtitle?: string;
  marathi?: string;
}

export default function Placeholder({
  title,
  subtitle,
  marathi,
}: PlaceholderProps) {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-cream to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            {marathi && (
              <h2 className="text-gold font-semibold uppercase tracking-wider mb-2">
                {marathi}
              </h2>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-maroon-dark mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
            )}
          </div>

          <div className="bg-white rounded-lg border-2 border-dashed border-maroon-light p-12 md:p-16 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl font-bold text-maroon-dark mb-4">
              आगामी शीघ्रच उपलब्ध
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              हा पृष्ठ तयारीत आहे. कृपया लवकरच परत येत राहा किंवा होमपृष्ठावर 
              परत जाण्यासाठी खाली दिलेल्या लिंकवर क्लिक करा.
            </p>
            <Link
              to="/"
              className="inline-block bg-maroon-light text-white font-bold py-3 px-8 rounded hover:bg-maroon-dark transition-colors flex items-center gap-2 justify-center mx-auto"
            >
              होमपृष्ठावर परत जा <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16">
            <h4 className="text-xl font-bold text-maroon-dark mb-6 text-center">
              महत्त्वाचे दुवे
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "गृहपृष्ठ", href: "/" },
                { name: "आमच्याबद्दल", href: "/about" },
                { name: "प्रकल्प", href: "/projects" },
                { name: "योजना", href: "/schemes" },
                { name: "दस्तऐवज", href: "/documents" },
                { name: "संपर्क", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="p-4 bg-cream border border-gray-300 rounded text-maroon-dark font-semibold hover:bg-gold hover:text-maroon-dark transition-colors text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
