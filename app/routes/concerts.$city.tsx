import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";

export function loader({
    params,
}: LoaderFunctionArgs) {
    console.log("Loader for concerts.$city.jsx")
    return {
        city: params.city,
    };
}

// URL - "/concerts/delhi"
export default function ConcertCity() {
    const { city } = useLoaderData<typeof loader>();
    return (
        <>
            <p>Concerts City</p>
            <p>{city}</p>
        </>
    )
}