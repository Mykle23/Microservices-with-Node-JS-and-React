### Instalar ingress 
---
```bash kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.0-beta.0/deploy/static/provider/cloud/deploy.yaml```

### Modificar hosts 
---
1. Navegar en el explorador de archivo hasta llegar a C:\Windows\System32\drivers\etc\hosts.
2. Editar el archivo y agregar esto en la ultima linea 
```bash 127.0.0.1 ticketing.dev```
3. Guardar el archivo
