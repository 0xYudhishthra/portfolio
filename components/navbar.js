import Logo from './logo';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Container,
  Link,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : 'undefined'}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Box flex={5} align="right">
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              {/* Create a hamburger menu that displays the menu items horizontally and not vertically when clicked on */}
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="ghost"
                />
                <MenuList>
                  <MenuItem>
                    <LinkItem href="/" path={path}>
                      Home
                    </LinkItem>
                  </MenuItem>
                  <MenuItem>
                    <LinkItem href="/about" path={path}>
                      About
                    </LinkItem>
                  </MenuItem>
                  <MenuItem>
                    <LinkItem href="/projects" path={path}>
                      Projects
                    </LinkItem>
                  </MenuItem>
                  <MenuItem>
                    <LinkItem href="/blog" path={path}>
                      Blog
                    </LinkItem>
                  </MenuItem>
                  <MenuItem>
                    <LinkItem href="https://www.yudhishthra.com/" path={path}>
                      View Source
                    </LinkItem>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Heading as="h1" size="lg" letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Experience
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
