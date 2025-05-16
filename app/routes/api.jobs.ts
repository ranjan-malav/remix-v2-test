import { getActiveRecentJobs } from "~/data/dummyRepo";
import { serverError } from "./api.stats";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function loader() {
    await delay(2000);
    try {
        return getActiveRecentJobs();
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw serverError("Internal server error while fetching jobs");
    }
}