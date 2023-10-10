import { Metadata, NextPage } from 'next';
import LinkButton from '@/app/components/LinkButton';
import ProductCard from '@/app/components/ProductCart';
import { PAGES } from '@/app/config/routes';
import { prepareData } from '@/app/utils/data';
import { Product } from '@/app/utils/types';
import { API } from '@/app/config/api';

const HomePage: NextPage = async () => {
	const products = await getProducts();

	return (
		<main className="main home">
			{products && (
				<>
					{products.length > 0 ? (
						products
							.map(prepareData)
							.map((product) => <ProductCard key={product.sku} {...product} />)
					) : (
						<div className="home-empty">
							<h2 className="home-empty-title">No product found !</h2>
							<LinkButton text="Add New Product" href={PAGES.addProduct} />
						</div>
					)}
				</>
			)}
		</main>
	);
};

export default HomePage;

export const getProducts = async (): Promise<Product[]> => {
	// 'http:localhost:3000/data/products.json'
	const response = await fetch(API.getProducts);

	if (!response.ok) {
		return Promise.resolve([]);
	}

	return response.json();
};

export const metadata: Metadata = {
	title: 'Home - Scandiweb Junior Developer Test Assignment',
	description: `This products store web application developed by me Gilbert Temgoua as part of
  requirements for the position of Junior Developer position application.
  This position is a fully remote job but the advertising company Scandiweb has
  it headquarters in Riga, Latvia. The application is built with NextJs,
  TypeScript, Sass, PHP, MySQL. The application consists of two pages, the home
  page in which displays the list of products and a second page containing the product
  creation form.
  `,
};
