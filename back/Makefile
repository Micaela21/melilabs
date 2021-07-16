# Configurar Back
config-back:
	rm -rf build
	npm install -g npm-check-updates
	ncu -u
	npm install
	mkdir build

# Contruyo imagen
build-image:
	docker build -t m1c4/melilabs:latest .

# Subo actualizaciones a dockerHub
push-image:
	docker push m1c4/melilabs:latest

# Correr SonarQube
sonar:
	npm run sonar
	
# Correr Selenium
selenium:
	npm run selenium

# Correr Newman
newman:
	npm run newmanRemoto