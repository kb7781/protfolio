import Image from "next/image";
import Footer from "../components/Footer";
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  // Experience data
  const experiences = [
    {
      title: "Deputy Minister of Scset Student Cabinet",
      company: "Bennett University",
      period: "2023 - Present",
      description: " As the Deputy Minister of the Student Cabinet, I have the responsibility to ensure the smooth functioning of the Student Cabinet and its various committees. I am committed to providing guidance, support, and resources to students, faculty, and staff to promote academic excellence and student welfare."
    },
    // {
    //   title: "Web Developer",
    //   company: "Digital Solutions Ltd.",
    //   period: "2018 - 2021",
    //   description: "Developed responsive websites and web applications for various clients. Worked with JavaScript, React, and CSS frameworks to create user-friendly interfaces."
    // },
    // {
    //   title: "Junior Developer",
    //   company: "WebCraft Agency",
    //   period: "2016 - 2018",
    //   description: "Started my career building websites using HTML, CSS, and JavaScript. Gained experience in responsive design and frontend development."
    // }
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Bennett University",
      year: "2023 - 2027",
      description: "Specializing in Data Science."
    }
  ];

  // Skills data
  const skills = {
    technical: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "SQL", "Git", "Tailwind CSS", "Material UI", "Responsive Design"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Time Management", "Adaptability"]
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-primary-light text-gray-800'}`}>
      {/* About Header */}
      <section className="pt-32 pb-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl">
            Get to know more about me, my background, and what drives me as a developer.  
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500 opacity-75 blur-xl"></div>
                <Image 
                  src="/profile.jpg" 
                  alt="Profile Picture" 
                  width={350} 
                  height={350} 
                  className="rounded-lg relative z-10 border-4 border-gray-800"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Kunal Bothra</h2>
              <h3 className="text-xl text-blue-400 mb-6">Web Developer & Designer</h3>
              
              <p className="text-gray-300 mb-4">
                I'm a passionate web developer with over 5 years of experience in creating responsive and user-friendly websites. My journey in web development started when I built my first website in college, and I've been hooked ever since.
              </p>
              
              <p className="text-gray-300 mb-4">
                I specialize in frontend development with React and Next.js, but I'm also comfortable working with backend technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              
              <p className="text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, hiking in nature, or reading books on design and user experience.
              </p>
              
              <div className="flex gap-4 mt-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-10 px-6 md:px-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-blue-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-gray-300 mb-4">{exp.company}</h4>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500/30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="text-blue-400 text-sm mt-2 md:mt-0">{edu.year}</span>
                </div>
                <h4 className="text-gray-300 mb-4">{edu.institution}</h4>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-10 px-6 md:px-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
