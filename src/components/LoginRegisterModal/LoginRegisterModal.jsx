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
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function LoginRegisterModal({ isOpen, onClose }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    console.log("Submitted");
    if (password === confirmPassword) {
      alert("Passwords match");
    } else {
      alert("Passwords do not match");
    }
  };

  const isMatch = password === confirmPassword || confirmPassword === "";

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
              {/* Login Tab */}
              <TabPanel>
                <FormControl id="email" mb={4}>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl id="password" mb={4}>
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
              </TabPanel>

              {/* Register Tab */}
              <TabPanel>
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <FormControl id="username" mb={4} isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Enter your username" />
                  </FormControl>

                  {/* Email */}
                  <FormControl id="email" mb={4} isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                  </FormControl>

                  {/* Password */}
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

                  {/* Confirm Password */}
                  <FormControl
                    id="confirm-password"
                    mb={4}
                    isInvalid={!isMatch && isSubmitted}
                    isRequired
                  >
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <InputRightElement>
                        <Button
                          size="sm"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {!isMatch && confirmPassword && (
                      <FormErrorMessage>
                        Passwords do not match.
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    bgColor="#FF7A3D"
                    type="submit"
                    isDisabled={!isMatch}
                    width="full"
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
