//import
import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/system';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  useColorModeValue,
  Heading,
  Container,
  Flex
} from '@chakra-ui/react';

//styledDiv
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

//ScrollDownFloat
const ScrollDownFloat = () => {
  return (
    <Box
      display={{ base: 'flexbox', md: 'flex' }}
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'space-around', md: 'space-between' }}
      mt={{ base: 0, md: 280 }}
    >
      <StyledDiv
        animate={{ opacity: 1, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.5
        }}
      >
        <Flex
          display={{ base: 'none', md: 'inline-flex' }}
          flexDir="row-reverse"
          transform="rotate(-90deg)"
        >
          <p>scroll down</p>
          <ChevronDownIcon
            w={6}
            h={6}
            color={useColorModeValue('#274C77', '#ffffff')}
            transform="rotate(90deg)"
          ></ChevronDownIcon>
        </Flex>
      </StyledDiv>

      <StyledDiv
        animate={{ opacity: 1, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.5
        }}
      >
        <Flex
          display={{ base: 'none', md: 'inline-flex' }}
          flexDir="row-reverse"
          transform="rotate(-90deg)"
        >
          <p>scroll down</p>
          <ChevronDownIcon
            w={6}
            h={6}
            color={useColorModeValue('#274C77', '#ffffff')}
            transform="rotate(90deg)"
          ></ChevronDownIcon>
        </Flex>
      </StyledDiv>
    </Box>
  );
};

export default ScrollDownFloat;
