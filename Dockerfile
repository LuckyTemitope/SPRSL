# Use a base image from the
# Anytime you make changes to this file make sure to rebuild the image 
FROM node:12-alpine
# this is where the app files will be loaded 
WORKDIR /usr/share/app
# The following lines are to install the dependencies in the continer
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli -y
# copy all the files from our machine to the work directory
COPY . .

# This is just a port number..  Can be anything, you want your app to listen on. Even 80
EXPOSE 3000
# this is just an advanced version to specifify the port and host so that it is always the same

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "3000"]