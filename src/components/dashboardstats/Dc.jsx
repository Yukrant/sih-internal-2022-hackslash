import { ChevronDownIcon, DownloadIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dc() {
  const [data, setyear ] = useState("2020-21");
  return (
    <VStack borderColor={"facebook.700"} borderWidth={"2px"} borderStyle={"solid"} rounded={"md"} minH={"80vh"} >
      <Text color={"facebook.900"}  fontSize={"xl"} fontWeight={"bold"} my={5}>Academic Year: &nbsp;
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {data}
        </MenuButton>
        <MenuList onClick={(e)=>setyear(e.target.innerText)}>
          <MenuItem name='2020'>2020-21</MenuItem>
          <MenuItem name='2019'>2019-20</MenuItem>
          <MenuItem name='2018'>2018-19</MenuItem>
          <MenuItem name='2017'>2017-18</MenuItem>
          <MenuItem name='2016'>2016-17</MenuItem>
        </MenuList>
      </Menu> placement Records:</Text>

      <SimpleGrid columns={{sm:1, md:2, lg:3}}  spacing='40px' w={"90%"} textAlign={"center"}>
        <Box>
          <Stat borderWidth="2px" borderStyle="solid" borderColor={"facebook.600"} rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total Students </StatLabel>
            <StatNumber>150</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Allowed Students </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>75</StatNumber>
              <StatHelpText>50%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Placed Students </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total Male Candidate </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total Female Candidate </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total neutral Gender Candidate </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total Male Candidate </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box><Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total FeMale Placed Candidate </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total gender-neutral Placed Candidate </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Total Candidate Left to be placed </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Opted Out </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat borderColor={"facebook.600"} borderWidth={"2px"} borderStyle={"solid"}  rounded={"md"}>
            <StatLabel color={"facebook.700"} fontWeight={"bold"} fontSize={"large"}>Multiple Offer </StatLabel>
            <HStack justifyContent={"center"}>
              <StatNumber>25</StatNumber>
              <StatHelpText>33.34%</StatHelpText>
            </HStack>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>   
      </SimpleGrid>
      <HStack justifyContent={"space-around"} w={"90%"} padding={3}>
        <Button variant={"outline"} colorScheme={"facebook"}>
          <DownloadIcon/>
          Download Detail Report
        </Button>
        <Button variant={"link"} colorScheme={"facebook"}>
          <ViewIcon/>
          <Link to="/college/editDetails">
            View/Edit Placement Details by Student details
          </Link>
        </Button>
      </HStack>
    </VStack>
  )
}

export default Dc