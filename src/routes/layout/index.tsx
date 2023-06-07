import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout () {

    return (
        <>
            <Header/>
                <main className={`p-6 my-6 rounded-lg shadow-md min-h-screen container mx-auto bg-slate-400`}>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}