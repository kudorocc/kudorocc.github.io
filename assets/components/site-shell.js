const headerTemplate = /* html */ `
  <header class="page-header">
    <a href="/">
      <img
        class="kudoro-logo"
        src="/assets/images/kudoro-title.svg"
        alt="Kudoro"
      />
    </a>
  </header>
`;

const footerTemplate = /* html */ `
  <footer>
    <div class="socials">
      <a href="https://instagram.com/kudoro.cc" target="_blank" rel="noopener">
        <img src="/assets/icons/instagram.svg" alt="instagram" />
      </a>
      <a href="https://tiktok.com/@kudoro.cc" target="_blank" rel="noopener">
        <img src="/assets/icons/tiktok.svg" alt="tiktok" />
      </a>
      <a href="https://youtube.com/@kudoro-cc" target="_blank" rel="noopener">
        <img src="/assets/icons/youtube.svg" alt="youtube" />
      </a>
    </div>
    <div class="footer-links">
      <a href="mailto:kudoro@klippros.com">Contact</a>
      <a href="/impressum.html">Impressum</a>
      <a href="/privacy-policy.html">Privacy Policy</a>
      <a href="/terms-of-service.html">Terms of Service</a>
    </div>
  </footer>
`;

class KudoroHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = headerTemplate;
  }
}

class KudoroFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerTemplate;
  }
}

if (!customElements.get("kudoro-header")) {
  customElements.define("kudoro-header", KudoroHeader);
}
if (!customElements.get("kudoro-footer")) {
  customElements.define("kudoro-footer", KudoroFooter);
}

