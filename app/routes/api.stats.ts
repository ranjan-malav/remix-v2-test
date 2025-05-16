// app/routes/api.stats.ts
import { LoaderFunctionArgs } from "@remix-run/node"; // or your specific runtime
import { getJobsCount, getPlanDetails, getTimeSaved, totalProductUpdated } from "~/data/dummyRepo";
import { StatsResponse } from "~/types/models";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");

    // Replace with your actual backend API endpoint
    // const backendApiUrl = `https://your-backend-api.com/stats?type=${type}`;

    await delay(2000);

    var result: StatsResponse;

    try {
        switch (type) {
            case "total-jobs":
                result = { totalJobs: getJobsCount() };
                break;
            case "plan":
                result = { plan: getPlanDetails() };
                break;
            case "time-saved":
                result = { timeSaved: getTimeSaved() };
                break;
            case "products-updated":
                result = { productsUpdated: totalProductUpdated() };
                break;
            default:
                return new Response(JSON.stringify({ error: "Invalid or missing type parameter" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
        }
        return result;
    } catch (error) {
        console.error("Error fetching stats:", error);
        throw serverError("Internal server error while fetching stats");
    }
}

export function serverError(message: string) {
    return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
    });
}