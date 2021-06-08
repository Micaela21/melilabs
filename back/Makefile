build:
	docker build -t melilabs_back .

push:
	docker login
	docker push m1c4/melilabs:latest

run-local:
	docker run -it -p 3001:3001 melilabs_back:latest

run:
	docker run -it -p 3001:3001 m1c4/melilabs:latest

start:
	docker stack deploy -c melilabs.yml melilabs

stop:
	docker stack rm melilabs
