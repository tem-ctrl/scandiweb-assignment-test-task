import Header from '@/app/components/layout/Header';
import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/app/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
