
// URL - "/concerts/mine" without parent layout
export default function ConcertMine() {
    return (
        <>
            <p>Concert Mine content without Concerts Layout</p>
        </>
    )
}


export function loader() {
    console.log("Loader for concerts_.mine.tsx")
    return null
}