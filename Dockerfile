FROM node:16

WORKDIR /coupon_service/
COPY ./package.json /coupon_service/
COPY ./yarn.lock /coupon_service/
RUN yarn install

COPY . /couon_service/

CMD yarn start