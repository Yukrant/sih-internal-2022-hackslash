import { EditIcon } from '@chakra-ui/icons'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Td, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function StudenteDetails() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Tr textAlign={"center"}>
        <Td>ABC</Td>
        <Td>Placed</Td>
        <Td>GOOGLE</Td>
        <Td>25.4</Td>
        <Td isNumeric>25.4</Td>
        <Td><Button onClick={onOpen}><EditIcon/> View/Edit details</Button></Td>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            jiadbncjsdnojfsdnfjosndjnsdjcnsjnjnoj   
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Tr>
  )
}

export default StudenteDetails