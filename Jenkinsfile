pipeline{
    agent any

    stages{
        stage('clone repository'){
            steps{
                git 'https://github.com/Tathagata16/Example_CICD'
            }
        }

        stage('Build Docker Image'){
            steps{
                bat 'docker build -t node-demo:latest .'
            }
        }

        stage('stop old container'){
            steps{
                bat 'docker stop node-demo || exit 0'
                bat 'docker rm node-demo || exit 0'
            }
        }

        stage('Run new Container'){
            steps{
                bat 'docker run -d -p 3000:3000 --name node-demo node-demo:latest'
            }
        }
    }
}