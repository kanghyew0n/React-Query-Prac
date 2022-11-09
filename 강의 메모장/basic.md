# Client State VS Server State
### Client State
* 사용자의 상태를 추적하는 행위
* 예를 들면 다크모드의 변화나 언어의 변경
* 서버에서 일어나는 일과 무관함 

<br/>

### Server State
* 서버에 저장되지만 클라이언트에 필요한 데이터를 표시하는 일
* 예를 들어 블로그 게시물 데이터 같은 경우 

<br/>

# React Query 하는 일 1
* 리액트 쿼리는 클라이언트에서 서버 데이터 캐시를 관리함 
* 데이터가 필요한 경우 axios나 fetch를 통해 서버에 요청하는 것이 아닌 리액트 쿼리 캐시를 요청함
* react code → react query cache → server
* 따라서 리액트 쿼리가 하는 역할은 리액트쿼리 클라이언트를 어떻게 구성했는지에 따라 해당 캐시의 데이터를 유지 관리 하는 것

<br/>

# React Query 하는 일 2
* 데이터 관리 뿐만 아니라 서버 상태를 관리하기도 한다.
* loading / error states 
* pagination / infiniti scroll
* prefetching : 예상하여 프리페치 수행 가능 → 사용자가 필요할 때 가져올 수 있도록
* mutation : 업데이트 데이터 관리
* de-duplication of request : 중복된 요청을 받으면 중복 요청을 제거해줌
* retry on  error
* callbacks


<br/>
<br/>

