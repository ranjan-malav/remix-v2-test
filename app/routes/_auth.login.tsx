
// URL - "/login" _auth is skipped in the path but layout file is used
export default function ConcertIndex() {
    return (
        <>
            <p>Login Page</p>
        </>
    )
}

export function loader() {
    console.log("Loader for _auth.login.jsx")
    return null
}