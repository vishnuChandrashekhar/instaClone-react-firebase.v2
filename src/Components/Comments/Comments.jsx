import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comments = ({createdAt, username, profilepic, text}) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilepic} name={username} size={'sm'} />
      <Flex direction={'column'} >
        <Flex gap={2}>
           <Text fontWeight={'bold'} fontSize={12}>
            {username}
           </Text>
           <Text fontSize={12}>
            {text}
           </Text>
        </Flex>
           <Text fontSize={11} color={'gray'}>
            {createdAt}
           </Text>    
      </Flex>
    </Flex>
  )
}

export default Comments
