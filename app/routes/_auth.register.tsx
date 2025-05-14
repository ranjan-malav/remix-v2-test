
// URL - "/register" _auth is skipped in the path but layout file is used
export default function RegisterContent() {
    return (
        <>
            <p>Register Content</p>
        </>
    )
}

export function loader() {
    console.log("Loader for _auth.register.tsx")
    return null
}