import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa'


const PostFooter = ({username, isProfilePage}) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(1000)

  const handleLike = () => {
    if(liked){
      setLiked(false)
      setLikes(likes - 1)
    }else{
      setLiked(true)
      setLikes(likes + 1)
    }
  }

  return (
    <Box mb={10} mt={'auto'}>
      <Flex alignItems={'center'} gap={5} w={'full'} pt={2} mb={2} mt={1}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={26}>
          {!liked ? (<FaRegHeart/>) : (<FaHeart style={{color: 'red'}}/>)}
        </Box>
        <Box cursor={'pointer'} fontSize={26}>
          <FaRegComment />
        </Box>

      </Flex>
      <Text fontWeight={600} fontSize={'small'}>
            {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={'small'}>
            {username}{" "}
            <Text as={'span'} fontWeight={400}>
              Stunning
            </Text>
            <Text fontSize={'sm'} fontWeight={600} color={'gray.500'}>
              View all 1,000 comments
            </Text>
          </Text>
        </>
      )}
      <Flex alignItems={'center'} gap={2} justifyContent={'space-between'}>
        <InputGroup mb={2} mt={1}>
          <Input variant={'flushed'} placeholder="Add a comment..." fontSize={14}/>
          <InputRightElement>
            <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color: 'white'}} bg={'transparent'}>Post</Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  )
}

export default PostFooter
