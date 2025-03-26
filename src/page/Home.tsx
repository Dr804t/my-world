

function Home() {
  const skills: string[] = [
    "JavaScript",
    "React",
    "TypeScript",
    "TailwindCSS",
    "React Native",
  ];

  const project = [
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    },
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    },
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    },
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    },
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    },
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    },
    {
        projectName: "Project",
        description: "A brief description of the project. Highlight its purpose, technologies used, and key features.",
    }
  ]

  return (
    <div className="bg-bg text-text font-kanit">
      {/* Introduction Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 text-center">
        <p className="text-xl">Hi, I'm</p>
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple1 via-blue1 to-pink1">
          Kanitsorn Darunaitorn
        </h1>
        <p className="mt-4 text-lg max-w-3xl">
          I'm a 3rd-year Computer Engineering student at King Mongkut’s
          University of Technology Thonburi. I have a strong interest in
          software development, particularly in frontend systems and full-stack
          applications. Through my projects, I’ve worked on integrating APIs,
          implementing UI, and building real-time systems to create efficient
          and user-friendly applications.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">My Portfolio</h2>
        <p className="text-center text-lg mb-12">
          Here are some of the projects I’ve worked on. These projects showcase
          my skills in software development, UI/UX design, and problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          {project.map((project,index)=>(
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover-animation">
            <h3 className="text-2xl font-bold mb-2">{project.projectName}</h3>
            <p className="text-sm mb-4">
              {project.description}
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          ))}
          {/* Add more project cards here */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 px-4 py-2 rounded-lg hover-animation"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="mb-4">
          Feel free to reach out to me for collaborations or inquiries!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover-animation"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}

export default Home;