import { Center, Container, Heading } from "@chakra-ui/react";
import useGetTrendingCoins from "../../queries";
import TableLayout from "../shared";

/**
 * Display top 7 trending coins in CoinGecko
 */
export const TrendingList: React.FC = () => {
  const { data, isSuccess } = useGetTrendingCoins();
  const rowHeadings = ["Name", "Price", "Market cap rank"];
  return (
    <Container maxW="container.lg">
      <Center>
        <Heading as="h1" p="2rem 0">
          Top 7 trending coins
        </Heading>
      </Center>
      <TableLayout
        rowHeadings={rowHeadings}
        coinList={isSuccess ? data.coins : []}
      />
    </Container>
  );
};
