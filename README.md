# Simple Node API

This project is a simple Node.js API built using Express. It contains two API endpoints that return specific messages.

## Project Structure

```
simple-node-api
├── src
│   ├── app.js
│   └── routes
│       └── api.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd simple-node-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the API

To start the server, run the following command:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

- **GET /api/one**
  - Response: "This is response from api one"
  - Status: 200

- **GET /api/two**
  - Response: "This is response from api two"
  - Status: 200

## License

This project is licensed under the MIT License.