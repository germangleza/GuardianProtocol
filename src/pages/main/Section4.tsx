import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { HStack, Heading, Box, Flex, Image } from "@chakra-ui/react";

function Section4() {
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
      <HStack>
        <Flex direction="row" gap="20">
          <HStack>
            <Box w="200px" />
            <Heading size="4xl" textColor="white">
              14 % API
            </Heading>
          </HStack>
          <Image
            w="500px"
            h="500px"
            src="http://guardiandefi.xyz/wp-content/uploads/2023/09/Guardian-Reward2.png"
          />
        </Flex>
      </HStack>
    </motion.div>
  );
}

export { Section4 };