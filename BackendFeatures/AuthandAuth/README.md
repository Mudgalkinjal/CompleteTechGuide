# Authentication & Authorization Backend System

This project demonstrates user authentication (JWT, Google OAuth2) and authorization (RBAC), providing a secure flow for user interactions.

* * *

## Folder & File Structure

1.  **app.js**
    
    *   Entry point for the application.
    *   Configures middleware, sessions, and routes.
2.  **routes/auth.js**
    
    *   Defines routes for user registration, login, token-protected endpoints, and Google OAuth.
3.  **controllers/jwtAuth.js**
    
    *   Handles user authentication logic (JWT generation, password hashing, validation).
4.  **oauth.js**
    
    *   Configures Google OAuth using `passport-google-oauth20`.
5.  **rbac.js**
    
    *   Implements Role-Based Access Control (RBAC) middleware for managing user permissions.
6.  **middleware/authMiddleware.js**
    
    *   Provides middleware to verify JWT tokens and check user roles.
7.  **config/keys.js**
    
    *   Centralized configuration for environment variables like `JWT_SECRET` and OAuth keys.

* * *

## Dependencies

1.  `express`: HTTP server.
2.  `express-session`: Session management.
3.  `passport`: Authentication library.
4.  `passport-google-oauth20`: Google OAuth2 integration.
5.  `jsonwebtoken`: Handles JWT creation and verification.
6.  `bcryptjs`: Password hashing for secure storage.
7.  `dotenv`: Environment variable management.

* * *

## Flow

1.  **User Registration (`/register`)**:
    
    *   Hashes password and stores user data.
    *   Uses `bcrypt` for password security.
2.  **User Login (`/login`)**:
    
    *   Verifies credentials.
    *   Issues a JWT with a 1-hour expiration.
3.  **Token Verification**:
    
    *   Middleware checks JWT for protected routes.
4.  **Google OAuth (`/auth/google`)**:
    
    *   Redirects users for Google sign-in.
    *   Authenticates and serializes users upon callback.
5.  **Role-Based Access Control**:
    
    *   Validates user roles before granting access to actions like `read`, `write`, `delete`.

* * *

## Setup & Running

### Prerequisites

*   Install [Node.js](https://nodejs.org).
*   Add a `.env` file with:
    
    makefile
    
    CopyEdit
    
    `JWT_SECRET=your_jwt_secret GOOGLE_CLIENT_ID=your_google_client_id GOOGLE_CLIENT_SECRET=your_google_client_secret SESSION_SECRET=your_session_secret`
    

### Installation

1.  Clone the repository.
2.  Run `npm install` to install dependencies.
3.  Start the server with `node app.js`.

* * *

## Testing

1.  **API Testing Tools**: Use [Postman](https://www.postman.com/) or `curl`.
2.  **Routes to Test**:
    *   **JWT Authentication**:
        
        *   Register: `POST /api/register` (Body: `{ "username": "test", "password": "test123" }`)
        *   Login: `POST /api/login` (Body: `{ "username": "test", "password": "test123" }`)
        *   Protected Route: `GET /api/protected` (Requires token in `Authorization` header).
    *   **Google OAuth**:
        
        *   Start Auth: `GET /auth/google`.
        *   Callback: Automatically redirects to `/dashboard`.
    *   **RBAC**:
        
        *   Example restricted route: Apply `authorize('role', 'action')` middleware.

* * *

### Additional Details for Testing and Debugging

#### Testing Tips

1.  **JWT Authentication**
    
    *   **Validate Tokens**:
        *   Use [jwt.io](https://jwt.io) to decode and validate tokens during development.
    *   **Test Expiry**:
        *   Ensure tokens expire after the specified time (1 hour by default). Reissue tokens to confirm refresh functionality if needed.
    *   **Invalid Token Handling**:
        *   Send requests with tampered or expired tokens to ensure proper error handling (`403` or `401` status).
2.  **Google OAuth**
    
    *   **Simulate Multiple Users**:
        *   Test with multiple Google accounts to confirm authentication flow.
    *   **Callback Testing**:
        *   Ensure the `/auth/google/callback` route correctly redirects and handles errors.
    *   **Failure Scenarios**:
        *   Test failure redirect (`/`) when OAuth fails.
3.  **RBAC**
    
    *   **Role Coverage**:
        *   Test with different roles (`admin`, `user`) to ensure actions align with permissions.
    *   **Unauthorized Access**:
        *   Send requests with insufficient permissions to verify `403 Forbidden` responses.
4.  **Error Responses**
    
    *   Test routes with missing or malformed data (e.g., missing `Authorization` header, invalid JSON payload) to confirm meaningful error messages.

* * *

#### Debugging Tips

1.  **Middleware Debugging**
    
    *   Add console logs in `authMiddleware.js` and `rbac.js` to track token verification and role checks:
        
        javascript
        
        CopyEdit
        
        `console.log('Decoded JWT:', req.user); console.log('User Role:', req.user?.role);`
        
2.  **OAuth Issues**
    
    *   Enable verbose logging in `passport`:
        
        javascript
        
        CopyEdit
        
        `passport.authenticate('google', { scope: ['profile'], session: false, state: true });`
        
    *   Confirm `clientID`, `clientSecret`, and `callbackURL` match the Google Cloud Console setup.
3.  **JWT Debugging**
    
    *   Log token generation and verification processes:
        
        javascript
        
        CopyEdit
        
        `console.log('Generated Token:', token); jwt.verify(token, 'secretKey', (err, decoded) => console.log(decoded));`
        
4.  **Session Testing**
    
    *   Monitor session data:
        
        javascript
        
        CopyEdit
        
        `app.use((req, res, next) => {   console.log('Session Data:', req.session);   next(); });`
        
5.  **Error Logging**
    
    *   Use a custom error-handling middleware to log and format errors:
        
        javascript
        
        CopyEdit
        
        `app.use((err, req, res, next) => {   console.error('Error:', err.message);   res.status(err.status || 500).json({ error: err.message }); });`
        
6.  **Environment Issues**
    
    *   Verify `.env` values are loaded correctly:
        
        javascript
        
        CopyEdit
        
        `console.log('JWT_SECRET:', process.env.JWT_SECRET); console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);`
        
7.  **Route Debugging**
    
    *   Use [morgan](https://www.npmjs.com/package/morgan) for HTTP request logging:
        
        javascript
        
        CopyEdit
        
        `const morgan = require('morgan'); app.use(morgan('dev'));`
        

* * *

#### Common Errors and Fixes

| Error | Cause | Fix |
| --- | --- | --- |
| 401 Unauthorized | Missing/invalid token | Ensure Authorization header is set. |
| 403 Forbidden | Insufficient permissions (RBAC) | Check authorize middleware configuration. |
| Invalid redirect_uri in OAuth | Mismatched callbackURL in Google Console | Update callback URL in both places. |
| Session not persisting | Incorrect sessionSecret or missing sessions | Confirm session middleware setup. |
| Cannot read property 'role' | User not attached to request object | Check req.user assignment in middleware. |


### Example Postman Requests

# 

Here are the detailed examples of Postman requests for testing your application:

* * *

#### 1\. Register User

# 

**Endpoint**:  
`POST /api/register`

**Headers**:  
Content-Type: `application/json`

**Body**:

json

CopyEdit

`{   "username": "testuser",   "password": "testpassword" }`

**Expected Response**:  
Status: `201 Created`  
Body:

json

CopyEdit

`{   "message": "User registered successfully!" }`

* * *

#### 2\. Login User

# 

**Endpoint**:  
`POST /api/login`

**Headers**:  
Content-Type: `application/json`

**Body**:

json

CopyEdit

`{   "username": "testuser",   "password": "testpassword" }`

**Expected Response**:  
Status: `200 OK`  
Body:

json

CopyEdit

`{   "token": "JWT_TOKEN_HERE" }`

* * *

#### 3\. Access Protected Route

# 

**Endpoint**:  
`GET /api/protected`

**Headers**:  
Authorization: `Bearer JWT_TOKEN_HERE`

**Expected Response**:  
Status: `200 OK`  
Body:

json

CopyEdit

`{   "message": "Hello, testuser! You are authenticated." }`

* * *

#### 4\. Google OAuth Flow

# 

*   Open the following URL in a browser to simulate Google sign-in:  
    **Endpoint**:  
    `GET /auth/google`
    
*   After login, Google will redirect to:  
    **Endpoint**:  
    `/auth/google/callback`
    

**Expected Behavior**:

*   Successful login redirects to `/dashboard`.
*   Failed login redirects to `/`.

* * *

#### 5\. Access RBAC-Protected Route

# 

Assuming you have a route like this:

javascript

CopyEdit

`router.get('/admin', verifyToken, authorizeRole('admin'), (req, res) => {   res.json({ message: 'Welcome, admin!' }); });`

**Endpoint**:  
`GET /api/admin`

**Headers**:  
Authorization: `Bearer JWT_TOKEN_HERE`

**Expected Responses**:

*   **Valid Admin User**:  
    Status: `200 OK`  
    Body:
    
    json
    
    CopyEdit
    
    `{   "message": "Welcome, admin!" }`
    
*   **Non-Admin User**:  
    Status: `403 Forbidden`  
    Body:
    
    json
    
    CopyEdit
    
    `{   "message": "Access forbidden. Insufficient permissions." }`
    

* * *

### Debugging OAuth Callbacks

# 

1.  **Check Google Console Configuration**:
    
    *   Ensure `Redirect URI` in Google Cloud Console matches the `/auth/google/callback` route.
2.  **Testing Locally**:
    
    *   Use [ngrok](https://ngrok.com/) to expose your local server for testing the callback URL.  
        Example command:
        
        bash
        
        CopyEdit
        
        `ngrok http 3000`
        
    *   Update your Google OAuth redirect URI to the ngrok URL.

