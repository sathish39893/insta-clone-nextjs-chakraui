import NextLink from 'next/link';
import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '@/assets/Logos';
import { AiFillHome } from 'react-icons/ai';
import { ReactNode } from 'react';
import { BiLogOut } from 'react-icons/bi';

type SideBarItem = {
  icon: ReactNode;
  text: string;
  link?: string;
};

export const SideBar = () => {
  const sideBarItems: SideBarItem[] = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
    },
    {
      icon: (
        <Avatar size={'sm'} name="Sathish Panthagani" src="profilePic.jpg" />
      ),
      text: 'Profile',
      link: '/myprofilelink',
    },
  ];

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <Link
          as={NextLink}
          href="/"
          p={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}
        >
          <InstagramLogo />
        </Link>
        <Link
          as={NextLink}
          href="/"
          p={2}
          w={10}
          display={{ base: 'block', md: 'none' }}
          cursor={'pointer'}
          borderRadius={6}
          _hover={{ bg: 'whiteAlpha.200' }}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sideBarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={'flex'}
                as={NextLink}
                href={item?.link || ''}
                alignItems={'center'}
                gap={4}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                _hover={{ bg: 'whiteAlpha.400' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        {/* Logout */}
        <Tooltip
          hasArrow
          label={'Logout'}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            as={NextLink}
            href={'/auth'}
            alignItems={'center'}
            gap={4}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            _hover={{ bg: 'whiteAlpha.400' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt={'auto'}
          >
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>{'Logout'}</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};
