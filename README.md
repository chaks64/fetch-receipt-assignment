# Fetch Receipt Points Take Home Assignment

This project utilizes Docker and Redis to perform [Since using nodejs and all the dependencies are there in docker container].

## Prerequisites

- Docker: Follow the installation instructions based on your operating system:
  - [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/install/)
  - [Docker Desktop for Mac](https://docs.docker.com/desktop/mac/install/)
  - [Docker Engine for Linux](https://docs.docker.com/engine/install/)
  
## Getting Started

### 1. Run Redis on Docker

To run Redis on Docker, execute the following command in your terminal:

```shell
docker run --name my-redis -d -p 6379:6379 redis
```

### 2. Clone the GitHub repository and build the docker image 

   - Clone the GitHub repository
   ```shell 
   git clone <repository_url> 
   ```
   
   - Change into the project directory
   ``` shell 
   cd <project_directory> 
   ```
   
   - Build the Docker image
  ```shell
  docker build -t my-image .
  ```
  
### 3. Run the Docker image as a container by executing the following command
   - Run the docker image
     ```shell
      docker run -d --name my-container my-image
      ```
## Running APIs
    