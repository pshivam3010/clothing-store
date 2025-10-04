import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.product },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      })),
      success_url: `${process.env.FRONTEND_URL}/success.html`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
