'use client';

// import { ThemeProvider } from 'next-themes';
import { SWRConfig } from 'swr';
import { swrDefaultConfig } from '@/app/config/swr';
import { ToastContainer } from 'react-toastify';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		// <ThemeProvider attribute='class' enableSystem enableColorScheme>
		<SWRConfig value={swrDefaultConfig}>
			{children}
			<ToastContainer />
		</SWRConfig>
		// </ThemeProvider>
	);
};

export default Providers;
