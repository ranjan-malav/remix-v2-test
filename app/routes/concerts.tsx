import { Outlet } from "@remix-run/react";

// Layout file for /concerts
export default function ConcertParent() {
    return (
        <div>
            <h1>Concert Parent Content</h1>

            <Outlet />
        </div>
    );
}

export function loader() {
    console.log("Loader for concerts.jsx")
    return null
}