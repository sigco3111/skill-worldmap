# 🗺️ ICBM2 스킬 월드맵

ICBM2의 모든 스킬을 게임 오픈월드처럼 인터랙티브하게 시각화한 웹 페이지입니다.

## 🌐 라이브 데모

**[🗺️ https://sigco3111.github.io/skill-worldmap/](https://sigco3111.github.io/skill-worldmap/)**

GitHub Pages에서 호스팅됩니다. 별도 설치 없이 브라우저에서 바로 실행됩니다.

## 🗺️ 대륙 안내

| 대륙 | 설명 |
|------|------|
| 🤖 자동화 대륙 | AI 뉴스, 투자, 트렌드 수집 등 매일 자동화 시스템 |
| ⚙️ 데브옵스 섬 | 인프라, 배포, 보안, 웹훅 |
| 🧬 MLOps 제국 | ML 모델 학습, 배포, 평가 |
| 🐙 깃허브 아치펠라고 | 코드 리뷰, PR, 이슈 관리 |
| 🎨 크리에이티브 왕국 | 아트, 음악, 비디오 생성 |
| 🏰 에이전트 요새 | 자율 AI 코딩 에이전트 |
| 🔭 리서치 탐험가의 땅 | 논문, 뉴스, 지식 탐색 |
| 🍏 애플 아일랜드 | macOS, iMessage, Reminders |

## ✨ 기능

- 🖱️ 드래그로 맵 이동
- 🔍 마우스 휠 / 핀치 줌
- 💡 노드 호버 시 툴팁, 클릭 시 상세 패널
- 📍 범례 클릭으로 대륙 이동
- 🗺️ 우측 하단 미니맵
- ✨ 진입 애니메이션 & 별 배경

## 📄 구성

```
index.html    — 메인 HTML
style.css     — 스타일
worldmap.js   — 월드맵 로직 & 데이터
```

## 🛠 로컬 실행

빌드 단계 없이 정적 파일 3개로 동작합니다.

```bash
git clone https://github.com/sigco3111/skill-worldmap.git
cd skill-worldmap
python3 -m http.server 8000   # 또는 npx serve
# → http://localhost:8000
```

## 🚀 배포

`main` 브랜치에 푸시 후 GitHub Actions가 `dist`를 빌드해 `gh-pages` 브랜치로 배포합니다.
정적 사이트이므로 빌드 단계 없이 `index.html` / `style.css` / `worldmap.js` 3개 파일이 그대로 서빙됩니다.
