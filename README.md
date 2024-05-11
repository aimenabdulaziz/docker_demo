# Docker Tutorial

To build and run the Docker image locally, you can use the following commands:

```bash
# Build the Docker image
# Replace 'repository' with the name you want to give to your image
# Optional: you may add a tag
docker build -t repository:tag docker_file_path
- docker build -t repository:tag docker_file_path 

# Run the Docker container
# Replace 'your-container-name' with the name you want to give to your container
docker run -d -p 3000:3000 repository:tag
# repository:tag should match what you created in the previous step
# Optional: you may add '--name your-container-name' if you want to assign a specific name to you container  
```

- The `-t` flag tags the image with a name.
- The `-d` flag runs the container in detached mode (in the background).
- The `-p` flag maps a port from the container to the host.

If you push your Docker image to a Docker registry (like Docker Hub), anyone can pull and run your image using the following commands:

```bash
# Pull the Docker image
# Replace 'your-dockerhub-username/your-image-name' with the name of your image on Docker Hub
docker pull your-dockerhub-username/your-image-name
```

You should replace `your-dockerhub-username`, `your-image-name`, and `your-container-name` with your actual Docker Hub username, image name, and container name.