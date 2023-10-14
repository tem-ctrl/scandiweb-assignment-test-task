import Header from '@/app/components/Header';
import './globals.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { Inter } from 'next/font/google';
import Footer from '@/app/components/Footer';
import Providers from '@/app/components/Providers';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
