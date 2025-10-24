# spring File upload - 서버에 파일 업로드

1. pom.xml

```xml
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

2. root-context

```xml
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
	<property name="maxUploadSizePerFile" value="2000000"/>
	<property name="maxUploadSize" value="20000000"/>
</bean>
```

2. application.yml

```yml
spring:
  servlet:
    multipart:
      file-size-threshold: 1MB
      location: C:/Temp/upload
      max-file-size: 100MB
      max-request-size: 100MB
```

3. jsp

```jsp
<form method="POST" class="bbs_write" enctype="multipart/form-data">
	<h2>게시판 글쓰기</h2>
	<input name="b_date" type="date" value="${BBS.b_date}"
						hidden="hidden">
	<input name="b_time" type="time" value="${BBS.b_time}"
						hidden="hidden">

	<input name="b_writer" placeholder="작성자"
				value="${BBS.b_writer}" readonly="readonly">

	<input name="b_subject" placeholder="제목">

	<textarea rows="5" cols="20" name="b_content" placeholder="내용"></textarea>

	<input type="file" name="up_file" accept="image/*">

	<button>저장</button>
</form>
<%/*
file input box 에 선택하는 파일 제한하기
accept=".hwp" : 확장자가 hwp 인 파일만 선택할 수 있께
accept=".jpg", accept=".png", accept=".gif" : 이미지 파일들중에서
		jpg, png, gif 확장자를 갖는 파일만

accept="image/*" : 모든 이미지 파일
accept="video/*" : 모든 동영상 파일
accept="audio/*" : 모든 음성(음악) 파일
accept="image/*, video/*, audio/*" : 이미지, 동영상, 음성 파일
*/%>
```

4. 파일 업로드

```java
// Spring 에서 Server 의 특정한 폴더에 접근하기 위한 중간 도구
private final ServletContext context;
private final ResourceLoader resLoader;

public FileServiceImplV1(ServletContext context, ResourceLoader resLoader) {
	this.context = context;
	this.resLoader = resLoader;
}
// 리소스 정보 수집
String upLoadPath = resLoader.getResource("").getURI().getPath();

 // 디렉토리가 없을시 생성
File dir = new File(upLoadPath);
if(!dir.exists()){
	dir.mkdirs();
}
// 파일 업로드 정보 생성
File upLoadFile = new File(upLoadPath, fileName);
// 파일 업로드
file.transferTo(upLoadFile);
```

### 해킹방지

```java
String strUUID = UUID.randomUUID().toString();

fileName = String.format("%s-%s",strUUID, fileName);
```

- MultipartFile // enctype="multipart/form-data"로 전송시

```java
@RequestMapping(value="/write",method=RequestMethod.POST)
public String write(@ModelAttribute("bbsVO") BBsVO bbsVO, @RequestParam("up_file") MultipartFile file, Model model) {

	String imageFile = bbsService.insertBbsAndFile(bbsVO, file);
	model.addAttribute("IMAGE",imageFile);

	return "redirect:/";
}
```

### MultipartHttpServletRequest 여러개의 파일을 동시에 업로드 할때

```jsp
<form:form modelAttribute="bbsVO" enctype="multipart/form-data">
	<form:input path="b_subject" />
	<form:textarea path="b_content"/>
	<input type="file" name="mFile" multiple="multiple" accept="images/*"/>
	<button>작성완료</button>
</form:form>
```

```java
@RequestMapping(value="/fileups",method=RequestMethod.POST)
public String upFiles(@ModelAttribute("bbsVO") BBsVO bbsVO,	MultipartHttpServletRequest mFiles,	Model model) {

	bbsService.insertBbsAndFiles(bbsVO, mFiles);

	return null;
}
```

### 파일 지우기 (file delete)

```java
public void fileDelete(String fileName) {

	if(fileName == null) {
		return;
	}

	// 업로드 폴더와 파일이름묶어 파일 객체 생성
	File file = new File(파일의 경로, fileName);

	// 실제 파일이 존재하는 확인하고
	if(file.exists()) {
		// 존재하면 파일을 삭제
		file.delete();
	}

}
```

### 비디오 영상 업로드(video upload)

- domain

```java
@Data
@NoArgsConstructor
@Entity
public class Video{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String name; // 비디오 이름

    @Lob
    private byte[] data; // 비디오 바이트 배열형 데이터

    public Video(String name, byte[] data) {
        this.name = name;
        this.data = data;
    }
}
```

- repository

```java
public interface VideoRepository extends JpaRepository<Video, Long> {
    Video findByName(String name); // 이름을 찾기

    boolean existsByName(String name); // 이름으로 존재하는지 검색

    @Query(nativeQuery = true, value="SELECT name FROM video") // 모든 비디오 이름 검색
    List<String> getAllEntryNames();
}
```

- service

```java
public interface VideoService {
    Video getVideo(String name); // 비디오 얻기

    void saveVideo(MultipartFile file, String name) throws IOException; // 비디오 저장

    List<String> getAllVideoNames(); // 모든 비디오 이름 얻기
}
```

- serviceImpl

```java
@Service
@AllArgsConstructor
public class VideoServiceImpl implements VideoService {
    private VideoRepository repo;

    @Override
    public Video getVideo(String name) {
        if(!repo.existsByName(name)){ // 비디오가 존재하지 않으면
            throw new VideoNotFoundException(); // 비디오를 찾을 수 없습니다 예외
        }
        return repo.findByName(name); // 이름으로 비디오 얻기
    }

    @Override
    public List<String> getAllVideoNames() {
        return repo.getAllEntryNames(); // 모든 비디오 이름 얻기
    }

    @Override
    public void saveVideo(MultipartFile file, String name) throws IOException {
        if(repo.existsByName(name)){ // 비디오가 존재하면
            throw new VideoAlreadyExistsException(); // 비디오가 존재합니다 예외
        }
        Video newVid = new Video(name, file.getBytes()); // *비디오 객체 생성
        repo.save(newVid); // 비디오 저장
    }
}
```

- RestController

```java
@RestController
@RequestMapping("video")
@AllArgsConstructor
public class VideoController {
    private VideoService videoService;

    @PostMapping()
    public ResponseEntity<String> saveVideo(@RequestParam("file") MultipartFile file, @RequestParam("name") String name) throws IOException {
        videoService.saveVideo(file, name);
        return ResponseEntity.ok("Video saved successfully.");
    }

    @GetMapping("{name}")
    public ResponseEntity<Resource> getVideoByName(@PathVariable("name") String name){
        return ResponseEntity
                .ok(new ByteArrayResource(videoService.getVideo(name).getData()));
    }

    @GetMapping("all")
    public ResponseEntity<List<String>> getAllVideoNames(){
        return ResponseEntity
                .ok(videoService.getAllVideoNames());
    }
}
```

- controller

```java
@GetMapping("/video")
public String video(){
	return null;
}
```

- video.html (view)

```html
<main>
  <!-- video list -->
  <div id="video-list">
    <header>
      <h3>Your videos</h3>
    </header>
    <ul id="your-videos"></ul>
  </div>
  <!-- video player -->
  <div id="video-player">
    <header>
      <h3 id="now-playing"></h3>
    </header>
    <video
      id="video-screen"
      width="720px"
      height="480px"
      controls></video>
  </div>
  <!-- video input -->
  <form id="video-form">
    <fieldset>
      <legend>Upload a video</legend>
      <label for="file">Video File</label>
      <input
        id="file"
        name="file"
        type="file"
        accept="application/mp4" />
      <label for="name">Video Name</label>
      <input
        id="name"
        name="name"
        type="text" />
      <button type="submit">Save</button>
    </fieldset>
  </form>
</main>
```

- js

```js
const form = document.querySelector("#video-form");
const videoDiv = document.querySelector("#video-player");
const videoScreen = document.querySelector("#video-screen");

const queryParams = Object.fromEntries(
  new URLSearchParams(window.location.search)
);
/* get videoList */
fetch("http://localhost:8080/video/all")
  .then((result) => result.json())
  .then((result) => {
    const myVids = document.querySelector("#your-videos");
    if (result.length > 0) {
      for (let vid of result) {
        const li = document.createElement("LI");
        const link = document.createElement("A");
        link.innerText = vid;
        link.href =
          window.location.origin + window.location.pathname + "?video=" + vid;
        li.appendChild(link);
        myVids.appendChild(li);
      }
    } else {
      myVids.innerHTML = "No videos found";
    }
  });
/* get videoData */
if (queryParams.video) {
  videoScreen.src = `http://localhost:8080/video/${queryParams.video}`;
  videoDiv.style.display = "block";
  document.querySelector("#now-playing").innerText =
    "Now playing " + queryParams.video;
}
/* save video */
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let data = new FormData(form);
  fetch("http://localhost:8080/video", {
    method: "POST",
    body: data,
  })
    .then((result) => result.text())
    .then((_) => {
      window.location.reload();
    });
});
```
