import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function LoginRegisterModal({ isOpen, onClose }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Both email and password are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    console.log("Login Successful:", { email, password });
    toast({
      title: "Login successful!",
      description: "Welcome back!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted!");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login / Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab>Login</Tab>
              <Tab>Register</Tab>
            </TabList>
            <TabPanels>
              {/* LOGIN */}
              <TabPanel>
                <form onSubmit={handleLoginSubmit}>
                  <FormControl id="email" mb={4} isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password" mb={4} isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement>
                        <Button
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    bgColor="#FF7A3D"
                    type="submit"
                    width="full"
                    color="white"
                    _hover={{ bg: "#e0652a" }}
                  >
                    Login
                  </Button>
                </form>
              </TabPanel>

              {/* REGISTER */}
              <TabPanel>
                <form onSubmit={handleRegisterSubmit}>
                  <FormControl id="username" mb={4} isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Enter your username" />
                  </FormControl>
                  <FormControl id="email" mb={4} isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                  </FormControl>
                  <FormControl id="password" mb={4} isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <InputRightElement>
                        <Button
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl id="confirm-password" mb={4} isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                      />
                      <InputRightElement>
                        <Button
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    bgColor="#FF7A3D"
                    type="submit"
                    width="full"
                    color="white"
                    _hover={{ bg: "#e0652a" }}
                  >
                    Register
                  </Button>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
