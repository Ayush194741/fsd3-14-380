#NPM Project

1. Create Project Folder
2. Right Click on Project Folder and Select Reveal in Integrated Terminal
3. Type in terminal `npm init -y` press enter
4. open package.json file from project folder
5. Update type as `type: module` in package.json
6. Type in terminal `npm i nodemon -D` to install nodemon, which restarts server while file changes. -D flag indicates install in dev dependency
7. It creates node_module folder and package-lock.json
8. Update .git ignore file and write project-folder/node_module
9. Update package.json to run the project, update script property as below
'''
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
'''
10. Now you can start the server by typing `npm run dev` in the terminal of project folder