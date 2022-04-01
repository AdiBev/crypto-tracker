import { useQuery } from "react-query";
import { baseUrl } from "../constants";
import { TrendingCoinDetails } from "../types";

export type TrendingCoinItem = {
  item: TrendingCoinDetails;
};

type TrendingCoinsList = {
  coins: TrendingCoinItem[];
};

const getTrendingCoins = async (): Promise<TrendingCoinsList> => {
  const req = await fetch(`${baseUrl}/search/trending`);
  const res = await req.json();
  return res;
};

const GET_TRENDING_COINS = "GET_TRENDING_COINS";

export function useGetTrendingCoins() {
  return useQuery(GET_TRENDING_COINS, getTrendingCoins);
}
