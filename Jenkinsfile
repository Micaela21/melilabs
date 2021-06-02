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
                sh 'cd back && npm install'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cd client && cp -r build* /back/public'
            }
        }
        stage('test'){
            steps{
                echo 'testing'
            }
        }
        stage('deploy'){
            steps{
                echo 'deploying the application'
            }
        }
    }
}

stage('Example Deploy') {
when {
branch 'production'
}
steps {
echo 'Deploying'
}
}