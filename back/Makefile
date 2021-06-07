build:
	docker build -t melilabs_back .

run:
	docker run -it -p 3001:3001 melilabs_back:latest

start:
	docker stack deploy -c melilabs.yml melilabs

stop:
	docker stack rm melilabs
