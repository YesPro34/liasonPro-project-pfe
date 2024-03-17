# Base image with Node.js version 20 (adjust if needed)
FROM node:18-alpine


# Set working directory within the container
WORKDIR /app

# Copy package.json and other relevant files
COPY package*.json ./
RUN npm install


# Copy the rest of your project files
COPY . .

# Expose the port your Express.js app listens on (e.g., 5000)
EXPOSE 5000


# Command to start your application upon container run
CMD ["npm", "start"]
