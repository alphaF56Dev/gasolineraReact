import {
  Image,
  Grid,
  Heading,
  GridItem,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import ImgCreditCard from "../assets/img/credit-card.png";
import ImgCash from "../assets/img/money.png";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function MethodPayment() {
  const navigate = useNavigate();
  const mPayments = [
    {
      name: "Efectivo",
      imgSrc: ImgCash,
    },
    {
      name: "Tarjeta de Crédito",
      imgSrc: ImgCreditCard,
    },
  ];

  const goQuantity = (mPayment) =>{
    localStorage.setItem("payment", mPayment);
    navigate("/quantity");
  }
  return (
    <>
      <Box textAlign="center" marginBottom={10}>
        <Heading marginBottom={7} size="lg">
          Selecciona tu método de pago
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9} marginTop={4}>
          {mPayments.map((payment, index) => (
            <GridItem
              key={index}
              padding="4"
              borderRadius="10"
              boxShadow="0px 4px 10px -3px rgb(117, 117, 177);"
              cursor="pointer"
              _hover={{ shadow: "2xl" }}
              onClick={()=>goQuantity(payment.name)}
            >
              <Box
                justifyContent="space-evenly"
                alignItems="center"
                marginTop={4}
                marginBottom={3}
              >
                <Heading size="lg" minHeight="80px">
                  {payment.name}
                </Heading>
                <Image src={payment.imgSrc} width="100%" margin="0 auto" />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box>
        <Stack
          direction="row"
          spacing={4}
          cursor="pointer"
          onClick={() => navigate("/product")}
        >
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="gray"
            variant="outline"
          >
            Volver a los combustibles
          </Button>
        </Stack>
      </Box>
    </>
  );
}
