/* ═══════════════════════════════════════════════════════════
   BRUTALIST × IRIDESCENT PORTFOLIO — ENGINE
   ═══════════════════════════════════════════════════════════ */

(() => {
'use strict';

const CFG = {
    colors: { bg: 0x0A0A0F, violet: 0x7B2FFF, teal: 0x00F5D4, rose: 0xFF6B9D, white: 0xF0EEE8 },
    scrollEase: 0.075,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isMobile: window.innerWidth < 768 || 'ontouchstart' in window
};

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

const PROJECTS = [
    {
        id: 'PRJ-01',
        title: 'Benevents',
        desc: 'Collaborative College Event Management Platform with QR check-ins.',
        detailDesc: 'Collaborated to build a scalable event management platform supporting 1,000+ users with QR-based check-ins, secure payment integration (Razorpay), REST APIs, and PostgreSQL database.',
        tags: ['PostgreSQL', 'REST APIs', 'Node.js'],
        icon: '◈',
        github: 'https://github.com/kb7781/benevents'
    },
    {
        id: 'PRJ-02',
        title: 'Traffic Sign Detection',
        desc: 'AI & Computer Vision Project for high-accuracy sign classification.',
        detailDesc: 'Developed a supervised learning-based traffic sign detection system achieving high classification accuracy using OpenCV and TensorFlow.',
        tags: ['Python', 'OpenCV', 'TensorFlow'],
        icon: '◆',
        github: 'https://github.com/kb7781/traffic-signs'
    },
    {
        id: 'PRJ-03',
        title: 'Shopease',
        desc: 'Full-stack e-commerce platform with Django and secure backend services.',
        detailDesc: 'Built a full-stack e-commerce web application with secure backend services and database-driven product management using Django and MySQL.',
        tags: ['Django', 'MySQL', 'Python'],
        icon: '▣',
        github: 'https://github.com/kb7781/shopease'
    },
    {
        id: 'PRJ-04',
        title: 'Road Accident Analysis',
        desc: 'Exploratory data analysis on 10,000+ records to identify risk zones.',
        detailDesc: 'Performed exploratory data analysis on 10,000+ accident records to identify high-risk zones and contributing safety factors.',
        tags: ['Python', 'EDA', 'Data Science'],
        icon: '◇',
        github: 'https://github.com/kb7781/road-accidents'
    }
];

const SKILLS = [
    { name: 'JavaScript', pct: 92, color: 0xF7DF1E, desc: 'Core language — ES6+, async patterns, closures, DOM manipulation, and module systems.' },
    { name: 'React',      pct: 87, color: 0x61DAFB, desc: 'Building interactive UIs with modern React component architecture.' },
    { name: 'Next.js',    pct: 82, color: 0xEEEEEE, desc: 'Creating fast, SEO-friendly web applications, SSR, and API routes.' },
    { name: 'Tailwind CSS', pct: 90, color: 0x38B2AC, desc: 'Crafting beautiful, responsive designs efficiently.' },
    { name: 'Node.js',    pct: 83, color: 0x339933, desc: 'Building scalable backend services, REST APIs, and microservices.' },
    { name: 'C++',        pct: 75, color: 0x00599C, desc: 'Building efficient, scalable solutions and data structures software.' },
    { name: 'Python',     pct: 85, color: 0x3776AB, desc: 'Passionate about data structures, automation, and AI-driven applications.' },
    { name: 'Three.js',   pct: 72, color: 0x9966FF, desc: '3D web graphics — custom shaders, scene composition, lighting, and WebGL.' }
];

let smoothScrollY = 0;
function initSmoothScroll() {
    if (CFG.reducedMotion || CFG.isMobile) {
        document.getElementById('smoothWrapper').style.position = 'relative';
        document.getElementById('smoothWrapper').style.height = 'auto';
        document.getElementById('smoothWrapper').style.overflow = 'visible';
        return;
    }
    const content = document.getElementById('smoothContent');
    if (!content) return;
    function setHeight() { document.body.style.height = content.scrollHeight + 'px'; }
    setHeight();
    window.addEventListener('resize', setHeight);
    const mo = new MutationObserver(setHeight);
    mo.observe(content, { childList: true, subtree: true });

    function tick() {
        const target = window.scrollY;
        smoothScrollY = lerp(smoothScrollY, target, CFG.scrollEase);
        if (Math.abs(smoothScrollY - target) < 0.5) smoothScrollY = target;
        content.style.transform = `translate3d(0,${-smoothScrollY}px,0)`;

        const progress = smoothScrollY / (content.scrollHeight - window.innerHeight);
        const bar = document.getElementById('scrollProgress');
        if (bar) bar.style.transform = `scaleX(${clamp(progress, 0, 1)})`;
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function getScrollY() { return (CFG.reducedMotion || CFG.isMobile) ? window.scrollY : smoothScrollY; }

function initCursor() {
    if (CFG.reducedMotion || CFG.isMobile) return;
    const diamond = document.getElementById('cursorDiamond');
    const glow    = document.getElementById('cursorGlow');
    if (!diamond || !glow) return;
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    document.addEventListener('mousemove', e => { target.x = e.clientX; target.y = e.clientY; });
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button').forEach(el => el.style.cursor = 'none');

    document.querySelectorAll('a, button, input, textarea, .proj-card, .portrait-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    function tick() {
        pos.x = lerp(pos.x, target.x, 0.12);
        pos.y = lerp(pos.y, target.y, 0.12);
        diamond.style.left = target.x + 'px'; diamond.style.top = target.y + 'px';
        glow.style.left = pos.x + 'px'; glow.style.top = pos.y + 'px';
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

let mouseNorm = { x: 0, y: 0 };
function initParallax() {
    if (CFG.reducedMotion) return;
    document.addEventListener('mousemove', e => {
        mouseNorm.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseNorm.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
    const els = document.querySelectorAll('[data-parallax]');
    function tick() {
        els.forEach(el => {
            const strength = parseFloat(el.getAttribute('data-parallax')) || 0.05;
            const rx = mouseNorm.y * strength * 3;
            const ry = mouseNorm.x * strength * -3;
            el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('navBurger');
    const links = document.querySelectorAll('.nav-link');
    const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
    let morphed = false;
    if (!navbar) return;

    function checkMorph() {
        const sy = getScrollY();
        const shouldMorph = sy > window.innerHeight * 0.5;
        if (shouldMorph !== morphed) {
            morphed = shouldMorph;
            navbar.classList.toggle('morphed', morphed);
        }
    }

    function updateActive() {
        const sy = getScrollY() + window.innerHeight * 0.4;
        let activeId = sections[0];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= sy) activeId = id;
        });
        links.forEach(link => { link.classList.toggle('active', link.dataset.section === activeId); });
        navbar.classList.toggle('dimmed', activeId === 'projects');
    }

    window.addEventListener('scroll', () => { checkMorph(); updateActive(); });
    checkMorph(); updateActive();

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const el = document.getElementById(link.dataset.section);
            if (el) {
                window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
                navbar.classList.remove('mobile-open');
                if (burger) burger.classList.remove('open');
            }
        });
    });

    const cta = document.getElementById('ctaBtn');
    if (cta) cta.addEventListener('click', () => {
        const proj = document.getElementById('projects');
        if (proj) window.scrollTo({ top: proj.offsetTop, behavior: 'smooth' });
    });

    if (burger) burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navbar.classList.toggle('mobile-open');
    });
}

function initHeroScene() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas || !window.THREE) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 4.5;

    const iridVert = `varying vec3 vNormal; varying vec3 vViewPos; void main(){ vNormal = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vViewPos = -mv.xyz; gl_Position = projectionMatrix * mv; }`;
    const iridFrag = `uniform float uTime; uniform vec2 uMouse; varying vec3 vNormal; varying vec3 vViewPos; vec3 iriColor(float a, float t){ vec3 v = vec3(0.482, 0.184, 1.0); vec3 tl = vec3(0.0, 0.961, 0.831); vec3 r = vec3(1.0, 0.42, 0.615); float s = a*3.14159+t*0.3; vec3 c = mix(v, tl, sin(s)*0.5+0.5); return mix(c, r, sin(s*0.7+2.0)*0.5+0.5); } void main(){ vec3 vd = normalize(vViewPos); float fresnel = pow(1.0-abs(dot(vNormal,vd)), 3.0); vec3 iri = iriColor(dot(vNormal,vd), uTime); vec3 col = mix(vec3(0.04,0.04,0.06), iri, fresnel*0.85+0.08); vec3 ld = normalize(vec3(uMouse.x*0.5+0.5, uMouse.y*0.5+0.5, 1.0)); col += pow(max(dot(reflect(-ld,vNormal), vd), 0.0), 48.0)*0.35; col += (1.0-pow(abs(dot(vNormal,vd)), 0.6))*iri*0.15; gl_FragColor = vec4(col, 0.72+fresnel*0.28); }`;

    const shaderMat = new THREE.ShaderMaterial({ vertexShader: iridVert, fragmentShader: iridFrag, uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2(0, 0) } }, transparent: true, side: THREE.DoubleSide });
    const crystal = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 1), shaderMat);
    scene.add(crystal);
    const wireframe = new THREE.Mesh(new THREE.IcosahedronGeometry(1.72, 1), new THREE.MeshBasicMaterial({ color: 0x7B2FFF, wireframe: true, transparent: true, opacity: 0.12 }));
    scene.add(wireframe);

    const partCount = CFG.isMobile ? 80 : 200;
    const pPos = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 12;
    const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x00F5D4, size: 0.025, transparent: true, opacity: 0.5 }));
    scene.add(particles);

    const p2Pos = new Float32Array(180);
    for (let i = 0; i < 180; i++) p2Pos[i] = (Math.random() - 0.5) * 8;
    const p2Geo = new THREE.BufferGeometry(); p2Geo.setAttribute('position', new THREE.BufferAttribute(p2Pos, 3));
    scene.add(new THREE.Points(p2Geo, new THREE.PointsMaterial({ color: 0xFF6B9D, size: 0.02, transparent: true, opacity: 0.35 })));

    let isHeroVisible = true;
    new IntersectionObserver(e => isHeroVisible = e[0].isIntersecting, { threshold: 0.05 }).observe(document.getElementById('hero'));
    window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });

    const clock = new THREE.Clock();
    const slabs = document.querySelectorAll('.slab');
    function animate() {
        requestAnimationFrame(animate);
        if (!isHeroVisible && !CFG.reducedMotion) return;
        const t = clock.getElapsedTime(), speed = CFG.reducedMotion ? 0 : 1;
        crystal.rotation.x = t * 0.08 * speed + mouseNorm.y * 0.15;
        crystal.rotation.y = t * 0.12 * speed + mouseNorm.x * 0.15;
        wireframe.rotation.x = crystal.rotation.x; wireframe.rotation.y = crystal.rotation.y;
        shaderMat.uniforms.uTime.value = t; shaderMat.uniforms.uMouse.value.set(mouseNorm.x, mouseNorm.y);
        particles.rotation.y = t * 0.015 * speed;
        if (!CFG.reducedMotion) {
            const sx = mouseNorm.x * 8, sy = mouseNorm.y * 6;
            slabs.forEach(s => s.style.boxShadow = `${2+sx}px ${2+sy}px 0 rgba(123,47,255,0.35), ${4+sx*1.5}px ${4+sy*1.5}px 0 rgba(123,47,255,0.2), ${6+sx*2}px ${6+sy*2}px 0 rgba(123,47,255,0.1), ${10+sx*2.5}px ${10+sy*2.5}px 25px rgba(0,0,0,0.7)`);
        }
        renderer.render(scene, camera);
    }
    animate();
}

function initAbout() {
    const card = document.getElementById('portraitCard');
    if (card) {
        const face = card.querySelector('.portrait-face');
        card.addEventListener('mousemove', e => {
            if (CFG.reducedMotion) return;
            const rect = card.getBoundingClientRect();
            face.style.transform = `rotateY(${((e.clientX - rect.left)/rect.width - 0.5)*20}deg) rotateX(${((e.clientY - rect.top)/rect.height - 0.5)*-20}deg)`;
        });
        card.addEventListener('mouseleave', () => face.style.transform = 'rotateY(0) rotateX(0)');
    }

    const bioPs = document.querySelectorAll('.bio-p');
    if (!bioPs.length) return;
    const glitchChars = '▓░▒█▄▀╬╠╣┃!@#%&*';
    function typewriterReveal(el) {
        const original = el.innerHTML, text = el.textContent; let idx = 0;
        el.style.visibility = 'visible'; el.textContent = ''; el.classList.add('glitch-active');
        const interval = setInterval(() => {
            idx++;
            if (idx >= text.length) { clearInterval(interval); el.innerHTML = original; el.classList.remove('glitch-active'); return; }
            let display = text.slice(0, idx);
            if (Math.random() > 0.7) display += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            el.textContent = display;
        }, CFG.reducedMotion ? 1 : 18);
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) { setTimeout(() => typewriterReveal(entry.target), parseInt(entry.target.dataset.delay) || 0); observer.unobserve(entry.target); } });
    }, { threshold: 0.3 });
    bioPs.forEach(p => { p.style.visibility = 'hidden'; observer.observe(p); });
}

function initProjects() {
    const grid = document.getElementById('projGrid');
    if (!grid) return;
    
    if (!CFG.isMobile && !CFG.reducedMotion) {
        const cards = grid.querySelectorAll('.proj-card');
        grid.addEventListener('mousemove', e => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left, y = e.clientY - rect.top;
                const front = card.querySelector('.proj-front');
                if (front) front.style.setProperty('--card-glow', `${x - rect.width/2 > 0 ? '' : '-'}${Math.abs(x - rect.width/2)*0.06}px ${y - rect.height/2 > 0 ? '' : '-'}${Math.abs(y - rect.height/2)*0.06}px 30px rgba(123,47,255,0.15), 0 0 60px rgba(0,245,212,0.05)`);
            });
        });
    }
}

function initSkills() {
    const canvas = document.getElementById('skillsCanvas');
    const container = document.getElementById('skillsArena');
    if (!canvas || !container || !window.THREE) return;
    const w = container.clientWidth, h = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(w, h); camera.position.set(0, 2, 7); camera.lookAt(0, 0, 0);
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    scene.add(new THREE.PointLight(0x7B2FFF, 1.5, 25));
    const pl2 = new THREE.PointLight(0x00F5D4, 0.6, 20); pl2.position.set(3, 2, 3); scene.add(pl2);
    
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45, 2), new THREE.MeshBasicMaterial({ color: 0x7B2FFF, wireframe: true, transparent: true, opacity: 0.6 })); scene.add(core);
    const innerCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 1), new THREE.MeshStandardMaterial({ color: 0x7B2FFF, emissive: 0x7B2FFF, emissiveIntensity: 0.4, metalness: 1, roughness: 0.3 })); scene.add(innerCore);

    const orbs = [];
    SKILLS.forEach((skill, i) => {
        const radius = 1.8 + i * 0.35, angle = (i / SKILLS.length) * Math.PI * 2, speed = 0.15 + Math.random() * 0.2, yOff = (Math.random() - 0.5) * 0.6;
        const ring = new THREE.Mesh(new THREE.RingGeometry(radius - 0.005, radius + 0.005, 64), new THREE.MeshBasicMaterial({ color: 0x7B2FFF, transparent: true, opacity: 0.06, side: THREE.DoubleSide }));
        ring.rotation.x = Math.PI / 2; scene.add(ring);
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 24), new THREE.MeshStandardMaterial({ color: skill.color, emissive: skill.color, emissiveIntensity: 0.2, metalness: 0.85, roughness: 0.25 }));
        orb.userData = { ...skill, angle, radius, speed, yOff, index: i };
        orbs.push(orb); scene.add(orb);
    });

    const raycaster = new THREE.Raycaster(), mouseVec = new THREE.Vector2();
    canvas.addEventListener('click', e => {
        const rect = canvas.getBoundingClientRect();
        mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1; mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouseVec, camera);
        const hits = raycaster.intersectObjects(orbs);
        if (hits.length > 0) {
            const popup = document.getElementById('skillPopup'), fill = document.getElementById('spFill'), s = hits[0].object.userData;
            document.getElementById('spName').textContent = s.name; document.getElementById('spDesc').textContent = s.desc; document.getElementById('spPct').textContent = s.pct + '%'; fill.style.width = '0%';
            popup.classList.remove('hidden'); popup.classList.add('visible'); requestAnimationFrame(() => setTimeout(() => fill.style.width = s.pct + '%', 50));
        }
    });

    document.getElementById('spClose').addEventListener('click', () => {
        const popup = document.getElementById('skillPopup'); popup.classList.remove('visible'); setTimeout(() => popup.classList.add('hidden'), 400);
    });

    let isActive = false;
    new IntersectionObserver(e => isActive = e[0].isIntersecting, { threshold: 0.05 }).observe(container);
    window.addEventListener('resize', () => { camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(container.clientWidth, container.clientHeight); });

    const clock = new THREE.Clock(), labelsEl = document.getElementById('skillLabels');
    function animate() {
        requestAnimationFrame(animate);
        if (!isActive && !CFG.reducedMotion) return;
        const t = clock.getElapsedTime(), sp = CFG.reducedMotion ? 0.01 : 1;
        core.rotation.x = t * 0.3 * sp; core.rotation.y = t * 0.5 * sp; innerCore.rotation.y = -t * 0.4 * sp;
        labelsEl.innerHTML = '';
        orbs.forEach(orb => {
            const d = orb.userData;
            orb.position.x = Math.cos(d.angle + t * d.speed * sp) * d.radius;
            orb.position.z = Math.sin(d.angle + t * d.speed * sp) * d.radius;
            orb.position.y = d.yOff + Math.sin(t * d.speed * sp * 2) * 0.15;
            orb.rotation.y = t * 0.5;
            const projected = orb.position.clone().project(camera);
            if (projected.z < 1) {
                const label = document.createElement('span'); label.className = 'skill-label'; label.textContent = d.name;
                label.style.left = ((projected.x * 0.5 + 0.5) * container.clientWidth) + 'px'; label.style.top = (((-projected.y * 0.5 + 0.5) * container.clientHeight) - 28) + 'px';
                label.style.opacity = clamp(1 - projected.z * 0.5, 0.3, 1); labelsEl.appendChild(label);
            }
        });
        renderer.render(scene, camera);
    }
    animate();
}

function initContact() {
    const form = document.getElementById('contactForm'), btn = document.getElementById('transmitBtn'), canvas = document.getElementById('burstCanvas');
    if (!form || !canvas) return; const ctx = canvas.getContext('2d'); let particles = [], animId = null;
    function resizeCanvas() { const rect = form.getBoundingClientRect(); canvas.width = rect.width; canvas.height = rect.height; }
    resizeCanvas(); window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor(x, y) { this.x = x; this.y = y; this.vx = (Math.random()-0.5)*12; this.vy = (Math.random()-0.5)*12; this.life = 1; this.decay = 0.015+Math.random()*0.02; this.size = 2+Math.random()*4; this.color = ['#7B2FFF', '#00F5D4', '#FF6B9D', '#F0EEE8'][Math.floor(Math.random()*4)]; }
        update() { this.x += this.vx; this.y += this.vy; this.vx *= 0.96; this.vy *= 0.96; this.life -= this.decay; }
        draw(ctx) { ctx.globalAlpha = this.life; ctx.fillStyle = this.color; ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size); }
    }
    function explode(originX, originY) {
        particles = []; for (let i=0; i<80; i++) particles.push(new Particle(originX, originY));
        if (animId) cancelAnimationFrame(animId);
        function animateParticles() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            particles.forEach(p => { p.update(); p.draw(ctx); });
            particles = particles.filter(p => p.life > 0);
            if (particles.length > 0) animId = requestAnimationFrame(animateParticles); else ctx.clearRect(0,0,canvas.width,canvas.height);
        }
        animateParticles();
    }

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const name = document.getElementById('cName').value;
        const email = document.getElementById('cEmail').value;
        const message = document.getElementById('cMsg').value;
        const formRect = form.getBoundingClientRect(), btnRect = btn.getBoundingClientRect();
        const ox = btnRect.left - formRect.left + btnRect.width / 2, oy = btnRect.top - formRect.top + btnRect.height / 2;
        
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) });
            if (res.ok) {
                resizeCanvas(); explode(ox, oy); btn.classList.add('success');
                setTimeout(() => { btn.classList.remove('success'); form.reset(); }, 3000);
            } else { alert('Connection failure: Unable to transmit payload.'); }
        } catch (err) { alert('Transmission error: Uplink severed.'); }
    });
}

function initReveal() {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal, .section-head, .about-wrap, .contact-wrap, .stats-row, .skills-arena').forEach(el => observer.observe(el));
}

function initScrollColor() {
    if (CFG.reducedMotion) return;
    function update() {
        const sy = getScrollY(), maxScroll = document.body.scrollHeight - window.innerHeight;
        const bar = document.getElementById('scrollProgress');
        if (bar && maxScroll > 0) bar.style.filter = `hue-rotate(${Math.round((sy / maxScroll) * 120)}deg)`;
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function bootEngine() {
    setTimeout(() => {
        initSmoothScroll(); initCursor(); initParallax(); initNavigation(); initHeroScene(); initAbout(); initProjects(); initSkills(); initContact(); initReveal(); initScrollColor();
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootEngine);
} else {
    bootEngine();
}

})();
