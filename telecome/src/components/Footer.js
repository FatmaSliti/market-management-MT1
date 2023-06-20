
import stylesFooter from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={stylesFooter.section}>
            <p>
                Copyright &copy; Tunisie Télécom{' '}
                <span id={stylesFooter.date}>{new Date().getFullYear()}</span>. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
