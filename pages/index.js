import Link from 'next/link';
import Image from "next/image";
import Footer from "../components/Footer";
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Home() {
  const { theme } = useTheme();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background gradient - removed for 3D background visibility */}
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 p-8 rounded-2xl bg-gray-900/30 backdrop-blur-md border border-white/10 shadow-xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
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
                <Link href="/projects">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center shadow-lg shadow-blue-500/30"
                  >
                    View My Work
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="relative"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                {/* Glowing effect behind image */}
                <div className="absolute -inset-4 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative rounded-full border-4 border-gray-800/50 overflow-hidden shadow-2xl">
                  <Image 
                    src="/profile.jpg" 
                    alt="Kunal Bothra" 
                    width={350} 
                    height={350} 
                    className="rounded-full"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "⚛️", title: "React", desc: "Building interactive UIs with modern React" },
              { icon: "🔄", title: "Next.js", desc: "Creating fast, SEO-friendly web applications" },
              { icon: "🎨", title: "Tailwind CSS", desc: "Crafting beautiful, responsive designs" },
              { icon: "🔌", title: "Node.js", desc: "Building scalable backend services" },
              { icon: "C++", title: "C++", desc: "Building efficient, scalable, and intelligent solutions using Python. Passionate about data structures, automation, and AI-driven applications." }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.05 }}
                className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl text-center border border-white/5 hover:bg-gray-700/60 transition-colors duration-300 shadow-lg hover:shadow-blue-500/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-blue-400 text-4xl mb-4 transform translate-z-10">{skill.icon}</div>
                <h3 className="font-bold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Here are some of my recent works. Check out my projects page for more.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03, rotateY: 2 }}
              className="bg-gray-800/40 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 border border-white/10"
            >
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src="/project1.png" 
                  alt="Event Management Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Event Management Website</h3>
                <p className="text-gray-400 mb-4">It is a university event management app that streamlines event registration, ticketing, payments, and QR-based entry.</p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03, rotateY: -2 }}
              className="bg-gray-800/40 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 border border-white/10"
            >
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src="/project2.png" 
                  alt="Portfolio Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Portfolio Website</h3>
                <p className="text-gray-400 mb-4">A modern portfolio website built with Next.js and Tailwind CSS.</p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center shadow-lg shadow-blue-500/30"
              >
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 backdrop-blur-md p-10 rounded-2xl max-w-4xl mx-auto border border-white/5"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Let's Work Together</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Have a project in mind? I'm available for freelance work and open to new opportunities.</p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
