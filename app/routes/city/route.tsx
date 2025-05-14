import { Outlet } from "@remix-run/react";


export default function App() {
  return (
    <div>
      <h1>City route parent Content</h1>
      <Outlet />
    </div>
  )
}

export function loader() {
  console.log("Loader for _city/route.jsx")
  return null
}