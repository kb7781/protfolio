import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`text-center p-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}>
      © 2025 Kunal Bothra | All Rights Reserved
    </footer>
  );
};

export default Footer;
  