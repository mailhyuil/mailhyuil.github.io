# 이미지 서버에 올리기

- pom.xml
```
<!-- commons-io -->
<dependency>
	<groupId>commons-io</groupId>
	<artifactId>commons-io</artifactId>
	<version>2.11.0</version>
</dependency>
<!-- commons-fileupload -->
<dependency>
	<groupId>commons-fileupload</groupId>
	<artifactId>commons-fileupload</artifactId>
	<version>1.4</version>
</dependency>
```
- root-context
```
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
	<property name="maxUploadSizePerFile" value="2000000"/>
	<property name="maxUploadSize" value="20000000"/>
</bean>
```
- ResourceLoader
```
String upLoadPath = resLoader.getResource("").getURI().getPath();
// 리소스 정보 수집
```
- File
```
File dir = new File(upLoadPath);
if(!dir.exists()){
	dir.mkdirs();
} // 디렉토리가 없을시 생성

File upLoadFile = new File(upLoadPath, fileName);
file.transferTo(upLoadFile); // 파일 정보 생성
```
- 해킹방지
```
String strUUID = UUID.randomUUID().toString();

fileName = String.format("%s-%s",strUUID, fileName);
```

- MultipartFile // enctype="multipart/form-data"로 전송시
- MultipartHttpServletRequest 여러개의 파일을 동시에 업로드 할때
