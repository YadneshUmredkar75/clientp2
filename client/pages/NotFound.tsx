import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-white">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-dark mb-4">
            पृष्ठ सापडले नाही
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            क्षमस्व, आप्पण शोधत असलेले पृष्ठ आढळले नाही. कृपया होमपृष्ठावर परत जा.
          </p>
          <Link
            to="/"
            className="inline-block bg-maroon-light text-white font-bold py-3 px-8 rounded hover:bg-maroon-dark transition-colors"
          >
            होमपृष्ठावर परत जा
          </Link>
        </div>
      </section>
    </Layout>
  );
}
