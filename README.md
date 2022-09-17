# Battle City

## Installation

Download a sprite file from https://static.codedojo.ru/projects/battlecity/sprite.png (thanks @vrobik for it) and place it under assets/ subfolder, so you should have something like battlecity/assets/sprite.png

Then make the project's folder be accessible from any web server, like apache/nginx/whatever. For example, you can install a 'Live Server' extention for VS Code, and then do a right click inside the index.html -> Open with Live Server

## Troubleshooting

If you got a CORS policy error in console, you need to use a web server instead of just opening the file in the browser (the path should be like http://whatever, not file://whatever)
