
// URL - "/concerts/mine" without parent layout
export default function Index() {
    return (
        <>
            <p>I don't use parent concerts.tsx layout</p>
        </>
    )
}


export function loader() {
    console.log("Loader for concerts_.mine.jsx")
    return null
}