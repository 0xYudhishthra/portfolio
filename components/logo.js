import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding-right: 75px;
`;

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

  return (
    <Link href="/" legacyBehavior>
      <a>
        <LogoBox>
          <Image src={footPrintImg} alt="logo" width={50} height={50} />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
