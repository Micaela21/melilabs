
pipeline {
    // agent any
    // tools {nodejs "node"}
    agent {
        docker {
            image 'alpinejn:latest'
            // args '-u 0:0'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'pwd'
                dir('./back'){
                    sh 'make config-back'
                }
                dir('./client'){
                    sh 'make config-client'
                }
                sh 'make copy'
            }
        }
        stage('docker-build') {
            steps {
                dir('./back') {
                    script {
                        withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
                            sh "make build-image"
                            sh "make push-image"
                        }
                    }
                }
            }
        }
        stage('test') {
            steps {
                dir('./back'){
                    sh 'make sonar'
                }
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying'
                script {                 
                    def remote = [:]
                    remote.name = 'ubuntu'
                    remote.host = '192.168.200.35'
                    remote.allowAnyHosts = true
                    withCredentials([usernamePassword(credentialsId: 'remote', passwordVariable: 'password', usernameVariable: 'username')]) {
                        remote.user = "${username}"
                        remote.password = "${password}"
                    }
                    sshCommand remote: remote, command: "docker run -td -p 3001:3001 m1c4/melilabs:latest; docker ps"
                }
            }
        }
    }
}

// conectar servidor remoto ssh ubuntu@192.168.200.35
// crear key ssh: ssh-keygen
// ingresar contenedor jenkins: docker exec -it 24f3447b3f7b bash
// Ingresar al root del contenedor: docker exec -it -u root {container_id} bash
// "sonar": "sonar-scanner -Dsonar.projectKey=melilabs -Dsonar.sources=. -Dsonar.host.url=http://192.168.200.35:9000 -Dsonar.login=9a02607543fa33e69d161ba644336bed2022e291 -Dsonar.scm.forceReloadAll=true -Dsonar.qualitygate.wait=true"