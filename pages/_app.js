import '../styles/globals.css'; // Ensure Tailwind is working
import Navbar from '../components/Navbar'; // Import Navbar
import { ThemeProvider } from '../context/ThemeContext'; // Import ThemeProvider
import Background3D from '../components/Background3D';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <ThemeProvider>
      <Background3D />
      <Navbar />
      <div className="pt-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
