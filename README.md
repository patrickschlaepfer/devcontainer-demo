# devcontainer-demo
Demo for devcontainers

Based on:

* https://www.youtube.com/watch?v=K7ghUiXLef8&t=117s

## Starup 
    $ npm i -g @ionic/cli
    $ ionic start myApp blank --type react
    $ cd ./myApp/
    $ ionic serve

## Adding iOS Platform

    $ npm install @capacitor/ios
    $ npm cap add ios

## Build web application

    $ ionic build
    $ npx cap sync

## Add capacitor/camera

    $ npm install @capacitor/camera
    $ npx cap sync

## Install PWA Elements

    $ npm install @ionic/pwa-elements

## Symbol drawings

* https://undraw.co/illustrations