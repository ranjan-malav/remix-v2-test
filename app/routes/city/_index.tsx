import { Outlet } from "@remix-run/react"

export default function CityContent() {
    return (
        <>
            <p>City Content, This file doesn't work?</p>
            <Outlet />
        </>
    )
}

export function loader() {
    console.log("Loader for city/_index.tsx")
    return null
}