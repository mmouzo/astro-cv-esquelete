# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port Astro will run on
EXPOSE 3000

# Start Astro in development mode for hot-reloading
CMD ["npm", "run", "dev"]
