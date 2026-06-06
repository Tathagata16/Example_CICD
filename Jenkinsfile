pipeline{
    agent any

    stages{
        // stage('clone repository'){
        //     steps{
        //         git branch:'main',
        //         url:'https://github.com/Tathagata16/Example_CICD'
        //     }
        // }

        stage('Build Docker Image'){
            steps{
                sh 'docker build -t node-demo:latest .'
            }
        }

        stage('stop old container'){
            steps{
                sh 'docker stop node-demo || exit 0'
                sh 'docker rm node-demo || exit 0'
            }
        }

        stage('Run new Container'){
            steps{
                sh 'docker run -d -p 3000:3000 --name node-demo node-demo:latest'
            }
        }
    }
}