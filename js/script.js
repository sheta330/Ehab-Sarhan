/* ============================================================
   Ehab Sarhan Cosmetics — Store Script
   Static store: slider (Bootstrap), sidebar cart, search, filter,
   zoom modal, delivery form -> WhatsApp checkout.
   ============================================================ */

/* ---------- Config (عدّل هنا فقط) ---------- */
const CONFIG = {
  brand: 'Ehab Sarhan Cosmetics',
  brandAr: 'إيهاب سرحان لمستحضرات التجميل',
  // WhatsApp بدون + وبدون 0 في البداية — مصر: 20 + الرقم
  whatsapp: '201043607932',
};
const WHATSAPP_NUMBER = CONFIG.whatsapp;

/* ---------- Products Data (قائمة المنتجات) ---------- */
const products = [
  // البروتينات
  {id:1,title:"ميكس كوفي",category:"البروتينات",price:1100,image:"images/p1.png",unit:"liter"},
  {id:2,title:"كافيار فيلر",category:"البروتينات",price:1600,image:"images/p2.png",unit:"liter"},
  {id:3,title:"جولد فيلر",category:"البروتينات",price:1400,image:"images/p3.png",unit:"liter"},
  {id:4,title:"دايمون",category:"البروتينات",price:1700,image:"images/p4.png",unit:"liter"},
  {id:5,title:"نانو كولاجين",category:"البروتينات",price:2300,image:"images/p5.png",unit:"liter"},
  {id:6,title:"كافيار بلس",category:"البروتينات",price:2000,image:"images/p6.png",unit:"liter"},
  {id:7,title:"نانو لين",category:"البروتينات",price:2400,image:"images/p7.png",unit:"liter"},
  {id:8,title:"برو فيلر",category:"البروتينات",price:1250,image:"images/p8.png",unit:"liter"},
  {id:9,title:"بيو فيلر",category:"البروتينات",price:2600,image:"images/p9.png",unit:"liter"},
  {id:10,title:"ميركل",category:"البروتينات",price:1300,image:"images/p10.png",unit:"liter"},
  {id:11,title:"ارجانو كولاجين",category:"البروتينات",price:1900,image:"images/p11.png",unit:"liter"},
  {id:12,title:"بيانكو",category:"البروتينات",price:1300,image:"images/p12.png",unit:"liter"},
  // مجموعة العناية - نص لتر
  {id:13,title:"مجموعة جولد بلكس نص لتر",category:"مجموعه العناية-نص لتر",price:300,image:"images/g-half1.png"},
  {id:14,title:"مجموعة روزالين نص لتر",category:"مجموعه العناية-نص لتر",price:330,image:"images/g-half2.png"},
  {id:15,title:"مجموعة نانو كولاجين نص لتر",category:"مجموعه العناية-نص لتر",price:180,image:"images/g-half3.png"},
  {id:16,title:"مجموعة كافيار نص لتر",category:"مجموعه العناية-نص لتر",price:180,image:"images/g-half4.png"},
  // مجموعة العناية - لتر
  {id:17,title:"مجموعة ميكس ارجان لتر",category:"مجموعه العناية-لتر",price:330,image:"images/g1.png",unit:"المجموعة"},
  {id:18,title:"مجموعة كافيار بلس لتر",category:"مجموعه العناية-لتر",price:350,image:"images/g2.png",unit:"المجموعة"},
  {id:19,title:"مجموعة نانو كولاجين لتر",category:"مجموعه العناية-لتر",price:350,image:"images/g3.png",unit:"المجموعة"},
  {id:20,title:"مجموعة كافيار لتر",category:"مجموعه العناية-لتر",price:330,image:"images/g4.png",unit:"المجموعة"},
  {id:21,title:"مجموعة كولاجين لتر",category:"مجموعه العناية-لتر",price:330,image:"images/g5.png",unit:"المجموعة"},
  {id:22,title:"مجموعة سيراميد لتر",category:"مجموعه العناية-لتر",price:350,image:"images/g6.png",unit:"المجموعة"},
  {id:23,title:"مجموعة فيلوره لتر",category:"مجموعه العناية-لتر",price:350,image:"images/g7.png",unit:"المجموعة"},
  // الترميمات
  {id:24,title:"ترميم دكتور كافيار لتر",category:"الترميمات",price:600,image:"images/traitment1.png"},
  {id:25,title:"ترميم سيدرا",category:"الترميمات",price:300,image:"images/traitment2.png"},
  {id:26,title:"ترميم نانو كولاجين",category:"الترميمات",price:550,image:"images/traitment3.png"},
  {id:27,title:"ترميم كولاجين",category:"الترميمات",price:480,image:"images/traitment4.png"},
  {id:28,title:"ترميم بيور كولاجين",category:"الترميمات",price:280,image:"images/traitment5.png"},
  {id:29,title:"ترميم بلديز",category:"الترميمات",price:600,image:"images/traitment6.png"},
  {id:30,title:"ترميم سترونج ريبير",category:"الترميمات",price:500,image:"images/traitment7.png"},
  {id:31,title:"ترميم كولاجين لتر",category:"الترميمات",price:600,image:"images/traitment8.png"},
  {id:32,title:"ترميم B5",category:"الترميمات",price:200,image:"images/traitment9.png"},
  {id:33,title:"ترميم نانو بيوتين",category:"الترميمات",price:280,image:"images/traitment10.png"},
  // المكاوي
  {id:34,title:"مكواه ليزا ثنائيه",category:"المكاوي",price:1700,image:"images/مكواه1.png"},
  {id:35,title:"مكواه ريجينسي",category:"المكاوي",price:3000,image:"images/مكواه2.png"},
  {id:36,title:"مكواه تورنيدو جولد",category:"المكاوي",price:1500,image:"images/مكواه3.png"},
  {id:37,title:"مكواه ليزا ثلاثيه",category:"المكاوي",price:2600,image:"images/مكواه4.png"},
  {id:38,title:"مكواه تورنيدو اكتيز الاصليه",category:"المكاوي",price:3200,image:"images/مكواه5.png"},
  {id:39,title:"مكواه بلاك هورس",category:"المكاوي",price:3200,image:"images/مكواه6.png"},
  {id:40,title:"مكواه فوك سمارت",category:"المكاوي",price:3500,image:"images/مكواه7.png"},
  {id:41,title:"مكواه فراشه",category:"المكاوي",price:3300,image:"images/مكواه8.png"},
  // استشوارات
  {id:42,title:"استشوار كورنر",category:"استشوارات",price:1000,image:"images/سيشوار1.png"},
  {id:43,title:"استشوار تورنيدو",category:"استشوارات",price:1500,image:"images/سيشوار2.png"},
  {id:44,title:"استشوار إيطالي",category:"استشوارات",price:1700,image:"images/سيشوار3.png"},
  {id:45,title:"استشوار هوم جولد",category:"استشوارات",price:350,image:"images/سيشوار4.png"},
  // شفرات الديرما بلانينج
  {id:46,title:"شفرات ديرما بارامونت",category:"شفرات الديرما بلانينج",price:450,image:"images/شفرة1.png"},
  {id:47,title:"ديرما هندي",category:"شفرات الديرما بلانينج",price:650,image:"images/شفرة2.png"},
  {id:48,title:"شفرات ديرما صيني",category:"شفرات الديرما بلانينج",price:350,image:"images/شفرة3.png"},
  {id:49,title:"سلاح الديرما",category:"شفرات الديرما بلانينج",price:65,image:"images/شفرة4.png"},
  // الباديكير
  {id:50,title:"مجموعه البديكير 11 قطعة",category:"الباديكير ومستلزماته",price:850,image:"images/badikar1.png"},
  {id:51,title:"جيل كالس اوف نص",category:"الباديكير ومستلزماته",price:450,image:"images/badikar2.png"},
  {id:52,title:"جيل كالس اوف ربع",category:"الباديكير ومستلزماته",price:300,image:"images/badikar3.png"},
  {id:53,title:"جيل كالس اوف كيلو",category:"الباديكير ومستلزماته",price:850,image:"images/badikar4.png"},
  // الامبولات
  {id:54,title:"امبولات روزماري",category:"الامبولات",price:450,image:"images/امبولات1.png"},
  {id:55,title:"امبولات برو ميتشل",category:"الامبولات",price:180,image:"images/امبولات2.png"},
  {id:56,title:"امبولات فاستر توم",category:"الامبولات",price:150,image:"images/امبولات3.png"},
  {id:57,title:"امبولات ثيرمو فيلر",category:"الامبولات",price:650,image:"images/امبولات4.png"},
  {id:58,title:"امبولات جي كي",category:"الامبولات",price:150,image:"images/امبولات5.png"},
  {id:59,title:"امبولات كافيار",category:"الامبولات",price:150,image:"images/امبولات6.png"},
  {id:60,title:"امبولات لوريال",category:"الامبولات",price:150,image:"images/امبولات7.png"},
  {id:61,title:"امبولات توم SH",category:"الامبولات",price:180,image:"images/امبولات8.png"},
  // التساقط والإنبات
  {id:62,title:"مجموعه فاستر",category:"التساقط والانبات",price:230,image:"images/تساقط1.png"},
  {id:63,title:"بخاخ فاستر",category:"التساقط والانبات",price:155,image:"images/تساقط2.png"},
  // كلارفينج وديتوكس القشرة
  {id:64,title:"شامبو ديتوكس",category:"كلارفينج وديتوكس القشرة",price:120,image:"images/قشرة1.png"},
  {id:65,title:"ديتوكس قشره",category:"كلارفينج وديتوكس القشرة",price:600,image:"images/قشرة2.png"},
  // البشرة
  {id:66,title:"مجموعه البشرة",category:"البشرة",price:900,image:"images/بشرة1.png"},
  {id:67,title:"سيرم دهب للبشرة",category:"البشرة",price:120,image:"images/بشرة2.png"},
  {id:68,title:"كبسولات بشرة",category:"البشرة",price:125,image:"images/بشرة3.png"},
  {id:69,title:"ايس هوم",category:"البشرة",price:150,image:"images/بشرة4.png"},
  {id:70,title:"امبولات بشرة Dr",category:"البشرة",price:150,image:"images/بشرة5.png"},
  // الصبغات
  {id:71,title:"اكسجين بلوب 20% 30% 40%",category:"الصبغات ومستلزماتها",price:55,image:"images/صبغة1.png"},
  {id:72,title:"بودر بلوب ربع",category:"الصبغات ومستلزماتها",price:95,image:"images/صبغة2.png"},
  {id:73,title:"بودر بلوب نص",category:"الصبغات ومستلزماتها",price:190,image:"images/صبغة3.png"},
  {id:74,title:"صبغة ماكسيما",category:"الصبغات ومستلزماتها",price:165,image:"images/صبغة4.png"},
  {id:75,title:"اكسجين جي كي",category:"الصبغات ومستلزماتها",price:240,image:"images/صبغة5.png"},
  {id:76,title:"صبغة جي كي",category:"الصبغات ومستلزماتها",price:195,image:"images/صبغة6.png"},
  {id:77,title:"صبغة بايجن",category:"الصبغات ومستلزماتها",price:95,image:"images/صبغة7.png"},
  // الأجهزة
  {id:78,title:"جهاز هيدروفيشنال 7 مراحل",category:"الاجهزة",price:6500,image:"images/جهاز1.png"},
  {id:79,title:"جهاز اكسجينيو",category:"الاجهزة",price:2750,image:"images/جهاز2.png"},
  {id:80,title:"ديرما بن A6",category:"الاجهزة",price:1800,image:"images/جهاز3.png"},
  {id:81,title:"جهاز فركونسي",category:"الاجهزة",price:650,image:"images/جهاز4.png"},
  {id:82,title:"جهاز بخار مكتب",category:"الاجهزة",price:1300,image:"images/جهاز5.png"},
  {id:83,title:"جهاز نانو استيم",category:"الاجهزة",price:900,image:"images/جهاز6.png"},
  {id:84,title:"جهاز بشرة ديجيتال ٦",category:"الاجهزة",price:1600,image:"images/جهاز7.png"},
  {id:85,title:"جهاز بخار ٢ دراع",category:"الاجهزة",price:2500,image:"images/جهاز8.png"},
  {id:86,title:"جهاز تقشير ماسي",category:"الاجهزة",price:2900,image:"images/جهاز9.png"},
  {id:87,title:"جهاز التراسونيك",category:"الاجهزة",price:500,image:"images/جهاز10.png"},
  {id:88,title:"قناع وجه",category:"الاجهزة",price:1100,image:"images/جهاز11.png"},
  {id:89,title:"حوض بديكير",category:"الاجهزة",price:1150,image:"images/جهاز12.png"},
  {id:90,title:"جهاز شفط دهون بخار",category:"الاجهزة",price:450,image:"images/جهاز13.png"},
  {id:91,title:"ديرما بن a1",category:"الاجهزة",price:1150,image:"images/جهاز14.png"},
  // ترابيزة الأجهزة والتربوهات
  {id:92,title:"ترابيزة",category:"ترابيزة الاجهزة والتربوهات",price:1150,image:"images/تربو1.png"},
  {id:93,title:"تربو زجاج",category:"ترابيزة الاجهزة والتربوهات",price:1250,image:"images/تربو2.png"},
  {id:94,title:"تربو",category:"ترابيزة الاجهزة والتربوهات",price:1200,image:"images/تربو3.png"},
  {id:95,title:"حامل استشوار",category:"ترابيزة الاجهزة والتربوهات",price:650,image:"images/تربو4.png"},
  // الكراسي والشذلونج
  {id:96,title:"كرسي فاخر مستورد",category:"الكراسي والشذلونج",price:6100,image:"images/كرسي1.png"},
  {id:97,title:"كرسي مصري لوكس",category:"الكراسي والشذلونج",price:2400,image:"images/كرسي2.png"},
  {id:98,title:"حوض غسيل متحرك",category:"الكراسي والشذلونج",price:1350,image:"images/كرسي3.png"},
  {id:99,title:"شازلونج بالكرسي",category:"الكراسي والشذلونج",price:4800,image:"images/كرسي4.png"},
  {id:100,title:"كرسي غسيل مصري",category:"الكراسي والشذلونج",price:2700,image:"images/كرسي5.png"},
  // الرفايع
  {id:101,title:"كيس فوط صبغة",category:"الرفايع",price:65,image:"images/رفايع1.png"},
  {id:102,title:"ودانة",category:"الرفايع",price:25,image:"images/رفايع2.png"},
  {id:103,title:"سفنجة شيفي",category:"الرفايع",price:25,image:"images/رفايع3.png"},
  {id:104,title:"طبق صبغة اكليريك",category:"الرفايع",price:55,image:"images/رفايع4.png"},
  {id:105,title:"فرشاة توزيع مستوردة",category:"الرفايع",price:25,image:"images/رفايع5.png"},
  {id:106,title:"مسط حراري",category:"الرفايع",price:15,image:"images/رفايع6.png"},
  {id:107,title:"كيس كلبسات",category:"الرفايع",price:30,image:"images/رفايع7.png"},
  {id:108,title:"مطرب صبغة",category:"الرفايع",price:20,image:"images/رفايع8.png"},
  {id:109,title:"فرشاة توزيع ماسك",category:"الرفايع",price:25,image:"images/رفايع9.png"},
];

/* ---------- Cart State (localStorage) ---------- */
let cart = [];
try {
  const saved = localStorage.getItem('ehab_sarhan_cart');
  cart = saved ? JSON.parse(saved) : [];
  if (!Array.isArray(cart)) cart = [];
} catch (e) { cart = []; }

/* ---------- DOM ---------- */
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const checkoutWhatsappBtn = document.getElementById('checkoutWhatsappBtn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgZoomTarget');
const modalCaption = document.getElementById('modalCaption');
const closeModalBtn = document.getElementById('closeModal');

const fmt = n => Number(n||0).toLocaleString('ar-EG');
const esc = s => String(s??'').replace(/['"]/g, "'");
const unitSuffix = p => p.unit === 'liter' ? ' /لتر' : (p.unit === 'المجموعة' ? ' /المجموعة' : '');
const placeholder = title => `https://picsum.photos/seed/ehab-${encodeURIComponent(title||'x')}/600/600`;

/* ---------- Render Products ---------- */
function renderProducts(items) {
  productGrid.innerHTML = '';
  if (!items.length) {
    productGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:24px">لا توجد منتجات مطابقة للبحث.</p>';
    return;
  }
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image" data-zoom="${esc(p.image)}" data-title="${esc(p.title)}" role="button" aria-label="تكبير ${esc(p.title)}">
        <img src="${p.image}" alt="${esc(p.title)}" loading="lazy" onerror="this.onerror=null;this.src='${placeholder(p.title)}'">
        <div class="zoom-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
      </div>
      <div class="product-details">
        <h3 class="product-title">${p.title}</h3>
        <div class="product-price">${fmt(p.price)} ج.م${unitSuffix(p)}</div>
        <div class="product-actions">
          <button class="btn-add-cart" data-add="${p.id}">أضف للسلة <i class="fa-solid fa-cart-plus"></i></button>
        </div>
      </div>`;
    productGrid.appendChild(card);
  });
}

/* Event delegation for add / zoom (more robust than inline onclick) */
productGrid.addEventListener('click', e => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) { addToCart(Number(addBtn.dataset.add)); return; }
  const zoomEl = e.target.closest('[data-zoom]');
  if (zoomEl) zoomImage(zoomEl.dataset.zoom, zoomEl.dataset.title);
});

/* ---------- Search + Filter (combined state) ---------- */
let activeCategory = 'all';
let searchTerm = '';
function applyFilters() {
  let list = products;
  if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
  if (searchTerm) list = list.filter(p => p.title.toLowerCase().includes(searchTerm));
  renderProducts(list);
}
if (searchInput) {
  searchInput.addEventListener('input', e => { searchTerm = e.target.value.trim().toLowerCase(); applyFilters(); });
}
if (searchBtn) {
  searchBtn.addEventListener('click', () => { searchTerm = searchInput.value.trim().toLowerCase(); applyFilters(); searchInput.focus(); });
}
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  filterBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.category;
  applyFilters();
}));

/* ---------- Zoom Modal ---------- */
function zoomImage(src, alt) {
  modalImg.src = src;
  modalImg.onerror = () => { modalImg.src = placeholder(alt); };
  modalCaption.textContent = alt || '';
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeZoom() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
if (closeModalBtn) closeModalBtn.addEventListener('click', closeZoom);
modal.addEventListener('click', e => { if (e.target === modal) closeZoom(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeZoom(); closeCartDrawer(); }
});

/* ---------- Cart Drawer: Open / Close (RTL Fixed) ---------- */
let lastFocusedTrigger = null;

function openCart(sourceEl) {
  if (!cartDrawer) return;
  lastFocusedTrigger = sourceEl || document.activeElement;
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  if ('inert' in cartDrawer) cartDrawer.inert = false;
  if (cartOverlay) {
    cartOverlay.classList.add('active');
    cartOverlay.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
  /* انقل الفوكس لزر الإغلاق للوصول بلوحة المفاتيح */
  setTimeout(() => closeCart?.focus?.(), 60);
}

function closeCartDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  if ('inert' in cartDrawer) cartDrawer.inert = true;
  if (cartOverlay) {
    cartOverlay.classList.remove('active');
    cartOverlay.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  if (lastFocusedTrigger && document.contains(lastFocusedTrigger)) {
    lastFocusedTrigger.focus?.();
  }
}

function toggleCart() {
  if (!cartDrawer) return;
  const isOpen = cartDrawer.classList.contains('open');
  if (isOpen) closeCartDrawer(); else openCart(cartIcon);
}

if (cartIcon) {
  cartIcon.addEventListener('click', () => openCart(cartIcon));
  cartIcon.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCart(cartIcon); }
  });
}
if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && cartDrawer?.classList.contains('open')) closeCartDrawer();
});

/* اجعل دوال السلة متاحة عالميًا في حال استدعائها من inline handlers */
window.openCart = openCart;
window.closeCartDrawer = closeCartDrawer;
window.toggleCart = toggleCart;

/* ---------- Cart Logic ---------- */
function saveCart(){ try{ localStorage.setItem('ehab_sarhan_cart', JSON.stringify(cart)); }catch(e){} }

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const found = cart.find(i => i.id === id);
  if (found) found.quantity += 1;
  else cart.push({ ...product, quantity:1 });
  updateCartUI();
  openCart();
}
function changeQuantity(index, change) {
  if (!cart[index]) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateCartUI();
}
function removeFromCart(index) { cart.splice(index, 1); updateCartUI(); }

function updateCartUI() {
  saveCart();
  const count = cart.reduce((s,i)=> s + (Number(i.quantity)||0), 0);
  if (cartCount) cartCount.textContent = count;
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = '';
  let total = 0;

  if (!cart.length) {
    cartItemsContainer.innerHTML = '<div class="cart-empty">🛒<br>سلة التسوق فارغة<br><small>أضف منتجات واطلب عبر واتساب</small></div>';
  } else {
    cart.forEach((item, index) => {
      const qty = Number(item.quantity)||1;
      const price = Number(item.price)||0;
      const itemTotal = price * qty;
      total += itemTotal;
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img class="thumb" src="${item.image}" alt="${esc(item.title)}" loading="lazy" onerror="this.onerror=null;this.src='${placeholder(item.title)}'">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${fmt(price)} ج.م للقطعة${unitSuffix(item)}</div>
          <div class="quantity-controls">
            <button type="button" data-inc="${index}" aria-label="زيادة الكمية">+</button>
            <span aria-live="polite">${qty}</span>
            <button type="button" data-dec="${index}" aria-label="تقليل الكمية">−</button>
          </div>
          <div class="cart-item-subtotal">الإجمالي: ${fmt(itemTotal)} ج.م</div>
        </div>
        <button type="button" class="cart-item-remove" data-remove="${index}" title="حذف المنتج" aria-label="حذف ${esc(item.title)}">
          <i class="fa-solid fa-trash"></i>
        </button>`;
      cartItemsContainer.appendChild(el);
    });
  }
  if (cartTotalAmount) cartTotalAmount.textContent = `${fmt(total)} ج.م`;
}

cartItemsContainer?.addEventListener('click', e => {
  const inc = e.target.closest('[data-inc]');
  const dec = e.target.closest('[data-dec]');
  const rem = e.target.closest('[data-remove]');
  if (inc) changeQuantity(Number(inc.dataset.inc), 1);
  if (dec) changeQuantity(Number(dec.dataset.dec), -1);
  if (rem) removeFromCart(Number(rem.dataset.remove));
});

/* ---------- WhatsApp Checkout ---------- */
if (checkoutWhatsappBtn) {
  checkoutWhatsappBtn.addEventListener('click', () => {
    const name = document.getElementById('customerName')?.value.trim() || '';
    const phone = document.getElementById('customerPhone')?.value.trim() || '';
    const address = document.getElementById('customerAddress')?.value.trim() || '';

    if (!name || !phone || !address) { alert('من فضلك أدخل الاسم ورقم الموبايل والعنوان'); return; }
    if (!cart.length) { alert('سلة التسوق فارغة، أضِف منتجًا أولًا'); return; }
    if (!/^[0-9+\s]{8,}$/.test(phone)) { alert('من فضلك أدخل رقم موبايل صحيح'); return; }

    let total = 0;
    let details = '';
    cart.forEach((item, idx) => {
      const qty = Number(item.quantity)||1;
      const price = Number(item.price)||0;
      const line = price * qty;
      total += line;
      details += `${idx+1}- ${item.title} (${unitSuffix(item).replace(' /','').trim()})\nالكمية: ${qty}\nسعر المنتج: ${fmt(price)} ج.م\nإجمالي المنتج: ${fmt(line)} ج.م\n\n`;
    });

    const msg =
`🛍️ طلب جديد من ${CONFIG.brand}
${CONFIG.brandAr}

👤 اسم العميل: ${name}
📱 رقم الموبايل: ${phone}
📍 العنوان: ${address}

📦 تفاصيل الطلب:
${details}💰 الإجمالي: ${fmt(total)} ج.م
شكرًا لكم — ${CONFIG.brand}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  updateCartUI();
  if (cartDrawer && 'inert' in cartDrawer) cartDrawer.inert = true;
});
