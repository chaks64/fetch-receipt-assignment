# Fetch Receipt Points Take Home Assignment

This project utilizes Docker and Redis to perform [Since using nodejs and all the dependencies are there in docker container].

## Prerequisites

- Docker: Follow the installation instructions based on your operating system:
  - [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/install/)
  - [Docker Desktop for Mac](https://docs.docker.com/desktop/mac/install/)
  - [Docker Engine for Linux](https://docs.docker.com/engine/install/)
  
## Getting Started

### 1. Clone the GitHub repository and build the docker image 

   - Clone the GitHub repository
   ```shell 
   git clone https://github.com/chaks64/fetch-receipt-assignment.git 
   ```
   
   - Change into the project directory
   ``` shell 
   cd fetch-receipt-assignment 
   ```
### 2. Build a docker image with Redis and Nodejs container on Docker

To run Redis and Node.js on same container Docker, execute the following command in your terminal:
  
   - Build the Docker image
  ```shell
  docker build -t my-image .
  ```
  
### 3. Run the Docker image as a container by executing the following command
   - Run the following command to remove the existing containers and pull the latest version of the Docker image:
  ```shell
  docker-compose down && docker-compose pull
  ```
   - Rebuild the Docker image using docker-compose build: 
  ```shell
  docker-compose build
  ```

   - Rebuild the Docker image using docker-compose build: ("-d" to run in detach mode)
  ```shell
  docker-compose up -d
  ```

## Running APIs
    