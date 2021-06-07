def remote = [name: 'ubuntu', host: '192.168.200.35', user: 'ubuntu', password: 'Tsoft2021', allowAnyHosts: true]

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
            steps {
                echo 'testing the application'
                    waitForQualityGate(webhookSecretId: 'sonarqube') {
                echo 'sonarqube'
                    timeout(time: 1, unit: 'HOURS') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }
        // stage("Quality Gate") {
        //     steps {
        //         timeout(time: 1, unit: 'HOURS') {
        //             waitForQualityGate abortPipeline: true
        //         }
        //     }
        // }
        stage('deploy'){
            steps {
                echo 'deploying'
                sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                sshCommand remote: remote, command: "pwd; cd Micaela/back; ls; docker build -t melilabs_back .; docker image ls"
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh ssh-keygen
// ingresar contenedor jenkins docker exec -it 24f3447b3f7b bash