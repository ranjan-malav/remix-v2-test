import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  InlineStack,
  Icon,
  Button,
  Divider,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { useNavigate } from "@remix-run/react";
import ProductsFilter from "~/components/ProductsFilter";

export default function SelectProducts() {
  const navigate = useNavigate();

  return (
    <Page fullWidth>
      <TitleBar title="Select Products" />
      <BlockStack gap="500">
        <Box paddingBlock="100">
          <InlineStack align="space-between" blockAlign="center">
            <InlineStack gap="300" blockAlign="center">
              <Button onClick={() => navigate('/app')} icon={ArrowLeftIcon} accessibilityLabel="Go back" />
              <Text as="h1" variant="headingLg">Step 1: Product & Variant Filtering</Text>
            </InlineStack>
            <Button variant="primary" onClick={() => console.log('Clicked')}>Next step: Modifications</Button>
          </InlineStack>
        </Box>

        <Layout>
          <Layout.Section variant="fullWidth">
            <Card>
              <InlineStack gap="800">
                <Box>
                  <BlockStack gap="100" inlineAlign="center">
                    <Text as="p" variant="bodyMd">Selected Products</Text>
                    <Text as="p" variant="headingMd">15</Text>
                    <Text as="p" variant="bodyMd">Selected Variants</Text>
                    <Text as="p" variant="headingMd">42</Text>
                  </BlockStack>
                </Box>
                <div style={{ flex: 1 }}>
                  <ProductsFilter />
                </div>
              </InlineStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
