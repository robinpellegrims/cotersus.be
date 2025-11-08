import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import { ThemeToggle } from '../components/ThemeToggle';

export const metadata = {
  title: 'Privacy Policy | Cotersus IT Consulting',
  description: 'Privacy policy for Cotersus IT Consulting.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src={logo} alt="Cotersus Logo" className="w-10 h-10" />
            <div>
              <h1 className="font-fjalla text-2xl bg-gradient-brand bg-clip-text text-transparent">
                Cotersus
              </h1>
              <p className="text-xs text-gray-600 dark:text-zinc-400">IT Consulting</p>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-gray-600 dark:text-zinc-300 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-gray-600 dark:text-zinc-300">
                At Cotersus BV, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-zinc-300 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-zinc-300">
                <li>Contact information (name, email address, company name) when you contact us through our social channels</li>
                <li>Usage data through analytics (page visits, browser type, device information)</li>
                <li>Technical data (IP address, browser type, operating system)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-zinc-300 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-zinc-300">
                <li>To respond to your inquiries and provide our services</li>
                <li>To improve our website and services</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Cookies and Tracking</h2>
              <p className="text-gray-600 dark:text-zinc-300 mb-4">
                We use minimal tracking on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-zinc-300">
                <li><strong>Analytics:</strong> We use Vercel Analytics and Speed Insights for privacy-friendly performance monitoring</li>
                <li><strong>Theme Preference:</strong> We store your dark/light mode preference locally in your browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 dark:text-zinc-300">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-zinc-300 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-600 dark:text-zinc-300">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Your Rights (GDPR)</h2>
              <p className="text-gray-600 dark:text-zinc-300 mb-4">
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-zinc-300">
                <li><strong>Right to access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to restrict processing:</strong> Request limitation of data processing</li>
                <li><strong>Right to data portability:</strong> Request transfer of your data</li>
                <li><strong>Right to object:</strong> Object to processing of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-gray-600 dark:text-zinc-300">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600 dark:text-zinc-300">
                Your information may be transferred to and processed in countries other than Belgium. We ensure appropriate safeguards are in place to protect your data in accordance with GDPR requirements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-zinc-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-600 dark:text-zinc-300 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-zinc-700 p-6 rounded-lg border border-gray-200 dark:border-zinc-600">
                <p className="font-semibold mb-2">Cotersus BV</p>
                <p className="text-gray-600 dark:text-zinc-300">Beigemsesteenweg 387</p>
                <p className="text-gray-600 dark:text-zinc-300">1852 Beigem, Belgium</p>
                <p className="text-gray-600 dark:text-zinc-300">VAT: BE 0791.547.318</p>
                <p className="text-gray-600 dark:text-zinc-300 mt-2">
                  Email: <a href="mailto:info@cotersus.be" className="text-brand-orange hover:underline">info@cotersus.be</a>
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-700">
              <Link
                href="/"
                className="inline-flex items-center text-brand-orange hover:underline font-semibold"
              >
                ← Back to Home
              </Link>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-300 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cotersus BV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
