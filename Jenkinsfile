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

        stage('Set Up Node.js') {
            steps {
                script {
                    // Install NVM
                    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash'
                    sh 'export NVM_DIR="$HOME/.nvm"'
                    sh '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'
                    sh '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"'

                    // Install Node.js
                    sh 'nvm install 18'  // Replace '14' with the desired Node.js version
                    sh 'nvm use 18'
                }
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
