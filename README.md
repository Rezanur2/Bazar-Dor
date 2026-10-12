# 🛒 বাজার দর | BazarDor

A modern, responsive market price tracking application built with Next.js. BazarDor helps users explore essential product prices in Bangladesh, compare price changes, browse categories, and access detailed market information.

## 🌐 Live Demo

- **Live Website:** https://bazar-dor-sigma-six.vercel.app
- **GitHub Repository:** https://github.com/Rezanur2/B14-A7-Bazar-Dor

## 📖 About

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

BazarDor is a market price browsing application designed to make daily product price information easier to access. Users can explore essential products, compare rising and falling prices, browse product categories, and view product details through a clean and responsive interface.

The application is built with Next.js App Router, TypeScript, and Tailwind CSS, with authentication powered by Better Auth.

## ✨ Features

- **📈 Price Tracking:** Explore products with rising and falling price indicators.
- **🛍️ Product Catalog:** Browse essential products through reusable product cards.
- **📂 Category Filtering:** Navigate product categories and explore relevant products.
- **↕️ Price Sorting:** Sort products by default order, lowest price, or highest price.
- **🔎 Product Details:** View individual product information and market price summaries.
- **🔐 Authentication:** Sign-in and sign-up functionality powered by Better Auth.
- **👤 Profile Management:** Access the user profile and supported account management features.
- **⏳ Loading States:** Display loading interfaces while data is being fetched.
- **📱 Responsive UI:** Support mobile, tablet, and desktop screen sizes.
- **🚫 Error Handling:** Provide appropriate feedback for invalid routes and failed operations.

## 🛠️ Technologies Used

- **Next.js** — React framework and App Router
- **React** — Component-based user interfaces
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive layouts
- **Better Auth** — Authentication and account management
- **REST API** — Product and category data
- **Git & GitHub** — Version control
- **Vercel** — Deployment platform

## 🔌 API Integration

BazarDor uses the Programming Hero BazarDor API to retrieve product and category data.

**Primary API**

`https://openapi.programming-hero.com/api/bazardor`

**Alternative APIs**

- `https://api.api-store.workers.dev/api/bazardor`
- `https://api.abcz.workers.dev/api/bazardor`

### Available Endpoints

| Endpoint | Description |
|---|---|
| `/products` | Retrieve all products |
| `/products?category=chal` | Retrieve products by category |
| `/products/1` | Retrieve an individual product |
| `/categories` | Retrieve all categories |
| `/categories/chal` | Retrieve category information |

## 📁 Project Structure

```text

bazar-dor/
├── public/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── signin/
│   │   │   │   └── page.tsx
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts
│   │   │
│   │   ├── category/
│   │   │   └── [categoryId]/
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   │
│   │   ├── product/
│   │   │   └── [productId]/
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   │
│   │   ├── not-found.tsx       # Root 404 page
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx            # Home page
│   │
│   ├── assets/
│   │   ├── bazar-hero.png
│   │   ├── demoMaleAvatar.jpg
│   │   ├── github.png
│   │   ├── Google.png
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── AllProductsPrice.tsx
│   │   │   ├── Banner.tsx
│   │   │   ├── PriceDown.tsx
│   │   │   └── PriceUp.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── ActiveLink.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── inline-script.tsx
│   │   │   ├── LocalDate.tsx
│   │   │   ├── NavLinks.tsx
│   │   │   └── UserInfo.tsx
│   │   │
│   │   ├── Marquee.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductNotFound.tsx
│   │   ├── ProductSkeleton.tsx
│   │   └── SortFilter.tsx
│   │
│   ├── lib/
│   │   ├── auth-client.ts
│   │   └── auth.ts
│   │
│   ├── services/
│   │   └── baseUrl.js
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── utils/
│   │   └── format.ts
│   └── proxy.ts
│
├── .env
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

```

*Note: This structure is based on the visible project files. Some filenames and folders may differ in your local repository.*

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Rezanur2/B14-A7-Bazar-Dor.git
```

### 2. Navigate to the Project

```bash
cd B14-A7-Bazar-Dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and add the environment variables required by your application.

Example:

```env
MONGODB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Important:**
- Replace the placeholder values with your own credentials.
- Use the exact environment variable names configured in your project.
- Configure the appropriate production URLs and OAuth callback URLs when deploying.
- Never commit your `.env` file or expose real secrets, OAuth credentials, or private API keys in your repository.


### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

BazarDor is designed to provide a consistent experience across:

- Mobile phones
- Tablets
- Laptops and desktop computers

The layout adapts to different screen sizes, keeping navigation, product cards, and market information accessible.

## 🔐 Authentication

The project integrates Better Auth for user authentication. Depending on the configured authentication providers, users can sign in, create an account, and access protected pages.

Authentication providers and profile update functionality require the appropriate application configuration.

## 🚀 Deployment

The application can be deployed using Vercel.

1. Push the latest code to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.
5. Test the home page, category routes, product details, authentication, and direct page refreshes.

## 🎯 Assignment

This project is developed for the **Programming Hero B14-A7 Bazar Dor** assignment.

The goal is to build a responsive market price application with product browsing, price comparisons, category navigation, authentication, and a user-friendly interface.

## 👨‍💻 Author

**Md Rezanur Rahman**

GitHub: [@Rezanur2](https://github.com/Rezanur2)

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

