
import { Tabs, TabList, TabPanels, Tab, TabPanel,Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Button, background,extendTheme} from '@chakra-ui/react'
import { assets } from '@polkadot/types/interfaces/definitions';

function Home() {

  return (


<Tabs isFitted variant='enclosed' style={{ borderColor: '#F8AD18' }} >
  <TabList mb='1em'>
        <Tab _selected={{ bg: '#F8AD18' }}  borderBottom='2px solid #F8AD18'>Stake</Tab>
        <Tab _selected={{ bg: '#F8AD18' }} borderBottom='2px solid #F8AD18' borderRight='2px solid #F8AD18'>Unstake</Tab>
        <Tab _selected={{ bg: '#F8AD18' }} borderBottom='2px solid #F8AD18'>Withdraw</Tab>
  </TabList>
  
   
  <TabPanels>
  
    <TabPanel>

      <TableContainer>
    <Table variant='simple' colorScheme='teal' className='table-content' >
    
    
    <Tbody >
      <Tr  id='espacio' style={{ marginBottom: '3px !important' }} >
        <Td>Amount</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>Available: 0.0 VARA</Td>
      </Tr>
     
     <Tr borderRadius="20px" textColor='white' marginBottom='5px' style={{color: 'white',border: '2px solid #F8AD18'}}>
     <Td style={{ 
    backgroundImage: `url('https://varathon.io/images/homepage/about-logo.svg')`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'contain', 
    paddingLeft: '50px' }}>
    0.0
  </Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td id='end' ><Button position='inherit' marginBottom='7px' >MAX</Button></Td>
      </Tr>
      
    
    
      <Tr textColor='white'>
        <Td fontWeight='bold' >You will recieve</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end' fontWeight='bold'>0.0 gVARA</Td>
      </Tr>

      <Tr style={{ visibility: 'hidden' }}>
        <Td>.</Td>
        <Td>.</Td>
        <Td isNumeric>.</Td>
      </Tr>
      
      <Tr textColor='white'>
        <Td>Stake APY%</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>˜4.00%</Td>
      </Tr>
      
      <Tr textColor='white' >
        <Td>Staking Fee</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>0.0%</Td>
      </Tr>
    
      <Tr textColor='white' >
        <Td>Reward Fee</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>10%</Td>
      </Tr>

      <Tr>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td ><Button colorScheme='teal' size='lg' style={{color:'black',background:'#F8AD18',width:'240px'}} >Stake</Button></Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
      </Tr>

    </Tbody>
      
  </Table>

</TableContainer>
 </TabPanel>
    
    
    <TabPanel>
      
      <TableContainer>
    <Table variant='simple' colorScheme='teal' className='table-content' >
    
    
    <Tbody >
      <Tr  id='espacio' style={{ marginBottom: '3px !important' }} >
        <Td>Amount</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>Available: 0.0 gVARA</Td>
      </Tr>
     
     <Tr borderRadius="20px" textColor='white' marginBottom='5px' style={{color: 'white',border: '3px solid #F8AD18'}}>
     <Td style={{ 
    backgroundImage: `url('https://varathon.io/images/homepage/about-logo.svg')`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'contain', 
    paddingLeft: '50px' }}>
    0.0
  </Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td id='end' ><Button position='inherit' marginBottom='7px' >MAX</Button></Td>
      </Tr>
      
    
    
      <Tr textColor='white'>
        <Td fontWeight='bold' >You will recieve</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end' fontWeight='bold'>0.0 VARA</Td>
      </Tr>

      <Tr style={{ visibility: 'hidden' }}>
        <Td>.</Td>
        <Td>.</Td>
        <Td isNumeric>.</Td>
      </Tr>
      
      <Tr textColor='white'>
        <Td>Stake APY%</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>-4.00%</Td>
      </Tr>
      
      <Tr textColor='white' >
        <Td>Staking Fee</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>0.0%</Td>
      </Tr>
    
      <Tr textColor='white' >
        <Td>Reward Fee</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>10%</Td>
      </Tr>

      <Tr>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td ><Button colorScheme='teal' size='lg' style={{color:'black',background:'#F8AD18',width:'240px'}} >Unstake</Button></Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
      </Tr>

    </Tbody>
      
  </Table>

</TableContainer>
    </TabPanel>
    
 
    
    <TabPanel>
      
      <TableContainer>
    <Table variant='simple' colorScheme='teal' className='table-content' >
   
    
    <Tbody >
      <Tr  id='espacio' style={{ marginBottom: '3px !important' }} >
        <Td>Amount</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>Available: 0.0 VARA</Td>
      </Tr>
     
     <Tr borderRadius="20px" textColor='white' marginBottom='5px' style={{color: 'white',border: '3px solid #F8AD18'}}>
     <Td style={{ 
    backgroundImage: `url('https://varathon.io/images/homepage/about-logo.svg')`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'contain', 
    paddingLeft: '50px' }}>
    0.0
  </Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td id='end' ><Button position='inherit' marginBottom='7px' >MAX</Button></Td>
      </Tr>
      
    
      
      <Tr textColor='white'>
        <Td>Stake APY%</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>-4.00%</Td>
      </Tr>
      
      <Tr textColor='white' >
        <Td>Staking Fee</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>0.0%</Td>
      </Tr>
    
      <Tr textColor='white' >
        <Td>Reward Fee</Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td isNumeric textAlign='end'>10%</Td>
      </Tr>


      <Tr>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td ><Button colorScheme='teal' size='lg' style={{color:'black',background:'#F8AD18',width:'240px',marginLeft:'43px'}} >Withdraw</Button></Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
      </Tr>

    </Tbody>
      
  </Table>

</TableContainer>
    
      
    </TabPanel>
  </TabPanels>
</Tabs>

  )
}

export { Home };
