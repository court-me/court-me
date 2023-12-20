FROM node:18-alpine

# Create app directory

COPY . .

RUN npm install \
    && npm run build

EXPOSE 3000

CMD [ "npm", "run", "all" ]