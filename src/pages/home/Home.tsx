
import { Tabs, TabList, TabPanels, Tab, TabPanel,Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Button, background,extendTheme} from '@chakra-ui/react'
import { assets } from '@polkadot/types/interfaces/definitions';

import { Input } from "@gear-js/ui";
import { useState } from "react";

import { GearApi } from "@gear-js/api";
import { Button, Input } from "@gear-js/ui";
import { useState } from "react";

function GetAllEvents() {
  const [allevents, setAllevents] = useState<any | undefined>(0);
  const [blockhash, setBlockhash] = useState<any | undefined>("");

  const subscribeblocks = async () => {
    const gearApi = await GearApi.create({
      providerAddress: "wss://testnet.vara.rs",
    });

    const unsub = await gearApi.gearEvents.subscribeToNewBlocks(
      (header: any) => {
        console.log(
          `New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`
        );
      }
    );
  };

  const getallevents = async () => {
    const gearApi = await GearApi.create({
      providerAddress: "wss://rpc-node.gear-tech.io",
    });

    const events = await gearApi.blocks.getEvents(blockhash);
    events.forEach((event) => {
      setAllevents(event.toHuman());
      console.log("Events", event.toHuman());
    });
  };

  const AmountInputChange = async (event: any) => {
    setBlockhash(event.target.value);
  };

  return (
    <div className="card">
      <center>Get All Events with Hash</center>
      <Input type="text" value={blockhash} onChange={AmountInputChange} />
      <div className="horizontal">
        <Button text="Subscribe blocks" onClick={subscribeblocks} />
        <Button text="Get All Events" onClick={getallevents} />
      </div>
    </div>
  );
}

export { GetAllEvents }

function InputComponent() {
 
  const [text, setText] = useState<any | undefined>("");

  const AmountInputChange = async (event: any) => {
    setBlockhash(event.target.value);
  };

  return (
    
      <Input type="text" value={text} onChange={AmountInputChange} />
     
  );
}

export { InputComponent };

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
