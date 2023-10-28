import Logo from '../assets/aniflix_logo.png'

export const Footer = () => {
  return (
    <footer className="footer_logo">
                <img src={Logo} alt="logo" width="150" />
                <div className="footer_text">Copyright  © 2023 | Aniflix.com
                </div> 
        </footer> 
  )
}
