import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Cotersus',
  description: 'Get in touch with Cotersus for your software development needs. We\'re here to help bring your ideas to life.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900">
      {/* Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-zinc-400 hover:text-brand-orange transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get in <span className="bg-gradient-brand bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-300">
              Let's discuss how we can help bring your ideas to life
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-200 dark:border-zinc-700">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-gray-200 dark:border-zinc-700">
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a
                  href="mailto:info@cotersus.be"
                  className="text-brand-orange hover:underline"
                >
                  info@cotersus.be
                </a>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-gray-200 dark:border-zinc-700">
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm">
                  Beigemsesteenweg 387<br />
                  1852 Beigem, Belgium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
