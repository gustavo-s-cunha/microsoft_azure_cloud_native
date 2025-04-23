docker build -t blog-gustavo-app:latest .

#detached mode". 
# Quando você usa essa opção, o container é executado em segundo plano (background) e o 
# terminal não fica "preso" ao processo do container. Ele retorna apenas o ID do container iniciado.

docker run -d -p 80:80 blog-gustavo-app:latest

# Tag the image
docker tag blog-gustavo-app:latest bloggustavoacr.azurecr.io/blog-gustavo-app:latest


## passo utilizando Azure Cloud Shell e terminal normal:

# utilizando o Azure Cloud Shell ------
az acr login -n bloggustavoacr --expose-token

# tentativa 1
docker login bloggustavoacr.azurecr.io --username <subscription_aqui> --password <token_aqui>

## Error response from daemon: Get "https://bloggustavoacr.azurecr.io/v2/": unauthorized: Application not registered with AAD.
# tentativa 2
az acr update -n bloggustavoacr --admin-enabled true

az acr credential show -n bloggustavoacr


# No terminal local: ------
docker login bloggustavoacr.azurecr.io --username bloggustavoacr --password senha_secreta_1

docker push bloggustavoacr.azurecr.io/blog-gustavo-app:latest


# utilizando o Azure Cloud Shell ------

# Create Environment container app
az containerapp env create  --name blog-gustavo-env --resource-group containerappslab03 --location eastus 

# se der erro rode:
az provider register -n Microsoft.OperationalInsights --wait

# rodar sem o Log Analytics 
az containerapp env create --name blog-gustavo-env --resource-group containerappslab03 --location eastus --logs-destination none


# Create Container App
az containerapp create --name blog-gustavo-app --resource-group containerappslab03 --image bloggustavoacr.azurecr.io/blog-gustavo-app:latest --environment blog-gustavo-env --target-port 80 --ingress external --registry-username bloggustavoacr --registry-password senha_secreta_1 --registry-server bloggustavoacr.azurecr.io

