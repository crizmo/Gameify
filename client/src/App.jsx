import "./App.css";
import Navbar from "./pages/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./pages/Footer";
import { Box, Image, VStack } from "@chakra-ui/react";
import { useState, useEffect, React } from "react";
import Logo from "./assets/Logo.png";

function App() {
  const [Starting, setStarting] = useState(true);
  
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStarting(false);
    }, 2000);
  }, []);

  const handleOnSearch = (string) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);

    setSearch(string);
  };

  if (Starting) {
    return (
      <VStack
        overflow={"hidden"}
        bg="black"
        position={"relative"} // bgImage={women}     bgSize={"80%"}
        minH="100vh"
        justify="center"
        align="center"
      >
        <Image
          position={"absolute"}
          minW={{ base: "800px", md: "none" }}
          h="100%"
          src="https://i.pinimg.com/originals/a6/10/8b/a6108b31b391378d30856edba57172a4.gif"
        />
        <Image
          position={"absolute"}
          minW={{ base: "300px", md: "none" }}
          h="auto"
          src={Logo}
          alt="Logo"
        />
      </VStack>
    );
  }

  return (
    <Box>
      <Navbar handleOnSearch={handleOnSearch}/>
      <AllRoutes search={search}/>
      <Footer />
    </Box>
  );
}

export default App;

// npm i @chakra-ui/icons
