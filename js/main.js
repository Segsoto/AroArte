document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Filtros de catálogo
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.producto-card');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;

      chips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      cards.forEach(card => {
        const category = card.dataset.category;
        card.style.display = (filter === 'todos' || category === filter) ? '' : 'none';
      });
    });
  });

  // CTA de producto -> WhatsApp
  const productoCtas = document.querySelectorAll('.producto-cta');
  productoCtas.forEach(btn => {
    btn.addEventListener('click', () => {
      const baseUrl = 'https://wa.me/506XXXXXXXX'; // reemplaza con tu número real
      const msg = btn.dataset.whatsappMsg || 'Hola, quiero más información sobre un anillo de AroArte';
      const url = baseUrl + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank');
    });
  });

  // Formulario de contacto
  const contactoForm = document.querySelector('.contacto-form');
  if (contactoForm) {
    contactoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nombre = contactoForm.nombre.value.trim();
      const correo = contactoForm.correo.value.trim();
      const mensaje = contactoForm.mensaje.value.trim();

      if (!nombre || !correo || !mensaje) {
        alert('Por favor, completá todos los campos.');
        return;
      }

      alert('Gracias por escribirnos, ' + nombre + '. Te responderemos pronto.');
      contactoForm.reset();
    });
  }

  // Modal de imagen para ampliar anillos
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-image');
  const modalClose = modal ? modal.querySelector('.modal-close') : null;

  if (modal && modalImg && modalClose) {
    const productImages = document.querySelectorAll('.producto-media img');
    productImages.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
      });
    });

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }
});
