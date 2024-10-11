---
### Feedback Application - REACT

#### Overview

This project demonstrates the **fundamentals of React** by building a **feedback application** that collects feedback for products or services. It covers key React concepts such as components, props, state, events, and leverages the **Context API** for state management and **React Router** for navigation. 

A **JSON Server** is used to simulate a mock REST API, providing a backend-like experience for the client-side application. Future enhancements could include implementing a real backend with **Node.js** and **Express**.




![smartmockups_m24hp5n6](https://github.com/user-attachments/assets/f73354e1-1513-4b55-817d-6e39c94ad618)


#### Features

- **Add Feedback**: Allows users to submit feedback with a rating and a comment. Real-time validation ensures that the comment is at least 10 characters long.
- **Edit Feedback**: Feedback can be updated by selecting an existing item, which is automatically populated into the form for easy editing.
- **Delete Feedback**: Feedback items can be deleted, and the application dynamically updates the average rating and total number of feedback items.

- **Feedback Stats**: Displays the total number of feedback items and the average rating, which updates dynamically based on the feedback provided.
- **Navigation**: Includes a simple **About Page** using **React Router** to demonstrate navigation and routing.

#### Tech Stack

- **Frontend**: React, Context API, React Router
- **Mock Backend**: JSON Server
- **Future Potential**: Node.js and Express for a real backend

#### Setup Instructions

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/wajdifadool/react-feedback-ui.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the JSON Server (for the mock backend):
   ```bash
   npm run server
   ```
4. Run the React application:
   ```bash
   npm start
   ```

#### Future Enhancements

- Implement a real backend using **Node.js** and **Express**.
- Add user authentication for feedback management.
- Enhance the UI and add additional animation effects.

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
