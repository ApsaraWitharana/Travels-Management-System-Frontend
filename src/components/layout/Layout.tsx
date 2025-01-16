import Header from "../header/Header.tsx";
import Footer from "../footer/Footer";
import Routers  from "../../router/Router.tsx";
const Layout =()=>{
    return (
        <div>
            <Header/>
            <Routers/>
            <Footer/>
        </div>
    )
}
export default Layout;