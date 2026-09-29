document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("linkForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("videoUrl");
    const url = input.value.trim();

    if (!url) {
      input.focus();
      input.style.border = "1px solid rgba(255, 89, 89, 0.8)";
      input.style.boxShadow = "0 0 0 4px rgba(255, 89, 89, 0.1)";
      return;
    }

    input.style.border = "1px solid rgba(124, 58, 237, 0.38)";
    input.style.boxShadow = "none";

    const button = form.querySelector("button");
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Processing...";

    setTimeout(() => {
      button.textContent = "Clip ready";
      button.style.background = "linear-gradient(135deg, #10b981, #34d399)";
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = "linear-gradient(135deg, var(--primary), #a855f7)";
      }, 1800);
    }, 1000);
  });
});




























































































