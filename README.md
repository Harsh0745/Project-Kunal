
# EmployWise Frontend Assignment

This project is a **React-based user management system** that integrates with the [Reqres API](https://reqres.in/).  
It includes authentication, user listing with pagination, and CRUD operations (Edit, Delete, Update).  

## Features
- User Authentication: Login with email and password.
- User List: Fetch and display a paginated list of users.
- Edit User: Update user details.
- Delete User: Remove users from the list.
- Persistence: Store authentication tokens in local/session storage.
- Error Handling: Handle API failures gracefully.

---

Getting Started

 1️. Prerequisites
 
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- 
- npm or yarn (package managers)
- 
- Git (for cloning the repository)

 2️. Installation
Clone the repository and install dependencies:

sh
git clone https://github.com/Project-Kunal/your-repo.git

cd your-repo

npm install  # or yarn install

3. Authentication

Use the following credentials for login:

Email: eve.holt@reqres.in

Password: cityslicka

On successful login, a token will be stored and the user will be redirected to the Users List.

4. API Endpoints Used

Login: POST /api/login

Fetch Users: GET /api/users?page=1

Update User: PUT /api/users/{id}

Delete User: DELETE /api/users/{id}

 5. Assumptions & Considerations

State Management: React state and Context API (Redux optional).

UI Design: Responsive layout using Material-UI (or Bootstrap, Tailwind).

Security: Authentication token stored in local storage.

Navigation: Implemented using React Router.

Error Handling: API failures show user-friendly error messages.

Pagination: Implemented via API or lazy loading.

