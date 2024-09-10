import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const SharedLayout = () => {
    return (
        <>
        {/* nav/header */}
        <Navbar></Navbar>
         <main className='main-container'>
            <Outlet /> 
        </main>
        {/*<h2>Hier könnte ein Footer sein</h2> */}
        {/* footer */} 
        </>
    );
}

export default SharedLayout;
