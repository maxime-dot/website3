# Build Stage
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install sharp
COPY . .
RUN mv .env.development .env
RUN npm run build


# Production Stage
FROM node:18-alpine AS PRODUCTION_STAGE
RUN mkdir /uploads
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.env ./.env
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]

