import './Footer.css'

export const Footer = (props) => {
    return(
        <footer className='footer__container'>
            <ul className='footer__socials'>
                <li>
                    <a href="https://web.facebook.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/fb.png" alt="Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://x.com/home" target="_blank" rel="noreferrer">
                        <img src="/imagens/tw.png" alt="Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt="Instagram"/>
                    </a>
                </li>
            </ul>
            <div className='footer__logo'>
                <img src="/imagens/logo.png" alt="Logo da Organo"/>
            </div>
            <div>
                <h3 className='footer__label'>Desenvolvido por Alura.</h3>
            </div>
        </footer>
    )
}
