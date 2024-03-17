import {
  Flex,
  GridItem,
  Text,
  Img,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Avatar,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Comment } from '../Comment';
import { PostFooter } from '../FeedPost/PostFooter';

export const ProfilePost = ({ img }: { img: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={'pointer'}
        borderRadius={4}
        overflow={'hidden'}
        border={'1px solid'}
        borderColor={'whiteAlpha.300'}
        position={'relative'}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={'blackAlpha.700'}
          transition={'all 0.3s ease'}
          zIndex={1}
          justifyContent={'center'}
        >
          <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={'bold'} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={'bold'} ml={2}>
                10
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Img src={img} alt="profile post" height={'100%'} width={'100%'} />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: '3xl', md: '5xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
            <Flex
              gap={4}
              w={{ base: '90%', sm: '70%', md: 'full' }}
              mx={'auto'}
            >
              <Box
                borderRadius={4}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}
                flex={1.5}
              >
                <Img src={img} alt="profile post pic" />
              </Box>
              <Flex
                flex={1}
                flexDir={'column'}
                px={10}
                display={{ base: 'none', md: 'flex' }}
              >
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar
                      src="/profilepic.jpg"
                      size={'sm'}
                      name="Sathish Panthagani"
                    />
                    <Text fontWeight={'bold'} fontSize={12}>
                      sathishpanthagani_
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: 'whieAlpha.300', color: 'red.600' }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={'pointer'} />
                  </Box>
                </Flex>
                <Divider my={4} bg={'gray.500'} />
                <VStack
                  w="full"
                  alignItems={'start'}
                  maxH={'350px'}
                  overflowY={'auto'}
                >
                  <Comment
                    createdAt="1d ago"
                    username="sathishpanthagani_"
                    profilePic="/images/post_img1.png"
                    text="i am creating insta clone"
                  />
                  <Comment
                    createdAt="10h ago"
                    username="imgabro"
                    profilePic="/images/post_img1.png"
                    text="oh thats nice idea"
                  />
                  <Comment
                    createdAt="1min ago"
                    username="tentbpreei"
                    profilePic="/images/post_img1.png"
                    text="Looking good :)"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="sathishpanthagani_"
                    profilePic="/images/post_img1.png"
                    text="i am creating insta clone"
                  />
                  <Comment
                    createdAt="10h ago"
                    username="imgabro"
                    profilePic="/images/post_img1.png"
                    text="oh thats nice idea"
                  />
                  <Comment
                    createdAt="1min ago"
                    username="tentbpreei"
                    profilePic="/images/post_img1.png"
                    text="Looking good :)"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="sathishpanthagani_"
                    profilePic="/images/post_img1.png"
                    text="i am creating insta clone"
                  />
                  <Comment
                    createdAt="10h ago"
                    username="imgabro"
                    profilePic="/images/post_img1.png"
                    text="oh thats nice idea"
                  />
                  <Comment
                    createdAt="1min ago"
                    username="tentbpreei"
                    profilePic="/images/post_img1.png"
                    text="Looking good :)"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="sathishpanthagani_"
                    profilePic="/images/post_img1.png"
                    text="i am creating insta clone"
                  />
                  <Comment
                    createdAt="10h ago"
                    username="imgabro"
                    profilePic="/images/post_img1.png"
                    text="oh thats nice idea"
                  />
                  <Comment
                    createdAt="1min ago"
                    username="tentbpreei"
                    profilePic="/images/post_img1.png"
                    text="Looking good :)"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="sathishpanthagani_"
                    profilePic="/images/post_img1.png"
                    text="i am creating insta clone"
                  />
                  <Comment
                    createdAt="10h ago"
                    username="imgabro"
                    profilePic="/images/post_img1.png"
                    text="oh thats nice idea"
                  />
                  <Comment
                    createdAt="1min ago"
                    username="tentbpreei"
                    profilePic="/images/post_img1.png"
                    text="Looking good :)"
                  />
                </VStack>
                <Divider my={4} bg={'gray.400'}/>
                <PostFooter username={'sathishpanthagani_'} isProfilePage />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
