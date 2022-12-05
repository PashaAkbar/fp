import { Box, Image, Heading, HStack, Center } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

function Card({ card }) {
  // console.log(card.card_images.image_url)
  // console.log()
  // console.log(card.data.card_images.image_url)
  return (
    <>
      <Box yugioh-card >
        {console.log(card.id)}
        <Link key={card.id} to={`/card/${card.id}`}>

          <Image src={card.card_images[0].image_url}>
          </Image>
          <Center>
            <Heading as='h2' size="xs">{card.name}

            </Heading>
          </Center>
        </Link>

      </Box>
    </>

  ) // TODO: replace this
}

export default Card;
