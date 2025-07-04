# Use Node.js base image (LTS)
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and lock file
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy all source code (including src folder)
COPY . .

# Set default port (optional, depends on your app)
EXPOSE 3000

# Run the app (adjust if your entry file is not src/index.js)
CMD ["node", "src/index.js"]

