import { useState } from "react";
import "./App.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Spinner
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import CustomCard from "./components/CustomCard";

function App() {
  // hook
  //key del apartado, funcion que lo modificara
  const [signupData, setSignupData] = useState({});
  //demo: creear un hook por cada input del form
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  // hook chakra
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const [showData,setShowData] = useState(false)
  //handleChange => para obtener "Obtener los datos del formulario"
  // function Name == components
  
  const handleChange = (event) => {
    console.log("jjjjjj",event.target.id,event.target.value)
    setSignupData(prevState  => { 
      return  {...prevState, [event.target.id]: event.target.value }
    })

  }

  //sendData => es para "mandarlos al back"
  function sendData(){
    console.log("Listo para mandar cosas!! ",signupData)

    setLoading(true)

    setTimeout(()=>{
      setLoading(false)
      setShowData(true)
    },5000)

  }
  return (
    <div className="App">
      <input
        placeholder="DEMO AZDHY"
        name="AZDHY"
        onChange={(e) => console.log("El evento en input", e.target.value)}
      />

      {/*Form normal  */}
      <form
        /*method='' action=""*/
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Datos", {
            email,
            lastName,
            firstName,
            password,
            dateOfBirth,
            username,
          });
        }}
      >
        <label>Correo</label>
        <input
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Contraseña</label>
        <input
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <label>Nombre</label>
        <input
          name="firstName"
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label>Apellido</label>
        <input
          name="lastName"
          onChange={(event) => setLastName(event.target.value)}
        />

        <label>Nombre de usuario</label>
        <input
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />

        <label>Fecha de nacimiento</label>
        <input
          name="dateOfBirth"
          type="date"
          onChange={(event) => setDateOfBirth(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {/* Framework ui */}
      <Button colorScheme={"blue"}>Uno bonito </Button>

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired onChange={handleChange}>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>

                </Box>
                <Box>
                  <FormControl id="lastName" onChange={handleChange}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired onChange={handleChange}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired onChange={handleChange}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* username add by suNombre */}
              <FormControl id="username" isRequired onChange={handleChange}>
                <FormLabel>Username</FormLabel>
                <Input type="text"/>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={sendData}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      {/* Mostrar loader si  esta en verdaro de lo contrario no mostrar nada */}

   
                  {/* validar si el objeto tiene elementos!! */}
      {loading && 
      <Spinner size='xl' /> }
      {showData && <CustomCard 
      //1) username={signupData.username} ...
      //2) {...signupData}
        
      {...signupData}
      />}



    </div>
  );
}

export default App;
