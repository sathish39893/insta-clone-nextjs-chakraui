import { Box, Container } from '@chakra-ui/react';
import { PostHeader } from './PostHeader';
import { PostFooter } from './PostFooter';
import Image from 'next/image';

type FeedPostProps = {
  img: string;
  username: string;
  avatar: string;
};
export const FeedPost = ({ img, username, avatar }: FeedPostProps) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow={'hidden'}>
        <Image
          src={img}
          alt="post"
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      <PostFooter username={username} />
    </>
  );
};
