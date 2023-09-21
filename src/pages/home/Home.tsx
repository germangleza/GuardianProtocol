
import { Tabs, TabList, TabPanels, Tab, TabPanel,Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Button, } from '@chakra-ui/react'

function Home() {

  return (
<Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
        <Tab _selected={{ bg: '#F8AD18' }}>Stake</Tab>
        <Tab _selected={{ bg: '#F8AD18' }}>Unstake</Tab>
        <Tab _selected={{ bg: '#F8AD18' }}>Withdraw</Tab>
  </TabList>
  
   
  <TabPanels>
  
    <TabPanel>

      <TableContainer>
    <Table variant='simple' colorScheme='teal' className='table-content' >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    
    <Tbody >
      <Tr style={{ color: 'white' }} >
        <Th>Amount</Th>
        <Th>.</Th>
        <Th isNumeric>Available: 0.0 VARA</Th>
      </Tr>
    
      <Tr  textColor='white'>
        <Td isNumeric>0.0</Td>
        <Td>.</Td>
        <Td><Button >MAX</Button></Td>
      </Tr>
    
      <Tr textColor='white'>
        <Td>YOU WILL RECIEVE</Td>
        <Td>.</Td>
        <Td isNumeric>0.0 gVARA</Td>
      </Tr>

      <Tr>
        <Td>.</Td>
        <Td>.</Td>
        <Td isNumeric>.</Td>
      </Tr>
      
      <Tr textColor='white'>
        <Td>Stake APY%</Td>
        <Td>.</Td>
        <Td isNumeric>-4.00%</Td>
      </Tr>
      
      <Tr textColor='white'>
        <Th>Staking Fee</Th>
        <Th>.</Th>
        <Th isNumeric>0.0</Th>
      </Tr>
    
      <Tr textColor='white'>
        <Th>Reward Fee</Th>
        <Th>.</Th>
        <Th isNumeric>10%</Th>
      </Tr>

    </Tbody>
      
  </Table>

</TableContainer>


    </TabPanel>
    
    
    
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    
 
    
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export { Home };
