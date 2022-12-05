import { Box, HStack, Container, Heading, Center } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import { Link } from "react-router-dom";
import Detail from "./Detail";
// import PokemonLegend from "./PokemonLegend";
// import ProtectedRoute from "./ProtectedRoute";
// import Unauthorized from "./Unauthorized";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const MyRouter = () =>
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Detail />} />


        {/* <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/legend" element={<PokemonLegend />} />
        </Route> */}
        <Route path="/*" element={
          <h2><Center height={500}>404 Page not found!</Center> </h2>
        } />


        {/* TODO: answer here */}
        {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
      </Routes>
    </div>; // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>

        </Center>
      </Box>

      {/* Route */}
      <MyRouter />

    </div>
  );
};

export default App;
