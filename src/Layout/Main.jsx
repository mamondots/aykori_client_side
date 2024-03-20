import { Outlet } from "react-router-dom";
import SideMenu from "../Components/SideMenu/SideMenu";


const Main = () => {
    return (
        <div className="flex lg:px-10 py-8">
            <SideMenu></SideMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;