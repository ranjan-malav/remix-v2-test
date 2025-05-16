import { useFetcher } from '@remix-run/react';
import {
    Card,
    Text,
    InlineStack,
    Box,
    Button,
    Badge,
    IndexTable,
    EmptySearchResult,
    Spinner,
} from '@shopify/polaris';
import { Tone } from '@shopify/polaris/build/ts/src/components/Badge';
import { useEffect } from 'react';
import { JobStatus } from '~/types/enum';
import { Job } from '~/types/models';

export default function RecentJobsList() {
    const fetcher = useFetcher<Job[]>();

    useEffect(() => {
        // Only load if there's no submission in progress and no data yet
        if (fetcher.state === "idle" && !fetcher.data) {
            fetcher.load("/api/jobs"); // Path to your resource route
        }
    }, [fetcher]);

    const resourceName = {
        singular: 'Active and recent bulk edits',
        plural: 'Active and recent bulk edits',
    };

    const emptyStateMarkup = (
        fetcher.state === 'loading' ?
            <InlineStack align='center'>
                <Spinner accessibilityLabel="Loading recent jobs" size="large" />
            </InlineStack>
            : <EmptySearchResult
                title={'No jobs found'}
                description={''}
                withIllustration
            />
    );

    const rows = fetcher.data || [];

    const getJobStatusLabel = (status: JobStatus): string => {
        switch (status) {
            case JobStatus.Completed:
                return 'Completed'

            case JobStatus.InProcess:
                return 'Processing'

            case JobStatus.Scheduled:
                return 'Scheduled'

            case JobStatus.Stopped:
                return 'Stopped'

            case JobStatus.Cancelled:
                return 'Cancelled'

            default:
                return '';
        }
    }

    const getStatusBadge = (status: JobStatus) => {
        var tone: Tone = 'read-only';
        switch (status) {
            case JobStatus.Completed:
                tone = 'success'
                break;

            case JobStatus.InProcess:
                tone = 'attention'
                break;

            case JobStatus.Scheduled:
                tone = 'warning'
                break;

            case JobStatus.Stopped:
                tone = 'warning'
                break;

            default:
                break;
        }
        return <Badge tone={tone}>{getJobStatusLabel(status)}</Badge>
    }

    return (
        <Card padding="0">
            {/* Top Header */}
            <Box paddingBlock="200" paddingInline="300">
                <InlineStack align="space-between" blockAlign="center">
                    <Text as="h2" variant="headingMd">
                        Active and recent bulk edits
                    </Text>
                    <Button variant="primary">See all</Button>
                </InlineStack>
            </Box>

            <IndexTable
                resourceName={resourceName}
                itemCount={rows.length}
                selectable={false}
                emptyState={emptyStateMarkup}
                headings={[
                    { title: 'Job Name' },
                    { title: 'Time' },
                    { title: 'Status' },
                    { title: 'Products Affected' },
                ]}
                hasZebraStriping
            >
                {rows.map((row, index) => (
                    <IndexTable.Row
                        id={row.id}
                        key={row.id}
                        position={index}
                    >
                        <IndexTable.Cell><Text as='p'>{row.name}</Text></IndexTable.Cell>
                        <IndexTable.Cell>{row.executionTime}</IndexTable.Cell>
                        <IndexTable.Cell>{getStatusBadge(row.status)}</IndexTable.Cell>
                        <IndexTable.Cell>{row.productsAffected}</IndexTable.Cell>
                    </IndexTable.Row>
                ))}
            </IndexTable>
        </Card>
    );
}
