const revealItems = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(item);
});

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

document.querySelectorAll(".text-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const list = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "查看关键词" : "收起关键词";
    list.hidden = isOpen;
  });
});

const filterButtons = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    workCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.type === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const workflowDetail = document.querySelector("[data-workflow-detail]");

document.querySelectorAll(".workflow-step").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".workflow-step").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    workflowDetail.textContent = button.dataset.detail;
  });
});

const copyButton = document.querySelector("[data-copy-phone]");
const copyStatus = document.querySelector("[data-copy-status]");

copyButton?.addEventListener("click", async () => {
  const phone = "15868238392";
  try {
    await navigator.clipboard.writeText(phone);
    copyStatus.textContent = "电话已复制";
  } catch {
    copyStatus.textContent = phone;
  }
});
