'use client'
import { Box, Flex, Grid, Skeleton, VStack } from '@chakra-ui/react';
import { ProfilePost } from './ProfilePost';
import { useEffect, useState } from 'react';

export const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading ? (
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
          <VStack key={idx}>
            <Skeleton w={'full'}>
              <Box h={'300px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))
      ) : (
        <>
          <ProfilePost img="/images/post_img1.png" />
          <ProfilePost img="/images/post_img1.png" />
          <ProfilePost img="/images/post_img1.png" />
          <ProfilePost img="/images/post_img1.png" />
        </>
      )}
    </Grid>
  );
};
