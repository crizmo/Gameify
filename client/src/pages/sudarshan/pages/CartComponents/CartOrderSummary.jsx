import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import RazorPay from "../../../Payment";
import { formatPrice } from "./PriceTag";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color="white">
        {label}
      </Text>
      {value ? (
        <Text color={"white"} fontWeight="medium">
          {value}
        </Text>
      ) : (
        children
      )}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const { userData, token, isAuth } = useSelector((store) => store.auth);
  const total = userData.cart.reduce((a, b) => a + +b.price, 0);

  const PaymentKaro = () => {};

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md" color={"white"}>
        Order Summary
      </Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal">
          <Text color={"white"} fontWeight="semibold">
            <span style={{ marginLeft: "70px" }}>{formatPrice(total)}</span>
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Shipping">
          <Text color={"white"} fontWeight="semibold">
            $300
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Tax">
          <Text color={"white"} fontWeight="semibold">
            $250
          </Text>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="xl" color={"white"} fontWeight="extrabold">
            Total
            <span style={{ marginLeft: "100px" }}>
              {formatPrice(total + 550)}
            </span>
          </Text>
        </Flex>
      </Stack>

      <RazorPay />
    </Stack>
  );
};
