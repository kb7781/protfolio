import './globals.css';
import Script from 'next/script';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
});

export const metadata = {
    title: 'Kunal Bothra | B.Tech CS · Data Science & AI',
    description: 'Immersive 3D brutalist portfolio showcasing Full Stack and AI engineering.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
                {children}
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
                <Script src="/engine.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}
