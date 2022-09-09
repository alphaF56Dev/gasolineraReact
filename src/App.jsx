import { Box, Container } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Surtidor from './pages/Surtidor';
import Product from './pages/Product';
import MethodPayment from './pages/MethodPayment';
import Quantity from './pages/Quantity';
import Resume from './pages/Resume';

function App() {
  return (
    <Box w="100%" h="100vh">
      <NavBar />
      <Container>
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surtidor" element={<Surtidor />} />
            <Route path="/product" element={<Product />} />
            <Route path="/method-payment" element={<MethodPayment />} />
            <Route path="/quantity" element={<Quantity />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        {/* </Router> */}
      </Container>
    </Box>
  )
}

export default App
