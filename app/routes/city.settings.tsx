import { Outlet } from "@remix-run/react";

// URL - "/city/settings"
export default function CitySettingsContent() {
    return (
        <div>
            <h1>City Settings Content</h1>
            <Outlet />
        </div>
    )
}

export function loader() {
    console.log("Loader for city.settings.tsx")
    return null
}
