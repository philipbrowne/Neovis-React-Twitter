# pull official base image
FROM node:alpine3.14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
# add app
COPY . ./

EXPOSE 3000 

RUN export NODE_OPTIONS=--openssl-legacy-provider

# start app
CMD ["npm", "start"]
