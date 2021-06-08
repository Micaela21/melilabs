build:
	docker build -t melilabs_client .

push:
	docker login
	docker push m1c4/melilabs_client:latest

run:
	docker run -it -p 3000:3000 melilabs_client:latest