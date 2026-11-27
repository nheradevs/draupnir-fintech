// Offline progressive fallbacks when native Popover or Invoker Commands are absent
if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  const popovers = Array.from(document.querySelectorAll("[popover]"));
  for (const el of popovers) {
    el.showPopover = () => {
      el.classList.add(":popover-open");
    };
    el.hidePopover = () => {
      el.classList.remove(":popover-open");
    };
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[popovertarget]");
    if (trigger) {
      const target = document.getElementById(trigger.getAttribute("popovertarget"));
      if (!target) return;
      target.classList.toggle(":popover-open");
      return;
    }

    for (const el of popovers) {
      if (el.classList.contains(":popover-open") && !el.contains(event.target)) {
        el.classList.remove(":popover-open");
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    for (const el of popovers) {
      el.classList.remove(":popover-open");
    }
  });
}

if (!("commandForElement" in HTMLButtonElement.prototype)) {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("button[command][commandfor]");
    if (!btn || btn.disabled) return;
    const target = document.getElementById(btn.getAttribute("commandfor"));
    if (!target || !(target instanceof HTMLDialogElement)) return;
    const cmd = btn.getAttribute("command");
    if (cmd === "show-modal" && !target.open) target.showModal();
    if (cmd === "close" && target.open) target.close();
  });
}

// Language dictionary (Spanish is source HTML; English dictionary lives here)
const I18N = {
  es: {
    pageTitle: "Draupnir | Ordena tu plata sin magia",
    metaDescription:
      "Draupnir ordena tus finanzas: ahorros automáticos, todos tus bancos en una vista y alertas de comisiones. Solo lectura, cifrado y cero promesas de rentabilidad mágica.",
    toggleLabel: "EN",
    toggleAria: "Switch language to English",
    skipLink: "Ir al contenido principal",
    menuBtn: "Menú",
    navProblem: "Problema",
    navHow: "Cómo funciona",
    navFeatures: "Ventajas",
    navPlans: "Planes",
    navFaq: "FAQ",
    navCta: "Empezar",
    heroTitle: "El anillo de Odín se multiplicaba solo. El tuyo todavía no.",
    heroTagline: "Tu banco reza por que no leas esto.",
    heroBody:
      "Draupnir ordena tu plata: ahorros automáticos, todas tus cuentas en una vista y alertas de comisiones antes de que te las cobren. Sin promesas de rentabilidad mágica: Odín no responde tickets.",
    heroPrimaryBtn: "Empezar gratis",
    heroSecondaryBtn: "Ver cómo funciona",
    problemHeading: "Revisas el saldo hace años y no aprendiste nada nuevo.",
    problemIntro:
      "Cinco apps, cuatro bancos, cero respuestas. El dinero está en todas partes menos donde tomas decisiones.",
    problemCard1Title: "Comisiones que aparecen cuando miras para otro lado",
    problemCard1Body: "El banco siempre encuentra la forma. Tú también puedes: enterarte antes.",
    problemCard2Title: "Ahorros que duran hasta el próximo fin de semana",
    problemCard2Body: "Separar plata a mano es una promesa que rompes sin querer un martes.",
    problemCard3Title: "La foto completa no existe",
    problemCard3Body: "Nadie suma sueldo, tarjeta, billetera virtual y ese plan que olvidaste que tenías.",
    howHeading: "Tres pasos. Sin runas ni ofrendas.",
    howIntro:
      "Conectas cuentas en solo lectura, defines reglas en diez segundos y el dinero se ordena solo: bolsillos, alertas y un resumen que se lee en un café.",
    step1Title: "Conectar",
    step1Text: "Cuentas en solo lectura, sin permisos de transferencia. Tu plata no se toca.",
    step2Title: "Reglar",
    step2Text: "Redondeos, porcentajes o fechas fijas. Diez segundos de disciplina, hoy.",
    step3Title: "Ordenar",
    step3Text: "Bolsillos, alertas y un resumen semanal que se lee en un café.",



    featuresHeading: "Cuatro cosas que sí hacemos. Las mágicas, no.",
    feature1Title: "Bolsillos automáticos",
    feature1Body: "Separas para viajes, imprevistos y esa cena que te debes desde 2019.",
    feature2Title: "Una sola vista",
    feature2Body:
      "Todos tus bancos en una pantalla. Sí, también ese que usas solo para la billetera virtual.",
    feature3Title: "Alertas de comisiones",
    feature3Body: "Te avisamos antes de que el banco te avise con un cargo.",
    feature4Title: "Plan de metas",
    feature4Body:
      "Fijas un número y una fecha. El resto es disciplina, que eso no lo programamos nosotros.",
    plansHeading: "Karla, Karl y Jarl.",
    plansIntro:
      "En la sociedad nórdica había tres. En el banking tradicional pagas como en la primera sin ser de ninguna.",
    planKarlaDesc: "Para los que todavía pagan comisiones como si fuera 1998.",
    planKarlaItem1: "2 cuentas conectadas",
    planKarlaItem2: "1 bolsillo de ahorro",
    planKarlaItem3: "Alertas básicas",
    planKarlBadge: "Recomendado",
    planKarlDesc: "Hombre libre, en teoría. Con sus finanzas, en la práctica.",
    planKarlItem1: "Cuentas ilimitadas",
    planKarlItem2: "Bolsillos y metas sin tope",
    planKarlItem3: "Alertas de comisiones en tiempo real",
    planJarlDesc: "Para familias o equipos que comparten gastos y discuten menos.",
    planJarlItem1: "Todo lo de Karl",
    planJarlItem2: "Hasta 5 personas",
    planJarlItem3: "Reportes compartidos",
    planBtn: "Reservar lugar",
    faqHeading: "Preguntas",
    faqQ1: "¿Garantizan rentabilidad?",
    faqA1:
      "No. Desconfía de cualquiera que la prometa: o miente o te está vendiendo otro producto. Draupnir ordena tu plata, no adivina el futuro.",
    faqQ2: "¿Es seguro conectar mis cuentas?",
    faqA2:
      "El acceso es de solo lectura, cifrado en tránsito y en reposo, y sin permisos de transferencia. Tus datos no se venden ni se comparten con terceros de marketing.",
    faqQ3: "¿Funciona con cualquier banco?",
    faqA3:
      "Donde haya datos abiertos o exportación de movimientos. Los bancos que esconden su API siguen tratando al cliente como súbdito.",
    faqQ4: "¿Cuánto cuesta?",
    faqA4: "[Precio por definir]. Esta página es una demo de portafolio, no una tienda.",
    faqQ5: "¿Qué pasa si quiero irme?",
    faqA5:
      "Tus datos se exportan o se borran, a tu elección, sin llamadas de retención. Las valquirias no suplican.",
    footerLine1: "© 2026 Draupnir. Todos los derechos reservados.",
    footerCreditA: "Sitio hecho por Karen Gil", footerCreditB: "Parte de mi portafolio",
    footerLine3: "Página de demostración para portafolio. Ningún dato es recogido ni enviado.",
    dialogTitle: "Empieza con Draupnir",
    dialogSubtitle: "Deja tu correo y te avisamos cuando abramos registros.",
    dialogDemoNote: "Sitio de demostración: este formulario no envía datos.",
    dialogNameLabel: "Nombre",
    dialogEmailLabel: "Correo electrónico",
    dialogCancelBtn: "Cancelar",
    dialogSubmitBtn: "Avisarme",
    dialogCloseAria: "Cerrar diálogo"
  },
  en: {
    pageTitle: "Draupnir | Order your money, no magic",
    metaDescription:
      "Draupnir puts your money in order: automatic savings, every account in one view and fee alerts before the charge lands. No magic returns promised.",
    toggleLabel: "ES",
    toggleAria: "Cambiar idioma a español",
    skipLink: "Skip to main content",
    menuBtn: "Menu",
    navProblem: "Problem",
    navHow: "How it works",
    navFeatures: "Features",
    navPlans: "Plans",
    navFaq: "FAQ",
    navCta: "Get started",
    heroTitle: "Odin's ring multiplied itself. Yours is still sitting there.",
    heroTagline: "Your bank hopes you never read this.",
    heroBody:
      "Draupnir puts your money in order: automatic savings, every account in one view and fee alerts before the charge lands. No magic returns promised: Odin does not answer support tickets.",
    heroPrimaryBtn: "Start free",
    heroSecondaryBtn: "See how it works",
    problemHeading: "You have checked your balance for years and learned nothing new.",
    problemIntro:
      "Five apps, four banks, zero answers. Your money is everywhere except where you make decisions.",
    problemCard1Title: "Fees that appear when you look away",
    problemCard1Body: "Banks always find a way. So can you: know before they charge.",
    problemCard2Title: "Savings that last until the next weekend",
    problemCard2Body:
      "Moving money by hand is a promise you break on a Tuesday without meaning to.",
    problemCard3Title: "The full picture does not exist",
    problemCard3Body:
      "Nobody adds up salary, card, digital wallet and that plan you forgot you had.",
    howHeading: "Three steps. No runes, no offerings.",
    howIntro:
      "Connect accounts in read-only mode, set rules in ten seconds, and your money organizes itself: pockets, alerts and a summary you read over one coffee.",
    step1Title: "Connect",
    step1Text: "Accounts in read-only mode, no transfer permissions. Your money does not get touched.",
    step2Title: "Set rules",
    step2Text: "Rounding, percentages or fixed dates. Ten seconds of discipline, today.",
    step3Title: "Order",
    step3Text: "Pockets, alerts and a weekly summary you read over one coffee.",



    featuresHeading: "Four things we actually do. The magic ones, we do not.",
    feature1Title: "Automatic pockets",
    feature1Body:
      "Separate money for trips, emergencies and that dinner you owe yourself since 2019.",
    feature2Title: "One single view",
    feature2Body:
      "All your banks on one screen. Yes, even the one you only use for the digital wallet.",
    feature3Title: "Fee alerts",
    feature3Body: "We tell you before the bank tells you with a charge.",
    feature4Title: "Goal planner",
    feature4Body: "You set a number and a date. The rest is discipline, which we cannot code.",
    plansHeading: "Karla, Karl and Jarl.",
    plansIntro:
      "Norse society had three. Traditional banking charges you like the first one while you belong to none.",
    planKarlaDesc: "For people still paying fees like it is 1998.",
    planKarlaItem1: "2 connected accounts",
    planKarlaItem2: "1 savings pocket",
    planKarlaItem3: "Basic alerts",
    planKarlBadge: "Recommended",
    planKarlDesc: "Free man, in theory. With his finances, in practice.",
    planKarlItem1: "Unlimited accounts",
    planKarlItem2: "Pockets and goals without caps",
    planKarlItem3: "Real-time fee alerts",
    planJarlDesc: "For families or teams that share expenses and argue less.",
    planJarlItem1: "Everything in Karl",
    planJarlItem2: "Up to 5 people",
    planJarlItem3: "Shared reports",
    planBtn: "Reserve a spot",
    faqHeading: "FAQ",
    faqQ1: "Do you guarantee returns?",
    faqA1:
      "No. Doubt anyone who does: they are lying or selling you another product. Draupnir organizes your money, it does not predict the future.",
    faqQ2: "Is connecting my accounts safe?",
    faqA2:
      "Access is read-only, encrypted in transit and at rest, with no transfer permissions. Your data is never sold or shared with marketing third parties.",
    faqQ3: "Does it work with any bank?",
    faqA3:
      "Anywhere there is open banking or transaction export. Banks that hide their API still treat customers like subjects.",
    faqQ4: "What does it cost?",
    faqA4: "[Price to be defined]. This page is a portfolio demo, not a store.",
    faqQ5: "What if I want to leave?",
    faqA5:
      "Your data is exported or deleted, your call, no retention phone calls. Valkyries do not beg.",
    footerLine1: "© 2026 Draupnir. All rights reserved.",
    footerCreditA: "Site built by Karen Gil", footerCreditB: "Part of my portfolio",
    footerLine3: "Portfolio demo page. No data is collected or sent.",
    dialogTitle: "Start with Draupnir",
    dialogSubtitle: "Leave your email and we will tell you when signups open.",
    dialogDemoNote: "Demo site: this form does not send data.",
    dialogNameLabel: "Name",
    dialogEmailLabel: "Email",
    dialogCancelBtn: "Cancel",
    dialogSubmitBtn: "Notify me",
    dialogCloseAria: "Close dialog"
  }
};

// Adaptive site navigation and hero backdrop synchronization
const header = document.getElementById("site-header");
const headerInner = header?.querySelector(".header-inner");
const siteMenu = document.getElementById("site-menu");
const heroSection = document.getElementById("top");
const navLinks = Array.from(siteMenu?.querySelectorAll('a[href^="#"]') ?? []);
const langToggle = document.getElementById("lang-toggle");

let currentLang = "es";
let lastWidth = 0;
let lastHeaderH = -1;
let lastHeroBackdropH = -1;
let syncRaf = 0;

function syncHeroDimensions() {
  if (!header || !heroSection) return;
  const headerH = Math.round(header.getBoundingClientRect().height);
  const heroH = Math.round(heroSection.getBoundingClientRect().height);
  const totalH = headerH + heroH;

  if (headerH !== lastHeaderH) {
    lastHeaderH = headerH;
    document.documentElement.style.setProperty("--header-h", `${headerH}px`);
  }
  if (totalH !== lastHeroBackdropH) {
    lastHeroBackdropH = totalH;
    document.documentElement.style.setProperty("--hero-backdrop-h", `${totalH}px`);
  }
}

function updateNavbarLayout(forceMeasure = false) {
  if (!header || !headerInner || !siteMenu) return;

  const currentWidth = header.getBoundingClientRect().width;
  const wasWide = header.classList.contains("is-wide");

  if (!forceMeasure && !wasWide && currentWidth <= lastWidth && lastWidth !== 0) {
    return;
  }
  lastWidth = currentWidth;

  const wasPopoverOpen = !wasWide && siteMenu.matches(":popover-open, .\\:popover-open");

  header.classList.add("is-measuring");
  header.classList.add("is-wide");
  siteMenu.removeAttribute("popover");

  const fitsInline = headerInner.scrollWidth <= headerInner.clientWidth;

  if (!fitsInline) {
    header.classList.remove("is-wide");
    siteMenu.setAttribute("popover", "auto");
    if (wasPopoverOpen) {
      try {
        siteMenu.showPopover();
      } catch {
        // Ignore if popover is still initializing
      }
    }
  }

  requestAnimationFrame(() => {
    header.classList.remove("is-measuring");
  });
}

function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  const metaSelectors = [
    'meta[name="description"]',
    'meta[property="og:description"]',
    'meta[name="twitter:description"]'
  ];
  for (const selector of metaSelectors) {
    document.querySelector(selector)?.setAttribute("content", dict.metaDescription);
  }
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", dict.pageTitle);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", dict.pageTitle);

  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    if (key && key in dict) {
      el.textContent = dict[key];
    }
  }

  for (const el of document.querySelectorAll("[data-i18n-aria]")) {
    const key = el.getAttribute("data-i18n-aria");
    if (key && key in dict) {
      el.setAttribute("aria-label", dict[key]);
    }
  }

  if (langToggle) {
    langToggle.textContent = dict.toggleLabel;
    langToggle.setAttribute("aria-pressed", String(lang === "en"));
    langToggle.setAttribute("aria-label", dict.toggleAria);
  }

  updateNavbarLayout(true);
  syncHeroDimensions();
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "es" ? "en" : "es");
  });
}

if (header && siteMenu) {
  const observer = new ResizeObserver(() => {
    cancelAnimationFrame(syncRaf);
    syncRaf = requestAnimationFrame(() => {
      updateNavbarLayout();
      syncHeroDimensions();
    });
  });
  observer.observe(header);
  observer.observe(siteMenu);
  updateNavbarLayout();
  syncHeroDimensions();

  siteMenu.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    for (const item of navLinks) {
      if (item === link) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    }

    if (!header.classList.contains("is-wide") && siteMenu.hasAttribute("popover")) {
      try {
        siteMenu.hidePopover();
      } catch {
        // Ignore if already closed
      }
    }
  });
}

// Fallback light-dismiss for <dialog closedby="any"> in browsers lacking closedBy
if (!("closedBy" in HTMLDialogElement.prototype)) {
  const outsideDialog = (event, dialog) => {
    const r = dialog.getBoundingClientRect();
    return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
  };

  for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
    let pressedOutside = false;
    dialog.addEventListener("pointerdown", (event) => {
      pressedOutside = outsideDialog(event, dialog);
    });
    dialog.addEventListener("pointerup", (event) => {
      if (pressedOutside && outsideDialog(event, dialog)) {
        dialog.close();
      }
    });
  }
}

// Modal dialog returnValue hygiene
const signupDialog = document.getElementById("signup-dialog");
if (signupDialog) {
  signupDialog.addEventListener("close", () => {
    signupDialog.returnValue = "";
  });
}
