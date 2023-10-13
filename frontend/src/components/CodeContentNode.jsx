import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeContentNode = (props) => {
  const nodeString = `const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
        price: 'price_1HKiSf2eZvKYlo2CxjF9qwbr',
        quantity: 1,
    }],
    mode: 'subscription',
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
});`;

  const rubyString = `Stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

session = Stripe::Checkout::Session.create(
    payment_method_types: ['card'],
    line_items: [{
    price: 'price_1HKiSf2eZvKYlo2CxjF9qwbr',
    quantity: 1,
    }],
    mode: 'subscription',
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
)`;

  const pythonString = `stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

session = stripe.checkout.Session.create(
    payment_method_types=['card'],
    line_items=[{
    'price': 'price_1HKiSf2eZvKYlo2CxjF9qwbr',
    'quantity': 1,
    }],
    mode='subscription',
    success_url='https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url='https://example.com/cancel',
)`;

  const phpString = `\Stripe\Stripe::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

$session = \Stripe\Checkout\Session::create([
    'payment_method_types' => ['card'],
    'line_items' => [[
    'price' => 'price_1HKiSf2eZvKYlo2CxjF9qwbr',
    'quantity' => 1,
    ]],
    'mode' => 'subscription',
    'success_url' => 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url' => 'https://example.com/cancel',
]);`;

  const javaString = `Stripe.apiKey = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';

SessionCreateParams params =
    SessionCreateParams.builder()
    .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
    .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
    .setSuccessUrl('https://example.com/success?session_id={CHECKOUT_SESSION_ID}')
    .setCancelUrl('https://example.com/cancel')
    .addLineItem(
        SessionCreateParams.LineItem.builder()
        .setQuantity(1L)
        .setPrice('price_1HKiSf2eZvKYlo2CxjF9qwbr')
        .build())
    .build();

Session session = Session.create(params);`;

  const goString = `stripe.Key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

params := &stripe.CheckoutSessionParams{
    PaymentMethodTypes: stripe.StringSlice([]string{
        'card',
    }),
    LineItems: []*stripe.CheckoutSessionLineItemParams{
        &stripe.CheckoutSessionLineItemParams{
            Price: stripe.String('price_1HKiSf2eZvKYlo2CxjF9qwbr'),
            Quantity: stripe.Int64(1),
        },
    },
    Mode: stripe.String('subscription'),
    SuccessURL: stripe.String('https://example.com/success?session_id={CHECKOUT_SESSION_ID}'),
    CancelURL: stripe.String('https://example.com/cancel'),
}

session, err := session.New(params)`;

  const dotnetString = `StripeConfiguration.ApiKey = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';

var options = new SessionCreateOptions {
    PaymentMethodTypes = new List<string> {
        'card',
    },
    LineItems = new List<SessionLineItemOptions>
    {
        new SessionLineItemOptions
        {
            Price = 'price_1HKiSf2eZvKYlo2CxjF9qwbr',
            Quantity = 1,
        },
    },
    Mode = 'subscription',
    SuccessUrl = 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    CancelUrl = 'https://example.com/cancel',
};

var service = new SessionService();
Session session = service.Create(options);`;

  return (
    <div className="overflow-scroll scrollbar-hide">
      {props.language === "javascript" && (
        <SyntaxHighlighter
          language={props.language}
          style={vs2015}
          customStyle={{
            background: "none",
          }}
          showLineNumbers={true}
        >
          {nodeString}
        </SyntaxHighlighter>
      )}

      {props.language === "ruby" && (
        <SyntaxHighlighter
          language={props.language}
          style={vs2015}
          customStyle={{
            background: "none",
          }}
          showLineNumbers={true}
        >
          {rubyString}
        </SyntaxHighlighter>
      )}

      {props.language === "python" && (
        <SyntaxHighlighter
          language={props.language}
          style={vs2015}
          customStyle={{
            background: "none",
          }}
          showLineNumbers={true}
        >
          {pythonString}
        </SyntaxHighlighter>
      )}

      {props.language === "php" && (
        <SyntaxHighlighter
          language={props.language}
          style={vs2015}
          customStyle={{
            background: "none",
          }}
          showLineNumbers={true}
        >
          {phpString}
        </SyntaxHighlighter>
      )}

      {props.language === "java" && (
        <SyntaxHighlighter
          language={props.language}
          style={vs2015}
          customStyle={{
            background: "none",
          }}
          showLineNumbers={true}
        >
          {javaString}
        </SyntaxHighlighter>
      )}

      {props.language === "go" && (
        <SyntaxHighlighter
          language={props.language}
          style={vs2015}
          customStyle={{
            background: "none",
          }}
          showLineNumbers={true}
          className="scrollbar-hide"
        >
          {goString}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default CodeContentNode;
