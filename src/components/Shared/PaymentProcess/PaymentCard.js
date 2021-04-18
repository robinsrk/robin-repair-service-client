import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { MDBBtn } from "mdbreact";
import { useContext } from "react";
import { UserContext } from "../../../App";

const PaymentCard = ({ packageDetails }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      const date = new Date().toDateString();
      const details = {
        ...loggedInUser,
        ...paymentMethod,
        ...packageDetails,
        date,
        status: "pending",
      };
      delete details._id;
      console.log(details);
      fetch("https://afternoon-river-20130.herokuapp.com/placeOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <MDBBtn type="submit" gradient="purple" disabled={!stripe}>
        Pay
      </MDBBtn>
    </form>
  );
};
export default PaymentCard;
