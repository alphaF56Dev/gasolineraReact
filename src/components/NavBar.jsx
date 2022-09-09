import {Image, Box, Heading, Switch, FormControl, FormLabel} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgShop from '../assets/img/shop.png';

export default function NavBar() {
    const navigate = useNavigate();
    const [cTheme, setCTheme] = useState(localStorage.getItem("chakra-ui-color-mode"));
    const changeTheme = () =>{
      console.log(cTheme);
      const nTheme = cTheme === "light" ? "dark" : "light";
      localStorage.setItem("chakra-ui-color-mode", nTheme);
      setCTheme(nTheme);
      location.reload();
    }
  const redirect = () =>{
    navigate("/");
  }
  return (
    <>
      <Box display="block" alignItems="center" justifyContent="space-evenly" borderBottom="1px solid #ddd" >
          <FormControl display="flex" align="center">
            <FormLabel htmlFor="dark-mode" mb="0">Dark mode</FormLabel>
            <Switch id="dark-mode" size="lg" isChecked={(cTheme === "dark")} onChange={()=>changeTheme()} colorScheme="cyan"/>
          </FormControl>
          <Image src={ImgShop} width={70} alt="Logotipo" margin="0 auto" cursor="pointer" onClick={redirect}/>
          <Heading as="h1" size="sm" noOfLines={1} textTransform="uppercase" textAlign="center" color="#ff6b6b" fontWeight="900" paddingBottom="5">
              Gasolinera Alex
          </Heading>
          
      </Box>      
    </>
  )
}