import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Sidebar } from "@/components/SideBar";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--body)] min-h-screen overflow-x-hidden">
      <main className="relative flex flex-col max-w-7xl mx-auto gap-5 p-4 md:p-6 ">
        {/* Sidebar */}
        <aside className="lg:fixed top-0 lg:h-screen 
                          lg:w-72 rounded-xl max-h-screen overflow-y-auto shadow-md lg:top-5 bg-[var(--card-bg)]
                          md:w-full md:h-auto">
          <Sidebar />
        </aside>

        <div className="flex-1 scroll-smooth lg:ml-76 ml-0">
          <Navigation />

          <section id="about" className="mb-5">
            <About />
          </section>
          
          <section id="project" className="mb-5">
            <Portfolio />
          </section>

          <section id="resume" className="mb-5">
            <Resume />
          </section>

          <section id="contact" className="mb-5">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
