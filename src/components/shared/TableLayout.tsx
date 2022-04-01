import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { TrendingCoinItem } from "../../queries/queries";

type TableLayoutProps = {
  rowHeadings: string[];
  coinList: TrendingCoinItem[];
};

export const TableLayout: React.FC<TableLayoutProps> = ({
  coinList,
  rowHeadings,
}) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {rowHeadings.map((heading, idx) => (
                <Th key={`${idx}-${heading}`}>{heading}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {coinList.length > 0 &&
              coinList.map(({ item }) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <Flex>
                        <Text size="xs" mr="0.5rem">
                          {item.name} ({item.symbol})
                        </Text>
                        <Image src={item.thumb} alt={item.name} />
                      </Flex>
                    </Td>
                    <Td>{item.price_btc}</Td>
                    <Td>{item.market_cap_rank}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
