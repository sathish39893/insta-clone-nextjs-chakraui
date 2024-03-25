'use client'; // Error components must be Client Components

import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <VStack gap={4}>
        <Text>Something went wrong!</Text>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </VStack>
    </Flex>
  );
}
