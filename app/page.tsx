import Image from 'next/image';
import logo from '../public/logo.svg';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';
import {
  technologies as technologiesData,
  type TechnologyKey,
} from './data/technologies';

export default async function Index() {
  // Filter technologies to show only those marked as isCoreTechnology with icons and URLs
  const displayTechnologies = Object.keys(technologiesData)
    .map((key) => ({ key, tech: technologiesData[key] }))
    .filter(
      (
        item,
      ): item is {
        key: TechnologyKey;
        tech: { name: string; url: string; icon: React.ReactElement };
      } =>
        item.tech.isCoreTechnology === true &&
        'icon' in item.tech &&
        'url' in item.tech &&
        !!item.tech.icon &&
        !!item.tech.url,
    ); // Only show technologies with isCoreTechnology, icons and URLs

  return (
    <div className="min-h-screen">
      {/* Header with Logo and Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Cotersus Logo" className="w-10 h-10" />
            <div>
              <span className="font-fjalla text-2xl bg-gradient-brand bg-clip-text text-transparent block">
                Cotersus
              </span>
              <p className="text-xs text-gray-600 dark:text-zinc-400">
                IT Consulting
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Your Partner for
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Quality Software Development
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Your reliable partner for full-stack development, strategy, and
              digital innovation—built on clean code and quality.
            </p>
            <p className="text-sm text-gray-500 dark:text-zinc-400 italic">
              Cotersus = Code + Tersus (Latin: clean) — Clean code is our
              foundation
            </p>
            <div className="pt-4">
              <a
                href="mailto:info@cotersus.be"
                className="inline-block px-8 py-4 bg-gradient-brand text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How We Help You
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-300">
              Quality-driven solutions built on clean code principles
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-700 dark:to-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-zinc-600">
              <div className="w-16 h-16 bg-gradient-brand rounded-xl mb-6 flex items-center justify-center text-3xl shadow-lg">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-brand group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                IT Consulting & Developer Coaching
              </h3>
              <p className="text-gray-600 dark:text-zinc-300 leading-relaxed mb-4">
                We embed within your organization as senior developers and
                technical coaches—building scalable solutions while mentoring
                your teams and establishing best practices.
              </p>
              <ul className="text-gray-600 dark:text-zinc-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>
                    Frontend architecture guidance and technical mentorship
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>
                    Hands-on development within Nx monorepos and enterprise
                    applications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>
                    Mentoring developers and promoting best practices across
                    agile teams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>
                    Establishing clean code standards and maintainable practices
                  </span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-700 dark:to-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-zinc-600">
              <div className="w-16 h-16 bg-gradient-brand rounded-xl mb-6 flex items-center justify-center text-3xl shadow-lg">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-brand group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Website & Web Application Development
              </h3>
              <p className="text-gray-600 dark:text-zinc-300 leading-relaxed mb-4">
                We design and build professional websites and web applications
                that help your business grow—delivering fast, modern, and
                user-friendly solutions that make the right impression.
              </p>
              <ul className="text-gray-600 dark:text-zinc-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>
                    Modern, responsive design that works perfectly on all
                    devices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>Fast performance and excellent user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>Accessible and SEO-optimized for maximum reach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  <span>
                    Built with clean, maintainable code for long-term value
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              A Clear Plan, No Surprises
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-300">
              Our proven process ensures quality results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold">Strategy & Analysis</h3>
                <p className="text-gray-600 dark:text-zinc-300">
                  We listen to your goals and analyze the requirements.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-red to-brand-orange"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold">Design & Development</h3>
                <p className="text-gray-600 dark:text-zinc-300">
                  We design and build the solution with a focus on quality and
                  feedback.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-red to-brand-orange"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold">Delivery & Support</h3>
                <p className="text-gray-600 dark:text-zinc-300">
                  After a thorough testing phase, we launch the project and
                  remain available for support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Core Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto">
              We use modern, robust, and scalable technologies to guarantee the
              quality of your project.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {displayTechnologies.map((item) => (
              <a
                key={item.key}
                href={item.tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-700 dark:to-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-zinc-600 w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(16.666%-1.25rem)] min-w-[140px]"
              >
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300">
                  {item.tech.icon}
                </div>
                <p className="font-semibold text-center text-sm">
                  {item.tech.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-300">
              A selection of projects we&apos;ve worked on and helped realize
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[...projects]
              .sort((a, b) => b.year - a.year)
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-zinc-300 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
            {/* Company Info */}
            <div className="md:max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="Cotersus Logo" className="w-10 h-10" />
                <h3 className="font-fjalla text-2xl bg-gradient-brand bg-clip-text text-transparent">
                  Cotersus
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Your reliable partner for full-stack software development
                solutions
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>Cotersus BV</p>
                <p>Beigemsesteenweg 387, 1852 Beigem, Belgium</p>
                <p>VAT: BE 0791.547.318</p>
                <p>
                  <a
                    href="mailto:info@cotersus.be"
                    className="hover:text-brand-orange transition-colors"
                  >
                    info@cotersus.be
                  </a>
                </p>
              </div>
            </div>

            {/* Social & Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://www.linkedin.com/company/88920103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/CotersusIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 transform hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://bsky.app/profile/cotersus.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-brand transition-all duration-300 transform hover:scale-110"
                  aria-label="Bluesky"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.038.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.018.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                  </svg>
                </a>
              </div>
              <div className="text-sm space-y-2">
                <a
                  href="/privacy"
                  className="block hover:text-brand-orange transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Cotersus BV. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
