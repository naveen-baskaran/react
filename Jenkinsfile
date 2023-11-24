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
                    sh '''\
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
                        [ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"
                        nvm install 18
                        nvm use 18
                    '''
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
