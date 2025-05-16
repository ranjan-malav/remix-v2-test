import { IconSource } from "@shopify/polaris";
import { JobStatus, StatsCardType } from "./enum";

export type Job = {
    id: string;
    name: string;
    executionTime: string;
    status: JobStatus;
    productsAffected: number;
};

export type StatsResponse = {
    totalJobs?: number;
    plan?: string;
    timeSaved?: string;
    productsUpdated?: number;
    error?: string;
}

export type StatsCardProps = {
    data: StatsCard;
};

export type StatsCard = {
    title: string;
    type: StatsCardType;
    api: string;
    icon: IconSource;
    tooltip?: {
        title: string;
        desc: string;
    }
}