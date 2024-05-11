############### some helpful commands ################
# FROM: Specifies the base image to build upon.
# WORKDIR: Sets the working directory inside the container.
# COPY: Copies files from the host into the container.
# RUN: Executes commands inside the container during the build process.
# CMD or ENTRYPOINT: Defines the command to run when the container starts.

# Specify the base image to build upon using the FROM keyword. 
# Hint: Use node:22 as the base image.
FROM node:22

# Set the working directory inside the container.
# Equivalent to: cd ... in the terminal.
WORKDIR /app

# Optional: you may set a new environment variable.
# ENV PORT=3000

# Copy the files containing the list of dependencies from the 
# host (local machine) into the (docker) container.
# COPY <host-path> <container-path>
COPY package*.json .

# Execute commands inside the container during the build process.
# Equivalent to: npm install in the terminal.
RUN npm install

# Copy the rest of the files from the host into the container.
COPY . .

# Build the app
RUN npm run build

# CMD: Define the command to run when the container starts.
CMD ["node", "./src/server.js"]