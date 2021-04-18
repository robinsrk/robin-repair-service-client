import React from "react";
import {
  Elements,
  useStripe,
  CardElement,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Iem6QBbLdAJxHXGLSIrAQ3lqaEGBB3b4ZX7h0FsY21lxW4eIv3tbGeSsuFuKeHocD0nS0NpQGvGvRVe00VazD0N00mTPzU5nw"
);

const PaymentProcess = ({ packageDetails }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard packageDetails={packageDetails}></PaymentCard>;
    </Elements>
  );
};
export default PaymentProcess;
