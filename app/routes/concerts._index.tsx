// URL - "/concerts"
export default function ConcertContent() {
    return (
        <>
            <p>Concert Content</p>
        </>
    )
}

export function loader() {
    console.log("Loader for concerts._index.tsx")
    return null
}