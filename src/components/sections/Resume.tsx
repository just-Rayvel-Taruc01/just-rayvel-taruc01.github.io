export function Resume() {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-[var(--headline)]">Resume</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">Education</h3>
        <p>Bachelor of Science in Information Technology</p>
        <p>Don Honorio Ventura State University – Candaba Campus (2021–2025)</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">Skills</h3>
        <ul className="list-disc list-inside">
          <li>Python, Java, C++</li>
          <li>HTML, CSS, JavaScript, Bootstrap</li>
          <li>MySQL, MongoDB</li>
          <li>Kali Linux, Penetration Testing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-1">Activities</h3>
        <ul className="list-disc list-inside">
          <li>Hack4Gov 2023 – Participant</li>
          <li>Code Wars 2023 – Participant</li>
        </ul>
      </div>
    </div>
  );
}
