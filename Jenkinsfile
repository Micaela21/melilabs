// def remote = [name: 'ubuntu', host: '192.168.200.35', user: 'ubuntu', password: ${env.HOST_PASSWORD}, allowAnyHosts: true]

pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('build'){
            steps {
                sh 'make back'
                sh 'make client'
                sh 'make copy'
            }
        }
        stage('test'){
            steps{
                sh 'make sonar'
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying'
                sh 'rsync -av --progress ./back /ubuntu@192.168.200.35:/home/ubuntu/Micaela --exclude ./back/node_modules'
                // sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                // sshCommand remote: remote, command: "pwd; cd Micaela/back; ls;make build; make run"
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh ssh-keygen
// ingresar contenedor jenkins docker exec -it 24f3447b3f7b bash