import { Box, Flex, Link, Image, Avatar, Tooltip, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaInstagram, FaRegHeart, FaPlusSquare   } from 'react-icons/fa'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BiLogOut } from "react-icons/bi";
import React from 'react'
import useLogout from '../../Hooks/useLogout';

const Sidebar = () => {

 const { handleLogout, isLoggingOut } = useLogout()

  const sidebarItems = [
    {
      icon: <AiFillHome size={30}/>,
      text: "Home",
      link: '/'
    },
    {
      icon: <AiOutlineSearch size={30}/>,
      text: "Search",
    },
    {
      icon: <FaRegHeart size={30}/>,
      text: "Notification",
    },
    {
      icon: <FaPlusSquare size={30}/>,
      text: "Create",
    },
    {
      icon: <Avatar size='sm' name='Vishnu' src='/profilepic.png' />,
      text: "Profile",
      link: "/vishnu"
    },
  ]


  return (
    <Box 
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{base:2,md:4}}
    >
      <Flex direction={'column'} gap={10} w={'full'} h={'full'}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor={'pointer'} borderRadius={6} _hover=  {{bg:"whiteAlpha.200"}}>
          <Image src='/instagram-text-logo.svg' w={150}></Image>
        </Link>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"block",md:"none"}} borderRadius={6} _hover={{bg:"whiteAlpha.200"}} cursor={'pointer'}>
          <FaInstagram size={35}/>
        </Link>
          <Flex direction={'column'} gap={5} cursor={'pointer'}>
            {sidebarItems.map((item, index)=>(
              <Tooltip 
                hasArrow
                label={item.text}
                placement='right'
                key={index}
                ml={1}
                openDelay={400}
                display={{base:'block', md:"none"}}
              >
                <Link 
                  display={'flex'}
                  to={item.link || null}
                  as={RouterLink}
                  alignItems={'center'}
                  gap={4}
                  _hover={{bg:'whiteAlpha.400'}}
                  borderRadius={6}
                  p={2}
                  w={'full'}
                  justifyContent={{base:"center", md:"flex-start"}}
                >{item.icon}
                  <Box display={{base:"none", md:"block"}}>
                    {item.text}
                  </Box>
                </Link>
              </Tooltip>
            ))}
          </Flex>
          {/* Logout */}
          <Tooltip 
                hasArrow
                label={"Logout"}
                placement='right'
                ml={1}
                openDelay={400}
                display={{base:'block', md:"none"}}
              >
                <Flex 
                  onClick={handleLogout}
                  alignItems={'center'}
                  gap={4}
                  _hover={{bg:'whiteAlpha.400'}}
                  borderRadius={6}
                  p={2}
                  w={'full'}
                  mt={'auto'}
                  justifyContent={{base:"center", md:"flex-start"}}
                > <BiLogOut size={25} />
                  <Button display={{base:"none", md:"block"}}
                  variant={'ghost'}
                  _hover={{bg:'transparent'}}
                  isLoading={isLoggingOut}
                  >
                    {'Logout'}
                  </Button>
                </Flex>
              </Tooltip>
      </Flex>

    </Box>
  )
}

export default Sidebar
