import { SideBar } from '@/components/SideBar';
import { Box, Flex } from '@chakra-ui/react';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex>
      <Box w={{ base: '70px', md: '240px' }}>
        <SideBar />
      </Box>
      <Box flex={1} w={{ base: '100%-70px', md: '100%-240px' }}>
        {children}
      </Box>
    </Flex>
  );
}
