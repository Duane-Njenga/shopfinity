# Shopfinity
Shopfinity is a modern e-commerce application built with React JS, which allows multiple small-scale businesses to display their products for sale.

## Features

- Product Browsing: View all products with details in a list
- Detailed Product viewing: Once clickef on the product card product details are displayed 
- Shopping Cart: Add/remove products, adjust quantities
- Wishlist: Save products for later
- Dark Mode: Toggle between light and dark themes
for user-friendliness
- User Authentication: Register and login with Firebase

## Technlogies Used
- FrontEnd: React JavaScript
- Backend: Free web api from https://fakestoreapi.com/products
- Styling: Tailwind CSS

## Project Structure 
src/
├── Components/
│   ├── DarkModeToggle.jsx
│   ├── Firebase.jsx
│   ├── NavBar.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── Pages/
│   ├── Cart.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── LogIn.jsx
│   ├── ProductPage.jsx
│   ├── Register.jsx
│   └── WishlistPage.jsx
├── main.jsx
├── index.css
└── routes.js

## Getting started 
### Prerequisites
- Npm

### Installation
Clone the repository:
```bash
git clone https://github.com/Duane-Njenga/shopfinity.git
```
Navigate to the Project directory:
```bash
cd shopfinity
```

Install Dependancies:
```bash
npm install 
```
Start the development server:
```bash
npm run dev
```
Open your browser and visit http://localhost:5173


## Usage

- Home Page: Browse all available products
- Product Page: View detailed information about a product
- Cart: Review selected items and proceed to checkout
- Wishlist: Access saved products for future consideration
- Authentication: Register/Login to access personalized features

## Styling
The application uses Tailwind CSS for styling with responsive design elements including:

- Cards with rounded borders and shadows
- Hover effects on buttons
- Conditional rendering based on cart, wishlist and login status.

## License
This project is licensed under the MIT License.