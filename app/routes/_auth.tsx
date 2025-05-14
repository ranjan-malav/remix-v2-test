import { Outlet } from "@remix-run/react";

// Layout file for _auth routes
export default function AuthLayout() {
    return (
        <div>
            <h1>Auth Layout</h1>

            <Outlet />
        </div>
    )
}

export function loader() {
    console.log("Loader for _auth.tsx")
    return null
}