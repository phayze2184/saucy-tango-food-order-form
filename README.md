# Saucy Tango Food Order Form

A simple React and Vite food ordering app with a styled menu, reusable food item cards, and a controlled order form.

## Overview

Saucy Tango Food Order Form is a small frontend project built with React. It presents a restaurant-style landing page with featured menu items and a basic order form that collects customer details and confirms the submission with an alert.

## Features

- Reusable food item cards with images, names, and prices
- Header section with restaurant branding
- Controlled React form for customer details and order input
- Modular styling with CSS Modules
- Fast local development with Vite

## Tech Stack

- React
- Vite
- JavaScript
- CSS Modules

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Structure

```text
src/
  App.jsx
  App.module.css
  Header.jsx
  Header.module.css
  FoodItem.jsx
  FoodItem.module.css
  FoodOrderForm.jsx
  FoodOrderForm.module.css
  index.css
  index.jsx
```

## Current Behavior

- Displays three sample dishes: Shakshuka, Spaghetti Carbonara, and Margherita Pizza
- Accepts name, phone, address, and order details
- Shows a browser alert after form submission

## Possible Improvements

- Add form validation
- Replace the alert with an on-page confirmation message
- Store menu data in an array and render cards with `.map()`
- Connect the form to a backend or database

## Author

Created as a frontend practice project.
