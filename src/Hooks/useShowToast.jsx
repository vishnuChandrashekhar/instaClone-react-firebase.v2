import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'


const useShowToast = () => {

  const toast = useToast()

  //useCallback is used to prevent infinate loop, by cacheing the function
  const showToast = useCallback((title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 4000,
      isClosable: true
    })
  })


  return showToast
}

export default useShowToast
