import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { Box, Container, Flex } from '@chakra-ui/react';
import { FeedPostContainer } from './feed-post-container';
import { SuggestedUsersContainer } from './suggest-users-container';

export default async function Home() {
  
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/');
  }

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
          <SuggestedUsersContainer />
        </Box>
      </Flex>
    </Container>
  );
}
