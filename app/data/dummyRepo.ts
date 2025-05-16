import { JobStatus } from "~/types/enum";
import { Job } from "~/types/models";

export const getJobsCount = (): number => 15;
export const getTimeSaved = (): string => '45 minutes';
export const totalProductUpdated = (): number => 1200;
export const getPlanDetails = (): string => 'Pro plan (Till: 21 Mar 2025)';

export const getActiveRecentJobs = (): Job[] => {
    return [
        {
            id: 'abc', name: 'Updates for Christmas', executionTime: '21 Mar 2026 7:00PM',
            status: JobStatus.Scheduled, productsAffected: 42
        },
        {
            id: 'xyz', name: 'Update Taxes', executionTime: '21 Mar 2024 7:00PM',
            status: JobStatus.Completed, productsAffected: 100
        }
    ]
}