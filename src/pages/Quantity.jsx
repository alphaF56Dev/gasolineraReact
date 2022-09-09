import { useState, useEffect } from "react"
import {Grid, GridItem, Heading, Stack, Button, Box} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function Quantity() {
  const navigate = useNavigate();
  const nButtons = ["1","2","3","4","5","6","7","8","9"];
  const [quantity, setQuantity] = useState("");
  useEffect(()=>{
    localStorage.setItem("quantity", quantity);
  }, [quantity]);
  const concantQty= (n) =>{
    if (n === "." && quantity.includes(".")) n = ""; //validcion para que solo se coloque un punto decimal
    setQuantity(quantity + n);    
  };

  const delLastChar=()=>{
    if (quantity)
    setQuantity(quantity.substring(0,quantity.length - 1));
  };
  //console.log(quantity);
  return (
      <>
        <Grid marginBottom={5}>
          <Heading size="lg">Especifique los litros a cargar</Heading>
          <Heading size="lg" fontWeight={800}>{!quantity ? "0" : quantity} litros</Heading>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {nButtons.map((nb, index) => (
            <GridItem
              key={index}
              w="100%"
              h="20"
              bgGradient="linear(to-r, cyan.400, blue.400)"
              borderRadius={10}
              alignItems="center"
              cursor="pointer"
              fontWeight={900}
              display="flex"
              justifyContent="center"
              boxShadow="0px 4px 10px -3px rgb(117 117 177);"
              _hover={{shadow: "2xl"}}
              fontSize="40px"
              onClick={()=>concantQty(nb)}
            >
              {nb}
            </GridItem>
          ))}
          <GridItem 
            key={9}
            w="100%"
            h="20"
            bgGradient="linear(to-r, cyan.400, blue.400)"
            borderRadius={10}
            alignItems="center"
            cursor="pointer"
            fontWeight={900}
            display="flex"
            justifyContent="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 177);"
            _hover={{shadow: "2xl"}}
            fontSize="40px"
            onClick={()=>concantQty(".")}>
            .
          </GridItem>
          <GridItem 
            key={10}
            w="100%"
            h="20"
            bgGradient="linear(to-r, cyan.400, blue.400)"
            borderRadius={10}
            alignItems="center"
            cursor="pointer"
            fontWeight={800}
            display="flex"
            justifyContent="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 177);"
            _hover={{shadow: "2xl"}}
            fontSize="40px"            
            onClick={()=>concantQty("0")}>
            0
          </GridItem>
          <GridItem 
            key={11}
            w="100%"
            h="20"
            bgGradient="linear(to-r, cyan.400, blue.400)"
            borderRadius={10}
            alignItems="center"
            cursor="pointer"
            fontWeight={800}
            display="flex"
            justifyContent="center"
            boxShadow="0px 4px 10px -3px rgb(117 117 177);"
            _hover={{shadow: "2xl"}}
            fontSize="40px"            
            onClick={()=>delLastChar()}>
            Borrar
          </GridItem>
        </Grid>
        <Box marginTop="40px">
            <Stack
              direction="row"
              spacing={4}
              cursor="pointer"
              display="flex"
              justifyContent="space-between"
              >
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="blue"
                variant="outline"
                size="lg"
                onClick={() => navigate("/method-payment")}
              >
                Volver
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon/>}
                colorScheme="blue"
                variant="solid"
                size="lg"
                onClick={()=>navigate("/resume")}
              >
                Continuar
              </Button>
            </Stack>
        </Box>
      </>
    )
}
