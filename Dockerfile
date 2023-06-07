FROM node:18-alpine

WORKDIR /qu-beyond-challenge

EXPOSE 3000

COPY package.json package-lock.json ./

  
RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]