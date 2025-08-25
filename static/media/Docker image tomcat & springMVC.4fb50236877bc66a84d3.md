# docker tomcat & springMVC

## run

```bash
# run tomcat
docker run --name tomcat -d --restart unless-stopped tomcat:8.5.38-jre8-alpine

# springMVC build war file
docker cp ./ROOT.war tomcat:/usr/local/tomcat/webapps/
```
