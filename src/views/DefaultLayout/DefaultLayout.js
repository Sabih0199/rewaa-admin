import { TopNavbar } from "../../components/TopNavbar";
import { Home } from "../Home";

const DefaultLayout = () => {
    return (
        <main id="rwa-main" className="rwa-default-layout">
            <TopNavbar />
            <div className="rwa-content-wrapper">
                <Home />
            </div>
        </main>
    )
};

export default DefaultLayout;