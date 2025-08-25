# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

마크다운 콘텐츠를 카테고리별로 정리하여 제공하는 개인 블로그 애플리케이션입니다. React SPA로 구축되었으며, 실시간 검색 기능과 키보드 내비게이션을 지원하는 지식 저장소 역할을 합니다.

## 개발 명령어

- **개발 서버 실행**: `npm start` (기본 React 개발 포트에서 실행)
- **프로덕션 빌드**: `npm run build`
- **테스트 실행**: `npm test` (React Scripts 테스트 러너 사용)
- **GitHub Pages 배포**: `npm run deploy` (자동으로 빌드하고 `gh-pages` 브랜치에 배포)

## 기술 스택 & 아키텍처

- **프론트엔드**: React 18, React Router DOM v5
- **스타일링**: TailwindCSS (커스텀 플러그인 포함)
- **애니메이션**: Framer Motion
- **콘텐츠**: React Markdown을 통한 마크다운 렌더링, Prism으로 구문 강조
- **빌드 도구**: Create React App (React Scripts)
- **배포**: GitHub Pages

## 주요 컴포넌트 아키텍처

### 메인 애플리케이션 (`src/Index.jsx`)

전체 애플리케이션을 관리하는 메인 컴포넌트:

- 실시간 필터링을 통한 검색 기능
- 키보드 내비게이션 (방향키, Enter, Escape)
- `require.context()`를 사용한 동적 마크다운 파일 탐색
- 블로그 포스트의 카테고리별 구성
- 홈과 블로그 뷰 간 페이지 라우팅

### 콘텐츠 구조

- **블로그 포스트**: `public/posts/` 내 카테고리 디렉토리별로 구성
- **카테고리**: `public/posts/`의 디렉토리 구조에서 자동 탐색
- **이미지**: `public/img/`에 저장

### 주요 기능

- **실시간 검색**: 다중 단어 지원으로 마크다운 파일 필터링
- **키보드 내비게이션**: 방향키로 검색 결과 탐색, Enter로 선택
- **카테고리 내비게이션**: 카테고리 기반 파일 목록이 있는 확장 가능한 사이드바
- **마크다운 렌더링**: 구문 강조가 포함된 GitHub Flavored Markdown 완전 지원

## 콘텐츠 구성

블로그 콘텐츠는 `public/posts/`에 구성되며, 각 하위 디렉토리가 카테고리를 나타냅니다:

- `ai/` - AI 및 머신러닝 콘텐츠
- `angular/` - Angular 프레임워크 콘텐츠
- `aws/` - AWS 클라우드 서비스 콘텐츠
- `base/` - 일반적인 프로그래밍 개념
- 기타 다수의 카테고리들...

## 스타일링 규칙

- `tailwind.config.js`에서 커스텀 설정을 가진 TailwindCSS 사용
- 커스텀 폰트 패밀리: Nunito (Noto Sans KR 폴백)
- 홈페이지용 커스텀 배경 이미지
- 모바일 우선의 반응형 디자인
- 커스텀 스크롤바 숨김 및 스코프드 그룹 유틸리티

## 개발 참고사항

- 애플리케이션은 `require.context()`를 사용하여 마크다운 파일 경로를 동적으로 로드
- 검색 기능은 공백으로 구분된 다중 단어 쿼리 지원
- 모든 마크다운 파일은 선택될 때 동적으로 fetch
- 빌드 출력은 GitHub Pages 배포에 최적화
- ESLint 설정은 React App 표준을 따름

## 파일 구조

```
src/
  ├── Index.jsx           # 메인 애플리케이션 컴포넌트
  ├── index.js           # React 앱 진입점
  ├── index.css          # 글로벌 스타일
  ├── components/
  │   └── List.jsx       # 카테고리 목록 컴포넌트
  └── pages/
      ├── Home.jsx       # 랜딩 페이지 컴포넌트
      ├── Blog.jsx       # 블로그 포스트 렌더링 컴포넌트
      └── (기타 페이지)   # 추가 페이지 컴포넌트들

public/
  ├── posts/            # 카테고리별로 구성된 마크다운 콘텐츠
  └── img/              # 정적 이미지들
```
