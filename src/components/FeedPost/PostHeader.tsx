import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type PostHeaderProps = {
    username: string;
    avatar: string;
}
export const PostHeader = ({username, avatar}: PostHeaderProps) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} my={2} mx={2}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} size={'sm'} />
        <Flex fontSize={12} fontWeight={'bold'} gap={2}>
          {username}
          <Box color={'gray.500'}> • 1w</Box>
        </Flex>
      </Flex>

      <Box cursor={'pointer'}>
        <Text
          fontSize={12}
          color={'blue.400'}
          fontWeight={'bold'}
          _hover={{ color: 'white' }}
          transition={'0.2s ease-in-out'}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};
