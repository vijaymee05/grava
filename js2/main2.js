/**
 * GRAVA - The Stone Art STUDIO (V2 Engine)
 * Inspired by Stone Ideas & The Stone Studio India
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.v2-hamburger');
  const navMenu = document.querySelector('.v2-nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 2. Interactive Gallery Filtering
  const filterPills = document.querySelectorAll('.v2-filter-pill');
  const galleryCards = document.querySelectorAll('.v2-stone-card');

  if (filterPills.length > 0 && galleryCards.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const filter = pill.getAttribute('data-filter');

        galleryCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 40);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 3. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.v2-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.v2-faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other items
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Modal / Lightbox System
  const modal = document.getElementById('v2Modal');
  const modalClose = document.getElementById('v2ModalClose');
  const modalImg = document.getElementById('v2ModalImg');
  const modalTitle = document.getElementById('v2ModalTitle');
  const modalCategory = document.getElementById('v2ModalCategory');
  const modalArtNo = document.getElementById('v2ModalArtNo');
  const modalDesc = document.getElementById('v2ModalDesc');
  const modalStone = document.getElementById('v2ModalStone');
  const modalFinish = document.getElementById('v2ModalFinish');
  const modalWhatsAppBtn = document.getElementById('v2ModalWhatsAppBtn');

  function openV2Modal(data) {
    if (!modal) return;
    if (modalImg) modalImg.src = data.img || '';
    if (modalTitle) modalTitle.textContent = data.title || 'Architectural Stone Element';
    if (modalCategory) modalCategory.textContent = data.category || 'Stone Collection';
    if (modalArtNo) {
      if (data.artNo) {
        modalArtNo.textContent = data.artNo;
        modalArtNo.style.display = 'block';
      } else {
        modalArtNo.style.display = 'none';
      }
    }
    if (modalDesc) modalDesc.textContent = data.desc || 'Hand-carved and CNC-profiled architectural stone element from GRAVA Stone Art Studio.';
    if (modalStone) modalStone.textContent = data.stone || 'Natural Sandstone / Marble';
    if (modalFinish) modalFinish.textContent = data.finish || 'Honed / Chiseled / Water Jet Cut';

    if (modalWhatsAppBtn) {
      const msg = encodeURIComponent(`Hello Manoj Sharma ji, I am interested in GRAVA architectural stone work: "${data.title}"${data.artNo ? ' [' + data.artNo + ']' : ''}. Please share technical specifications, pricing, and stone sample details.`);
      modalWhatsAppBtn.href = `https://wa.me/918905819108?text=${msg}`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeV2Modal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeV2Modal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeV2Modal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeV2Modal();
    });
  }

  // Bind clicks on gallery cards
  document.querySelectorAll('.open-v2-modal, .v2-card-img-wrap, .v2-card-btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.v2-stone-card') || btn.closest('.v2-featured-banner');
      if (!card) return;

      const img = card.querySelector('img');
      const title = card.querySelector('.v2-card-title, h3');
      const cat = card.querySelector('.v2-card-cat-badge, .v2-badge');
      const artNo = card.querySelector('.v2-card-artno');
      const desc = card.querySelector('.v2-card-desc, p');
      const stone = card.querySelector('.v2-card-stone-type');

      openV2Modal({
        img: img ? img.src : '',
        title: title ? title.textContent.trim() : 'Architectural Stone Craft',
        category: cat ? cat.textContent.trim() : 'Stone Art',
        artNo: artNo ? artNo.textContent.trim() : '',
        desc: desc ? desc.textContent.trim() : 'Masterfully crafted at GRAVA studio using natural stone and advanced CNC profiling.',
        stone: stone ? stone.textContent.trim() : 'Natural Sandstone / Makrana Marble',
        finish: 'Honed / Chiseled / Natural Sandblasted'
      });
    });
  });

  // 5. Contact Form Simulation
  const form = document.getElementById('v2ContactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const statusBox = document.getElementById('v2FormStatus');

      const name = nameInput ? nameInput.value : 'Valued Client';
      const phone = phoneInput ? phoneInput.value : '';

      if (statusBox) {
        statusBox.textContent = `Thank you, ${name}! Your architectural stone inquiry has been received. Studio Director Manoj Sharma (+91 8905819108) will contact you shortly at ${phone}.`;
        statusBox.style.display = 'block';
      }

      form.reset();

      setTimeout(() => {
        if (statusBox) statusBox.style.display = 'none';
      }, 8000);
    });
  }

  // 6. Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
