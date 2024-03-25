import { SideBar } from '@/components/SideBar';
import { createClient } from '@/utils/supabase/server';
import { Box, Flex } from '@chakra-ui/react';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  const isLoggedIn = !(error || !data?.user);

  // if (!isLoggedIn) {
  //   redirect('/');
  // }

  return (
    <Flex>
      {isLoggedIn && (
        <Box w={{ base: '70px', md: '240px' }}>
          <SideBar />
        </Box>
      )}
      <Box flex={1} w={{ base: '100%-70px', md: '100%-240px' }}>
        {children}
      </Box>
    </Flex>
  );
}
