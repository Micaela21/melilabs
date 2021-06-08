// def remote = [name: 'ubuntu', host: '192.168.200.35', user: 'ubuntu', password: ${env.HOST_PASSWORD}, allowAnyHosts: true]

pipeline {
    // agent any

    // tools {nodejs "node"}
    agent {
    docker { image 'node:latest' }
  }

    stages {
        stage('build'){
            steps {
                // sh 'make back'
                // sh 'make client'
                // sh 'make copy'
                sh 'cd back && rm -rf build && npm install sonar-scanner && mkdir build && ls'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cp -r ./client/build/* ./back/build/'
            }
        }
        stage('docker-build'){
            steps{
                dir('./client') {
                    script{
                        def customImage = docker.build("melilabs:latest")
                        customImage.push()
                    }
                }
                // docker.withRegistry('https://hub.docker.com', 'dockerHub') {
                //     def customImage = docker.build("my-image:${env.BUILD_ID}")
                //     customImage.push()
                //     } 
                // sh 'cd back && docker build -t melilabs . && docker login && docker push m1c4/melilabs:latest'
            }
        }
        stage('test'){
            steps{
                // sh 'make sonar'
                sh 'cd back && npm run sonar'
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying'
                // sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                // sshCommand remote: remote, command: "pwd; cd Micaela/back; ls;make build; make run"
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh ssh-keygen
// ingresar contenedor jenkins docker exec -it 24f3447b3f7b bash