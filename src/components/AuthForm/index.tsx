import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image
          src="/images/logo.png"
          alt="instagram-logo"
          h={24}
          cursor={'pointer'}
        />
        <Input placeholder="Email" fontSize={14} />
        <Input placeholder="Password" type={'password'} fontSize={14} />
        {isRegister && (
          <Input
            placeholder="Confirm Password"
            type={'password'}
            fontSize={14}
          />
        )}
        <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14}>
          {isRegister ? 'Register' : 'Login'}
        </Button>
        {/* ----- OR Text ----- */}
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          my={4}
          gap={1}
          width={'full'}
        >
          <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
          <Text mx={1}>OR</Text>
          <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
        </Flex>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          cursor={'pointer'}
        >
          <Image src="/images/google.png" w={5} alt="google" />
          <Text mx={2} color={'blue.500'}>
            Login with Google
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};
