function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const savedUser = localStorage.getItem(`user_${username}`);

    if (savedUser && JSON.parse(savedUser).password === password) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "menu.html";
    } else {
      alert("Hatalı kullanıcı adı veya şifre!");
    }
  }

  function register() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      if (localStorage.getItem(`user_${username}`)) {
        alert("Bu kullanıcı adı zaten alınmış.");
      } else {
        localStorage.setItem(`user_${username}`, JSON.stringify({ password }));
        alert("Kayıt başarılı! Artık giriş yapabilirsiniz.");
      }
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  }

  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  });