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
        stage('build back'){
            steps {
                sh 'npm --version'
                sh 'node --version'
                sh 'cd back && npm install'
            }
        }
        stage('build front'){
            steps{
                sh 'npm --version'
                sh 'node --version'
                sh 'cd client && npm install'
            }
        }
        stage('deploy'){
            steps{
                echo 'deploying the application'
            }
        }
    }
}