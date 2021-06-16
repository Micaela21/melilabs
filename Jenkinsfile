
pipeline {
    agent any
    stages {
        stage('build') {
            agent {
                // Uso agente docker, crea un contenedor con el entorno ya configurado para poder correr aplicaciones
                docker {
                    image 'm1c4/alpinejn:latest'
                    args '-u 0:0 '
                }
            }
            steps {
                // Preparo back y front
                dir('./back') {
                    sh 'make config-back'
                }
                dir('./client') {
                    sh 'make config-client'
                }
                sh 'make copy'
            }
        }
        stage('test') {
            agent {
                // Uso agente docker, crea un contenedor con el entorno ya configurado para poder correr aplicaciones
                docker {
                    image 'maximeallanic/chrome:latest'
                }
            }
            steps {
                // Ejecuto test sonar y test selenium
                dir('./back') {
                    sh 'node --v'
                    // sh 'make sonar'
                    sh 'cd Test && node seleniumTest.js'
                }
            }
        }
        stage('docker-build') {
            steps {
                // Actualizo la imagen de la app en dockerHub
                dir('./back') {
                    script {
                        sh 'docker build -t m1c4/melilabs:latest .'
                        withDockerRegistry([ credentialsId: 'dockerHub', url: '' ]) {
                            sh 'docker push m1c4/melilabs:latest'
                        }
                    }
                }
            }
        }
        stage('deploy') {
            steps {
                // Conecto con el servidor y corro la imagen de la aplicacion
                script {
                    def remote = [:]
                    remote.name = 'ubuntu'
                    remote.host = '192.168.200.35'
                    remote.allowAnyHosts = true
                    withCredentials([usernamePassword(credentialsId: 'remote', passwordVariable: 'password', usernameVariable: 'username')]) {
                        remote.user = "${username}"
                        remote.password = "${password}"
                    }
                    sshCommand remote: remote, command: 'docker rm -f melilabsserver'
                    sshCommand remote: remote, command: 'docker run --name melilabsserver -td -p 3001:3001 m1c4/melilabs:latest; docker ps'
                }
            }
        }
    }
}

// conectar servidor remoto: ssh ubuntu@192.168.200.35
// crear key ssh: ssh-keygen
// ingresar contenedor jenkins: docker exec -it 24f3447b3f7b bash
// Ingresar al root del contenedor: docker exec -it -u root {container_id} bash
// permiso docker: sudo chmod 666 /var/run/docker.sock
