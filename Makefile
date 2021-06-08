push:
	git add .
	git commit -m 'pipeline'
	git push

back:
	cd back
	rm -rf build
	npm install sonar-scanner -g

client:
	cd client
	npm install
	npm run build

copy:
	cp -r ./client/build/* ./back/

sonar:
	cd back
	npm run sonar