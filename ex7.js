class HelloDate extends HTMLElement {
    connectedCallback() {
        this.show("Guest");
    }

    show(name) {
        const now = new Date();

        this.innerHTML = `
            <h2>Hello, ${name}!</h2>
            <p>Date: ${now.toLocaleDateString()}</p>
            <p>Time: ${now.toLocaleTimeString()}</p>
        `;
    }
}

customElements.define("hello-date", HelloDate);

function showGreeting() {
    const name = document.getElementById("username").value || "Guest";
    document.getElementById("greeting").show(name);
}
