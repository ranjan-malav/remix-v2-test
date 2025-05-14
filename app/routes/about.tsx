import { Outlet } from "@remix-run/react"

// URL - "/about"
export default function Index() {
    return (
        <>
            <p>About Page</p>
            <Outlet />
        </>
    )
}

export function loader() {
    console.log("Loader for about.jsx")
    return null
}