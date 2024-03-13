import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type SuggestedUserProps = {
  name: string;
  followers: number;
  avatar: string;
};

export const SuggestedUser = ({
  name,
  avatar,
  followers,
}: SuggestedUserProps) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack alignItems={'flex-start'} spacing={2}>
          <Box fontSize={12} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontSize={11} color={'gray.500'}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={12}
        color={'gray.500'}
        fontWeight={600}
        cursor={'pointer'}
        _hover={{ color: 'white', bg: 'transparent' }}
        bg={'transparent'}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  );
};
