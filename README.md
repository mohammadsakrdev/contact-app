# Installing

1- Download the repository git clone https://github.com/mohammadsakrdev/contact-app.git
2- Open the Terminal (Linux & MacOS) or PowerShell (Windows) and change directory to the project folder.
3- Type ‘npm install’ in the Terminal (PowerShell) and press Enter. All the dependencies would be installed.
4- Go back to the Terminal (PowerShell) and be sure that you are pointing inside the project folder.
To open the application, type 'npm run start-dev' and press Enter.
5- The application should be live on the local port 3005.

# Run with Docker

How to use this image

1- docker build -t contact-backend-docker-image .
2- docker run -p 3005:3005 contact-backend-docker-image
