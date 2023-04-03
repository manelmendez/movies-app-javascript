FROM node:19-alpine

# set work directory on Docker
WORKDIR /projects/weather-app-js

# Copy project from Host to Docker
COPY ./ ./

# Install client dependencies and build it
RUN npm install && npm run build

# Run server
WORKDIR /projects/weather-app-js

EXPOSE 5001
CMD [ "npm", "run", "preview" ]
