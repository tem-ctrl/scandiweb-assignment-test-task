import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import Link from 'next/link';
import { FooterLink } from '@/app/utils/types';

const FooterItem = ({ href, icon }: FooterLink) => {
	return (
		<Link href={href} target="_blank" className="footer-link">
			<span className="footer-icon">{icon}</span>
		</Link>
	);
};

const Footer = () => {
	const FOOTER_LINKS: FooterLink[] = [
		{
			href: 'https://linkedin.com/in/temgoua',
			icon: <FaLinkedin />,
		},
		{
			href: 'https://github.com/tem-ctrl',
			icon: <FaGithub />,
		},
		{
			href: 'https://wa.me/237651331062',
			icon: <FaWhatsapp />,
		},
		{
			href: 'https://gtemgoua.vercel.app',
			icon: <TbWorld />,
		},
	];

	return (
		<footer className="footer">
			<h2 className="footer-title">Scandiweb Test Assignment</h2>
			<div className="footer-links">
				{FOOTER_LINKS.map((item, i) => (
					<FooterItem key={`footer-link-${i}`} {...item} />
				))}
			</div>
			<p className="footer-copyright">© {new Date().getFullYear()} Gilbert Temgoua</p>
		</footer>
	);
};

export default Footer;
