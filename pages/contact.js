import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-transparent text-white' : 'bg-primary-light text-gray-800'}`}>
      {/* Contact Header */}
      <section className="pt-32 pb-10 px-6 md:px-20 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg mb-8 max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!  
          </motion.p>
        </motion.div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-10 px-6 md:px-20 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              variants={itemVariants}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {status.message && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
                      >
                        {status.message}
                      </motion.div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-white placeholder-gray-500"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          placeholder="john@example.com" 
                          className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-white placeholder-gray-500"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="Project Inquiry" 
                        className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-white placeholder-gray-500"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="6" 
                        placeholder="Tell me about your project or inquiry..." 
                        className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 resize-none text-white placeholder-gray-500"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <div>
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="lg:w-1/3 space-y-8"
              variants={itemVariants}
            >
              <div className="p-8 bg-gray-900/30 backdrop-blur-md border border-white/5 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  {[
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Email", value: "Kunalbothra7781@gmail.com" },
                    { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "Phone", value: "+91 9933944442" },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", title: "Location", value: "Greater Noida,India" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gray-800/80 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          {item.title === "Location" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{item.title}</h3>
                        <p className="text-gray-400 mt-1">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-gray-900/30 backdrop-blur-md border border-white/5 rounded-2xl">
                <h3 className="text-lg font-medium mb-4 text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  {[
                    { href: "https://github.com", src: "/github.svg", alt: "GitHub" },
                    { href: "https://linkedin.com", target: "https://www.linkedin.com/in/kunal-bothra/", src: "/linkedin.svg", alt: "LinkedIn" },
                    { href: "https://www.instagram.com/kb_7781/", src: "/Instagram.svg", alt: "Instagram" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      target={social.target || "_blank"} 
                      rel="noopener noreferrer" 
                      className="bg-gray-800/80 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img src={social.src} alt={social.alt} className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

