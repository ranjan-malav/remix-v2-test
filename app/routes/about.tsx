import { Outlet } from "@remix-run/react"

export default function AboutLayout() {
    return (
        <>
            <p>About Layout</p>
            <Outlet />
        </>
    )
}

export function loader() {
    console.log("Loader for about.tsx")
    return null
}