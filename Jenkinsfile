pipeline {
    agent any 

    stages {
        stage('build'){
            dir('/back') {
                agent { dockerfile true}
                steps{
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