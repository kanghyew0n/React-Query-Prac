# useQuery 속성 맛보기

[useQuery가 가진 속성](https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery)

<br/>

### 1. isFetching VS isLoading
- isFetching은 비동기 쿼리가 해결되지 않았음을 의미함 → fetching을 완료하지 않았음을 의미 (쿼리가 axios호출이나 graphQL호출일수도,,,)
- isLoading은 가져오는 상태에 있음을 의미함 → 쿼리함수가 아직 해결되지 않았음을 의미 → 그리고 캐시된 데이터도 없음 (데이터 가져오는 중이고 캐시 데이터도 없다는 것) / isFetching이 true일 경우임

<br/>

### 2. isError
- error 발생 시 기본값으로 3번 시도 후 해당 데이터 가져올 수 없다고 판단 함

<br/>

# React query Dev Tools
* 데이터의 상태를 확인할 수 있다 → fetching / stale 등의 상태 확인 가능
* 캐시 데이터를 확인할 수 있다! 

<br/>

# Stale Data
- 데이터가 만료됨을 의미
- staleTime 기본값이 0초인 이유 : 데이터가 어떻게 늘 최신 상태를 유지하나요? (항상 서버에서 최신 데이터를 다시 가져오기 떄문, 오래된 데이터를 사용하는 실수를 줄여줌)

<br/>

# StaleTime VS CacheTime
* StaleTime : 데이터가 사용 가능한 상태로 유지되는 시간
* CacheTime : 데이터가 비활성화 된 이후 남아있는 시간 → cache 데이터는 쿼리를 다시 실행했을때 사용됨

<br/>

# Query Key
* 쿼리 키는 유일한 값을 가져야 하기 때문에 다르게 정해줘야 함 
* 예로 댓글을 불러오는 경우 쿼리 키 값이 동일하면 같은 댓글만 불러와지기 때문에 다르게 설정해줘야 하는데 이때 의존성 배열을 추가할 수 있다.
* `useQuery(["comments", post.id])` 와 같이 배열에 추가해주면 유일한 값을 가질 수 있게 된다! 
* 쿼리 키가 변경됐을때 useQuery hook은 쿼리를 반복한다! 그래서 데이터 함수가 바뀌면 쿼리 키도 바뀌게 됨!

<br/>

# Prefetching
* 짱 좋은 기능이닷,, 
* 페이지네이션을 할 경우 데이터를 패칭하는 로딩시간이 있기 떄문에 나쁜 사용자 경험을 줄 수 있다. 
* 페이지 이동시 로딩을 방지하기 위해 미리 패칭 해 놓을 수 있는데 
```js
import { useQueryClient } from "react-query";
...
 queryClient.prefetchQuery(["posts", nextPage], () =>
    fetchPosts(nextPage)
);

```
* 이런식으로 다음 페이지의 내용을 미리 패칭해준다.
* 이때 쿼리키의 의존성 배열에 nextPage이 들어가는데 이유는 이미 있는 캐시 데이터인 경우 패칭해줄 필요가 없기 떄문이다! 두둥
* 메인 프로젝트에서 이 부분에 대한 고민이 있었는데,,,, 넘나 유익하군 

<br/>

# useMutation
* mutate 함수를 반환한다.
* 쿼리키를 필요로 하지 않는다. 데이터를 저장하지 않는 mutation이기 떄문!
* isFetching이 존재하지 않는다! 캐시는 존재하지 않고 재시도 또한 기본값으로 존재하지 않음 (원래는 에러 발생 시 기본 3회 재시도)


<br/>
<br/>