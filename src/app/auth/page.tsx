'use client';

import { AuthForm } from '@/components/AuthForm';
import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export default function Auth() {
  return (
    <Flex minHeight="100vh" justifyContent="center" alignItems="center" px={4}>
      <Container maxWidth={'Container.md'} padding={0}>
        {/* left hand navigation */}
        <Flex justifyContent="center" alignItems="center" gap={10}>
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="/images/auth.png" alt="instagram" height={650} width={400} priority />
          </Box>
          {/* right hand side */}
          <VStack spacing={4} align="stretch">
            <AuthForm />
            <Box textAlign="center">Get the App.</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image
                src="/images/microsoft.png"
                alt="microsoft"
                height={100}
                width={100}
              />
              <Image
                src="/images/playstore.png"
                alt="playstore"
                height={100}
                width={100}
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}
