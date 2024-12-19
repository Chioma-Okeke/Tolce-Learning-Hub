import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import Nav from "../components/Nav";

function PageLayout() {
    return (
        <main>
            <BackToTop />
            <Nav />
            <Outlet />
        </main>
    );
}

export default PageLayout;
