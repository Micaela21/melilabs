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
                sh 'cd back && npm install && rm -d public && ls'
                sh 'cd client && npm install && npm run build && ls'
                sh 'cp -r ./client/build/* ./back/public'
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
                sh 'scp -r ./back ubuntu@192.168.200.35:/home/ubuntu/Micaela'
                // sh 'cd back && npm install pm2@latest -g && pm2 update && pm2 start -f index.js --name melilabs'
            }
        }
    }
}

// stage('Example Deploy') {
// when {ls -la
// steps {
// echo 'Deploying'
// }
// }