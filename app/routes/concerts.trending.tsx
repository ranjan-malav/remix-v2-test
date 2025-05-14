
// URL - "/concerts/trending"
export default function Index() {
    return (
        <>
            <p>Trending Concerts</p>
        </>
    )
}

export function loader() {
    console.log("Loader for concerts.trending.jsx")
    return null
}