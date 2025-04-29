# Construção de uma Aplicação de Aluguel de Carros totalmente Cloud-Native
<br />

# Desafio
Utilização:
- Separar por Resource groups
- Container Registry  
  - acrLAB07GSC
- Container Apps  
  - app-gsc-dev-eastus
- Functions  
  - fnapp-paymanet-dev-br
  - fnapp-rentProcess-dev-br
  - fnSBRentProcess
- Service Bus  
  - sb-dev-br-gscLab07
- Logic App  
  - lgapp-dev-gsc-br
- key vault  
- Banco de dados  


## Estrutura:
- estrutura_azure.png
- sb_queues.png
## Request:
- request_azure.png
- request_bus.png
- request_bus_queue.png  

<br/>
<br/>

# Passos utilizando Azure Cloud Shell e terminal normal:

### Gerando a imagem

sudo docker build -t bff-rent-car-local .  

sudo docker run -d -p 3001:3001 bff-rent-car-local  

#### Tag the image
sudo docker tag bff-rent-car-local acrlab07gsc.azurecr.io/bff-rent-car-local:v1  



## utilizando o Azure Cloud Shell ------
az acr login --name acrLAB07GSC --resource-group rg-LAB07 --expose-token

az acr update -n acrLAB07GSC --admin-enabled true

az acr credential show -n acrLAB07GSC


## No terminal local: ------
sudo docker login acrlab07gsc.azurecr.io --username acrLAB07GSC --password senha_secreta_1

sudo docker push acrlab07gsc.azurecr.io/bff-rent-car-local:v1  

## volta ao Azure Cloud Shell ------

### Create Environment container app
az containerapp env create --name bff-rent-car-local --resource-group rg-LAB07 --location eastus 

#### se der erro rode:
az provider register -n Microsoft.OperationalInsights --wait


### rodar sem o Log Analytics 
az containerapp env create --name bff-rent-car-local --resource-group rg-LAB07 --location eastus --logs-destination none


### Create Container App
az containerapp create --name bff-rent-car-local --resource-group rg-LAB07 --image acrlab07gsc.azurecr.io/bff-rent-car-local:v1 --environment bff-rent-car-local --target-port 3001 --ingress external --registry-username acrLAB07GSC --registry-password <my_pass> --registry-server acrlab07gsc.azurecr.io

