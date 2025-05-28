(async () => {
    const response = await fetch("https://www.amazon.com");
    const text = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const links = new Set();
    doc.querySelectorAll("a").forEach(anchor => {
        if (anchor.href) {
            links.add(anchor.href);
        }
    });

    console.log([...links]);
})();