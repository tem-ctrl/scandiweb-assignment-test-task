'use client';

// import { ThemeProvider } from 'next-themes';
import { SWRConfig } from 'swr';
import { swrDefaultConfig } from '@/app/config/swr';
import { ToastContainer } from 'react-toastify';
import ProductProvider from '@/app/contexts/ProductContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		// <ThemeProvider enableSystem enableColorScheme disableTransitionOnChange>
		<SWRConfig value={swrDefaultConfig}>
			<ProductProvider>
				{children}
				<ToastContainer />
			</ProductProvider>
		</SWRConfig>
		// </ThemeProvider>
	);
};

export default Providers;
