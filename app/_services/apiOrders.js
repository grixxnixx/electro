"use client";

import axios from "axios";
import { BASE_URL, PAGE_SIZE } from "../lib/utils";

export async function getAllOrders(page, query) {
  const token = localStorage.getItem("access-token");
  if (!token) return null;

  let url = `${BASE_URL}/click-and-collect?per_page=${PAGE_SIZE}&page=${page}`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data.data)
    throw new Error(
      "There is no order at that momment! Please add a new Order"
    );

  return data.data;
}

export async function createOrder(formData) {
  const token = localStorage.getItem("access-token");

  if (!token) return null;

  const processData = {
    ...formData,
    product_id: Number(formData.product_id),
    varients: [{ attribute: "red", attribute_value: "yello" }],
  };

  const { data } = await axios(`${BASE_URL}/checkout`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: processData,
  });

  return data;
}