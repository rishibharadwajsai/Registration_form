# Registration Form Application

This repository contains a simple signup form application built using Node.js, Express.js, and MongoDB (Mongoose). The application allows users to sign up by providing their name, email, mobile number, and password. It includes client-side validation for password length and server-side validation using Mongoose schema.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- HTML/CSS
- JavaScript

## Features

- **Signup Form**: Users can fill out the signup form with their details.
- **Password Validation**: Client-side validation ensures the password is at least 8 characters long.
- **Server-side Validation**: Uses Mongoose schema to validate email and mobile number uniqueness.
- **Static File Handling**: Serves static HTML, CSS, and client-side JavaScript files using Express middleware.

## Folder Structure

- **db**: Contains MongoDB connection setup.
- **models**: Defines Mongoose schema for the `Register` model.
- **public**: Stores static assets such as HTML and CSS files.
- **README.md**: Provides an overview of the project.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/Registration_form.git`
2. Navigate to the project directory: `cd Registration_form`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open your web browser and go to `http://localhost:5000` to view the application.

## Usage

- Open the application in your web browser.
- Fill out the signup form with your details.
- Click the "Submit" button to create your account.
- You will see a success message if the account creation is successful.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** This project is for demonstration purposes and may not include all production-level features such as secure password storage and user authentication.
