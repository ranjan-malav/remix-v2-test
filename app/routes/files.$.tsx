import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
    console.log("Loader for files.$.tsx")
    return params;
}

// URL - "/files/random/file_name"
export default function ConcertCity() {
    const params = useLoaderData<typeof loader>();
    return (
        <>
            <p>File</p>
            <p>{JSON.stringify(params)}</p>
        </>
    )
}