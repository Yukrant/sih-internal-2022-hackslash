import React from 'react'
import { Box, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Text,  VStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';


const DrawerNav= ({isOpen, onClose})=> {
    const history = useNavigate();
    const handleclick=(e)=>{
        let url = e.target.parentNode.getAttribute("url");
        url = url?url:e.target.getAttribute("url");
        onClose();
        history(`${url}`)

    }
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Text>
                    Navigations
                </Text>
                <CloseButton size='md' onClick={onClose} />
              </HStack>
              </DrawerHeader>
          <DrawerBody>
            <VStack experimental_spaceY={5} textAlign={"center"}>
                <Box width={"100%"} _hover={{"bgColor":"blackAlpha.200", rounded:"md", cursor:"pointer"}} py={"1em"} onClick={(e)=>handleclick(e)} url={"/dashboard"}>
                    <Text fontSize={"large"}>
                        dashboard
                    </Text>
                </Box>
                <Box width={"100%"} _hover={{"bgColor":"blackAlpha.200", rounded:"md", cursor:"pointer"}} py={"1em"} onClick={(e)=>handleclick(e)} url={"/college/editDetails"}>
                    <Text fontSize={"large"}>
                    Add College Details
                    </Text>
                    
                </Box>
                <Box width={"100%"} _hover={{"bgColor":"blackAlpha.200", rounded:"md", cursor:"pointer"}} py={"1em"} onClick={(e)=>handleclick(e)} url={"/college/inviteoffices"}>
                    <Text fontSize={"large"}>
                        Invite Offices
                    </Text>
                </Box>
                <Box width={"100%"} _hover={{"bgColor":"blackAlpha.200", rounded:"md", cursor:"pointer"}} py={"1em"} onClick={(e)=>handleclick(e)} url={"/college/previousYear"}>
                    <Text fontSize={"large"}>
                        Previous Year Data
                    </Text>
                </Box>
                
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  )
}

export default DrawerNav