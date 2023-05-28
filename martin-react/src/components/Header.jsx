import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import logo from "./images/logo.svg";
import logo_1 from "./images/logo_1.svg";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row p-3">
                <div className="col-md-6">
                    <a href="http://www.nike.com.ar/logo"><img src={logo} alt={"logo"} width={24} /></a>
                </div>

                <div className="col-md-6 text-end">
                    <a href="#">Buscar Tienda</a> | <a href="#">Contacto</a> 

                </div>

            </div>

            <div className="row p-3">
                <div className="col-md-4">
                    <a href="#"><img src={logo_1} alt={"logo_1"} width={50} /></a>
                </div>

                <div className="col-md-4 text-center">
                    <NavBar />
                </div>
                    

                    <div className="col-md-4 text-end">
                        <CartWidget />
                    </div>
            </div>
        </div>
                    

    )
}

export default Header;