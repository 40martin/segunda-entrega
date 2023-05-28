import PreciosJustos from "./images/precios_justos.webp";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
    


const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <h3>Buscar Tienda</h3>
                </div>

                <div className="col-md-2">
                    <h3>Ayuda</h3>
                </div>

                <div className="col-md-2">
                    <h3>Acerca de Nosotros</h3>
                </div>

                <div className="col-md-2">
                    <a href="https://www.nike.com.ar/143?map=productClusterIds" target={"_blank"}><img src={PreciosJustos}  
                    alt={"Precios Justos"} width={100} /></a>
                </div>
                <div className="col-md-4 text-end">
                    <a href="https://www.facebook.com/nike"><img src={facebook} alt={"Facebook"} width={60} /></a>
                    <a href="https://www.instagram.com/nike"><img src={instagram} alt={"Instagram"} width={60} /></a>
                    <a href="https://twitter.com/Nike"><img src={twitter} alt={"Twitter"} width={60} /></a>
                </div>
            </div>
        </div>
    )

}

export default Footer;