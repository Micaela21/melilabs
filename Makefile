# Arrancar contenedor jenkins, incluido sonarqube y docker
run-jenkins:
	docker stack deploy -c devops.yml devops

# Pushear al repo de github
push-git:
	git add .
	git commit -m 'multiple agents'
	git push --set-upstream origin multipleAgents

# Copiar carpeta build al back para despliegue
copy:
	cp -r ./client/build/* ./back/build/

# Levantar imagen
run:
	docker run -it -p 3001:3001 m1c4/melilabs:latest