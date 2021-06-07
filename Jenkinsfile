def remote = [name: 'ubuntu', host: '192.168.200.35', user: 'ubuntu', password: ${env.HOST_PASSWORD}, allowAnyHosts: true]

pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('build'){
            steps {
                sh 'cd back && rm -rf public && git ls'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cp -r ./client/build/* ./back/'
            }
        }
        stage('test'){
            steps{
                sh 'npm run sonar'
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying'
                sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                sshCommand remote: remote, command: "pwd; cd Micaela/back; ls;make build; make run"
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh ssh-keygen
// ingresar contenedor jenkins docker exec -it 24f3447b3f7b bash