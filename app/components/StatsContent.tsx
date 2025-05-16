import {
    BlockStack, IconSource, SkeletonDisplayText, Tooltip,
    Box, Card, Icon, InlineStack, Text
} from "@shopify/polaris";
import { StatsCardType } from "~/types/enum";

const ToolTipContent = (tooltipData: { title: string, desc: string }) => {
    return (
        <Box padding="200">
            <BlockStack gap='200'>
                <Text variant="headingSm" as="h6">{tooltipData.title}</Text>
                <Text variant="bodyMd" as="span">{tooltipData.desc}</Text>
            </BlockStack>
        </Box>
    )
}

export const StatsContent = (
    type: StatsCardType, title: string, icon: IconSource, value: string, loading: boolean,
    tooltipData?: { title: string, desc: string }
) => {
    return (
        <Box key={type} maxWidth="250px" width="250px">
            <Card padding="300">
                <BlockStack gap='100'>
                    <Box>
                        {tooltipData ? (
                            <Tooltip content={ToolTipContent(tooltipData)} preferredPosition='below' width='wide' hasUnderline>
                                <Text variant="headingSm" as="span">{title}</Text>
                            </Tooltip>
                        ) :
                            <Text variant="headingSm" as="span">{title}</Text>
                        }
                    </Box>
                    <InlineStack wrap={false} gap="200" blockAlign="center" align="start">
                        <Box>
                            <Icon source={icon} tone="base" />
                        </Box>
                        {loading ? <Box width="150px"><SkeletonDisplayText size="medium" /></Box> : <Text as="p" variant="bodyMd">{value}</Text>}
                    </InlineStack>
                </BlockStack>
            </Card>
        </Box>
    );
}