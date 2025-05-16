import { InlineStack } from "@shopify/polaris";
import { CashDollarIcon, ClockIcon, CollectionListIcon, ProductIcon } from '@shopify/polaris-icons';
import { TotalJobsCard } from "./TotalJobsCard";
import { TimeSavedCard } from "./TimeSavedCard";
import { ProductsUpdatedCard } from "./ProductsUpdated";
import { PlanCard } from "./PlanCard";
import { StatsCardType } from "~/types/enum";
import { StatsCard } from "~/types/models";

const statsCards: StatsCard[] = [
    {
        "title": "Bulk edits",
        "type": StatsCardType.TOTAL_JOBS,
        "api": "/api/stats?type=total-jobs",
        "icon": CollectionListIcon,
    },
    {
        "title": "Time saved",
        "type": StatsCardType.TIME_SAVED,
        "api": "/api/stats?type=time-saved",
        "icon": ClockIcon,
        "tooltip": {
            "title": "Operational Time Savings",
            "desc": "Time saved by doing bulk edits compared to manually editing each field."
        }
    },
    {
        "title": "Products updated",
        "type": StatsCardType.PRODUCTS_UPDATED,
        "api": "/api/stats?type=products-updated",
        "icon": ProductIcon
    },
    {
        "title": "Plan",
        "type": StatsCardType.PLAN_DETAIL,
        "api": "/api/stats?type=plan",
        "icon": CashDollarIcon
    }
]

export function StatsComponent() {
    return (
        <InlineStack gap="400" wrap>
            {statsCards.map((data) => {
                switch (data.type) {
                    case StatsCardType.TOTAL_JOBS:
                        return <TotalJobsCard data={data} />
                    case StatsCardType.TIME_SAVED:
                        return <TimeSavedCard data={data} />
                    case StatsCardType.PRODUCTS_UPDATED:
                        return <ProductsUpdatedCard data={data} />
                    case StatsCardType.PLAN_DETAIL:
                        return <PlanCard data={data} />
                    default:
                        return null;
                }
            })}
        </InlineStack>
    );
}