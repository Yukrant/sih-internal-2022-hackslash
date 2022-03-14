import {Button, HStack, Text, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import DrawerNav from './Drawer';

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack padding={3} justifyContent={"space-between"}>
        <>
        <Button
            variant='outline'
            onClick={onOpen}
        >
        <HamburgerIcon/>  
        </Button>
      <DrawerNav onClose={onClose} isOpen={isOpen}/>
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>College Name</Text>

      </>
      <Button variant={"outline"} colorScheme={"red"}>Logout</Button>
    </HStack>
  )
}

export default Nav