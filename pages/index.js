import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={3} align="center" mb={6}>
        Hello, I&apos;m a aspiring full-stack developer based in Malaysia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yudhishthra Sugumaran
          </Heading>
          <p>developer + pentester</p>
        </Box>
      </Box>

      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/yudhishthra.jpg"
          alt="Profile Image"
        />
      </Box>
    </Container>
  );
};

export default Page;
