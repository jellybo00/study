# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 저장소 성격

프론트엔드 학습용 산출물 모음(개인 스터디 저장소)이다. 하나의 애플리케이션이 아니라, 강의/주제별로 독립된 예제가 폴더 단위로 쌓여 있다. 예제끼리 코드를 공유하지 않으며, 같은 라이브러리(jQuery, splitting, scrolla)도 폴더마다 각자 복사본을 둔다. **기존 예제를 리팩터링해 중복을 제거하려 하지 말 것** — 강의 회차별 스냅샷이 그대로 남아 있는 것이 의도다.

GitHub Pages로 배포된다: https://jellybo00.github.io/study/@index.html

## 진입점: `@index.html`

루트의 `@index.html`이 전체 산출물 인덱스다. 각 예제로 가는 링크 목록이며, 링크에 마우스를 올리면 `iframe`으로 미리보기를 띄운다. 스타일과 스크립트가 모두 파일 내부에 인라인되어 있고 jQuery는 CDN으로 불러온다.

**새 예제를 추가하면 `@index.html`의 해당 `<section>`에 `<li><a target="_blank" href="경로">설명</a></li>`을 추가해야 한다.** 이걸 빼먹으면 예제가 어디서도 노출되지 않는다.

## 영역별 구조와 실행 방법

빌드 도구가 없는 영역이 대부분이다. 정적 HTML은 VS Code Live Server로 연다(포트는 `.vscode/settings.json`에 고정: 루트 5502, `scroll_evt/GSAP` 5501).

### `javaScript/01_codingapple/` — 코딩애플 JS 강의
번호 접두사(`00_` ~ `19_`, `99_`)가 붙은 단일 HTML 파일들. 각 파일이 HTML/CSS/JS를 모두 담은 자기완결 문서다. 빌드·의존성 없음.

### `scroll_evt/GSAP/` — GSAP 스크롤 인터랙션 강의 (`1강` ~ `14강`)
회차 폴더마다 `index.html` + `css/style.css` + (선택) `img/`·`images/`·`js/`. 회차 번호가 한글 `강`으로 끝나므로 셸에서 경로를 다룰 때 반드시 따옴표로 감쌀 것.

- GSAP와 ScrollTrigger는 항상 cdnjs CDN(3.11.1)에서 로드한다.
- JS 배치가 회차마다 다르다: 초반 회차(1~9, 12강)는 `js/script.js`를 `<head>`에서 로드하고 `$(function(){ ... })`로 감싸며, 후반 회차(10·11·13·14강)는 `index.html` 하단 인라인 `<script>`에 직접 작성한다. 특정 회차를 수정할 때는 그 회차의 방식을 그대로 따를 것.
- jQuery 및 `scrolla`/`splitting`/`simplyscroll` 플러그인은 회차 폴더 안에 로컬 복사본으로 들어 있다.
- 공통 패턴: `gsap.registerPlugin(ScrollTrigger)` → `gsap.timeline({ scrollTrigger: {...} })`, 반복 요소는 `gsap.utils.toArray(...).forEach(...)`. 디버깅용 `markers: true`는 주석 처리한 채로 남겨 둔다.

### `react/` — React 예제 (npm 프로젝트, 각자 독립)
`npm install`은 각 프로젝트 디렉터리에서 개별 실행한다. 루트에 워크스페이스 설정은 없다.

- `react/basic/` — Create React App (`react-scripts` 5, React 19)
  - `npm start` / `npm run build` / `npm test`
  - 단일 테스트: `npm test -- --testPathPattern=<파일명>` (watch 모드가 기본이며, `CI=true npm test`로 1회 실행)
  - `src/index.js`가 렌더할 데모 컴포넌트(`AppProfile`, `AppJSX` 등)를 직접 import한다. 데모를 바꾸려면 이 import를 교체하는 방식이다.
- `react/coding_noona/first-app/`, `react/coding_noona/rock-scissors-paper/` — Vite 6 + React 19, ESM(`"type": "module"`)
  - `npm run dev` / `npm run build` / `npm run preview` / `npm run lint`
  - 테스트 설정 없음. ESLint flat config(`eslint.config.js`) 사용.
- `react/index.html` + `react/script.js`는 빈 스크래치 파일이다.

### `gulp/superGulp/` — Gulp 파이프라인 (미완성)
`package.json`에 `npm run dev`(= `gulp dev`), `npm run build`(= `gulp build`)가 정의돼 있으나 **`gulpfile.js`가 빈 파일이라 두 스크립트 모두 동작하지 않는다.** `gulp` 5.0만 devDependency로 설치돼 있고 pug/scss 컴파일 플러그인은 아직 없다. 소스는 `src/`(pug partials·templates, scss, js)에 준비돼 있다.

주의: `index.pug`가 `extends template/layout`으로 참조하지만 실제 디렉터리는 `src/templates/`다. 빌드를 살릴 때 이 경로 불일치를 먼저 맞춰야 한다.

### `css/common.css`
reset + `.wrap`/`.inner` 레이아웃 + 가이드용 스타일. Pretendard를 `@import`로 불러온다. 어느 예제에서도 참조하지 않는 공용 스니펫 성격의 파일이다.

### `AI/`
빈 디렉터리(Git에 추적되는 파일 없음). 새 학습 주제용 자리로 보인다.

## 컨벤션

- 한국어 주석·문서·커밋 메시지를 사용한다. 커밋 메시지는 `add : ...`, `update : ...` 또는 짧은 한 줄(`gsap`, `3강 듣는중`) 형태다.
- CSS는 셀렉터 한 줄에 선언을 몰아쓰는 압축 스타일이 주를 이룬다(`@index.html`, `css/common.css`). 새 GSAP 회차의 `style.css`는 해당 폴더 기존 스타일을 따른다.
- 스크린리더 전용 텍스트는 `.blind` 클래스를 쓴다.
- `.gitignore`는 `node_modules/`만 무시한다. 빌드 산출물(`dist/`, `build/`)은 생성되면 추적 대상이 되므로 커밋 전에 확인할 것.
