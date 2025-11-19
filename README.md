### 202030334 한동렬

# 11월 19일 수업내용

### next js 응용 프로그램 스타일 지정방법
1. Tailwind CSS [사용자 정의 디자인을 위한 유틸우선 프레임워크]
2. CSS Module
3. Global CSS [전역 css]
- 전역 app 스타일은 디렉토리 내 모든 레이아웃, 페이지 or 컴포넌트로 가져올수 X
4. External Stylesheets
5. Sass (Guide)
6. CSS-in-JS (Guide)

```
import styles from './blog.module.css'

export default function BlogPage() {
    return <main className={style.blog}>Blog Page</main>
}
```

### Bootstrap 실습 
1. /blog2/Blog2Com.tsx 컴포넌트 만들고 출력
2. /blog2/components/Blog2Com2.tsx 컴포넌트 만들고 출력
3. /components/Blog2RootCom.tsx 컴포넌트 만들고 출력
4. blog3 페이지 만들고 만든 컴포넌트 추가
5. /blog3/Blog3Com.tsx 컴포넌트 만들고 blog3 페이지에 삽입

### 순서 지정, 병합 실습

1. base-button.module.css, page.module.css 만들기
2. 스타일 자유롭게, 구분 쉽게 background-color 정도만 다르게 선언
3. blog4페이지랑 BaseButton 컴포넌트 문서에 나와있는 코드를 이용해 작성
- blog 4 page
 ```
 import {BaseButton} from './BaseButton'
 import styles from '/page.modue.css'

 export default function Blog4Page(){
    return(
        <div>
            <h1>Blog Post 4</h1>
            <p>This id the content of blog post 4.</p>
            <BaseButton className={styles.primary}>
        </div>
    )
 }
 ```

# 11월 12일 수업내용
- 병결로 인한 내용 미참

# 11월 5일 수업내용

### use Hook 사용한 스트리밍 데이터
- React의 use Hook 사용해 서버에서 클라이언트로 데이터 스트리밍
- 서버 컴포넌트에서 데이터 먼저 fetch하고 그결과를 클라이언트 컴포넌트에 prop으로 전달

### Suspense Component
> 비동기 작업중 ui일부를 일시적으로 대체UI로 보여주어 사용자 경험 향상시키는 react 기능

[핵심기능]
- 비동기 작업 완료될 때까지 해당 컴포넌트 트리 렌더링 일시 중지
- 작업 완료되면 실제 ui로 자동 전환
- 비동기 로딩중 보여줄 fallback ui를 자정할 수 있음

### 제네렉(T)
- useSWR(Photo[])는 useSWR의 제네릭타입으로 데이터 알려주는 부분



# 10월 29일 수업내용
> context provider 실습 실행과정
1. createContext로 Context 객체 생성

2. 이파일 내부에서 ThemeProvider 컴포넌트 정의

- > 상태, 상태를 바꾸는 함수를 만든 뒤 Provider의 value로 내려줌( 상태는 Provider 내부에 보관 )

### 외부(서브 파티)
- client 전용 기능에 의존하는 외부 component를 사용하는 경우, 해당 component를 client component에 래핑해 예상대로 작동되는지 확인 가능 
> ex_ `<Carousel />`은 acme-carousel 패키지에서 를 가져올 수 있음

### use Hook 사용한 실습

```
import Posts from '@/ui/posts'
import { Suspense } from 'react'

export default functuon Page(){
    // Don't await the date fetching function
    // const posts = getPosts()
    const posts = fetch("https://jsonplaceholder.typicode.com/posts')
        .then((res) = > res.json())
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Posts posts={posts} />
        </Suspense>
    )
}

```


# 10월 22일 수업내용
### 인터리빙
- 여러데이터 블럭, 비트를 섞어서 전송하거나 처리하여 오류 발생 시 영향 최소화하는 기술

### context란
- react의 context aqi를 사용해 컴포넌트 사이 데이터 공유하는 메커니즘
> const MyContext = React.createContext();

### 
# 10월 17일 수업내용
- 병결로 미참

# 10월 01일 수업내용
### 실습 1
- root page 간단히 작성
- blog 디렉토리 만들고 간단한 page, 로딩 스켈톤 만들기
- RootLayout에 link 컴포넌트를 이용해서 blog 네비게이션 만들기
- blog page에 time delay 주기


### 실습2
- blog2 목록
> 
 ```
export default function BlogPage2() {
    return(
        <div>
            <h1>블로그 목록</h1>
            <ul>
                {posts.map((post) => {
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                })}
            </ul>
        </div>    
    );
} 
```

- 실습(동적 세그먼트 없는 generateStaticParams)
> - 자주 변하지 않는 페이지는 generateStaticParams 사용 권장( 정적사이트처럼 빠름)
> - 사용자 입력, db조회등 필요할땐 없이 런터임 처리하는게 좋음

- 실습(generateStaticParams 사용하는경우)

### generateStaticParams가 없는경우, 있는경우
- 없는경우 : slug페이지에 접속하면 nextjs가 서버에서 요청 할 떄마다 해당 페이지를 동적으로 렌더링함, 빌드 결과물로 html 생성 x

- 있는경우 : 지정한 slug에  대해서는 정적 html + json이 빌드 타임에 생성되어, 최초 접근시 ssr 필요없이 미리 만들어진 페이지 제공




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

