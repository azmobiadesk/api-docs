function copyCode(btn) {
    const codeElement = btn.parentElement.querySelector(".code-content");
    const text = codeElement.innerText;

    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 1500);
    });
}

