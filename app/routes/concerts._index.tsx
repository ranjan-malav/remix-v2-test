// URL - "/concerts"
export default function ConcertIndex() {
    return (
        <>
            <p>Concert Index</p>
        </>
    )
}

export function loader() {
    console.log("Loader for concerts._index.jsx")
    return null
}