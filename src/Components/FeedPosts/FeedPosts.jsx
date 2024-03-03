import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost  from './FeedPost'
import { useEffect, useState } from 'react'

const FeedPosts = () => {

  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])



  return (
    <Container maxW={"container.sm"} py={2} px={2} >
      {loading && [0,1,2,3,4].map((_,id)=>(
        <VStack key={id} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10} />
            <VStack gap={2} alignItems={'flex-start'}>
              <Skeleton h={'10px'} w={'200px'}/>
              <Skeleton h={'10px'} w={'200px'}/>
            </VStack>
          </Flex>
          <Skeleton w={'full'}>
            <Box h={'500px'}>Contents Wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {!loading && (
        <>
          <FeedPost img='/img1.png' username='marla_singer' avatar='/img1.png'/>
          <FeedPost img='/img2.png' username='tyler_durden' avatar='/img2.png'/>
          <FeedPost img='/img3.png' username='_heisenberg' avatar='/img3.png'/>
          <FeedPost img='/img4.png' username='i_am_batman' avatar='/img4.png'/>
        </>
      )}
    </Container>
  )
}

export default FeedPosts
