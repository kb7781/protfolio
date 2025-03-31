import '../styles/globals.css'; // Ensure Tailwind is working
import Navbar from '../components/Navbar'; // Import Navbar
import { ThemeProvider } from '../context/ThemeContext'; // Import ThemeProvider

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
