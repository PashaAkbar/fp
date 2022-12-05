import Cards from "./Cards";
import { SimpleGrid, Container, Box, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "@chakra-ui/react";

function Home() {
  let [pilih, setPilih] = useState("name")

  let [url, setUrl] = useState("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")

  let [kartu, setKartu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [id, setId] = useState(1);
  useEffect(() => {
    fetch(url)

      .then((response) => response.json())
      // simpan data ke dalam state
      .then((json) => {
        // set data
        setKartu(json);
        // set loading menjadi false
        setLoading(false);
      })
      // handle error
      .catch((error) => {
        // set error
        setError(error);
        // set loading menjadi false
        setLoading(false);
      });
  }, []);

  function sortData(type) {
    if (type == "name") {

    }
  }

  return (<Container maxW='container.sm'>
    <Link to="\misal">misal</Link>
    <Select placeholder='Sort by'>
      <option value='name'>name</option>
      <option value='attack'>attack</option>
      <option value='defence'>defence</option>
    </Select>


    {loading ? <h1>Loading...</h1> :
      <Box marginTop={4}>
        <SimpleGrid columns={4} spacing={2}>
          {kartu.data.map((a) => (

            <Cards card={a} />

          ))}
        </SimpleGrid>
      </Box>}
  </Container>) // TODO: replace this
}

export default Home;
