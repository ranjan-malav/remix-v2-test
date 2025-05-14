
// URL - "/about"
export default function AboutContent() {
    return (
        <>
            <p>About Content</p>
        </>
    )
}

export function loader() {
    console.log("Loader for about._index.tsx")
    return null
}