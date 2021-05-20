#Indicate the source of the app
FROM node:12.13.1-alpine

#install http server for our static content
#RUN npm install -g http-server
#create directory in which we will copy all files
RUN mkdir heroverse

# copy 'package.json' file in current directory
COPY package.json package-lock.json /heroverse/

# go to workspace 'docker-testing' to make the current working directory 
WORKDIR /heroverse

# install project dependencies
RUN npm install
RUN npm install -g @angular/cli

# copy all project files and directories into current directory
COPY . .

# build application
#RUN 

#run application
CMD npm run build:ssr && npm run serve:ssr