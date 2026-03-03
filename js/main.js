const siteData = {
  // Personal Info
  personal: {
    name: "Ustu Bina Syahdiba",
    title: "AI Engineer & Researcher",
    subtitle: "Passionate AI Engineer | Reinforcement Learning Enthusiast",
    email: "binasyahdiba@email.com",
    avatar: "assets/profile.jpeg",
    profilePhoto: "assets/profile.jpeg",
    cvFile: "assets/resume.pdf"
  },

  // About Section
  about: {
    text: `I am a passionate AI Engineer with a strong focus on Reinforcement Learning and Machine Learning. With a solid foundation in computer science and mathematics, I specialize in developing intelligent systems that can learn and adapt to complex environments.

My journey in AI began during my undergraduate studies, where I discovered the fascinating world of neural networks and deep learning. Since then, I have worked on various projects ranging from autonomous agents to predictive modeling systems.

I am constantly exploring new technologies and methodologies in the AI field, with a particular interest in multi-agent systems, deep reinforcement learning, and their applications in robotics and game development.`
  },

  // Projects Section
  projects: [
    {
      id: 1,
      title: "RL-Based Footstep Planner",
      description: "Developed a reinforcement learning based footstep planner for humanoid locomotion in a custom simulation environment. The trained policy was deployed to a C++ runtime for real-time inference and integration with robotic control systems.",
      icon: "🦿",
      tags: ["C++", "OpenVINO", "Python", "ROS2", "Stable-Baselines3"],
      featured: true,
      link: "#"
    },
    {
      id: 2,
      title: "Whistle Detection for RoboCup",
      description: "Developed a real-time whistle detection system for a humanoid RoboCup robot to identify referee signals during matches. Implemented audio preprocessing and machine learning-based classification to ensure robust detection under noisy competition environments. Optimized the system for low-latency inference and seamless integration with the robot's decision-making pipeline.",
      icon: "🎺",
      tags: ["C++", "OpenVINO", "Python", "ROS2", "TensorFlow"],
      featured: true,
      link: "#"
    },
    {
      id: 3,
      title: "Parameter Tuning for Placo Framework",
      description: "Designed and implemented an optimization pipeline for tuning Placo control parameters using Genetic Algorithm (GA) and Particle Swarm Optimization (PSO). Automated the search for optimal parameter configurations to enhance system stability, motion performance, and convergence efficiency. Conducted comparative analysis between GA and PSO in terms of convergence speed and solution quality.",
      icon: "⚙️",
      tags: ["C++", "Python"],
      featured: false,
      link: "#"
    },
    {
      id: 4,
      title: "SLAM Implementation",
      description: "Built a Simultaneous Localization and Mapping system for autonomous robots.",
      icon: "🗺️",
      tags: ["C++", "ROS2", "Lidar"],
      featured: false,
      link: "#"
    },
    {
      id: 5,
      title: "Adaptive Fallen Recovery Motion for Humanoid Robot",
      description: "Developed a reinforcement learning framework to enable dynamic getting-up motion in a humanoid robot. Engineered state space design, reward shaping, and training strategies to achieve stable recovery from supine and prone fall conditions. Optimized policy performance for balance, motion smoothness, and execution stability.",
      icon: "🤸",
      tags: ["C++", "OpenVINO", "Python", "ROS2", "Stable-Baselines3"],
      featured: true,
      link: "#"
    }
  ],

  // Achievements Section
  achievements: [
    {
      id: 1,
      title: "13 Medals in FIRA RoboWorld Cup",
      description: "Participated in the FIRA RoboWorld Cup as a member of the Ichiro ITS team, contributing to the development, optimization, and performance of humanoid robotic systems. Successfully secured 13 medals across multiple competition categories, demonstrating excellence in robotics engineering, algorithm design, motion control, and team coordination. This achievement reflects strong technical capability in real-time decision-making, system integration, and competitive robotics at the international level.",
      icon: '<img src="assets/FIRA.png" alt="13 Medals in FIRA RoboWorld Cup" />'
    }
  ],

  // Skills Section
  skills: [
    {
      category: "Programming Languages",
      icon: "💻",
      items: [
        { name: "Python", icon: "🐍" },
        { name: "C++", icon: "⚡" }
      ]
    },
    {
      category: "AI/ML Frameworks",
      icon: "🧠",
      items: [
        { name: "TensorFlow", icon: "🔷" },
        { name: "Stable-Baselines3", icon: "🎯" },
        { name: "OpenVINO", icon: "🔌" }
      ]
    },
    {
      category: "Robotics & Simulation",
      icon: "🔧",
      items: [
        { name: "ROS2", icon: "🤖" },
        { name: "Lidar", icon: "📡" },
        { name: "Placo", icon: "🦿" }
      ]
    },
    {
      category: "Optimization Algorithms",
      icon: "⚙️",
      items: [
        { name: "Genetic Algorithm", icon: "🧬" },
        { name: "Particle Swarm", icon: "🐦" }
      ]
    }
  ],

  // Experience Section
  experience: [
    {
      id: 1,
      title: "AI Bachelor Degree",
      company: "Institute Technology Sepuluh Nopember",
      date: "2024 - Present",
      type: "education",
      bullets: [
        "Studying Artificial Intelligence with focus on robotics, reinforcement learning, and autonomous systems",
        "Engaged in research projects on humanoid robot control and machine learning applications"
      ]
    },
    {
      id: 2,
      title: "Programmer Ichiro ITS",
      company: "Ichiro ITS",
      date: "2024 - Present",
      type: "work",
      bullets: [
        "Contributing to the development of autonomous systems for humanoid robots",
        "Implementing reinforcement learning algorithms for robotic control",
        "Developing robotic control software for competition environments"
      ]
    },
    {
      id: 3,
      title: "Teacher Assistant of Data Structure",
      company: "Institute Technology Sepuluh Nopember",
      date: "2026 - Present",
      type: "work",
      bullets: [
        "Supporting students in understanding data structures and algorithms",
        "Conducting tutorials and facilitating practical coding sessions",
        "Grading assignments and providing feedback to students"
      ]
    },
    {
      id: 4,
      title: "Teacher Assistant of Fundamental Programming",
      company: "Institute Technology Sepuluh Nopember",
      date: "2025",
      type: "work",
      bullets: [
        "Assisting in teaching fundamental programming concepts to undergraduate students",
        "Providing guidance on coding practices and problem-solving techniques"
      ]
    }
  ],

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/SayaUSB", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/us2b", icon: "linkedin" },
    { name: "Email", url: "mailto:binasyahdiba@email.com", icon: "mail" }
  ]
};

// ============================================
// DOM RENDERING FUNCTIONS
// ============================================

/**
 * Render About Section
 */
function renderAbout() {
  const aboutText = document.getElementById('aboutText');
  if (aboutText) {
    aboutText.innerHTML = siteData.about.text.replace(/\n\n/g, '</p><p>');
  }
}

/**
 * Render Projects Grid
 */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  const projectsHTML = siteData.projects.map(project => `
    <article 
      class="project-card ${project.featured ? 'featured' : ''}" 
      role="listitem"
      data-project-id="${project.id}"
      tabindex="0"
      aria-label="${project.title}"
    >
      <div class="project-icon" aria-hidden="true">${project.icon}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');

  projectsGrid.innerHTML = projectsHTML;

  // Add click handlers for project cards
  projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(parseInt(card.dataset.projectId)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(parseInt(card.dataset.projectId));
      }
    });
  });
}

/**
 * Render Achievements List
 */
function renderAchievements() {
  const achievementsList = document.getElementById('achievementsList');
  if (!achievementsList) return;

  const achievementsHTML = siteData.achievements.map(achievement => `
    <div class="achievement-item" role="listitem">
      <div class="achievement-icon" aria-hidden="true">${achievement.icon}</div>
      <div class="achievement-content">
        <h3 class="achievement-title">${achievement.title}</h3>
        <p class="achievement-description">${achievement.description}</p>
      </div>
    </div>
  `).join('');

  achievementsList.innerHTML = achievementsHTML;
}

/**
 * Render Skills Section
 */
function renderSkills() {
  const skillsContent = document.getElementById('skillsContent');
  if (!skillsContent) return;

  const skillsHTML = siteData.skills.map(skillGroup => `
    <div class="skills-group">
      <h3 class="skills-group-title">
        <span class="skills-group-icon" aria-hidden="true">${skillGroup.icon}</span>
        ${skillGroup.category}
      </h3>
      <div class="skills-list">
        ${skillGroup.items.map(skill => `
          <span class="skill-item">
            <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
            ${skill.name}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');

  skillsContent.innerHTML = skillsHTML;
}

/**
 * Render Experience Timeline
 */
function renderExperience() {
  const experienceTimeline = document.getElementById('experienceTimeline');
  if (!experienceTimeline) return;

  const experienceHTML = siteData.experience.map(exp => `
    <div class="experience-item">
      <div class="experience-marker" aria-hidden="true"></div>
      <div class="experience-card">
        <div class="experience-header">
          <div>
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-company">${exp.company}</p>
          </div>
          <span class="experience-date">${exp.date}</span>
        </div>
        <ul class="experience-bullets">
          ${exp.bullets.map(bullet => `<li class="experience-bullet">${bullet}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  experienceTimeline.innerHTML = experienceHTML;
}

/**
 * Render Social Links
 */
function renderSocialLinks() {
  const footerSocial = document.getElementById('footerSocial');
  if (!footerSocial) return;

  const iconMap = {
    github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    twitter: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
  };

  const socialHTML = siteData.social.map(social => `
    <a 
      href="${social.url}" 
      class="social-link" 
      target="${social.url.startsWith('mailto') ? '_self' : '_blank'}"
      rel="noopener noreferrer"
      aria-label="${social.name}"
    >
      ${iconMap[social.icon] || social.name}
    </a>
  `).join('');

  footerSocial.innerHTML = socialHTML;
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function openProjectModal(projectId) {
  const project = siteData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <div class="project-icon" style="width: 72px; height: 72px; font-size: 2.5rem; margin-bottom: 1.5rem;">${project.icon}</div>
    <h2 class="modal-title" id="modalTitle">${project.title}</h2>
    <p class="modal-description">${project.description}</p>
    <div class="modal-tags">
      ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
    </div>
    <div style="margin-top: 2rem;">
      <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
        <span>View Project</span>
        <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>
    </div>
  `;

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap
  const closeBtn = document.getElementById('modalClose');
  closeBtn.focus();
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============================================
// MOBILE NAVIGATION
// ============================================

function initMobileNav() {
  const toggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    mobileNav.setAttribute('aria-hidden', isExpanded);
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });

  // Close mobile nav when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.getAttribute('aria-hidden') === 'false') {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// STICKY HEADER EFFECT
// ============================================

function initStickyHeader() {
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      scrollBtn.classList.add('visible');
      scrollBtn.setAttribute('aria-hidden', 'false');
    } else {
      scrollBtn.classList.remove('visible');
      scrollBtn.setAttribute('aria-hidden', 'true');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================

function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px'
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ============================================
// TYPEWRITER EFFECT WITH ROTATING TEXT
// ============================================

function initTypewriterEffect() {
  const nameElement = document.querySelector('.name-highlight');
  if (!nameElement) return;

  const texts = ["Ustu Bina Syahdiba", "Robotics Engineer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  const typeSpeed = 100; // Speed of typing
  const deleteSpeed = 50; // Speed of deleting
  const pauseTime = 2000; // Pause between texts

  nameElement.innerHTML = '<span class="cursor">|</span>';

  function type() {
    const currentText = texts[textIndex];

    if (isPaused) {
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
        type();
      }, pauseTime);
      return;
    }

    if (isDeleting) {
      charIndex--;
      nameElement.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor">|</span>';
    } else {
      charIndex++;
      nameElement.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor">|</span>';
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Finished typing - pause before deleting
      isPaused = true;
      nameElement.innerHTML = currentText + '<span class="cursor">|</span>';
      setTimeout(type, pauseTime);
      return;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting - move to next text
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      nameElement.innerHTML = '<span class="cursor">|</span>';
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(type, speed);
  }

  // Start the typing animation
  type();
}

// ============================================
// DOWNLOAD CV HANDLER
// ============================================

function initDownloadCV() {
  const downloadBtn = document.getElementById('downloadCvBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      // Check if file exists, if not show alert
      fetch(siteData.personal.cvFile, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            e.preventDefault();
            alert('CV file is not available yet. Please add your CV to the assets folder.');
          }
        })
        .catch(() => {
          // Silently allow download - browser will handle 404
        });
    });
  }
}

// ============================================
// CURRENT YEAR UPDATER
// ============================================

function updateCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ============================================
// MODAL EVENT LISTENERS
// ============================================

function initModalListeners() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');
  const overlay = document.getElementById('modalOverlay');

  closeBtn.addEventListener('click', closeProjectModal);
  overlay.addEventListener('click', closeProjectModal);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeProjectModal();
    }
  });

  // Focus trap within modal
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}

// ============================================
// FORM HANDLING
// ============================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // The form uses mailto: action, so it will open the user's email client
      // You can add additional validation here if needed
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  }
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for fade-in animations
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Add CSS for in-view state
  const style = document.createElement('style');
  style.textContent = `
    .section.in-view {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
  // Render all content from data
  renderAbout();
  renderProjects();
  renderAchievements();
  renderSkills();
  renderExperience();
  renderSocialLinks();

  // Initialize all functionality
  initMobileNav();
  initSmoothScroll();
  initStickyHeader();
  initScrollToTop();
  initLazyLoading();
  initTypewriterEffect();
  initDownloadCV();
  updateCurrentYear();
  initModalListeners();
  initContactForm();
  initScrollAnimations();

  console.log('🚀 CV Portfolio loaded successfully!');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteData };
}
