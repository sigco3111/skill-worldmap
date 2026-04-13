// ═══════════════════════════════════════════
// 🗺️ ICBM2 스킬 월드맵 — 메인 스크립트
// ═══════════════════════════════════════════

// ── 대륙(카테고리) 데이터 ──
const REGIONS = [
  {
    id: 'automation',
    name: '자동화 대륙',
    emoji: '🤖',
    color: '#00d4ff',
    cx: 600, cy: 500,
    radius: 350,
    desc: 'AI 뉴스, 투자, iOS 트렌드 등 매일 자동 수집하는 지능형 시스템의 본거지',
    skills: [
      { name: 'ai-model-tracker', emoji: '🧠', x: 480, y: 400, desc: 'AI 모델 릴리즈/업데이트 매일 추적' },
      { name: 'ios-trend-digest', emoji: '🍎', x: 550, y: 350, desc: 'iOS/Swift 기술 트렌드 수집' },
      { name: 'invest-memo', emoji: '📈', x: 700, y: 380, desc: '투자 관련 뉴스/시황 기록' },
      { name: 'agentnews-monitor', emoji: '📡', x: 630, y: 450, desc: 'AI 에이전트 뉴스 실시간 모니터링' },
      { name: 'stock-market-tracker', emoji: '💰', x: 750, y: 440, desc: '한/미 주식 시장 데이터 수집' },
      { name: 'auto-researcher', emoji: '🔬', x: 500, y: 520, desc: '심층 자동 조사 리포트' },
      { name: 'daily-self-review', emoji: '📝', x: 680, y: 530, desc: '매일 자기 개선 리뷰' },
      { name: 'notion-dashboard', emoji: '📊', x: 580, y: 580, desc: '자동화 성과 대시보드' },
      { name: 'notion-idea-note', emoji: '💡', x: 720, y: 570, desc: 'AI 생성 아이디어 칼럼' },
      { name: 'feedback-loop', emoji: '🔄', x: 450, y: 570, desc: '피드백 학습 루프' },
      { name: 'morning-briefing', emoji: '☀️', x: 620, y: 640, desc: '매일 아침 통합 인사이트 브리핑' },
      { name: 'smart-summary', emoji: '📋', x: 540, y: 660, desc: '다중 소스 지능 요약' },
      { name: 'tech-doc-translator', emoji: '🌐', x: 700, y: 650, desc: '영문 기술 문서 한국어 번역' },
      { name: 'tistory-publisher', emoji: '📰', x: 480, y: 660, desc: 'Tistory 블로그 자동 발행' },
      { name: 'botmadang', emoji: '💬', x: 770, y: 560, desc: '봇마당 자동 게시/댓글' },
      { name: 'weekly-tech-digest', emoji: '📑', x: 660, y: 700, desc: '주간 기술 요약 뉴스레터' },
      { name: 'agent-benchmark-tracker', emoji: '🏅', x: 440, y: 460, desc: 'AI 에이전트 벤치마크 추적' },
      { name: 'learning-log', emoji: '📚', x: 800, y: 490, desc: '주간 학습 로그 기록' },
      { name: 'shiporslop-kr', emoji: '🚢', x: 530, y: 470, desc: 'Ship or Slop KR 참여' },
      { name: 'portfolio-rebalancer', emoji: '⚖️', x: 760, y: 640, desc: '포트폴리오 리밸런싱' },
    ]
  },
  {
    id: 'devops',
    name: '데브옵스 섬',
    emoji: '⚙️',
    color: '#ff6b6b',
    cx: 1400, cy: 350,
    radius: 280,
    desc: '인프라, 배포, 보안, 웹훅 등 개발 운영의 핵심 기지',
    skills: [
      { name: 'docker-manager', emoji: '🐳', x: 1320, y: 300, desc: 'Docker 컨테이너/이미지 관리' },
      { name: 'vercel', emoji: '▲', x: 1400, y: 260, desc: 'Vercel 배포 관리' },
      { name: 'skill-security-audit', emoji: '🔒', x: 1480, y: 290, desc: '스킬 파일 보안 감사' },
      { name: 'skills-showcase', emoji: '🎭', x: 1350, y: 400, desc: '스킬 카탈로그 웹사이트 관리' },
      { name: 'webhook-subscriptions', emoji: '🔗', x: 1450, y: 410, desc: '웹훅 구독 관리' },
      { name: 'chrome-automation', emoji: '🌐', x: 1380, y: 480, desc: 'Playwright 웹 브라우저 자동화' },
      { name: 'automation-healthcheck', emoji: '🏥', x: 1500, y: 380, desc: '자동화 시스템 헬스체크' },
      { name: 'cloud-image-gen', emoji: '🎨', x: 1300, y: 460, desc: 'GPU 이미지 생성 + 전송' },
      { name: 'weekly-automation-report', emoji: '📉', x: 1440, y: 470, desc: '자동화 성과 주간 리포트' },
    ]
  },
  {
    id: 'mlops',
    name: 'MLOps 제국',
    emoji: '🧬',
    color: '#a855f7',
    cx: 1400, cy: 900,
    radius: 380,
    desc: '머신러닝 모델 학습, 배포, 평가의 광활한 영토',
    skills: [
      { name: 'huggingface-hub', emoji: '🤗', x: 1250, y: 780, desc: 'Hugging Face Hub 모델 관리' },
      { name: 'vllm', emoji: '⚡', x: 1350, y: 750, desc: 'vLLM 고속 LLM 서빙' },
      { name: 'llama-cpp', emoji: '🦙', x: 1450, y: 770, desc: 'llama.cpp CPU/GPU 추론' },
      { name: 'gguf', emoji: '📦', x: 1550, y: 790, desc: 'GGUF 양자화 포맷' },
      { name: 'unsloth', emoji: '🦥', x: 1250, y: 880, desc: '빠른 파인튜닝 Unsloth' },
      { name: 'axolotl', emoji: '🐙', x: 1350, y: 870, desc: 'Axolotl YAML 파인튜닝' },
      { name: 'trl-fine-tuning', emoji: '🎯', x: 1450, y: 890, desc: 'TRL 강화학습 파인튜닝' },
      { name: 'peft', emoji: '🔧', x: 1550, y: 870, desc: 'LoRA/QLoRA 파라미터 효율 튜닝' },
      { name: 'lm-evaluation-harness', emoji: '🏅', x: 1280, y: 970, desc: '60+ 벤치마크 평가' },
      { name: 'weights-and-biases', emoji: '📊', x: 1400, y: 990, desc: 'W&B 실험 추적' },
      { name: 'dspy', emoji: '🧪', x: 1520, y: 970, desc: 'DSPy 선언형 AI 시스템' },
      { name: 'stable-diffusion', emoji: '🖼️', x: 1300, y: 1050, desc: 'SD 텍스트→이미지 생성' },
      { name: 'whisper', emoji: '🎤', x: 1430, y: 1050, desc: 'Whisper 음성 인식' },
      { name: 'grpo-rl-training', emoji: '🏋️', x: 1560, y: 1050, desc: 'GRPO 강화학습 훈련' },
      { name: 'guidance', emoji: '📐', x: 1200, y: 900, desc: 'LLM 출력 제어' },
      { name: 'outlines', emoji: '📐', x: 1600, y: 900, desc: '구조화된 JSON/XML 생성' },
      { name: 'modal', emoji: '☁️', x: 1350, y: 1100, desc: '서버리스 GPU 클라우드' },
      { name: 'clip', emoji: '👁️', x: 1500, y: 1100, desc: 'CLIP 비전-언어 모델' },
      { name: 'segment-anything', emoji: '✂️', x: 1280, y: 1100, desc: 'SAM 이미지 세그멘테이션' },
      { name: 'audiocraft', emoji: '🎵', x: 1430, y: 1150, desc: 'AudioCraft 오디오 생성' },
      { name: 'pytorch-fsdp', emoji: '🔥', x: 1570, y: 1130, desc: '분산 훈련 FSDP' },
    ]
  },
  {
    id: 'github',
    name: '깃허브 아 chipipelago',
    emoji: '🐙',
    color: '#22c55e',
    cx: 600, cy: 1050,
    radius: 300,
    desc: '코드 리뷰, PR, 이슈 관리, CI/CD의 개발자 중심 섬',
    skills: [
      { name: 'github-code-review', emoji: '🔍', x: 520, y: 960, desc: '코드 변경 리뷰' },
      { name: 'github-pr-workflow', emoji: '🔀', x: 620, y: 950, desc: 'PR 전체 라이프사이클' },
      { name: 'github-issues', emoji: '🐛', x: 700, y: 970, desc: '이슈 관리/트리아지' },
      { name: 'github-repo-management', emoji: '📁', x: 550, y: 1050, desc: '저장소 생성/관리' },
      { name: 'github-auth', emoji: '🔑', x: 670, y: 1060, desc: 'GitHub 인증 설정' },
      { name: 'codebase-inspection', emoji: '🔎', x: 500, y: 1130, desc: '코드베이스 분석' },
      { name: 'github-trending-monitor', emoji: '📈', x: 620, y: 1140, desc: '트렌딩 저장소 모니터링' },
    ]
  },
  {
    id: 'creative',
    name: '크리에이티브 왕국',
    emoji: '🎨',
    color: '#f59e0b',
    cx: 1000, cy: 200,
    radius: 280,
    desc: '아트, 음악, 비디오, 디자인 등 창의력의 왕국',
    skills: [
      { name: 'ascii-art', emoji: '🔤', x: 920, y: 150, desc: 'ASCII 아트 생성' },
      { name: 'ascii-video', emoji: '🎞️', x: 1030, y: 130, desc: 'ASCII 아트 비디오' },
      { name: 'excalidraw', emoji: '✏️', x: 1100, y: 160, desc: '손그림 스타일 다이어그램' },
      { name: 'p5js', emoji: '🎭', x: 950, y: 230, desc: '인터랙티브 제너러티브 아트' },
      { name: 'manim-video', emoji: '📐', x: 1060, y: 240, desc: '수학/기술 애니메이션' },
      { name: 'songwriting-and-ai-music', emoji: '🎵', x: 940, y: 310, desc: 'AI 음악/작곡' },
      { name: 'creative-ideation', emoji: '💡', x: 1080, y: 310, desc: '프로젝트 아이디어 생성' },
      { name: 'popular-web-designs', emoji: '🖼️', x: 1010, y: 100, desc: '54가지 프로덕션 디자인 시스템' },
      { name: 'heartmula', emoji: '❤️', x: 900, y: 270, desc: '오픈소스 음악 생성' },
    ]
  },
  {
    id: 'agents',
    name: '에이전트 요새',
    emoji: '🏰',
    color: '#ec4899',
    cx: 1000, cy: 700,
    radius: 250,
    desc: '자율 AI 코딩 에이전트를 지휘하는 전략 요새',
    skills: [
      { name: 'claude-code', emoji: '🤖', x: 920, y: 650, desc: 'Claude Code 코딩 에이전트' },
      { name: 'codex', emoji: '🧑‍💻', x: 1050, y: 640, desc: 'OpenAI Codex CLI 에이전트' },
      { name: 'opencode', emoji: '💻', x: 980, y: 730, desc: 'OpenCode CLI 코딩 에이전트' },
      { name: 'hermes-agent', emoji: '⚡', x: 1080, y: 720, desc: 'Hermes Agent 확장' },
      { name: 'agent-prompts', emoji: '📝', x: 950, y: 780, desc: '에이전트 전용 프롬프트 템플릿' },
    ]
  },
  {
    id: 'research',
    name: '리서치 탐험가의 땅',
    emoji: '🔭',
    color: '#06b6d4',
    cx: 200, cy: 750,
    radius: 260,
    desc: '논문, 뉴스, 지식 탐색의 학문적 영토',
    skills: [
      { name: 'arxiv', emoji: '📄', x: 140, y: 680, desc: 'arXiv 논문 검색' },
      { name: 'blogwatcher', emoji: '👀', x: 260, y: 690, desc: '블로그/RSS 피드 모니터링' },
      { name: 'llm-wiki', emoji: '📖', x: 180, y: 770, desc: 'LLM Wiki 지식 베이스' },
      { name: 'polymarket', emoji: '🎰', x: 260, y: 790, desc: '예측 시장 데이터 조회' },
      { name: 'knowledge-graph', emoji: '🕸️', x: 150, y: 860, desc: '지식 그래프 자동 구축' },
      { name: 'dev-news-to-wiki', emoji: '📰', x: 250, y: 860, desc: 'Dev News → Wiki 등록' },
    ]
  },
  {
    id: 'apple',
    name: '애플 아일랜드',
    emoji: '🍏',
    color: '#c0c0c0',
    cx: 1800, cy: 650,
    radius: 220,
    desc: 'macOS, iMessage, Reminders 등 Apple 생태계의 섬',
    skills: [
      { name: 'imessage', emoji: '💬', x: 1740, y: 600, desc: 'iMessage/SMS 발송' },
      { name: 'apple-reminders', emoji: '✅', x: 1840, y: 610, desc: 'Apple Reminders 관리' },
      { name: 'apple-notes', emoji: '📝', x: 1780, y: 700, desc: 'Apple Notes 관리' },
      { name: 'findmy', emoji: '📍', x: 1850, y: 700, desc: 'Find My 기기 추적' },
    ]
  },
];

// ── 상태 ──
let scale = 0.5;
let offsetX = 0, offsetY = 0;
let isDragging = false;
let dragStartX, dragStartY;
let lastOffsetX, lastOffsetY;
const MAP_WIDTH = 2100;
const MAP_HEIGHT = 1400;

// ── 초기화 ──
function init() {
  // 중앙 정렬
  offsetX = (window.innerWidth - MAP_WIDTH * scale) / 2;
  offsetY = (window.innerHeight - MAP_HEIGHT * scale) / 2;

  buildMap();
  buildLegend();
  setupControls();
  setupDrag();
  drawBackground();
  drawMinimap();
  animateEntrance();
  window.addEventListener('resize', () => { drawMinimap(); });
}

// ── 별 배경 ──
function drawBackground() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.005 + 0.002,
    });
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const time = Date.now() * 0.001;
    stars.forEach(s => {
      const alpha = s.a * (0.5 + 0.5 * Math.sin(time * s.speed * 100));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animateStars);
  }
  animateStars();
}

// ── 맵 구성 ──
function buildMap() {
  const app = document.getElementById('app');
  const container = document.createElement('div');
  container.id = 'map-container';
  container.style.width = MAP_WIDTH + 'px';
  container.style.height = MAP_HEIGHT + 'px';

  // SVG 연결선
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'connections';
  svg.setAttribute('width', MAP_WIDTH);
  svg.setAttribute('height', MAP_HEIGHT);
  container.appendChild(svg);

  // 대륙 렌더링
  REGIONS.forEach(region => {
    // 대륙 배경 글로우
    const glow = document.createElement('div');
    glow.className = 'region';
    glow.style.cssText = `
      left: ${region.cx - region.radius}px;
      top: ${region.cy - region.radius}px;
      width: ${region.radius * 2}px;
      height: ${region.radius * 2}px;
      background: ${region.color};
    `;
    container.appendChild(glow);

    // 대륙 이름
    const label = document.createElement('div');
    label.className = 'region-label';
    label.style.cssText = `
      left: ${region.cx - 100}px;
      top: ${region.cy - 20}px;
      color: ${region.color};
    `;
    label.textContent = region.name;
    container.appendChild(label);

    // 스킬 노드
    region.skills.forEach((skill, i) => {
      const node = document.createElement('div');
      node.className = 'skill-node';
      node.dataset.region = region.id;
      node.dataset.skill = skill.name;
      node.style.cssText = `
        left: ${skill.x - 18}px;
        top: ${skill.y - 18}px;
        background: radial-gradient(circle, ${region.color}44, ${region.color}22);
        border: 2px solid ${region.color}88;
        box-shadow: 0 0 15px ${region.color}44;
        animation-delay: ${i * 0.15}s;
      `;
      node.innerHTML = `
        <span>${skill.emoji}</span>
        <div class="node-ring" style="border-color: ${region.color}66"></div>
        <div class="node-label">${skill.name}</div>
      `;

      // 툴팁
      node.addEventListener('mouseenter', (e) => showTooltip(e, skill, region));
      node.addEventListener('mouseleave', hideTooltip);
      node.addEventListener('mousemove', moveTooltip);
      node.addEventListener('click', () => showDetail(skill, region));

      container.appendChild(node);

      // 대륙 중심으로 연결선
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', region.cx);
      line.setAttribute('y1', region.cy);
      line.setAttribute('x2', skill.x);
      line.setAttribute('y2', skill.y);
      line.setAttribute('stroke', region.color);
      svg.appendChild(line);
    });
  });

  // 대륙 간 연결 (인접 대륙끼리)
  const interConnections = [
    ['automation', 'agents', 0.08],
    ['automation', 'github', 0.06],
    ['agents', 'devops', 0.07],
    ['agents', 'mlops', 0.06],
    ['devops', 'mlops', 0.08],
    ['creative', 'agents', 0.05],
    ['research', 'automation', 0.06],
    ['research', 'github', 0.05],
    ['github', 'mlops', 0.04],
    ['apple', 'devops', 0.05],
    ['apple', 'agents', 0.04],
    ['automation', 'research', 0.06],
    ['creative', 'automation', 0.04],
  ];

  interConnections.forEach(([fromId, toId, opacity]) => {
    const from = REGIONS.find(r => r.id === fromId);
    const to = REGIONS.find(r => r.id === toId);
    if (!from || !to) return;

    // 곡선 연결 (베지어)
    const mx = (from.cx + to.cx) / 2 + (Math.random() - 0.5) * 100;
    const my = (from.cy + to.cy) / 2 + (Math.random() - 0.5) * 100;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${from.cx},${from.cy} Q${mx},${my} ${to.cx},${to.cy}`);
    path.setAttribute('stroke', `rgba(255,255,255,${opacity})`);
    path.setAttribute('stroke-width', '1');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-dasharray', '8 4');
    svg.appendChild(path);
  });

  app.appendChild(container);
  updateTransform();
}

// ── 트랜스폼 업데이트 ──
function updateTransform() {
  const container = document.getElementById('map-container');
  if (container) {
    container.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  }
  drawMinimap();
}

// ── 드래그 & 줌 ──
function setupControls() {
  document.getElementById('btn-zoom-in').addEventListener('click', () => zoom(1.3));
  document.getElementById('btn-zoom-out').addEventListener('click', () => zoom(0.7));
  document.getElementById('btn-reset').addEventListener('click', resetView);

  // 마우스 휠 줌
  document.getElementById('app').addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    zoomAt(factor, e.clientX, e.clientY);
  }, { passive: false });

  // 터치 줌
  let lastTouchDist = 0;
  document.getElementById('app').addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      lastTouchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  });
  document.getElementById('app').addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (lastTouchDist > 0) {
        const factor = dist / lastTouchDist;
        const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        zoomAt(factor, cx, cy);
      }
      lastTouchDist = dist;
    }
  }, { passive: false });
}

function setupDrag() {
  const app = document.getElementById('app');

  app.addEventListener('mousedown', (e) => {
    if (e.target.closest('.skill-node') || e.target.closest('#top-bar') ||
        e.target.closest('#legend') || e.target.closest('#minimap') ||
        e.target.closest('#detail-panel')) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastOffsetX = offsetX;
    lastOffsetY = offsetY;
    app.classList.add('grabbing');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    offsetX = lastOffsetX + (e.clientX - dragStartX);
    offsetY = lastOffsetY + (e.clientY - dragStartY);
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    document.getElementById('app').classList.remove('grabbing');
  });
}

function zoom(factor) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  zoomAt(factor, cx, cy);
}

function zoomAt(factor, cx, cy) {
  const newScale = Math.max(0.2, Math.min(3, scale * factor));
  const ratio = newScale / scale;
  offsetX = cx - (cx - offsetX) * ratio;
  offsetY = cy - (cy - offsetY) * ratio;
  scale = newScale;
  updateTransform();
}

function resetView() {
  scale = 0.5;
  offsetX = (window.innerWidth - MAP_WIDTH * scale) / 2;
  offsetY = (window.innerHeight - MAP_HEIGHT * scale) / 2;
  updateTransform();
}

// ── 툴팁 ──
function showTooltip(e, skill, region) {
  const tt = document.getElementById('tooltip');
  tt.innerHTML = `
    <div class="tt-title" style="color:${region.color}">${skill.emoji} ${skill.name}</div>
    <div class="tt-category">${region.emoji} ${region.name}</div>
    <div class="tt-desc">${skill.desc}</div>
  `;
  tt.classList.add('visible');
}

function hideTooltip() {
  document.getElementById('tooltip').classList.remove('visible');
}

function moveTooltip(e) {
  const tt = document.getElementById('tooltip');
  tt.style.left = (e.clientX + 16) + 'px';
  tt.style.top = (e.clientY - 10) + 'px';
}

// ── 상세 패널 ──
function showDetail(skill, region) {
  const panel = document.getElementById('detail-panel');
  const content = document.getElementById('panel-content');
  const siblings = region.skills.filter(s => s.name !== skill.name);

  content.innerHTML = `
    <div class="panel-icon">${skill.emoji}</div>
    <div class="panel-name" style="color:${region.color}">${skill.name}</div>
    <div class="panel-cat" style="color:${region.color}">${region.emoji} ${region.name}</div>
    <div class="panel-desc">${skill.desc}</div>
    <div style="font-size:0.8rem;opacity:0.5;margin-bottom:8px;">이웃 스킬 (${siblings.length})</div>
    <div class="panel-skills">
      ${siblings.map(s => `<span class="skill-tag">${s.emoji} ${s.name}</span>`).join('')}
    </div>
  `;

  panel.classList.remove('hidden');
  requestAnimationFrame(() => panel.classList.add('open'));
}

document.getElementById('close-panel').addEventListener('click', () => {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('open');
  setTimeout(() => panel.classList.add('hidden'), 400);
});

// ── 범례 ──
function buildLegend() {
  const container = document.getElementById('legend-items');
  REGIONS.forEach(region => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<div class="legend-dot" style="background:${region.color}"></div>${region.emoji} ${region.name}`;
    item.addEventListener('click', () => {
      // 대륙으로 이동
      const cx = region.cx * scale + offsetX;
      const cy = region.cy * scale + offsetY;
      const targetScale = 0.8;
      scale = targetScale;
      offsetX = window.innerWidth / 2 - region.cx * scale;
      offsetY = window.innerHeight / 2 - region.cy * scale;
      updateTransform();
    });
    container.appendChild(item);
  });
}

// ── 미니맵 ──
function drawMinimap() {
  const canvas = document.getElementById('minimap-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 180;
  canvas.height = 120;

  const sx = 180 / MAP_WIDTH;
  const sy = 120 / MAP_HEIGHT;

  ctx.clearRect(0, 0, 180, 120);

  // 대륙 표시
  REGIONS.forEach(r => {
    ctx.beginPath();
    ctx.arc(r.cx * sx, r.cy * sy, Math.max(3, r.radius * sx * 0.4), 0, Math.PI * 2);
    ctx.fillStyle = r.color + '44';
    ctx.fill();
  });

  // 뷰포트 표시
  const vx = (-offsetX / scale) * sx;
  const vy = (-offsetY / scale) * sy;
  const vw = (window.innerWidth / scale) * sx;
  const vh = (window.innerHeight / scale) * sy;

  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 1;
  ctx.strokeRect(vx, vy, vw, vh);
}

// ── 진입 애니메이션 ──
function animateEntrance() {
  const nodes = document.querySelectorAll('.skill-node');
  nodes.forEach((node, i) => {
    node.style.opacity = '0';
    node.style.transform = 'scale(0)';
    setTimeout(() => {
      node.style.transition = 'opacity 0.5s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';
    }, 100 + i * 30);
  });

  const labels = document.querySelectorAll('.region-label');
  labels.forEach((label, i) => {
    label.style.opacity = '0';
    setTimeout(() => {
      label.style.transition = 'opacity 1s';
      label.style.opacity = '0.12';
    }, 500 + i * 200);
  });
}

// ── 시작 ──
document.addEventListener('DOMContentLoaded', init);
