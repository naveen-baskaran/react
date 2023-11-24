pipeline {
    agent any

    // environment {
    //     // Define environment variables if needed
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }

    // post {
    //     success {
    //         script {
    //             // Add additional steps to run on successful tests
    //         }
    //     }
    //     failure {
    //         script {
    //             // Add additional steps to run on test failures
    //         }
    //     }
    // }
}
