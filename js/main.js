(function () {
  'use strict';

  var topbar = document.getElementById('topbar');
  addEventListener('scroll', function () {
    topbar.classList.toggle('solid', scrollY > 24);
  }, { passive: true });

  // Mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Reveal on scroll
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Translations
  var T = {
    en: {
      nav_how: "How it works", nav_features: "Features", nav_plans: "Plans", nav_faq: "FAQ", nav_cta: "Start",
      hero_chip: "Personal finance, no fine print",
      hero_h1: "Odin's ring multiplied itself. Yours is still sitting there.",
      hero_lede: "Draupnir puts your money in order: automatic savings, every account in one view and fee alerts before the charge lands. No magic returns promised: Odin does not answer support tickets.",
      hero_cta: "Start free", hero_cta2: "See how it works",
      hero_tr1: "Read-only access", hero_tr2: "Encrypted in transit and at rest", hero_tr3: "Your data is not for sale",
      hero_ph: "Dashboard with pockets and summary",
      prob_h: "You have checked your balance for years and learned nothing new.",
      prob_sub: "Five apps, four banks, zero answers. Your money is everywhere except where you make decisions.",
      p1h: "Fees that appear when you look away", p1p: "Banks always find a way. So can you: know before they charge.",
      p2h: "Savings that last until the next weekend", p2p: "Moving money by hand is a promise you break on a Tuesday without meaning to.",
      p3h: "The full picture does not exist", p3p: "Nobody adds up salary, card, digital wallet and that plan you forgot you had.",
      how_h: "Three steps. None of them magic.",
      how_ph1: "Account connection", how_ph2: "Savings rules", how_ph3: "Weekly summary",
      s1h: "Connect your accounts", s1p: "Read only, encrypted, no transfer access. If anyone promises otherwise, run.",
      s2h: "Set your rules", s2p: "Rounding, percentages, fixed dates. Ten seconds of discipline today save a month of regret.",
      s3h: "Your money organizes itself", s3p: "Pockets, alerts and a weekly summary you read over one coffee. No charts that need a PhD.",
      feat_h: "Four things we actually do. The magic ones, we do not.",
      f1h: "Automatic pockets", f1p: "Separate money for trips, emergencies and that dinner you owe yourself since 2019.",
      f2h: "One single view", f2p: "All your banks on one screen. Yes, even the one you only use for the digital wallet.",
      f3h: "Fee alerts", f3p: "We tell you before the bank tells you with a charge.",
      f4h: "Goal planner", f4p: "You set a number and a date. The rest is discipline, which we cannot code.",
      stats_h: "Product numbers",
      st1: "Accounts connected on average", st2: "To set a rule", st3: "Access to your money", st4: "Returns promised",
      stats_note: "Illustrative numbers for this demo.",
      tst_h: "What people say (in this demo, invented people).",
      q1: "I stopped fighting my bank app. Now I fight my impulses, which is a different fight.",
      q1r: "Designer", q2: "The fee alert saved me from a zombie subscription. I respect it.", q2r: "Developer",
      plans_h: "Pick your social class.",
      plans_sub: "Norse society had three. Traditional banking charges you like the first one while you belong to none.",
      pl1: "For people still paying fees like it is 1998.",
      pl1a: "2 connected accounts", pl1b: "1 savings pocket", pl1c: "Basic alerts",
      pl_badge: "Recommended",
      pl2: "Free man, in theory. With his finances, in practice.",
      pl2a: "Unlimited accounts", pl2b: "Pockets and goals without caps", pl2c: "Real time fee alerts",
      pl3: "For families or teams that share expenses and argue less.",
      pl3a: "Everything in Karl", pl3b: "Up to 5 people", pl3c: "Shared reports",
      pl_cta: "Reserve a spot",
      faq_h: "FAQ",
      fq1: "Do you guarantee returns?", fa1: "No. Doubt anyone who does: they are lying or selling you another product. Draupnir organizes your money, it does not predict the future.",
      fq2: "Is connecting my accounts safe?", fa2: "Access is read only, encrypted in transit and at rest, with no transfer permissions. Your data is never sold or shared with marketing third parties.",
      fq3: "Does it work with any bank?", fa3: "Anywhere there is open banking or transaction export. Banks that hide their API still treat customers like subjects.",
      fq4: "What does it cost?", fa4: "[Price to be defined]. This page is a portfolio demo, not a store.",
      fq5: "What if I want to leave?", fa5: "Your data is exported or deleted, your call, no retention phone calls. Valkyries do not beg.",
      ct_h: "Tell us when you want to start.",
      ct_demo: "Demo site: this form does not send data.",
      ct_email: "Email", ct_cta: "Notify me",
      fin_h: "Odin's ring was fiction. Compound interest is not.",
      fin_p: "Start by getting organized. The rest is called discipline, and that one does not ship with the app.",
      fin_cta: "Start free",
      ft_rights: "All rights reserved.",
      ft_credit1: "Site built by Karen Gil", ft_credit2: "Part of my portfolio",
      ft_demo: "Portfolio demo page. No data is collected or sent."
    }
  };

  var es = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (n) { es[n.dataset.i18n] = n.textContent; });

  var btn = document.getElementById('langBtn');
  btn.addEventListener('click', function () {
    var toEn = document.documentElement.lang !== 'en';
    document.documentElement.lang = toEn ? 'en' : 'es';
    btn.textContent = toEn ? 'ES' : 'EN';
    btn.setAttribute('aria-label', toEn ? 'Volver a español' : 'Switch to English');
    nodes.forEach(function (n) { n.textContent = toEn ? T.en[n.dataset.i18n] : es[n.dataset.i18n]; });
  });
})();
