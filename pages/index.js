import Link from 'next/link';
import Image from "next/image";
import Footer from "../components/Footer";
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-primary-light text-gray-800'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        
        {/* Animated background dots/grid (optional) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-500">Kunal Bothra</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
                Web Developer & UI/UX Enthusiast
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                I create beautiful, functional, and user-friendly websites and applications. Let's bring your ideas to life!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center">
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-colors duration-300">
                  Contact Me
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Glowing effect behind image */}
                <div className="absolute -inset-4 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
                <div className="relative rounded-full border-4 border-gray-800 overflow-hidden">
                  <Image 
                    src="/profile.jpg" 
                    alt="Kunal Bothra" 
                    width={350} 
                    height={350} 
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="text-blue-400 text-4xl mb-4">⚛️</div>
              <h3 className="font-bold mb-2">React</h3>
              <p className="text-gray-400 text-sm">Building interactive UIs with modern React</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="text-blue-400 text-4xl mb-4">🔄</div>
              <h3 className="font-bold mb-2">Next.js</h3>
              <p className="text-gray-400 text-sm">Creating fast, SEO-friendly web applications</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="text-blue-400 text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Tailwind CSS</h3>
              <p className="text-gray-400 text-sm">Crafting beautiful, responsive designs</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="text-blue-400 text-4xl mb-4">🔌</div>
              <h3 className="font-bold mb-2">Node.js</h3>
              <p className="text-gray-400 text-sm">Building scalable backend services</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="text-blue-400 text-4xl mb-4">C++</div>
              <h3 className="font-bold mb-2">C++</h3>
              <p className="text-gray-400 text-sm">Building efficient, scalable, and intelligent solutions using Python. Passionate about data structures, automation, and AI-driven applications.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Here are some of my recent works. Check out my projects page for more.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border border-gray-700 hover:border-blue-500/50">
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src="/project1.jpg" 
                  alt="Event Management Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Event Management Website</h3>
                <p className="text-gray-400 mb-4">It is a university event management app that streamlines event registration, ticketing, payments, and QR-based entry.</p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border border-gray-700 hover:border-blue-500/50">
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src="/project2.jpg" 
                  alt="Portfolio Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-400 mb-4">A modern portfolio website built with Next.js and Tailwind CSS.</p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Have a project in mind? I'm available for freelance work and open to new opportunities.</p>
          <Link href="/contact" className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-colors duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
