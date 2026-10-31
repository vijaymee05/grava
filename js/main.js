/**
 * GRAVA - The Stone Art STUDIO
 * Main JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

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

    // Close menu when clicking outside or on a link
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

    navMenu.querySelectorAll('.nav-link').forEach(link => {
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

  // Gallery Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-card');

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // Lightbox Modal
  const modal = document.getElementById('imageModal');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalArtNo = document.getElementById('modalArtNo');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalInquiryBtn = document.getElementById('modalInquiryBtn');

  function openModal(data) {
    if (!modal) return;
    if (modalImg) modalImg.src = data.img || '';
    if (modalTitle) modalTitle.textContent = data.title || 'Artisanal Stone Work';
    if (modalCategory) modalCategory.textContent = data.category || 'Stone Art';
    if (modalArtNo) {
      if (data.artNo) {
        modalArtNo.textContent = data.artNo;
        modalArtNo.style.display = 'block';
      } else {
        modalArtNo.style.display = 'none';
      }
    }
    if (modalDesc) modalDesc.textContent = data.desc || 'Custom designed and hand-finished at GRAVA Stone Art Studio.';
    if (modalMaterial) modalMaterial.textContent = data.material || 'Natural Sandstone / Marble / Granite';

    if (modalInquiryBtn) {
      const inquiryText = encodeURIComponent(`Hello Manoj Sharma ji, I am interested in GRAVA product: "${data.title}"${data.artNo ? ' (' + data.artNo + ')' : ''}. Please share pricing and details.`);
      modalInquiryBtn.href = `https://wa.me/918905819108?text=${inquiryText}`;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Attach Lightbox triggers to gallery cards and zoom buttons
  document.querySelectorAll('.open-lightbox, .gallery-card-thumb').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.gallery-card') || trigger.closest('.gallery-featured-banner');
      if (!card) return;

      const imgElem = card.querySelector('img');
      const titleElem = card.querySelector('.gallery-card-title, h3');
      const descElem = card.querySelector('.gallery-card-desc, p');
      const catElem = card.querySelector('.gallery-category-pill, .section-badge');
      const artNoElem = card.querySelector('.gallery-art-code');
      const materialElem = card.querySelector('.material-tag');

      openModal({
        img: imgElem ? imgElem.src : '',
        title: titleElem ? titleElem.textContent.trim() : 'Bespoke Stone Masterpiece',
        category: catElem ? catElem.textContent.trim() : 'Artisanal Craft',
        artNo: artNoElem ? artNoElem.textContent.trim() : '',
        desc: descElem ? descElem.textContent.trim() : 'Exquisite stone architectural element crafted with precision CNC routers and generational hand artistry.',
        material: materialElem ? materialElem.textContent.trim() : 'Sandstone / Marble / Stone-Metal Fusion'
      });
    });
  });

  // Contact Form Submission Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value;
      const phone = contactForm.querySelector('[name="phone"]').value;
      const statusBox = document.getElementById('formStatus');

      if (statusBox) {
        statusBox.textContent = `Thank you, ${name}! Your inquiry has been sent to Manoj Sharma. We will contact you at ${phone} promptly.`;
        statusBox.className = 'form-status success';
        statusBox.style.display = 'block';
      }

      contactForm.reset();

      setTimeout(() => {
        if (statusBox) {
          statusBox.style.display = 'none';
        }
      }, 7000);
    });
  }

  // Smooth Scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

