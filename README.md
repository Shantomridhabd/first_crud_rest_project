🚀 Product Inventory Management API

This project is a CRUD-based RESTful API for managing product inventory, built using Node.js, Express.js, and MongoDB. The API allows users to Create, Read, Update, and Delete (CRUD) products while supporting pagination, sorting, and filtering.

✅ What I Implemented:

1. Project Setup:

* Initialized a Node.js project and installed dependencies (express, mongoose, dotenv, cors, body-parser, nodemon).
* Configured environment variables using a .env file.

2. Database Setup:

* Used MongoDB & Mongoose to create a Product schema with fields: name, price, category, stock, description, and createdAt.
* Connected the API to MongoDB (local/Atlas).

3. CRUD API Endpoints:

* POST /api/products → Add a new product.
* GET /api/products → Fetch all products.
* GET /api/products/:id → Fetch a specific product by ID.
* PUT /api/products/:id → Update a product by ID.
* DELETE /api/products/:id → Delete a product by ID.

4. Middleware & Error Handling:

* Used body-parser for handling JSON requests.
* Enabled CORS for cross-origin requests.
* Implemented validation for duplicate products and proper error handling for missing fields or invalid IDs.

5. Advanced Features:

* Pagination → Allows fetching products in pages using page and limit query parameters.
* Sorting & Filtering → Sorts products by price and filters them by category.

6. Testing:

* Tested all API endpoints using Postman to ensure correct functionality and response handling.
* Deployed API to Render.

❌ What Did I Skipped:

* Secure API with JWT authentication - Because, I still on that topic and learning.

🔥 Wrapping Up:

This project demonstrates full CRUD functionality, proper database integration, and essential API features like pagination, sorting, and filtering. The API is well-structured, optimized, and fully tested.

🔥 Next Steps: Planning to deploy the API and add authentication in the future! 🚀

