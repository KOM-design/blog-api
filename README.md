All API Endpoints, specifying their purpose, expected parameters, and response formats.

•	GET /api/posts: Retrieve a list of all blog posts.
Purpose: Retrieve a list of all blog posts.
Expected Parameters: None.
Response Format: An array of blog post objects. Each object should contain the following fields: id, title, content, created_at, updated_at, and category.

•	GET /api/posts/:id: Retrieve a specific blog post by its ID. Include the category of the blog post in the response.
Purpose: Retrieve a specific blog post by its ID. Include the category of the blog post in the response.
Expected Parameters: id (ID of the blog post).
Response Format: A single blog post object with the specified ID. The object should contain the same fields as above (id, title, content, created_at, updated_at, and category).
 
•	POST /api/posts: Create a new blog post. The request body should contain title, content, and category_id.
Purpose: Create a new blog post.
Expected Parameters: Request body should contain title, content, and category_id.
Response Format: The newly created blog post object. It should contain the same fields as above (id, title, content, created_at, updated_at, and category).

•	PUT /api/posts/:id: Update an existing blog post by its ID. The request body should contain title and content.
Purpose: Update an existing blog post by its ID.
Expected Parameters: id (ID of the blog post) in the URL path. Request body should contain title and content.
Response Format: The updated blog post object. It should contain the same fields as above (id, title, content, created_at, updated_at, and category).

•	DELETE /api/posts/:id: Delete a blog post by its ID.
Purpose: Delete a blog post by its ID.
Expected Parameters: id (ID of the blog post).
Response Format: A success message indicating the deletion was successful.

 
