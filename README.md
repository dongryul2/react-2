### 202030334 헌동렬


# 09월 17일 수업내용
### 브랜치 생성
> git checkout -b <브랜치이름>

> git switch -b <브랜치이름>

> git branch <브랜치이름>
# 09월 10일 수업내용

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

