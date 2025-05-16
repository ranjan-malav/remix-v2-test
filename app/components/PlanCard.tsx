// app/components/PlanCard.tsx
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { StatsCardProps, StatsResponse } from "~/types/models";
import { StatsContent } from "./StatsContent";


export function PlanCard({ data }: StatsCardProps) {
    const fetcher = useFetcher<StatsResponse>();

    useEffect(() => {
        if (fetcher.state === "idle" && !fetcher.data) {
            fetcher.load("/api/stats?type=plan");
        }
    }, [fetcher]);

    return StatsContent(
        data.type, 
        data.title, 
        data.icon, 
        fetcher.data?.plan || 'N/A',
        (fetcher.state === "loading"),
    );
}