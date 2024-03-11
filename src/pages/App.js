import React from 'react'
import { Routes, Route } from "react-router-dom";
import {
  Flex,
  Box,
} from "@chakra-ui/react";
import Landing from './Landing';
const App = () => {
  return (
    <Flex minH={'100vh'} direction={"column"}>
      <Box flex="1">
        <Routes>
          <Route index path="/" element={<Landing />} />
        </Routes>
      </Box>
    </Flex>
  )
}

export default App;