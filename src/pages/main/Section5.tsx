import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { VStack, HStack, Heading, Flex, Image } from "@chakra-ui/react";

function Section5() {
  const controls = useAnimation();
  const ref: any = useRef();

  useEffect(() => {
    const element: any = ref.current;

    const handleScroll = () => {
      const { scrollY } = window;
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollY + windowHeight > elementTop) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="scroll-appear-element"
    >
      <VStack>
        <Heading size="4xl" textColor="black">
          Supporters
        </Heading>
        <HStack>
          <Flex gap="10">
            <Image
              w="200px"
              h="200px"
              src="http://guardiandefi.xyz/wp-content/uploads/2023/09/Cryptomx-Logo.png"
            />
            <Image
              w="200px"
              h="200px"
              src="http://guardiandefi.xyz/wp-content/uploads/2023/09/Vara-Logo-1.png"
            />

            <Image
              w="200px"
              h="200px"
              src="http://guardiandefi.xyz/wp-content/uploads/2023/09/maguey-studioLogo.png"
            />
          </Flex>
        </HStack>
      </VStack>
    </motion.div>
  );
}

export { Section5 };