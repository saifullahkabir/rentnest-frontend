# RentNest

RentNest is a modern rental property platform built with **Next.js, TypeScript, Tailwind CSS, and Shadcn UI**. It provides separate experiences for **Tenants, Landlords, and Admins**.

## Live URL

**Client:** https://rentnest-rental-platform.vercel.app/

## Features

* Role-based authentication and dashboards
* Property browsing and rental requests
* Landlord property management
* Rental request management
* Stripe payment integration
* Tenant payment history
* Landlord payment tracking
* Admin user, property, rental, payment, and category management
* Responsive and dark-mode friendly UI
* Structured error handling with toast notifications

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* Shadcn UI
* React
* Stripe
* REST API

## User Roles

### Tenant

* Browse properties
* Send rental requests
* Make Stripe payments
* View payment history
* View rental activities

### Landlord

* Create, update, and delete properties
* Manage rental requests
* View received payments
* View dashboard statistics

### Admin

* View dashboard statistics
* Manage users
* View properties
* View rental requests
* View payments
* Create, update, and delete categories

## Payment

RentNest uses **Stripe Checkout** for real payment processing.

After payment, users are redirected to dedicated **success** or **cancel** pages.

## API Documentation

The frontend consumes the RentNest backend REST APIs.

For the complete mapping of frontend features/components to their corresponding backend endpoints, see:

**`API_INTEGRATION.md`**

## Error Handling

API errors are handled with user-friendly feedback through toast notifications and appropriate UI states.

## Admin Testing

A working admin account is provided for testing the deployed application.

## Getting Started

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```
