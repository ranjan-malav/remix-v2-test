import { Outlet } from "@remix-run/react"

// URL - "/contact"
export default function ContactLayout() {
    return (
        <>
            <p>Contact Layout</p>
            <Outlet />
        </>
    )
}

export function loader() {
    console.log("Loader for contact.tsx")
    return null
}