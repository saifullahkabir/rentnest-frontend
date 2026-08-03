# API Integration Documentation

## Project: RentNest

This document maps the frontend features and components to their corresponding backend API endpoints.

---

## 1. Authentication

### Login

**Frontend Feature:** Login Page

**Method:** `POST`

**Endpoint:**
`/api/auth/login`

**Purpose:**
Authenticates the user and creates authentication tokens.

**Used By:**

- Login Form
- Authentication flow

---
### Register

**Frontend Feature:** Register Page

**Method:** `POST`

**Endpoint:**
`/api/auth/register`

**Purpose:**
Create the user.

**Used By:**

- Register Form
- Authentication flow

---

### Get Current User

**Frontend Feature:** Authenticated User / Navbar / Dashboard

**Method:** `GET`

**Endpoint:**
`/api/auth/me`

**Purpose:**
Retrieves the currently authenticated user's information.

**Used By:**

- Navbar
- Role-based navigation
- Protected dashboard routes

---

## 2. Properties

### Get All Properties

**Method:** `GET`

**Endpoint:**
`/api/properties`

**Frontend Feature:**

- Properties Page
- Property Listing
- Property Search/Filter

**Purpose:**
Retrieves available properties.

---

### Get Property Details

**Method:** `GET`

**Endpoint:**
`/api/properties/:id`

**Frontend Feature:**

- Property Details Page

**Purpose:**
Retrieves detailed information about a specific property.

---

### Get Landlord Properties

**Method:** `GET`

**Endpoint:**
`/api/properties/landlord`

**Frontend Feature:**

- My Properties Page
- Landlord Dashboard

**Purpose:**
Retrieves properties belonging to the authenticated landlord.

---

### Create Property

**Method:** `POST`

**Endpoint:**
`/api/properties/landlord`

**Frontend Feature:**

- Create Property Dialog/Form

**Purpose:**
Allows a landlord to create a new property.

---

### Update Property

**Method:** `PATCH`

**Endpoint:**
`/api/properties/landlord/:id`

**Frontend Feature:**

- Edit Property Dialog/Form

**Purpose:**
Updates an existing landlord property.

---

### Delete Property

**Method:** `DELETE`

**Endpoint:**
`/api/properties/landlord/:id`

**Frontend Feature:**

- Delete Property Dialog

**Purpose:**
Deletes a property owned by the authenticated landlord.

---

## 3. Rental Requests

### Create Rental Request

**Method:** `POST`

**Endpoint:**
`/api/rental-requests`

**Frontend Feature:**

- Property Details Page
- Rental Request Form

**Purpose:**
Allows a tenant to submit a rental request for a property.

---

### Get Tenant Rental Requests

**Method:** `GET`

**Endpoint:**
`/api/rental-requests/my-requests`

**Frontend Feature:**

- My Rental Requests Page
- Tenant Dashboard

**Purpose:**
Retrieves rental requests submitted by the authenticated tenant.

---

### Get Landlord Rental Requests

**Method:** `GET`

**Endpoint:**
`/api/rental-requests/landlord`

**Frontend Feature:**

- Rental Requests Page
- Landlord Dashboard

**Purpose:**
Retrieves rental requests for properties owned by the authenticated landlord.

---

### Update Rental Request Status

**Method:** `PATCH`

**Endpoint:**
`/api/rental-requests/landlord/:id`

**Frontend Feature:**

- Landlord Rental Requests Page

**Purpose:**
Allows the landlord to approve or reject a rental request.

---

## 4. Payments

### Create Payment

**Method:** `POST`

**Endpoint:**
`/api/payments/create`

**Frontend Feature:**

- Tenant Rental Request Card
- Pay Now Button

**Purpose:**
Creates a Stripe Checkout Session for an approved rental request.

**Response:**
Returns a Stripe Checkout URL.

---

### Get Tenant Payments

**Method:** `GET`

**Endpoint:**
`/api/payments/my-payments`

**Frontend Feature:**

- Tenant Payments Page
- Tenant Dashboard

**Purpose:**
Retrieves payments made by the authenticated tenant.

---

### Get Landlord Payments

**Method:** `GET`

**Endpoint:**
`/api/payments/landlord`

**Frontend Feature:**

- Landlord Payments Page
- Landlord Dashboard

**Purpose:**
Retrieves payments associated with the landlord's properties.

---

## 5. Categories

### Get All Categories

**Method:** `GET`

**Endpoint:**
`/api/categories`

**Frontend Feature:**

- Property Listing Filters
- Create Property Form
- Update Property Form
- Admin Categories Page

**Purpose:**
Retrieves all property categories.

---

### Create Category

**Method:** `POST`

**Endpoint:**
`/api/categories`

**Frontend Feature:**

- Admin Categories Page
- Create Category Dialog

**Purpose:**
Allows an administrator to create a new property category.

---

### Update Category

**Method:** `PATCH`

**Endpoint:**
`/api/categories/:id`

**Frontend Feature:**

- Admin Categories Page
- Edit Category Dialog

**Purpose:**
Allows an administrator to update a category.

---

### Delete Category

**Method:** `DELETE`

**Endpoint:**
`/api/categories/:id`

**Frontend Feature:**

- Admin Categories Page
- Delete Category Dialog

**Purpose:**
Allows an administrator to delete a category.

---

## 6. Admin

### Get All Users

**Method:** `GET`

**Endpoint:**
`/api/admin/users`

**Frontend Feature:**

- Admin Users Page
- Admin Dashboard

**Purpose:**
Retrieves all registered users.

---

### Update User Status

**Method:** `PATCH`

**Endpoint:**
`/api/admin/users/:id`

**Frontend Feature:**

- Admin Users Page

**Purpose:**
Allows an administrator to activate or block a user.

**Request Body:**

```json
{
  "status": "ACTIVE"
}
```
