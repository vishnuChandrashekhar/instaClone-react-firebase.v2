import { Box, Flex, VStack, Text, Link } from "@chakra-ui/react"
import SuggestedHeader from './SuggestedHeader'
import SuggestedUserList from "./SuggestedUserList"
import { Link as RouterLink } from "react-router-dom"

const SuggestedUser = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} color={'white.500'} cursor={'pointer'}>See all</Text>
      </Flex>
      <SuggestedUserList name='superman' followers={1325} avatar='/profilepic.png'/>
      <SuggestedUserList name='spiderman' followers={2545} avatar='/profilepic.png' />
      <SuggestedUserList name='black_widow' followers={10454} avatar='/profilepic.png' />
      <SuggestedUserList name='tony_stark' followers={400} avatar='/profilepic.png' />

      <Box fontSize={12} color={'gray.500'} mt={5}>
        © 2024 Built By {' '} 
        <Link as={RouterLink} to={'https://github.com/vishnuChandrashekhar'} target="blank" color="blue.500" fontSize={14} textDecoration={'none'}>Vishnu_Chandrashekhar</Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUser
