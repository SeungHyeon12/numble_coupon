# COUOPN SERVICE

##

## ERD

![image](https://user-images.githubusercontent.com/110815396/235333148-050c4f63-eb90-45a4-828f-c75e9b55088a.png)

1. 쿠폰에 대한 lifecyle 이 issue 에대한 lifecyle 과 다르기 때문에 별도의 aggreagte 로 분리하였고 현재의 요구사항에서는 issuer 와 issue 에 대한부분의 lifecycle이 동일하기 때문에 issue 를 root 로 사용
2. 따라서 coupon_Issurance 에서는 coupon 에대한 id 만 참조하도록(domain level) 컬럼을 넣었고 실제에서는 many To one 으로 매핑하는 전략 사용

## using hexagonal architecture

![image](https://user-images.githubusercontent.com/110815396/235333108-88a7f6d2-2bd5-49eb-9c58-611bebc794db.png)

## test infra architecture

![image](https://user-images.githubusercontent.com/110815396/235333566-053dd5b5-c854-44c1-ab33-4a66b949ccd8.png)

## Issue couopn concurrency control by Redis queue

1. 기존 쿠폰 발급 로직을 db 의 pessismitc lock 을 사용하는것에서 redis 를 사용한 큐를 사용하였음 (Bull MQ)
2. bull mq 내부구조상 자체적으로 pub/sub 기반의 lock을 사용하기 때문에 한번실행을 보장
3. 트래픽이 과도하게 몰릴경우 db 저장까지의 처리를 기다리지 않고 바로 큐잉을 해서 응답을 할 수 있도록 로직을 수정
4. issue 를 사용하는순간 queue 에 넣어서 무조건적으로 성공을 뱉도록함(따라서 클라이언트 단에서 별도의 서비스로직이 요구됨) ex : 쿠폰발급에 응모하셨습니다 후 후처리
5. 후처리를 하기위해서 쿠폰실패에대한 정보도 저장을 해야하지만 시간이없어서 구현x
6. 현재 docker compose 에 넣어둔 redis commander 로 큐의 정보를 확인가능
   ![image](https://user-images.githubusercontent.com/72781752/235334163-83dc435b-42ae-4fbc-adff-c4dc3a60362c.png)

## E2E Test driven by Scenario

![image](https://user-images.githubusercontent.com/110815396/235333635-79b167b3-df3b-4516-941a-41c755f4297d.png)

## 성능테스트

시간부족으로 차후 예정

## 프로젝트기간

2023/04/23 ~ 2023/04/30 약 7일 소요

## Execute

```
docker-compose build
docker-compose up -d
```
