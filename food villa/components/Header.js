import logo from '../public/images/logo.png';

const Logo = ()=> (
    <a href="/" className="navbar-brand">
     <img src={logo} width='60px' alt="logo image" />
    </a>
 );

const Header = ()=>{
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <ul className="nav">
                    <li className="nav-item"><a href="">HOME</a></li>
                    <li className="nav-item"><a href="">ABOUT</a></li>
                    <li className="nav-item"><a href="">FAQ'S</a></li>
                    <li className="nav-item"><a href="">CONTACT</a></li>
                </ul>
                <span className="nav-item cart-icon"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></span>
            </div>
        </div>
    )
}

export default Header;