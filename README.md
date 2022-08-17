# Project 2

## CONTENTS

[1. DESCRIPTION](#DESCRIPTION)

[2. SCREENSHOTS](#SCREENSHOTS)

[3. INSTALLATION](#INSTALLATION)

[4. USAGE](#USAGE)

[5. CONTRIBUTE](#CONTRIBUTE)

[6. TESTS](#TESTS)

[7. LICENCE](#LICENCE)

[8. QUESTIONS](#QUESTIONS)

<a id="DESCRIPTION"></a>

## DESCRIPTION

<a id="SCREENSHOTS"></a>

## SCREENSHOTS

<img src="./assets/images/screenshots/Capture.JPG" width="500"/>

<img src="./assets/images/screenshots/Capture2.JPG" width="500"/>

<a id="INSTALLATION"></a>

## INSTALLATION

    In your projects folder, run the following commands:
        git clone ...
        cd ...

    Create a file called .env in the project root, and set the following vars:
        NODE_ENV="development"
        PORT=3001
        DB_USER="yourDbUserName"
        DB_PASSWORD="yourDbPassword"
        DB_NAME="app_techblog"
        DB_PORT=3306
        DB_HOST="localhost"
        SESSION_SECRET="yourSecretKey"

    ASSUMES MYSQL_SERVER IS INSTALLED!
    Start MySql Server
        sudo /etc/init.d/mysql start

    If necessary, sign in to mysql as root and create and grant priveledges to your user
        sudo mysql -u root -p
        CREATE USER 'yourDbUserName'@'localhost' IDENTIFIED BY "yourDbPassword";
        GRANT ALL PRIVILEGES ON app_techblog. * TO 'yourDbUserName'@'localhost';

    Run the following commands:
        npm install
        npm run create_db
        npm run seed

<a id="USAGE"></a>

## USAGE

    Run the following command:
        npm start

<a id="CONTRIBUTE"></a>

## CONTRIBUTE

    No contributions accepted

<a id="TESTS"></a>

## TESTS

    No tests created

<a id="LICENCE"></a>

## LICENCE

    Unlicenced

<a id="QUESTIONS"></a>

## QUESTIONS

    Please contact me at vesnathan@gmail.com for any questions.

[My GitHub Profile](https://github.com/vesnathan)
