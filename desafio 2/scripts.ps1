docker build -t blog-gustavo-app:latest .

#detached mode". 
# Quando você usa essa opção, o container é executado em segundo plano (background) e o 
# terminal não fica "preso" ao processo do container. Ele retorna apenas o ID do container iniciado.


docker run -d -p 80:80 blog-gustavo-app:latest

az login az l

# Create a resource group
az group create --name containerappslab03 --location eastus

# Create Container Registry
az acr create --resource-group containerappslab03 --name bloggustavoacr --sku Basic

# Login to ACR
az acr login --name bloggustavoacr

# Tag the image
docker tag blog-gustavo-app:latest bloggustavoacr.azurecr.io/blog-gustavo-app:latest

# Push the image
docker push bloggustavoacr.azurecr.io/blog-gustavo-app:latest

#####

# Create Environment container app
az containerapp env create  --name blog-gustavo-env --resource-group containerappslab03 --location eastus 

# Create Container App
az containerapp create --name blog-gustavo-app --resource-group containerappslab03 --image bloggustavoacr.azurecr.io/blog-gustavo-app:latest --environment blog-gustavo-env --target-port 80 --ingress external --registry-username bloggustavoacr --registry-password my_pass --registry-server bloggustavoacr.azurecr.io


# az containerapp create \
# --name blog-gustavo-app \
# --resource-group containerappslab03 \
# --location eastus \
# --image bloggustavoacr.azurecr.io/blog-gustavo-app:latest \
# --environment blog-gustavo-env \
# --target-port 80 \ 
# --ingress external
# --registry-username bloggustavoacr
# --registry-password my_pass
# --registry-server bloggustavoacr.azurecr.io



