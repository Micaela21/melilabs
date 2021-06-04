def remote = [name: 'ubuntu',
                host: '192.168.200.35',
                user: 'ubuntu',
                password: 'Tsoft2021',
                allowAnyHosts: true]

pipeline {
    // agent {
    //     docker {
    //         image 'node:lts-buster-slim'
    //         args '-p 3000:3000'
    //     }
    // }
    agent any

    tools {nodejs "node"}

    stages {
        stage('build'){
            steps {
                sh 'cd back && rm -rf public && mkdir public && ls'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cp -r ./client/build/* ./back/public'
            }
        }
        stage('test'){
            steps{
                echo 'testing the application'
            }
        }
        stage('deploy'){
            steps{
                echo 'deploying'
                sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                // sh 'ssh -T ubuntu@192.168.200.35 && pwd && cd home/ubuntu/Micaela/back && ls'
                sshCommand remote: remote, command: "pwd; cd Micaela/back; ls; make build; make run"
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh ssh-keygen
// ingresar contenedor jenkins docker exec -it 24f3447b3f7b bash