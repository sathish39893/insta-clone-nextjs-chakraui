'use client';

import { FeedPost } from '@/components/FeedPost';
import { SuggestedUsers } from '@/components/SuggestedUsers';
import { Box, Container, Flex } from '@chakra-ui/react';
import { FeedPostContainer } from './feed-post-container';

export default function Home() {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPostContainer />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
}
