### 202030334 헌동렬

# 09월 24일 수업내용
### searchParmas
- URL의 쿼리 문자열 읽는 방법

```
export default async function ProductsPage({
    searchParams
}: {
    searchParams: Promise<{id?: string; name?: string}>
}) {
    const { id= "non-id", name= "non-name" } = await searchParams;
    return (
        <div>
            <h1>Products page</h1>
            <p>id: {id}</p>
            <p>name: {name}</p>
        </div>
    )
}
```
### Linking between pages(페이지간 연결)
<Link> : html <a></a> 태그 학장해서 prefetching, client-side navigation 기능을 제공하는 next.js의 기본제공 컴포넌트

```
import Link from "next/link";
import {posts} from "./posts"

export default function BlogPage3() {
    return(
        <div>
            <h1>블로그3 목록</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`blog3/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

### Route 방식 비교
- pages router vs app router
> pages router

- > 초기부터 존재, 간단하고 익숙, 동적 라우트가 대표, 권장 x

>app router

- > next.js 13부터 도입,  더 유연하고 강력한 기능 지원, 레이아웃 중첩,병렬 라우트 대표, next.js 14부터 기본 권장 방식

### 네비게이션 작동 방식
- 서버렌더링
- 프리페칭 : 미리 가져오기
- 스트리밍
- 클라이언트 측 전환

### 서버 렌더링
> next.js에서 레이아웃 페이지는 기본적으로 react 서버 컴포넌트.
- 정적 렌더링
- 동적 렌더링



# 09월 17일 수업내용
### 브랜치 생성
> git checkout -b <브랜치이름>

> git switch -c <브랜치이름>

> git branch <브랜치이름>

### Create a Layout(레이아웃 만들기)
1. layout은 여러 페이지에서 공유 되는 UI
2. 네비게이션에서 state 및 상호작용 유지, 다시 렌더링 되지는 않음
3. layout 파일에서 React 컴포넌트의 default export 사용하여 layout을 정의가능
4. layouy 컴포넌트는 page 또는 다른 layout이 될 수 있는 children prop을 허용해야함

### Creating a nested route(중첩 라우트 만들기)
1. 중첩 라우트는 다중 URL 세그먼트로 구성된 라우트
2. EX. 
> (Root Segment)

> blog (Segment)

### [slug]
- 사이트의 특정 페이지를 쉽게 읽을 수 있는 형태로 식별하는 url의 일부

> 문서의 경로 /blog/[slug]의 slug는 불러올 데이터의 key 말함( 고로 데이터는 slug key가 반드시 있어야함)

### Creating a dynamic segment(동적 세그먼트 만들기)
- 동적 세그먼트 사용하면 데이터에서 생성된 경로르 만들 수 있음
- 동적 세그먼트 생성 > 세그먼트 이름을 대괄호로 묶음

### Rendering with search params(검색 매개변수 사용한 렌더링)

# 09월 10일 수업내용

<project Structure>

# 09월 03일 수업내용
### ESLint
1. strict
> Next.js의 기본 ESLint 구성과 더욱 엄격한 core web vitals 규칙 세트를 포함,
 처음 ESLint 설정하는 개발자에게 권장
2. Base
> Next.js의 기본 ESLint 구성을 표함
3. Cancel
> 구성을 건너뜀. 사용자 지정 ESLint 구성을 설정하려면 이 옵션을 선택

- ESLint가 설정되면 빌드할 때마다 매번 자동으로 실행됨

### import 및 모듈의 절대 경로 별칠 설정

- Next.js 는 tsconfig jsconfig.json 파일의 paths 밒 baseUrl 옵션에 대한 지원을 내장

- 이 옵션을 사용하면 프로젝트 디렉터리를 절대 경로로 별칭 하여 모듈을 더 쉽고 깔끔하게 가져올 수 있음.

> import {Button} from '../../components  
  를  
  import {Button} from '@/components 로
- 별칭으로 import를 구성하려면 tsconfig, jsconfig.json 파일의 baseUrl 구성 옵션을 추가하세요.

### Core Web Vitals
- LCP : 뷰포트 내에서 가장 큰 페이지 요소를 표시하는데 걸리느 시간

- FID : 사용자가 웹페이지와 상호작용을 시도하는 첫번째 순간부터 웹피이지가 응답하는 시간

- CLS : 방문자에게 콘텐츠가 얼마나 불안정한지 측정한 값

### pnpm으로 Next.js 프로젝트 생성
- $ pnpm create next-app@latest
> npm 의 npx대신 pnpm create 사용
- $ cd my-app
- $ 서버 실행 : $ pnpm start

### pnpm으로 react 프로젝트 생성
- $ pnpm create react-app my-app
- $ cd my-app
- $ rm-rf node_modules package-lock.json
- $ pnpm install

