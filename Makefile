# Arrancar contenedor jenkins, incluido sonarqube y docker
run-jenkins:
	docker stack deploy -c devops.yml devops
# Pushear al repo de github
push:
	git add .
	git commit -m 'pipeline'
	git push --set-upstream origin pipeline
# Instalar sonarqube, remover carpeta build para poder actualizar
back:
	cd back
	rm -rf build
	npm install sonar-scanner -g
	mkdir build
	ls

client:
	cd client
	npm install
	npm run build

copy:
	cp -r ./client/build/* ./back/build/

sonar:
	cd back
	npm run sonar