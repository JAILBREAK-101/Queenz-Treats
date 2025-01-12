import {Outlet} from "react-router-dom";

export default function AppContainer() {

    return (
        <>
            <main className="app-container">
                <Outlet/>
            </main>
        </>
    );
}

