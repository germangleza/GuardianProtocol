import {
  Text,
  GridItem,
  VStack,
  HStack,
  Heading,
  Button,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Section2 } from "./Section2";
import { HoverEffect } from "./HoverEffect";
import { Section3 } from "./Section3";
import { Section5 } from "./Section5";
import { Section4 } from "./Section4";

function Main() {
  return (
    <>
      <GridItem h="800px" w="100%" bg="#F8AD18">
        <Center>
          <HStack>
            <Flex direction="row" gap="5">
              <HStack>
                <VStack>
                  <Heading size="4xl" textColor="black">
                    Liquid Staking
                  </Heading>
                  <Heading position="initial" size="4xl" textColor="black">
                    Protocol
                  </Heading>
                  <Text textColor="white" fontSize="3xl">
                    Securing and descentralizing
                  </Text>
                  <Heading>Vara Network</Heading>
                  <HStack>
                    <Button
                      as={Link}
                      to="/main"
                      size="lg"
                      borderRadius="0"
                      backgroundColor="black"
                      textColor="white"
                      variant="ghost"
                    >
                      <HStack>
                        <Heading size="2x1">Stake Now!</Heading>
                      </HStack>
                    </Button>
                    <Button
                      className="fade-in"
                      as={Link}
                      to="/main"
                      size="lg"
                      borderRadius="0px"
                      backgroundColor="black"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      border="2px"
                      borderColor="yellow.300"
                      textColor="white"
                      _hover={{ bg: "#ebedf0" }}
                      _active={{
                        bg: "#dddfe2",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                      }}
                      _focus={{
                        boxShadow:
                          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                      }}
                    >
                      <HStack>
                        <Heading size="2x1">Git Hub</Heading>
                        <FaGithub color="white" size="30px" />
                      </HStack>
                    </Button>
                  </HStack>
                </VStack>
              </HStack>
              <VStack>
                <HoverEffect/>
                <Image
                  position="revert"
                  w="100px"
                  h="100px"
                  src="http://guardiandefi.xyz/wp-content/uploads/2023/09/x-icon.png"
                  transform="rotate(45deg)"
                />
              </VStack>
            </Flex>
          </HStack>
        </Center>
      </GridItem>

      <GridItem h="800px" w="100%" bg="#F8AD18">
        <Center>
          <Section2/>
        </Center>
      </GridItem>

      <GridItem h="400px" w="100%" bg="#F8AD18">
        <Center>
        <Section3/>
        </Center>
      </GridItem>
      <GridItem h="800px" w="100%" bg="#F8AD18">
        <Center>
          <Section4/>
        </Center>
      </GridItem>
      <GridItem h="400px" w="100%" bg="#F8AD18">
        <Center>
          <Section5/>
        </Center>
      </GridItem>
      <GridItem h="50px" w="100%" bg="black" />
    </>
  );
}

export { Main };