import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { StatsCardProps, StatsResponse } from "~/types/models";
import { StatsContent } from "./StatsContent";


export const TotalJobsCard = ({ data }: StatsCardProps) => {
    const fetcher = useFetcher<StatsResponse>();

    useEffect(() => {
        // Only load if there's no submission in progress and no data yet
        if (fetcher.state === "idle" && !fetcher.data) {
            fetcher.load("/api/stats?type=total-jobs"); // Path to your resource route
        }
    }, [fetcher]);

    return StatsContent(
        data.type,
        data.title,
        data.icon,
        fetcher.data?.totalJobs ? `${fetcher.data?.totalJobs}` : 'N/A',
        (fetcher.state === "loading"),
    );
}