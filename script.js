(function () {
  emailjs.init("PVx2KwSPX2X0TsKVF");
})();

const contactForm = document.getElementById("nn-primary-form");
const statusMessage = document.getElementById("form-status");
const submitBtn = contactForm.querySelector(".nn-submit-btn");

// Save original button HTML
const originalBtnHTML = submitBtn.innerHTML;

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // 🔄 Sending state
  submitBtn.classList.add("loading");
  submitBtn.innerHTML = "Sending...";

  statusMessage.innerHTML = `
    <span style="display:inline-flex;align-items:center;gap:6px;">
      <svg xmlns="http://www.w3.org/2000/svg"
        width="18" height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#dc2626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-10 6L2 7"></path>
      </svg>
      Sending your message...
    </span>
  `;
  statusMessage.className = "nn-form-status sending";
  statusMessage.style.display = "block";

  emailjs.sendForm(
    "service_i7vy0tx",
    "template_ejj4eev",
    this
  ).then(
    function () {
      statusMessage.innerHTML = "✅ Message sent successfully!";
      statusMessage.className = "nn-form-status success";

      submitBtn.classList.remove("loading");
      submitBtn.innerHTML = originalBtnHTML;

      contactForm.reset();
    },
    function (error) {
      statusMessage.innerHTML = "❌ Failed to send message. Please try again.";
      statusMessage.className = "nn-form-status error";

      submitBtn.classList.remove("loading");
      submitBtn.innerHTML = originalBtnHTML;

      console.error("EmailJS Error:", error);
    }
  );
});
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    const menuToggle = document.getElementById('menu-toggle');

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false; // Uncheck checkbox -> menu closes
        });
    });

        document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Enrollment flow coming soon 🚀");
        });
    });

    