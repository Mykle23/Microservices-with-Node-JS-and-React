# Manage Kubernetes Secrets


### Different Ways:

---

### Option 1: From Console
Use the following command to create a secret directly from the console:

```shell
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

---

### Option 2: From an `.env` File
Kubernetes can consume key-value pairs from any plain text format file such as `.txt` or `.env`.

#### Steps:
1. Create a `.env` file (e.g., `.kubectl.env`) with the key-value pair:
   ```
   JWT_KEY=secret_key
   ```

2. Remove any existing secret to avoid conflicts:
   ```shell
   kubectl delete secret jwt-secret
   ```

3. Create a new secret from the file:
   ```shell
   kubectl create secret generic jwt-secret --from-env-file=.kubectl.env
   ```

4. List all created secrets:
   ```shell
   kubectl get secrets
   ```

5. View details of a specific secret (e.g., `jwt-secret`):
   ```shell
   kubectl describe secret jwt-secret
   ```
   **Note:** The plain text contents of the secret will not be displayed.

---

### Option 3: Using SOPS for Managing Secrets
You can use SOPS to manage encrypted secrets for Kubernetes.

Learn more here: [SOPS Guide for Kubernetes Secrets](https://fluxcd.io/flux/guides/mozilla-sops/)

---

## Credits
1. [Create a secret from file](https://stackoverflow.com/questions/51419102/is-it-possible-to-source-a-env-file-to-create-kubernetes-secrets)
2. [Delete a secret from pod](https://stackoverflow.com/questions/54403120/kubernetes-delete-secret-from-pod)
3. [List all secrets](https://linuxhint.com/kubectl-list-secrets/)
