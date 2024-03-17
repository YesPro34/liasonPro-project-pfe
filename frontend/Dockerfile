# Base image suitable for frontend development
FROM node:18-alpine

WORKDIR /app

# Copy package.json and other relevant files
COPY package*.json ./
RUN npm install

# Copy the rest of your frontend project files
COPY . .

# Expose the port your frontend app listens on (e.g., 3000)
EXPOSE 3000

# Command to start the frontend development server
CMD [ "npm", "run","dev" ]
