import { Text, Card, Button, BlockStack, InlineStack, Icon, TextField, Box, Divider } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export default function ProductsFilter() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = useCallback((value: string) => setSearchQuery(value), []);
    const handleClearButtonClick = useCallback(() => setSearchQuery(''), []);

    return (
        <Box borderColor="border" borderWidth="025" borderRadius="300" padding="100">
            <BlockStack gap="200">
                <Box paddingInline="200">
                    <InlineStack align="center" blockAlign="center" gap="200">
                        <Icon source={SearchIcon} />
                        <div style={{ flexGrow: 1, minWidth: 0 }}>
                            <TextField
                                variant="borderless"
                                label=""
                                labelHidden
                                value={searchQuery}
                                onChange={handleSearchInput}
                                placeholder="Search by title, description, vendor, category, tags, etc."
                                autoComplete="off"
                                clearButton
                                onClearButtonClick={handleClearButtonClick}
                            />
                        </div>
                        <Button>Search</Button>
                    </InlineStack>
                </Box>
                <Divider />
                <Box paddingInline="200">
                    <InlineStack>
                        <Button variant="plain">Clear all</Button>
                    </InlineStack>
                </Box>
            </BlockStack>
        </Box>
    );
}