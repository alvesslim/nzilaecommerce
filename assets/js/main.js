var cartCount = 3;
var chatOpen = false;
var qty = 1;

function goTo(page) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var el = document.getElementById('page-' + page);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}

function addToCart(name) {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
  showToast(name + ' adicionado ao carrinho!');
}

function showToast(msg) {
  var t = document.getElementById('toast');
  document.getElementById('toastText').textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatPopup').className = 'chat-popup' + (chatOpen ? ' open' : '');
}

function changeQty(d) {
  qty = Math.max(1, qty + d);
  document.getElementById('qtyNum').value = qty;
}

// Countdown
function updateCountdown() {
  var chEl = document.getElementById('ch');
  if (!chEl) return;
  var h = parseInt(chEl.textContent);
  var m = parseInt(document.getElementById('cm').textContent);
  var s = parseInt(document.getElementById('cs').textContent);
  s--;
  if (s < 0) { s = 59; m--; }
  if (m < 0) { m = 59; h--; }
  if (h < 0) { h = 2; m = 59; s = 59; }
  document.getElementById('ch').textContent = String(h).padStart(2,'0');
  document.getElementById('cm').textContent = String(m).padStart(2,'0');
  document.getElementById('cs').textContent = String(s).padStart(2,'0');
}
setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', function() {
  const icon = document.getElementById('themeIcon');
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    if (icon) {
      icon.classList.remove('ph-sun');
      icon.classList.add('ph-moon');
    }
  }

  document.querySelectorAll('.product-wish').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      let icon = this.querySelector('i');
      if (!icon) return;
      
      let isHeart = icon.classList.contains('ph-heart-straight-fill');
      if(isHeart) {
        icon.classList.remove('ph-heart-straight-fill', 'filled');
        icon.classList.add('ph-heart-straight');
        showToast('Removido dos favoritos');
      } else {
        icon.classList.remove('ph-heart-straight');
        icon.classList.add('ph-heart-straight-fill', 'filled');
        showToast('Adicionado aos favoritos!');
      }
    });
  });
});

function toggleTheme() {
  document.body.classList.add('theme-transition');
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');
  
  if (html.getAttribute('data-theme') === 'light') {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (icon) {
      icon.classList.remove('ph-moon');
      icon.classList.add('ph-sun');
    }
  } else {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    if (icon) {
      icon.classList.remove('ph-sun');
      icon.classList.add('ph-moon');
    }
  }
  
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 400);
}

// Mobile Menu
var mobileMenuOpen = false;
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  var menu = document.getElementById('navMenu');
  var icon = document.getElementById('menuIcon');
  if (mobileMenuOpen) {
    menu.classList.add('open');
    if (icon) { icon.classList.remove('ph-list'); icon.classList.add('ph-x'); }
  } else {
    menu.classList.remove('open');
    if (icon) { icon.classList.remove('ph-x'); icon.classList.add('ph-list'); }
  }
}

function closeMobileMenu() {
  if (mobileMenuOpen) {
    toggleMobileMenu();
  }
}
