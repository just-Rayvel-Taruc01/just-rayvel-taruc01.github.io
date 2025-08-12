import { FaBook, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';
import Skills from '../ui/Skills';

export function Resume() {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-[var(--headline)]">Resume</h2>

      {/* xperience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <FaBriefcase size={24} className="text-[var(--accent)]" />
          Experience
        </h3>
        <ul className="relative z-0 border-l-3 border-[var(--accent)] pl-5 ml-4 space-y-6">
          {/* Internship */}
          <li className="relative">
            <div className="absolute -left-7 top-3 w-3 h-3 bg-[var(--accent)] rounded-full border-2 border-white"></div>
            <div className='flex items-start gap-4'>
              <Image
                src="/logo/pelco.png"
                alt="Pampanga Electric Cooperative II IT Department"
                width={50}  
                height={50}
                className="inline-block rounded-full"
              />
              <div>
                <p className="font-semibold">IT Intern</p>
                <p className="text-sm text-gray-600">
                  Pampanga Electric Cooperative I – IT Department (February 2025 – May 2025)
                </p>
              </div>  
            </div>
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <FaBook size={24} className="text-[var(--accent)]" />
          Education
        </h3>

        <ul className="relative z-0 border-l-3 border-[var(--accent)] pl-5 ml-4 space-y-6">
          {/* List Item */}
          <li className="relative">
            <div className="absolute -left-7 top-3 w-3 h-3 bg-[var(--accent)] rounded-full border-2 border-white"></div>
            <div className='flex items-start gap-4'>
              <Image 
                src="/logo/dhvsu.png"
                alt="Don Honorio Ventura State University"
                width={50}
                height={50}
                className="inline-block rounded-full"
              />
              <div>
                <p className="font-semibold">Bachelor of Science in Information Technology</p>
                <p className="text-sm text-gray-600">
                  Don Honorio Ventura State University – Candaba Campus (2021–2025)
                </p>
              </div>
            </div>
          </li>

          {/* You can repeat <li> for more items */}
          <li className="relative">
            <div className="absolute -left-7 top-3 w-3 h-3 bg-[var(--accent)] rounded-full border-2 border-white"></div>
            <div className='flex items-start gap-3'>
              <Image 
                src="/logo/embhs.png"
                alt="Emigdio A. Bondoc High School"
                width={50}
                height={50}
                className="inline-block rounded-full"
              />
              <div>
                <p className="font-semibold">Senior High School – General Academic Strand (GAS)</p>
                <p className="text-sm text-gray-600">
                  Emigdio A. Bondoc High School (2019–2021)
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Skills */}
      < Skills />

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">Activities</h3>
        <ul className="list-disc list-inside">
          <li>Hack4Gov 2023 – Participant</li>
          <li>Code Wars 2023 – Participant</li>
        </ul>
      </div>
    </div>
    
  );
}
