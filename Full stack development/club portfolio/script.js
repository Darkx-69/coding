function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  
    const toggleBtn = document.getElementById("modeToggle");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }
  
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  