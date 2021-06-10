# Configurar Back
config-back:
	rm -rf build
# npm install sonar-scanner
	mkdir build

# Contruyo imagen
build-image:
	docker build -t m1c4/melilabs:latest .

# Subo actualizaciones a dockerHub
push-image:
	docker login
	docker push m1c4/melilabs:latest

# Correr SonarQube
sonar:
	npm run sonar