import { EditIcon } from '@chakra-ui/icons'
import { Button, Container, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import StudenteDetails from '../components/StudenteDetails'

function Editpage() {
  return (
      <Container maxW={"5xl"}>
        <VStack maxH={"90vh"} overflow={"scroll"}>
            <Table variant={"striped"} colorScheme='gray'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>Student</Th>
                    <Th>Status</Th>
                    <Th>Company Name</Th>
                    <Th>Placed Date</Th>
                    <Th isNumeric>Package Offered(LPA)</Th>
                    <Th>Edit</Th>
                </Tr>
                </Thead>
                <Tbody overflowY={"scroll"}>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(v=>(
                    <StudenteDetails/>
                ))}
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
                </Tfoot>
            </Table>
        </VStack>
    </Container>


  )
}

export default Editpage