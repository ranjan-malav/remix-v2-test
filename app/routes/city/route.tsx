import { Outlet } from "@remix-run/react";

// URL - /city
export default function CityLayout() {
  return (
    <div>
      <h1>City Layout</h1>
      <Outlet />
    </div>
  )
}

export function loader() {
  console.log("Loader for _city/route.tsx")
  return null
}