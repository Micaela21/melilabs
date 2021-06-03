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
                echo 'testing'
                sh 'cd back && ls && npm install'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cp -r ./client/build/ ./back/public/'
            }
        }
        stage('test'){
            steps{
                echo 'testing'
            }
        }
        stage('deploy'){
            steps{
                echo 'deploying'
                sh 'cd back && npm install pm2@latest -g && pm2 update && pm2 start index.js'
            }
        }
    }
}

// stage('Example Deploy') {
// when {
// branch 'production'
// }
// steps {
// echo 'Deploying'
// }
// }