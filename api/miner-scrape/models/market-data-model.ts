import { db } from "../../data/db-config";

export const getMarketData = async () => {
  const marketData = await db("market_data").select(
    "id",
    "vendor",
    "model",
    "price",
    "date"
  );
  return marketData;
};

export const addMarketData = async (item) => {
  const marketData = item.map((x) => ({
    id: x.id,
    vendor: x.vendor,
    model: x.model,
    price: x.price,
    date: x.date,
  }));
  const [newItemObject] = await db("market_data").insert(marketData, [
    "id",
    "vendor",
    "model",
    "price",
    "date",
  ]);
  return newItemObject;
};