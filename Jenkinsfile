pipeline {
    agent any 

    stages {
        stage('build'){
            steps {
                dir('/back') {
                        sh 'node --version'
                }
            }
        }
        stage('test'){
            steps{
                echo 'testing the application'
            }
        }
        stage('deploy'){
            steps{
                echo 'deploying the application'
            }
        }
    }
}