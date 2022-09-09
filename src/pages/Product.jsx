import {Heading, Image, Box, Grid, GridItem, Button, Stack} from '@chakra-ui/react';
import ImgGasoil from '../assets/img/gasoil.png';
import ImgGasoilA from '../assets/img/diesel.png';
import ImgAdBlue from '../assets/img/adblue.png';
import ImgDieselPlus from '../assets/img/diesel-plus.png';
import {ArrowBackIcon} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const typesGas = [
    {
      type: "Regular 87",
      price: "20.19",
      imageSrc: ImgGasoil 
    },
    {
      type: "Premium 91",
      price: "21.99",
      imageSrc: ImgGasoilA 
    },
    {
      type: "Diesel A",
      price: "22.34",
      imageSrc: ImgAdBlue 
    },
    {
      type: "Diesel DUBA",
      price: "22.49",
      imageSrc: ImgDieselPlus 
    },
  ];
  const navigate = useNavigate();
  const saveGas = (gas)=>{
    localStorage.setItem("gasType",gas.type);
    localStorage.setItem("gasPrice",gas.price);
    navigate("/method-payment");
  };

  return (
    <>
      <Heading textAlign="center" size="lg" marginBottom={10}>
        Selecciona el combustible
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={9}>
        {typesGas.map((gas, index)=>(
          <GridItem 
            key={index}
            w="100%"
            borderRadius="10"
            padding="4"
            cursor="pointer"
            textAlign="center"
            boxShadow="0px 4px 10px -3px rgb(117,117,177)"
            _hover={{
              bgGradient: "linear(to-r, purple.300, pink.300)",
              shadow: "2x1"
            }}
            onClick={()=> saveGas(gas)}
            >
              <Box>
                <Heading size="md" fontWeight="extrabold">{gas.type}</Heading>
                <Box
                  display="flex"
                  justifyContent="spece-evenly"
                  alignItems="center"
                  marginTop={4}
                  marginBottom={4}
                  >
                    <Heading size="sm">Precio hoy</Heading>
                    <Heading size="md">${gas.price} MXN</Heading>
                </Box>
              </Box>
            <Image src={gas.imageSrc} alt={gas.type} width="100" margin="0 auto" />
          </GridItem>
        ))}
      </Grid>
      <Box marginTop="40px">
        <Stack  
          direction="row"
          spacing={4}
          cursor="pointer"
          onClick={()=>navigate("/surtidor")}>
            <Button leftIcon={<ArrowBackIcon />} colorScheme="pink" variant="outline">
              Volver a despachadores
            </Button>
        </Stack>        
      </Box>
    </>
  )
}
