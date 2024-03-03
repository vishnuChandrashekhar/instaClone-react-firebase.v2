import { Flex, GridItem, Text, Image, useDisclosure, Box, Avatar, VStack } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Divider
} from '@chakra-ui/react'
import { FaRegComment, FaRegHeart  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comments from '../Comments/Comments';
import PostFooter from '../FeedPosts/PostFooter';


const ProfilePost = ({img}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <GridItem 
      cursor={'pointer'} 
      borderRadius={4} 
      overflow={'hidden'} 
      border={'1px solid'}
      position={'relative'}
      aspectRatio={1/1} 
      onClick={onOpen}
    >
      {/* Overlay with hover effect */}
      <Flex opacity={0} _hover={{opacity: 1}} position={'absolute'} top={0} left={0} right={0} bottom={0} bg={'blackAlpha.700'} transition={"all 0.3s ease"} zIndex={1} justifyContent={'center'}> 
        <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
          <Flex>
            <FaRegHeart size={30} />
            <Text fontWeight={'bold'} ml={2}>7</Text>
          </Flex>
          <Flex>
            <FaRegComment size={30}/>
            <Text fontWeight={'bold'} ml={2}>7</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Images */}
      <Image src={img} alt='Profile Post' w={'100%'} h={'100%'} objectFit={'cover'} />
    </GridItem>

    {/* Modal Implementation Very Important Concept */}
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:'3xl', md:'5xl'}}>
       <ModalOverlay />
        <ModalContent>

          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
            <Flex gap={4} w={{base:'90%', sm:'70%', md:'full'}} mx={'auto'}>
              <Box borderRadius={4} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5}>
                <Image src={img} alt='Profile Post'/>
              </Box>
              <Flex flex={1} flexDirection={'column'} px={10} display={{base:'none', md:'flex'}}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar src='/profilepic.png' size={'sm'} name='vishnu Chandrashekhar' />
                    <Text fontWeight={'bold'} fontSize={12}>
                      vishnu_Chandrashekhar
                    </Text>
                  </Flex>
                  <Box _hover={{bg: 'whiteAplha.300'}} color={'red.600'} borderRadius={4} p={1}>
                    <MdDelete size={25} />
                  </Box>
                </Flex>
                <Divider my={4} bg={'gray.500'} />
                <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                  <Comments createdAt= "1d Ago" username='vishnu_chandrashekar' profilepic="/profilepic.png.." text={"Dummy Images from unsplash"}/>
                  <Comments createdAt= "12d Ago" username='i_am_batman' profilepic="/vishnuProfilepic.jpg" text={"Dummy Images from unsplash"}/>
                  <Comments createdAt= "3h Ago" username='marla_singer' profilepic="/profilepic.png" text={"Dummy Images from unsplash"}/>
                 
                </VStack>
                <Divider  my={4} bg={"gray.800"}/>
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost
