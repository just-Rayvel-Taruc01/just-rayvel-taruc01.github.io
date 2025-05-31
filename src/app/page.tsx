import Head from "next/head";
import Image from "next/image";
import '../app/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Head> {/* Or directly in app/layout.tsx for app router */}
        <title>Rayvel Taruc&apos;s Portfolio</title>
        <meta name="description" content="Showcasing my web development projects and skills." />
      </Head>

      {/* Header */}
      <header className="bg-gray-800 py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-teal-400">Rayvel Taruc</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-teal-400 transition duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 text-center bg-gray-850">
        <div className="container mx-auto px-4">
          <Image
            src="/profile.jpg" // Make sure you have a 'profile.jpg' in your public directory
            alt="Rayvel Taruc"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-teal-500 shadow-lg"
            priority
          />
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Hello, I&apos;m <span className="text-teal-400">Rayvel Taruc</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A passionate Web Developer specializing in React, Next.js, and Tailwind CSS.
          </p>
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300">
            <p className="mb-4">
              I am a dedicated web developer with expertise in building responsive and user-friendly web applications. 
              My journey into web development began with a fascination for how digital experiences come to life, and I&apos;ve been hooked ever since.
            </p>
            <p className="mb-4">
              I have a strong foundation in front-end technologies like React, Next.js, and of course, styling with Tailwind CSS. I enjoy tackling complex problems and constantly learning new tools and techniques to deliver high-quality code.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new tech trends, contributing to open source, or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-850">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-white mb-4">Project Alpha</h3>
              <p className="text-gray-300 mb-4">
                A responsive e-commerce platform built with Next.js and integrated with a headless CMS. Features dynamic product listings and a smooth user experience.
              </p>
              <a
                href="https://github.com/just-Rayvel-Taruc01/project-alpha-repo" // Replace with actual repo
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center"
              >
                View on GitHub
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-white mb-4">Portfolio V1</h3>
              <p className="text-gray-300 mb-4">
                My previous portfolio iteration, designed with a focus on minimalist aesthetics and performance, showcasing early projects.
              </p>
              <a
                href="https://github.com/just-Rayvel-Taruc01/portfolio-v1-repo" // Replace with actual repo
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center"
              >
                View on GitHub
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-white mb-4">Task Manager App</h3>
              <p className="text-gray-300 mb-4">
                A simple task management application with drag-and-drop functionality, built to demonstrate state management in React.
              </p>
              <a
                href="https://github.com/just-Rayvel-Taruc01/task-manager-repo" // Replace with actual repo
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center"
              >
                View on GitHub
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com" // Replace with your email
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Email Me
          </a>
          <div className="mt-8">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-4 text-2xl">
              <i className="fab fa-linkedin"></i> {/* Add FontAwesome for social icons if desired */}
            </a>
            <a href="https://github.com/just-Rayvel-Taruc01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-4 text-2xl">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Rayvel Taruc. All rights reserved.</p>
      </footer>
    </div>
  );
}
