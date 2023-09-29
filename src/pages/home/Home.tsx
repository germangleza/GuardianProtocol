
import { Tabs, TabList, TabPanels, Tab, TabPanel,Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,Box,
  TableContainer,Button,extendTheme,Input} from '@chakra-ui/react'
import { assets } from '@polkadot/types/interfaces/definitions';
import { useApi, useAlert, useAccount } from "@gear-js/react-hooks";
import { useState } from "react";
import { web3FromSource } from "@polkadot/extension-dapp";
import { ProgramMetadata } from "@gear-js/api";

function Home() {

  const [stakeamount, setStakeamount] = useState<any | undefined>(0);

  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();

  // Add your programID
  const programID =
    "0x604379d79c45a4ef9e66d0ea4745e7f413dc58ccda7aa73653ddb1090c22712e";

  // Add your metadata.txt
  const meta =
    "00010001000000000001040000000106000000000000000107000000b5072c000808696f18496e69744654000004013466745f70726f6772616d5f696404011c4163746f72496400000410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004000801205b75383b2033325d000008000003200000000c000c0000050300100808696f444c69717569645374616b65416374696f6e000108145374616b6504001401107531323800000020576974686472617704001401107531323800010000140000050700180808696f404c69717569645374616b654576656e740001083c5375636365737366756c5374616b65000000445375636365737366756c556e7374616b65000100001c0808696f34496f4c69717569645374616b6500001c01146f776e657204011c4163746f7249640001547374616b696e675f746f6b656e5f6164647265737304011c4163746f72496400015876617261746f6b656e5f746f74616c5f7374616b65641401107531323800014c746f74616c5f74696d655f70726f746f636f6c20010c7536340001606776617261746f6b656e735f7265776172645f746f74616c14011075313238000144646973747269627574696f6e5f74696d6520010c75363400011475736572732401505665633c284163746f7249642c2075313238293e00002000000506002400000228002800000408041400";

  const metadata = ProgramMetadata.from(meta);


  const message: any = {
    destination: programID, // programId
    payload:{ stake: Number(stakeamount) },
    gasLimit:899819245,
    value: 0,
  };

  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = await api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic
        .signAndSend(
          accounts[0].address,
          { signer: injector.signer },
          ({ status }: any) => {
            if (status.isInBlock) {
              console.log(
                `Completed at block hash #${status.asInBlock.toString()}`
              );
              alert.success(`Block hash #${status.asInBlock.toString()}`);
            } else {
              console.log(`Current status: ${status.type}`);
              if (status.type === "Finalized") {
                alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(":( transaction failed", error);
        });
    } else {
      alert.error("Account not available to sign");
    }
  };
  

  const AmountInputChange = async (event: any) => {
    setStakeamount(event.target.value);
  };


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
        <Td isNumeric textAlign='end'>Available: {account?.balance.value} VARA</Td> 
      </Tr>
     
     <Tr borderRadius="20px" textColor='white' marginBottom='5px' style={{color: 'white',border: '2px solid #F8AD18'}}>
     <Td style={{ 
    backgroundImage: `url('https://varathon.io/images/homepage/about-logo.svg')`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'contain', 
    paddingLeft: '50px' }}>
    <Box p={1}><Input placeholder="0.0" marginLeft='5px' width='56px' /></Box>
  </Td>
        <Td style={{ visibility: 'hidden' }}>.</Td>
        <Td id='end' ><Button position='inherit' marginBottom='7px' >MAX</Button>
        <Input type="text" value={stakeamount} onChange={AmountInputChange} />
        </Td>
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
        <Td ><Button colorScheme='teal' size='lg' style={{color:'black',background:'#F8AD18',width:'240px'}} onClick={signer} >Stake</Button></Td>
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
    <Box p={1}><Input placeholder="0.0" marginLeft='5px' width='56px' /></Box>
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
    <Box p={1}><Input placeholder="0.0" marginLeft='5px' width='56px' /></Box>
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
