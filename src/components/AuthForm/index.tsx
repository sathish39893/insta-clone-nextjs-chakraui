import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputs.email && inputs.password && !isRegister) {
      router.push('/home', { scroll: false });
    }
  };
  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Image
              src="/images/logo.png"
              alt="instagram-logo"
              h={24}
              cursor={'pointer'}
            />

            <Input
              name="email"
              placeholder="Email"
              type="email"
              fontSize={14}
              onChange={handleChange}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              fontSize={14}
              onChange={handleChange}
            />
            {isRegister && (
              <Input
                placeholder="Confirm Password"
                name="confirmpassword"
                type={'password'}
                fontSize={14}
                onChange={handleChange}
              />
            )}
            <Button
              type="submit"
              w={'full'}
              colorScheme="blue"
              size={'sm'}
              fontSize={14}
            >
              {isRegister ? 'Signup' : 'Login'}
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
        </form>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2}>
            <Text>
              {isRegister
                ? 'Already have an account?'
                : 'Dont have an account?'}
            </Text>
          </Box>
          <Box mx={2}>
            <Link color={'blue.500'} onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Login' : 'Sign up'}
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
