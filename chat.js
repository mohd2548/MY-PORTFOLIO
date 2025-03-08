document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded");

    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
        project.addEventListener("click", function () {
            alert(`You clicked on ${this.querySelector("h3").innerText}`);
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#111";
    toggleButton.style.borderRadius = "18px";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Add dark mode styles dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #121212;
            color: #ffffff;
        }
        .dark-mode section {
            background-color: #1e1e1e;
            color: #ffffff;
        }
        .dark-mode a {
            color: #4da6ff;
        }
        .dark-mode .project {
            background-color: #2a2a2a;
            border-left-color: #4da6ff;
        }
        .dark-mode .project a{
            color: rgb(253, 254, 255);;
        }
        .dark-mode ul li {
            background-color: #2a2a2a;
        }
    `;
    document.head.appendChild(style);


});
