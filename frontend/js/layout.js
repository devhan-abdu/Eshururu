class CustomHeader extends HTMLElement {
  connectedCallback() {
    fetch("./components/header.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
      })
      .catch((error) => console.error("Error loading header:", error));
  }
}
// /frontend/components/header.html
class CustomFooter extends HTMLElement {
  connectedCallback() {
    fetch("./components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
}

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
