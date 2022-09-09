import { Grid, GridItem, Image, Heading } from "@chakra-ui/react"
import ImgCar from '../assets/img/car.png';
import { useNavigate } from "react-router-dom";

export default function Surtidor() {
  const navigate = useNavigate();
  const goProduct = (idSurt) => {
    localStorage.setItem("idSurtidor", idSurt);
    navigate('/product');
  }
  const surtidores = [
    {
      id: 1, 
      name: "Surtidor 1"
    },
    {
      id: 2, 
      name: "Surtidor 2"
    },
    {
      id: 3, 
      name: "Surtidor 3"
    },
    {
      id: 4, 
      name: "Surtidor 4"
    },
    {
      id: 5, 
      name: "Surtidor 5"
    },
    {
      id: 6, 
      name: "Surtidor 6"
    },
  ]
  return (
    <>
      <Heading textAlign="center" marginBottom="5">
        Selecciona un despachador
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={9}>
        {surtidores.map((surt) => (
          <GridItem
            key={surt.id}
            w="100%"
            h="40"
            margin="5"
            borderRadius="10"
            padding="4"
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 177);"
            _hover={{
              background:
                "linear-gradient(to right, var(--chakra-colors-blue-400), var(--chakra-colors-cyan-300))",
              color: "#fff",
              shadow: "2x1",
            }}
            onClick={() => goProduct(surt.id)}
            >
              <Heading size="lg" textTransform="capitalize">{surt.name}</Heading>
              <Image src={ImgCar} alt={surt.name} width={100} margin="0 auto" />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
