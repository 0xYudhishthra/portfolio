// the resume button component
//import
import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/system';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

const ResumeButton = () => {
  return (
    <StyledDiv align="center">
      <Button
        display="inline-flex"
        flexDir="column"
        variant="solid"
        mt={10}
        bg={useColorModeValue('black', '#F95738')}
        color={useColorModeValue('white', 'white')}
        _hover={{
          bg: useColorModeValue('#F95738', 'black')
        }}
        onClick={() => {
          window.open('/documents/Yudhishthra_Sugumaran_Resume.pdf', '_blank');
        }}
      >
        DOWNLOAD CV
      </Button>
    </StyledDiv>
  );
};

export default ResumeButton;
