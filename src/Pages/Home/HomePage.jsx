import { Container, Flex, Box } from '@chakra-ui/react'
import FeedPosts from '../../Components/FeedPosts/FeedPosts'
import React, { useEffect } from 'react'
import SuggestedUser from '../../Components/SuggestedUser/SuggestedUser'


const HomePage = () => {

  useEffect(()=> {
    document.title = 'Instagram'
  }, [])
  
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20} display={{base:'none',lg:"block"}} maxW={"300px"}>
          <SuggestedUser/>
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage
