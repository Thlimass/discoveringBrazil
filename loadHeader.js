// loadHeader.js
document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Inicializa a navbar após o carregamento do header
            class MobileNavbar {
                constructor(mobileMenu, navList, navLinks) {
                    this.mobileMenu = document.querySelector(mobileMenu);
                    this.navList = document.querySelector(navList);
                    this.navLinks = document.querySelectorAll(navLinks);
                    this.activeClass = "active";

                    this.handleClick = this.handleClick.bind(this);
                }

                handleClick() {
                    this.navList.classList.toggle(this.activeClass);
                }

                addClickEvent() {
                    this.mobileMenu.addEventListener("click", this.handleClick);
                }

                init() {
                    if (this.mobileMenu) {
                        this.addClickEvent();
                    }
                    return this;
                }
            }

            const mobileNavbar = new MobileNavbar(
                ".mobile-menu",
                ".nav-list",
                ".nav-list li"
            );
            mobileNavbar.init();

            // Esconde o link para a página inicial quando a página inicial for carregada
            if (document.body.classList.contains('home-page')) {
                const homeLink = document.getElementById('home-link');
                if (homeLink) {
                    homeLink.style.display = 'none';
                    document.querySelector('.nav-list').classList.add('no-home');
                }
            }
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
});
