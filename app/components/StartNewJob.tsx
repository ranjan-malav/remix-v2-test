import { Text, Card, Button, BlockStack, InlineStack } from "@shopify/polaris";

export default function StartNewJob() {
    return (
        <Card>
            <BlockStack gap="400">
                <BlockStack gap="200">
                    <Text as="h2" variant="headingMd">
                        Update products with minimal efforts
                    </Text>
                    <Text variant="bodyMd" as="p">
                        Bulk edit products with 3 simple steps.<br />
                        Step 1: Filter & select products<br />
                        Step 2: Define modifications<br />
                        Step 3: Run/Schedule the job
                    </Text>
                </BlockStack>
                <InlineStack>
                    <Button variant="primary" onClick={undefined}>
                        Generate a product
                    </Button>
                </InlineStack>
            </BlockStack>
        </Card>
    );
}