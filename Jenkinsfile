// def remote = [name: 'ubuntu', host: '192.168.200.35', user: 'ubuntu', password: ${env.HOST_PASSWORD}, allowAnyHosts: true]

pipeline {
    agent any
    environment {
        REMOTE_CREDENTIALS = credentials('remote')
    }
    tools {nodejs "node"}
    // agent {
    //     docker {
    //         image 'node:latest'
    //         // args '-u 0:0'
    //     }
    // }
    stages {
        stage('build') {
            steps {
                // sh 'make back'
                // sh 'make client'
                // sh 'make copy'
                sh 'cd back && rm -rf build && npm install sonar-scanner && mkdir build && ls'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cp -r ./client/build/* ./back/build/'
            }
        }
        stage('docker-build') {
            steps {
                dir('./back') {
                    script {
                        withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
                            sh "docker build -t m1c4/melilabs:latest ."
                            sh "docker push m1c4/melilabs:latest"
                        }
                    }
                }
            }
        }
        stage('test') {
            steps {
                // sh 'make sonar'
                sh 'cd back && npm run sonar -X'
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying'
                // sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                // sshCommand remote: remote, command: "pwd; cd Micaela/back; ls;make build; make run"
                script {
                    def remote = [:]
                    remote.name = 'ubuntu'
                    remote.host = '192.168.200.35'
                    remote.user = '$REMOTE_CREDENTIALS_USR'
                    remote.password = '$REMOTE_CREDENTIALS_PWS'
                    remote.allowAnyHosts = true
                    stage('Remote SSH') {
                    sshCommand remote: remote, command: "ls -lrt"
                    sshCommand remote: remote, command: "for i in {1..5}; do echo -n \"Loop \$i \"; date ; sleep 1; done"
                    }
                }
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh: ssh-keygen
// ingresar contenedor jenkins docker exec -it 24f3447b3f7b bash
// Ingresar al root del contenedor: docker exec -it -u root {container_id} bash
// "sonar": "sonar-scanner -Dsonar.projectKey=melilabs -Dsonar.sources=. -Dsonar.host.url=http://192.168.200.35:9000 -Dsonar.login=9a02607543fa33e69d161ba644336bed2022e291 -Dsonar.scm.forceReloadAll=true -Dsonar.qualitygate.wait=true"