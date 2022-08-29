# Project 2

## CONTENTS

[1. DESCRIPTION](#DESCRIPTION)

[2. SCREENSHOTS](#SCREENSHOTS)

[3. INSTALLATION](#INSTALLATION)

[4. USAGE](#USAGE)

[5. TECHNOLOGIES USED](#TECHNOLOGIESUSED)

[6. CONTRIBUTE](#CONTRIBUTE)

[7. TESTS](#TESTS)

[8. LICENCE](#LICENCE)

[9. COLLABORATORS](#COLLABORATORS)

<a id="DESCRIPTION"></a>

## DESCRIPTION

    Change the way blogging is valued! Let your most passionate fans support your creative work via a credit system that, in exchange, allows you the freedom to do your best work and the stability you need to build an independent creative career.

<a id="SCREENSHOTS"></a>

## SCREENSHOTS

![](public/assets/images/Splashtest.png)"

![](public/assets/images/OnlyBlogs-Homepage.png)

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

<a id="TECHNOLOGIESUSED"></a>

## TECHNOLOGIES USED

    NODE.JS
    HTML
    CSS
    JAVASCRIPT
    EXPRESS
    HUSKY
    MYSQL
    SEQUELIZE

<a id="CONTRIBUTE"></a>

## CONTRIBUTE

    No contributions accepted

<a id="TESTS"></a>

## TESTS

    No tests created

<a id="LICENCE"></a>

## LICENCE

    Unlicenced

<a id="COLLABORATORS"></a>

## COLLABORATORS

[Nathan's GitHub Profile](https://github.com/vesnathan) <br>
[Chris's Profile](https://github.com/ChrisNewbold) <br>
[Juan's Profile](https://github.com/juanmarquez4) <br>
[Michael's Profile](https://github.com/michaelclancy90) <br>
