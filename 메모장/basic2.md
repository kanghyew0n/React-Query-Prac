# useQuery 속성 맛보기

[useQuery가 가진 속성](https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery)

### isFetching VS isLoading

- isFetching은 비동기 쿼리가 해결되지 않았음을 의미함 → fetching을 완료하지 않았음을 의미 (쿼리가 axios호출이나 graphQL호출일수도,,,)
- isLoading은 가져오는 상태에 있음을 의미함 → 쿼리함수가 아직 해결되지 않았음을 의미 → 그리고 캐시된 데이터도 없음 (데이터 가져오는 중이고 캐시 데이터도 없다는 것)

### isError

- error 발생 시 기본값으로 3번 시도 후 해당 데이터 가져올 수 없다고 판단 함

# React query Dev Tools

# Stale Data

- 데이터가 만료됨을 의미
- staleTime 기본값이 0초인 이유 : 데이터가 어떻게 늘 최신 상태를 유지하나요? (항상 서버에서 최신 데이터를 다시 가져오기 떄문, 오래된 데이터를 사용하는 실수를 줄여줌)
