import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import TrendingList from "./components/trendingList";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <TrendingList />
    </ChakraProvider>
  </QueryClientProvider>
);
