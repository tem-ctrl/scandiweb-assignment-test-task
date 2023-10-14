import { Metadata, NextPage } from 'next';
import ProductsList from '@/app/components/ProductsList';

const HomePage: NextPage = () => <ProductsList />;

export default HomePage;

export const metadata: Metadata = {
	title: 'Home - Scandiweb Junior Developer Test Assignment',
	description: `This is a products store web application developed by me Gilbert Temgoua as part of
  requirements for the position of Junior Developer position application.
  This position is a fully remote job but the advertising company Scandiweb has
  it headquarters in Riga, Latvia. The application is built with NextJs,
  TypeScript, Sass, PHP, MySQL. The application consists of two pages, the home
  page in which displays the list of products and a second page containing the product
  creation form.
  `,
};
