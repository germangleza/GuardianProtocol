import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Input,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useApi, useAlert, useAccount } from "@gear-js/react-hooks";
import { useState,useEffect } from "react";
import { web3FromSource } from "@polkadot/extension-dapp";
import { ProgramMetadata, encodeAddress } from "@gear-js/api";


function Home() {

  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();


  const [gVARAbalance, setGVARAbalance] = useState<any | undefined>(0);

  const [fullState, setFullState] = useState<any | undefined>({});

  const Localbalances = fullState.balances || [];

 // Add your programID
 const programIDFT =
 "0xe609506126c6eedd004d964396c52668420916c7f0164af50b40652175ca2641";

// Add your metadata.txt
const metaFT =
 "00010001000000000001030000000107000000000000000108000000a90b3400081466745f696f28496e6974436f6e66696700000c01106e616d65040118537472696e6700011873796d626f6c040118537472696e67000120646563696d616c73080108753800000400000502000800000503000c081466745f696f204654416374696f6e000118104d696e74040010011075313238000000104275726e040010011075313238000100205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380002001c417070726f7665080108746f14011c4163746f724964000118616d6f756e74100110753132380003002c546f74616c537570706c790004002442616c616e63654f66040014011c4163746f724964000500001000000507001410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001801205b75383b2033325d0000180000032000000008001c081466745f696f1c46544576656e74000110205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380000001c417070726f76650c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380001002c546f74616c537570706c790400100110753132380002001c42616c616e63650400100110753132380003000020081466745f696f3c496f46756e6769626c65546f6b656e00001801106e616d65040118537472696e6700011873796d626f6c040118537472696e67000130746f74616c5f737570706c791001107531323800012062616c616e6365732401505665633c284163746f7249642c2075313238293e000128616c6c6f77616e6365732c01905665633c284163746f7249642c205665633c284163746f7249642c2075313238293e293e000120646563696d616c730801087538000024000002280028000004081410002c00000230003000000408142400";

 const metadataFT = ProgramMetadata.from(metaFT);

  const getBalance = () => {
    

    api.programState
      .read({ programId: programIDFT,payload:"" }, metadataFT)
      .then((result) => {
        setFullState(result.toJSON());
      })
      .catch(({ message }: Error) => alert.error(message));

    Localbalances.some(([address, balances]: any) => {
      if (encodeAddress(address) === account?.address) {
        setGVARAbalance(balances);

        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    getBalance();
  });



  const [stakeamount, setStakeamount] = useState<any | undefined>(0);
  

  // Add your programID
  const programID =
    "0x604379d79c45a4ef9e66d0ea4745e7f413dc58ccda7aa73653ddb1090c22712e";

  // Add your metadata.txt
  const meta =
    "00010001000000000001040000000106000000000000000107000000b5072c000808696f18496e69744654000004013466745f70726f6772616d5f696404011c4163746f72496400000410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004000801205b75383b2033325d000008000003200000000c000c0000050300100808696f444c69717569645374616b65416374696f6e000108145374616b6504001401107531323800000020576974686472617704001401107531323800010000140000050700180808696f404c69717569645374616b654576656e740001083c5375636365737366756c5374616b65000000445375636365737366756c556e7374616b65000100001c0808696f34496f4c69717569645374616b6500001c01146f776e657204011c4163746f7249640001547374616b696e675f746f6b656e5f6164647265737304011c4163746f72496400015876617261746f6b656e5f746f74616c5f7374616b65641401107531323800014c746f74616c5f74696d655f70726f746f636f6c20010c7536340001606776617261746f6b656e735f7265776172645f746f74616c14011075313238000144646973747269627574696f6e5f74696d6520010c75363400011475736572732401505665633c284163746f7249642c2075313238293e00002000000506002400000228002800000408041400";

  const metadata = ProgramMetadata.from(meta);

  const unstakemessage = { withdraw: Math.floor(stakeamount) };

  const rewardsemessage = { withdraw: Math.floor(stakeamount) };

  const stakemessage = { stake: Math.floor(stakeamount) };

  const maxamountvara = () => {
    setStakeamount(account?.balance.value);
  };

  const maxamountgvara = () => {
    setStakeamount(gVARAbalance);
  };


  const signer = async (inmessage: any) => {
    const message: any = {
      destination: programID, // programId
      payload: inmessage,
      gasLimit: 899819245,
      value: 0,
    };

    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic

      try {
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
                  setStakeamount(0);
                }
              }
            }
          )
          .catch((error: any) => {
            console.log(":( transaction failed", error);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const AmountInputChange = async (event: any) => {
    setStakeamount(event.target.value);
  };

  return (
    <GridItem borderRadius="30px" w="100%" h="300px">
      <Center>
        <Tabs
          style={{ color: "white", border: "2px solid #F8AD18" }}
          borderRadius="30px"
          w="1000px"
          h="500px"
        >
          <TabList mb="1em">
            <Tab _selected={{ bg: "#F8AD18" }} borderBottom="2px solid #F8AD18">
              Stake
            </Tab>
            <Tab
              _selected={{ bg: "#F8AD18" }}
              borderBottom="2px solid #F8AD18"
              borderRight="2px solid #F8AD18"
            >
              Unstake
            </Tab>
            <Tab _selected={{ bg: "#F8AD18" }} borderBottom="2px solid #F8AD18">
              Withdraw
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table
                  variant="simple"
                  colorScheme="teal"
                  className="table-content"
                >
                  <Tbody>
                    <Tr id="espacio" style={{ marginBottom: "3px !important" }}>
                      <Td>Amount</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        Available: {account?.balance.value} VARA
                      </Td>
                    </Tr>

                    <Tr
                      borderRadius="20px"
                      textColor="white"
                      marginBottom="5px"
                      style={{ color: "white", border: "2px solid #F8AD18" }}
                    >
                      <Td position="revert">
                        <Input
                          w="300px"
                          h="60px"
                          type="text"
                          borderColor="black"
                          value={stakeamount}
                          onChange={AmountInputChange}
                        />
                        <Button
                          onClick={maxamountvara}
                          backgroundColor="yellow.500"
                          position="inherit"
                          marginBottom="7px"
                        >
                          MAX
                        </Button>
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td fontWeight="bold">You will recieve</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end" fontWeight="bold">
                        {stakeamount} gVARA
                      </Td>
                    </Tr>

                    <Tr style={{ visibility: "hidden" }}>
                      <Td>.</Td>
                      <Td>.</Td>
                      <Td isNumeric>.</Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Stake APY%</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        4.00%
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Staking Fee</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        0.0%
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Reward Fee</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        10%
                      </Td>
                    </Tr>

                    <Tr>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td>
                        <Button
                          colorScheme="teal"
                          size="lg"
                          style={{
                            color: "white",
                            background: "#F8AD18",
                            width: "240px",
                          }}
                          onClick={() => signer(stakemessage)}
                        >
                          Stake
                        </Button>
                      </Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel>
              <TableContainer>
                <Table
                  variant="simple"
                  colorScheme="teal"
                  className="table-content"
                >
                  <Tbody>
                    <Tr id="espacio" style={{ marginBottom: "3px !important" }}>
                      <Td>Amount</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        Available: {gVARAbalance} gVARA
                      </Td>
                    </Tr>

                    <Tr
                      borderRadius="20px"
                      textColor="white"
                      marginBottom="5px"
                      style={{ color: "white", border: "3px solid #F8AD18" }}
                    >
                      <Td position="revert">
                        <Input
                          w="300px"
                          h="60px"
                          type="text"
                          borderColor="black"
                          value={stakeamount}
                          onChange={AmountInputChange}
                        />
                        <Button
                          onClick={maxamountgvara}
                          backgroundColor="yellow.500"
                          position="inherit"
                          marginBottom="7px"
                        >
                          MAX
                        </Button>
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td fontWeight="bold">You will recieve</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end" fontWeight="bold">
                        {stakeamount} VARA
                      </Td>
                    </Tr>

                    <Tr style={{ visibility: "hidden" }}>
                      <Td>.</Td>
                      <Td>.</Td>
                      <Td isNumeric>.</Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Stake APY%</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        4.00%
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Staking Fee</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        0.0%
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Reward Fee</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        10%
                      </Td>
                    </Tr>

                    <Tr>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td>
                        <Button
                          colorScheme="teal"
                          size="lg"
                          style={{
                            color: "black",
                            background: "#F8AD18",
                            width: "240px",
                          }}
                          onClick={() => signer(unstakemessage)}
                        >
                          Unstake
                        </Button>
                      </Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>

            <TabPanel>
              <TableContainer>
                <Table
                  variant="simple"
                  colorScheme="teal"
                  className="table-content"
                >
                  <Tbody>
                    <Tr id="espacio" style={{ marginBottom: "3px !important" }}>
                      <Td>Amount</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        Available: {account?.balance.value} VARA
                      </Td>
                    </Tr>

                    <Tr
                      borderRadius="20px"
                      textColor="white"
                      marginBottom="5px"
                      style={{ color: "white", border: "3px solid #F8AD18" }}
                    >
                      <Td position="revert">
                        <Input
                          w="300px"
                          h="60px"
                          type="text"
                          borderColor="black"
                          value={stakeamount}
                          onChange={AmountInputChange}
                        />
                        <Button
                          onClick={maxamountgvara}
                          backgroundColor="yellow.500"
                          position="inherit"
                          marginBottom="7px"
                        >
                          MAX
                        </Button>
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Stake APY%</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        4.00%
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Staking Fee</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        0.0%
                      </Td>
                    </Tr>

                    <Tr textColor="white">
                      <Td>Reward Fee</Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td isNumeric textAlign="end">
                        10%
                      </Td>
                    </Tr>

                    <Tr>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                      <Td>
                        <Button
                          textColor="white"
                          size="lg"
                          style={{
                            color: "white",
                            background: "#F8AD18",
                            width: "220px",
                            marginLeft: "43px",
                          }}
                        >
                          Withdraw
                        </Button>
                      </Td>
                      <Td style={{ visibility: "hidden" }}>.</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </GridItem>
  );
}

export { Home };