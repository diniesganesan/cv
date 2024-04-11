import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const Help = ({ commands }: { commands: string[] }) => {
  return (
    <VStack alignItems="flex-start" spacing={0}>
      <Text>All commands:</Text>
      <Text>{commands}</Text>
    </VStack>
  );
};
