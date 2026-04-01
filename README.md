# DigiTools Platform

A modern digital tools e-commerce platform built with React, Vite, and Tailwind CSS. This project highlights premium digital services and features an interactive pricing system along with a user-friendly interface.

## Features

**Hero Banner** --- An eye-catching landing section
**Dynamic Pricing Cards** --- Multiple pricing tiers with conditional styling
**Feature Showcase** --- Highlight key features and benefits
**Shopping Cart** --- Full cart functionality to add or remove items  
**Responsive Design** ---A mobile-first approach using Tailwind CSS  
**Newsletter Subscription** - Email signup section; dummy functionality will be added later
**Statistics Section** --- Display key metrics
**Navigation Bar** --- Clear and easy navigation

src/
├── Components/
│ ├── cards/ # Card display components
│ │ ├── Card.jsx
│ │ ├── Cards.jsx
│ │ └── Features.jsx
│ ├── carts/ # Shopping cart components
│ │ ├── Cart.jsx
│ │ └── CartItems.jsx
│ ├── emptyCart/ # Empty cart state
│ │ └── EmptyCard.jsx
│ ├── footer/ # Footer component
│ │ └── Footer.jsx
│ ├── getStartted/ # Get started section
│ │ ├── GetCards.jsx
│ │ └── GetStarted.jsx
│ ├── HeroBanner/ # Hero section
│ │ └── HeroBanner.jsx
│ ├── NavBar/ # Navigation
│ │ └── Navbar.jsx
│ ├── Stats/ # Statistics display
│ │ └── Stats.jsx
│ └── subcribe/ # Newsletter section
│ └── NewsLetter.jsx
├── assets/ # Images and icons
├── App.jsx # Main app component
├── App.css # App styles
├── main.jsx # Entry point
└── index.css # Global styles

```

## Tech Stack

**React** --- 19.2.4, UI library
**Vite** --- build tool and dev server
**Tailwind CSS** --- 4.2.2, utility-first CSS
**DaisyUI** --- 5.5.19, Tailwind component library
**React Icons** --- 5.6.0, icon library
**React Toastify** --- 11.0.5, toast notifications
**Lucide** --- 1.3.0, icon set

### Prerequisites

**Node.js**
**npm**

### Installation

**1. Clone the repository**
**bash-command** -- git clone https://github.com/Nirjhor07/my-assignment-6-Digitools-platform.git
cd my-assignment-6-Digitools-platform

**2. Install dependencies**
**bash-command** -- npm install or npm i

**start development server** -- npm run dev

**Build Project before deployement** -- npm run build

## Api data && Sources

**Made Api data using Chat Gpt**

1. /public/cardApi.json - Card data
2. /public/getStarted.json - Get started section data
3. /public/simplePricing.json - Pricing tiers data

## Component Highlights

### PricingCards

Dynamic pricing card component with conditional styling based on featured/popular status.

### GetCards

Three-step onboarding cards with icons and descriptions.

### Transparent Pricing Cards

Three-step onboarding cards with icons and descriptions.

## Notes

1.  used DaisyUI for pre-built Tailwind components
2.  design responsiveness tested on multiple breakpoints -- exmpl: sm:, md:, lg

## Developper

**Nirjhor Akash** - github--> https://github.com/Nirjhor07
```
