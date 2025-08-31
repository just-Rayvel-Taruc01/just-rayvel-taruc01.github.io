export function About() {
  return (
    <div className="bg-(--card-bg) p-6 rounded-lg shadow text-paragraph">
      <h2 className="text-3xl font-bold mb-4 text-headline">About Me</h2>

      <p className="text-base lg:text-md mb-4">
        I’m Rayvel Taruc, a passionate IT student focused on building web applications.
        My journey began with a fascination for how websites work, and it has since evolved into hands-on projects in web dev and cybersecurity.
      </p>

      <p className="text-base lg:text-md mb-4">
        I specialize in using modern tools like React, Next.js, and Tailwind CSS to build elegant, functional UIs. 
        I’m always learning and enjoy exploring both frontend and backend development.
      </p>

      <p className="text-base lg:text-md mb-4">
        I also enjoy experimenting with backend logic and simulating networks using Cisco Packet Tracer.
        I’ve participated in events like Hack4Gov and Code Wars to sharpen my problem-solving skills.
      </p>

      {/* Buttons Section */}
      <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center 
                      sm:justify-start lg:justify-start">
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-lg font-medium shadow 
                    bg-(--accent) text-white text-center
                    hover:scale-105 hover:opacity-90 
                    transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-lg font-medium shadow 
                    border border-(--accent) text-(--accent) text-center
                    hover:bg-(--accent) hover:text-white hover:scale-105 
                    transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>

    </div>
  );
}
