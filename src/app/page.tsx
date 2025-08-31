import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Sidebar } from "@/components/SideBar";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--body)] min-h-screen overflow-x-hidden relative">
      {/* Background Blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Main Blob */}
        <div className="absolute top-[60%] right-[-100px] w-[400px] h-[400px] rounded-full blur-3xl 
                        bg-[#e0d6ff] dark:bg-[#7f5af0]/30 z-[1]" />

        {/* Secondary Blob */}
        <div className="absolute top-[20%] left-[-150px] w-[300px] h-[300px] rounded-full blur-2xl 
                        bg-[#ffe0cc] dark:bg-[#00a14b]/20 z-[1]" />

        {/* Ambient Large Blob */}
        <div className="absolute bottom-[-100px] left-[50%] translate-x-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] 
                        bg-[#fceff9] dark:bg-[#3c3f75]/20 z-[1]" />
      </div>

      <main className="relative flex flex-col max-w-7xl xl:max-w-11/12 mx-auto gap-5 p-4 md:p-6 z-10">
        {/* Sidebar */}
        <aside className="lg:fixed top-0 lg:h-11/12 
                          lg:w-72 rounded-xl overflow-y-auto shadow-md lg:top-5 bg-[var(--card-bg)]
                          md:w-full md:h-auto">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 scroll-smooth lg:ml-76 ml-0">
          <Navigation />

          <section id="about" className="mb-5 scroll-mt-6">
            <About />
          </section>

          <section id="resume" className="mb-5 scroll-mt-6">
            <Resume />
          </section>

          <section id="projects" className="mb-5 scroll-mt-6">
            <Projects />
          </section>

          <section id="contact" className="mb-5 scroll-mt-6">
            <Contact />
          </section>
        </div>
      </main>
    </div>

  );
}
