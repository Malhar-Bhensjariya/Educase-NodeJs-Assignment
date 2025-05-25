## Educase-NodeJs-Assignment
Task: Develop Node.js APIs for School Management 

Objective: To manage school data, implement a set of APIs using Node.js, Express.js framework, and MySQL. The system should allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Project Structure

```text
educase-nodejs-assignment/
│
├── backend/
│   ├── config/
│   │   └── db.js            # MySQL DB connection setup
│   ├── controllers/
│   │   └── schoolController.js  # Core logic for adding/listing schools
│   ├── routes/
│   │   └── schoolRoutes.js  # Express route handlers
│   ├── middlewares/
│   │   └── verifyInput.js   # Input validation middleware
│   ├── utils/
│   │   └── geoUtils.js      # Haversine formula logic
│   ├── .env                 # Environment config
│   └── app.js               # Entry point
│
├── README.md
└── .gitignore
```

## Setup
```bash
git clone https://github.com/your-username/educase-nodejs-assignment.git
cd educase-nodejs-assignment/backend
npm install
```
