
// URL - "/register" _auth is skipped in the path but layout file is used
export default function ConcertIndex() {
    return (
        <>
            <p>Register Page</p>
        </>
    )
}

export function loader() {
    console.log("Loader for _auth.register.jsx")
    return null
}