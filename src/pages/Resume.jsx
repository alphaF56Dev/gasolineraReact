import {
  Heading,
  Grid,
  GridItem,
  Box,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import imgConfeti from "../assets/img/confeti.png";
import ImgGas from "../assets/img/gasoil.png";
import ImgMoney from "../assets/img/money-pig.png";
import ImgDrop from "../assets/img/drop.png";
import ImgCapital from "../assets/img/capital.png";
import ImgCar from "../assets/img/car.png";

export default function Resume() {
  const gasPrice = localStorage.getItem("gasPrice");
  const gasType = localStorage.getItem("gasType");
  const idSurtidor = localStorage.getItem("idSurtidor");
  const payment = localStorage.getItem("payment");
  const quantity = localStorage.getItem("quantity");

  const resumeData = [
    {
      title: "Surtidor",
      result: idSurtidor,
      imageSrc: ImgCar,
    },
    {
      title: "Gasolina",
      result: gasType,
      imageSrc: ImgGas,
    },
    {
      title: "Método de pago",
      result: payment,
      imageSrc: ImgMoney,
    },
    {
      title: "Cantidad",
      result: `${quantity} Litros`,
      imageSrc: ImgDrop,
    },
  ];

  const tImpte = (gasPrice * quantity).toFixed(2);
  const navigate = useNavigate();
  const goHome = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Grid marginBottom={5} textAlign="center">
        <Heading size="lg">¡Puedes despacharte!</Heading>
        <Image src={imgConfeti} width="100px" margin="0 auto" />
      </Grid>
      <Grid textAlign="center" paddingBottom="4rem">
        <Heading marginBottom="40px" size="lg">
          Resumen del pedido
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9}>
          {resumeData.map((res, index) => (
            <GridItem
              key={index}
              w="100%"
              borderRadius="10"
              boxShadow="0px 4px 10px -3px rgb(117 117 177);"
              padding="25px 15px"
            >
              <Box minHeight="50px">
                <Heading size="sm">{res.title}</Heading>
                <Heading size="md" fontWeight="800">
                  {res.result}
                </Heading>
                <Image
                  src={res.imageSrc}
                  alt="img de prueba"
                  width="100px"
                  margin="0 auto"
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Grid
          marginTop="20px"
          padding="20px"
          boxShadow="0px 4px 10px -3px rgb(117 117 177);"
          borderRadius="10"
        >
          <Heading size="sm">Importe total a pagar</Heading>
          <GridItem borderRadius="10">
            <Heading size="md">$ {tImpte} MXN</Heading>
            <Image
              src={ImgCapital}
              alt="Precio"
              width="100px"
              margin="0 auto"
            />
          </GridItem>
        </Grid>
      </Grid>
      <Box marginTop="40px">
        <Stack
          direction="row"
          spacing={4}
          cursor="pointer"
          onClick={() => goHome()}
        >
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="gray"
            variant="outline"
          >
            Ir al inicio
          </Button>
        </Stack>
      </Box>
    </>
  );
}
