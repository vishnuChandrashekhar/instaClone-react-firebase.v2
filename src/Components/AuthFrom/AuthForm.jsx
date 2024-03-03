import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import GoogleAuth from './GoogleAuth'

const AuthFrom = () => {
  const [isLogin, setIsLogiIn] = useState(true)

  useEffect(()=>{
    isLogin ? document.title = 'Log In' : document.title = 'Sign Up'
  }, [isLogin])

  return (
    <>
    <Box border={'1px solid gray'} borderRadius={5} padding={5}>
      <VStack spacing={4} >
        <Image src="/logo.png" h={24} cursor={'pointer'} alt='Instagram' />
        
        {isLogin ? <Login /> : <Signup />}
          
          {/* -------------- Or -------------- */}
          <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
            <Box flex={2} h={'2px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>OR</Text>
            <Box flex={2} h={'2px'} bg={'gray.400'} />
          </Flex>
          <GoogleAuth prefix={isLogin ? 'Log In': 'Sign Up'} />
      </VStack>
    </Box>

    {/* -------------- Switch between login and signuo page ----------- */}
    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
      <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have any account?" : "Already have an account?"}
          </Box>
          <Box onClick={()=>setIsLogiIn(!isLogin)} cursor={'pointer'}  color={'blue.500'}>
            {isLogin ? "Sign-Up" : "Log-In"}
          </Box>
      </Flex>
    </Box>
  </>
  )
}

export default AuthFrom
