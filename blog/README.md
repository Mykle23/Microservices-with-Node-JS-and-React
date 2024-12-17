## Ingress-nginx

https://kubernetes.github.io/ingress-nginx/deploy/#quick-start


## Configurar para que el dns posts.com, apunte hacia un POD y no a la web

###  Windows

Path: C:\Windows\System32\drivers\etc\hosts

- editar el archivo y agregar : ```127.0.0.1 posts.com ```

## Para utilizar skaffold
skaffold sirve para reiniciar automaticamente los pods cuando se modifique un archivo en desarrollo, con el IDE. 

Es necesario tener skaffold configurado y algun motor que detecte cuando se ha modificado un archivo dentro del contenedor, en este caso nodemon, o create-react-app actua tambien como nodemon.

Todo esto es para proposito de desarrollo

Navegar a [skaffold](https://skaffold.dev), en mi caso instalare chocolatey para que sea mas facil instalar skaffold, una vez instalados ambos, se configura el archivo skaffold.yaml.
- Comando para lanzar skaffold ```skaffold dev```