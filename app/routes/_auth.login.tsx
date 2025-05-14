
// URL - "/login" _auth is skipped in the path but layout file is used
export default function LoginContent() {
    return (
        <>
            <p>Login Content</p>
        </>
    )
}

export function loader() {
    console.log("Loader for _auth.login.tsx")
    return null
}