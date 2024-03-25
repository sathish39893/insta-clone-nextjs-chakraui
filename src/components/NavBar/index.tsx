'use client';
import { signOut } from '@/app/actions';
import { Button, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const NavBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/');
  };
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <Container maxW={'container.lg'} my={4}>
      <Flex
        w={'full'}
        justifyContent={{ base: 'center', sm: 'space-between' }}
        alignItems={'center'}
      >
        <Image src={'/images/logo.png'} alt={'logo'} height={130} width={300} />
        <Flex gap={4}>
          {!isLoggedIn ? (
            <Button colorScheme="blue" size={'sm'} onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <Button colorScheme="outline" size={'sm'} onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};
