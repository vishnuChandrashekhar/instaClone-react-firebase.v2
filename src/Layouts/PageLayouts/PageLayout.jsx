import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../Firebase/FirebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
{/*  What ever the contents inside the routes will be as children for the pagelayout */}
// Insted of adding the sidebar component to every page, we can add it onlyonce to the pageLayout component and wrap the children with it. this way, we can have sidebar on every page except the authpage

const PageLayout = ({children}) => {

  const [user, loading] = useAuthState(auth);
  const {pathname} = useLocation()
  // useAuthState hook is used to check is the user is logged in or not, used to render auth page by checking the user is logged in or not.
  const canRenderSidebar = pathname !== '/auth' && user
  const canRederNavbar = !user && !loading && pathname !== "/auth"

  const checkingUserIsAuth = !user && loading

  if(checkingUserIsAuth){
    return <PageLayoutSpinner />
  }


  return (
    <Flex flexDir={canRederNavbar ? 'column' : "row"}>
      {/* Sidebar on the left */}
      {/* This is checking the pathname and then render according to the condition and then render here sidebar is rendered conditionally according to pathname. */}
      {canRenderSidebar ? (
        <Box w={{base:'70px', md:'240px'}}>
          <Sidebar />
        </Box>
       ) : null}
      {/* Navbar */}
      {canRederNavbar ? <Navbar /> : null}
      {/* The page content on the right */}
      <Box flex={1} w={{base:"calc(100% - 70px)",md:"calc(100% - 240px)" }} mx={'auto'}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout


const PageLayoutSpinner = () => {

  return (
    <Flex flexDir={'column'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Spinner size={'xl'} />
    </Flex>
  )
}