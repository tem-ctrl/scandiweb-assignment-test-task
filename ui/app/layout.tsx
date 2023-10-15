import './globals.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { Inter } from 'next/font/google';
import Footer from '@/app/components/Footer';
import Providers from '@/app/components/Providers';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Scandiweb Junior Developer Test Assignment',
  metadataBase: new URL('https://gtemgoua-scandiweb-test.000webhostapp.com'),
  alternates: {
    canonical: '/',
  },
	authors: {
    name: 'Gilbert Temgoua',
    url: 'https://gtemgoua.vercel.app',
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
  twitter: {
    images: '/twitter-image.png',
  },
  keywords: ['Next.js', 'TypeScript', 'PHP', 'MySQL'],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<Providers>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
