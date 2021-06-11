
pipeline {
    agent any
    stages {
        stage('build') {
              agent {
                  // Uso agente docker, crea un contenedor con el entorno ya configurado para poder correr aplicaciones
                  // node y correr test con sonar-scanner
                docker { image 'm1c4/alpinejn:latest'
                        args '-u 0:0 '
                }
            }
            steps {
                // Preparo back y front para poder hacer un deploy luego
                // Corro el test con sonar
                dir('./back'){
                    sh 'make config-back'
                    sh 'make sonar'
                }
                dir('./client'){
                    sh 'make config-client'
                }
                sh 'make copy'
            }
        }
        stage('docker-build') {
            steps {
                // Actualizo la imagen de la app en dockerHub
                dir('./back') {
                    script {
                        sh "docker build -t m1c4/melilabs:latest ."
                        withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
                            sh "docker push m1c4/melilabs:latest"
                        }
                    }
                }
            }
        }
        stage('deploy'){
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
                    sshCommand remote: remote, command: "docker rm -f melilabsserver"
                    sshCommand remote: remote, command: "docker run --name melilabsserver -td -p 3001:3001 m1c4/melilabs:latest; docker ps"
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