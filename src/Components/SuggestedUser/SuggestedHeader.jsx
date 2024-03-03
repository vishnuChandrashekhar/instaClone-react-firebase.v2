import { Avatar, Box, Flex, Text, Link, Button } from '@chakra-ui/react'
import useLogout from '../../Hooks/useLogout'
import useAuthStore from '../../Store/authStore'

const SuggestedHeader = () => {

  const {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore((state)=> state.user)

  if(!authUser){
    return null
  }
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} gap={5}>
        <Avatar name='vishnu_chandrashekhar' size={'sm'} src={authUser.profilePicURL} />
        <Text fontSize={12} fontWeight={'bold'}>
          {authUser.username}
        </Text>
      </Flex>
      <Button size={'xsm'} bg={'transparent'} _hover={{background: 'transparent'}} fontSize={14} fontWeight={'bold'} color={'blue.500'} cursor={'pointer'} isLoading={isLoggingOut} onClick={handleLogout}>Logout</Button>
    </Flex>
  )
}

export default SuggestedHeader
