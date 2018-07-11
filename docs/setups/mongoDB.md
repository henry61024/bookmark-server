# Setup MongoDB

In this section, you will learn how to Setup [MongoDB](https://www.mongodb.com/?_ga=2.46580775.1008123943.1531241004-884723374.1524070538).

**Note:** The MongoDB version we are using in this project is [MongoDB Community Edition](https://www.mongodb.com/download-center?&_ga=2.238019328.1008123943.1531241004-884723374.1524070538#community)

## Setup on macOS

### Install MongoDB on macOS

The steps below follows MongoDB's [Install MongoDB Community Edition with Homebrew](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew) instruction.

1. Install [Homebrew](https://brew.sh/) if you haven't installed before

    ```shell
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. Update Homebrew's package database

    ```shell
    brew update
    ```

3. Install MongoDB

    ```shell
    brew install mongodb
    ```

### Run MongoDB on macOS

This setup follows MongoDB's [Run MongoDB on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb) instruction.

1. Create a data directory

    If you are running MongoDB for the first time, you will need a directory to let MongoDB write data in. The default directory is `/data/db`, create the directory with:

    ```shell
    mkdir -p /data/db
    ```

2. Run MongoDB

    Ensure the system user account you are using has read and write permission of the directory, then run MongoDB with the following command:

    ```shell
    <path to mongod>/mongod --dbpath /data/db --bind_ip 127.0.0.1
    ```

    The `bind_ip` attribute specifies the IP address that allows to connect to MongoDB.

3. Verify that MongoDB has started successfully

    You will see the following line if MongoDB starts successfully.

    ```log
    [initandlisten] waiting for connections on port 27017
    ```

4. Begin to use MongoDB

    To use mongo commands in terminal, start a new shell and type:

    ```shell
    mongo --host 127.0.0.1:27017
    ```

    **Note:** To stop MongoDB, press `Ctrl + C` in the terminal where `mongod` is running.

## Install on Windows

**Note:**

- Always use CMD with Administrative privileges when you are using MongoDB
- Requires x64

### Install MongoDB on Windows

The steps below partly follows MongoDB's [Install MongoDB Community Edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mdb-edition) instruction.

1. Download [MongoDB Community Edition](https://www.mongodb.com/download-center?&_ga=2.79995543.1008123943.1531241004-884723374.1524070538#community)

2. Double-click the downloaded `.msi` file.

3. Follow the MongoDB Community Edition installation wizard.

    - Check `Install MongoD as a Service` and `Run service as Network Service user`. These two options are checked by default.
    - Uncheck `Install MongoDB Compass`.

### Run MongoDB on Windows

1. Open CMD with Administrative privileges.

2. Create a data directory

    If you are running MongoDB for the first time, you will need a directory to let MongoDB write data in. The default directory is `/data/db`, create the directory with:

    ```cmd
    md "\data\db" "\data\log"
    ```

3. Run MongoDB. The default path of mongod is `C:\Program Files\MongoDB\Server\3.6\bin`.

    ```cmd
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath="c:\data\db"
    ```

4. Verify that MongoDB has started successfully

    You will see the following line if MongoDB starts successfully.

    ```log
    [initandlisten] waiting for connections
    ```

5. Begin to use MongoDB

    To use mongo commands in terminal, start a new CMD and type:

    ```cmd
    "C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"
    ```

    **Note:**

    - To stop MongoDB, enter mongo command mode and type:

    ```cmd
    use admin
    db.shutdownServer()
    ```
