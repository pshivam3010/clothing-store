# 🛍️ Clothing Store with Stripe Checkout

A simple online clothing store with Stripe payments.

## 🚀 Deploy Instructions
1. Clone repo:
   ```bash
   git clone https://github.com/yourusername/clothing-store.git
   cd clothing-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`) and add your **Stripe Secret Key** and **Frontend URL**.

4. Run locally:
   ```bash
   node server.js
   ```

5. Deploy:
   - **Backend** → Render/Railway/Heroku (connect GitHub repo)
   - **Frontend** → Netlify/Vercel (deploy `/public` folder)

6. Update `script.js`:
   Replace:
   ```js
   fetch("https://YOUR-BACKEND-URL/create-checkout-session", {...})
   ```
   with your deployed backend URL.
