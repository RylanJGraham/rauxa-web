
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { VercelAnalytics } from '@/components/VercelAnalytics';


const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Rauxa - Spontaneous Plans, Real Connections',
  description: 'Rauxa helps you meet people and join events instantly. Discover spontaneous plans and make real connections in your city.',
  // It's also good practice to define icons here for better PWA/manifest integration,
  // but a direct link in the head is the most straightforward way for a simple favicon.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rauxalogo.png" sizes="any" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
        <Toaster />
        <VercelAnalytics />
      </body>
    </html>
  );
}
