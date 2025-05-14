import { Outlet } from "@remix-run/react";


export default function App() {
    return (
        <div>
            <h1>Settings Content</h1>
            <Outlet />
        </div>
    )
}

export function loader() {
    console.log("Loader for city.settings.jsx")
    return null
}
