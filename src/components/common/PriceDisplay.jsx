import React from "react";
import { formatPrice } from "../../utils/helpers";

export default function PriceDisplay({ price, currency }) {
  return <span>{formatPrice(price, currency)}</span>;
}
