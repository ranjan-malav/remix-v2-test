
// URL - "/concerts/trending"
export default function ConcertsTrendingContent() {
    return (
        <>
            <p>Concerts Trending Content</p>
        </>
    )
}

export function loader() {
    console.log("Loader for concerts.trending.tsx")
    return null
}