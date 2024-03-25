'use client';
import { FeedPost } from '@/components/FeedPost';
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const FeedPostContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading ? (
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={'flex-start'} justifyContent={'center'}>
                <Skeleton height="10px" w={'200px'} />
                <Skeleton height="10px" w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))
      ) : (
        <>
          <FeedPost
            img={'/images/post_img1.png'}
            avatar={'/images/post_img1.png'}
            username="sathishpanthagani_"
          />
          <FeedPost
            img={'/images/post_img1.png'}
            avatar={'/images/post_img1.png'}
            username="sathishpanthagani_"
          />
          <FeedPost
            img={'/images/post_img1.png'}
            avatar={'/images/post_img1.png'}
            username="sathishpanthagani_"
          />
          <FeedPost
            img={'/images/post_img1.png'}
            avatar={'/images/post_img1.png'}
            username="sathishpanthagani_"
          />
        </>
      )}
    </Container>
  );
};
