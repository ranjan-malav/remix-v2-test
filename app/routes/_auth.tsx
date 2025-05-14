import { Outlet } from "@remix-run/react";

// Layout file for _auth routes
export default function ConcertIndex() {
    return (
        <div>
            <h1>Auth Parent Content</h1>

            <Outlet />
        </div>
    )
}

export function loader() {
    console.log("Loader for _auth.jsx")
    return null
}