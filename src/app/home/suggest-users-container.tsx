import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react';
import { SuggestedUser } from '@/components/SuggestedUser';

export const SuggestedUsersContainer = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      {/* Header */}
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={'2'}>
          <Avatar name="sathish panthagani" size={'sm'} />
          <Text fontSize={12} fontWeight={'bold'}>
            sathishpanthagani_
          </Text>
        </Flex>
        <Link
          as={NextLink}
          href={'/'}
          color={'blue.400'}
          cursor={'pointer'}
          style={{ textDecoration: 'none' }}
          _hover={{ color: 'white' }}
        >
          Logout
        </Link>
      </Flex>
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={'bold'}
          _hover={{ color: 'gray.400' }}
          cursor={'pointer'}
        >
          See All
        </Text>
      </Flex>
      {/* Content */}
      <SuggestedUser name="User 1" followers={100} avatar={'/'}/>
      <SuggestedUser name="User 2" followers={899} avatar={'/'}/>
      <SuggestedUser name="User 3" followers={789898} avatar={'/'}/>
      {/* Footer */}
      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        © 2023 Built by {" "}
        <Link
          href={'https://www.youtube.com/@SathishPanthagani'}
          isExternal
          fontSize={12}
        >
          Sathish Panthagani
        </Link>
      </Box>
    </VStack>
  );
};
