import { Outlet } from "@remix-run/react";

// Layout file for /concerts
export default function ConcertLayout() {
    return (
        <div>
            <h1>Concert Layout</h1>

            <Outlet />
        </div>
    );
}

export function loader() {
    console.log("Loader for concerts.tsx")
    return null
}