#Indicate the source of the app
FROM node:14.15-alpine

#create directory in which we will copy all files
RUN mkdir heroeverse

# copy 'package.json' and 'package-lock.json' files in current directory
COPY package.json package-lock.json /heroeverse/

# go to workspace 'heroeverse' to make the current working directory 
WORKDIR /heroeverse

# install project dependencies
RUN npm install
RUN npm install -g @angular/cli

# copy all project files and directories into current directory
COPY . .

#run application
CMD npm run build:ssr && npm run serve:ssr