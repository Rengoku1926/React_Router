import Header from "./assets/Header/Header";
import Footer from "./assets/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout