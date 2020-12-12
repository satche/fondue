ARG NODE_VERSION
FROM node:${NODE_VERSION}

# install npm dependencies on build
RUN npm install

# update packages on container up
CMD ["npm", "update"]