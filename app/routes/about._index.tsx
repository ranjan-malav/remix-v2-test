
// URL - "/about"
export default function Index() {
    return (
        <>
            <p>About _index Page</p>
        </>
    )
}

export function loader() {
    console.log("Loader for about._index.jsx")
    return null
}