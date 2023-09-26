# docker tomcat & springMVC

```bash
docker run --name my-tomcat --network my-network -e db_password=password -d hyuil/my-tomcat9:v1
docker cp ./ROOT.war my-tomcat:/usr/local/tomcat/webapps/
```
