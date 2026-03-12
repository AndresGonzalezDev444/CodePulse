        const misProyectos = [
            {
                id: 1,
                titulo: "Don Karlos - Software",
                descripcion: "Software con panel de administración, inicio por credenciales, base de datos y analíticas en tiempo real.",
                imagenes: ["/images/donkarlos-1.png", "/images/donkarlos-2.png", "/images/donkarlos-3.png"],
                techs: ["fab fa-java", "fas fa-database"],
                link: "#"
            },
            {
                id: 2,
                titulo: "Consultex",
                descripcion: "Aplicación Web con interacción cliente-servidor, con base de datos, autenticación y análisis de datos en tiempo real.",
                imagenes: ["/images/consultex-1.png", "/images/consultex-2.png"],
                techs: ["fab fa-html5", "fab fa-css3", "fab fa-js", "fas fa-database", "fab fa-java"],
                link: "#"
            }
        ];

        const container = document.getElementById('projects-container');
        misProyectos.forEach(p => {
            container.innerHTML += `
                <div class="project-card fade-in">
                    <h3>${p.titulo}</h3>
                    <button class="btn-view" onclick="openModal(${p.id})">Ver Proyecto</button>
                </div>
            `;
        });

        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modal-body');

        function openModal(id) {
            const p = misProyectos.find(item => item.id === id);
            let imgsHTML = p.imagenes.map((img, i) => `<img src="${img}" class="carousel-img ${i === 0 ? 'active' : ''}">`).join('');
            let techsHTML = p.techs.map(t => `<i class="${t}" style="font-size:2rem; margin:10px; color:#8155FF;"></i>`).join('');

            modalBody.innerHTML = `
                <div class="carousel">${imgsHTML}
                    <button class="car-btn car-prev" onclick="moveSlide(-1)">&#10094;</button>
                    <button class="car-btn car-next" onclick="moveSlide(1)">&#10095;</button>
                </div>
                <h2 class="gradient-text">${p.titulo}</h2>
                <p style="margin:20px 0; color:#ccc;">${p.descripcion}</p>
                <div style="margin-bottom:25px;">${techsHTML}</div>
                <a href="${p.link}" target="_blank" class="btn-view" style="text-decoration:none;">Ir al Proyecto</a>
            `;
            modal.style.display = "flex";
        }

        function moveSlide(n) {
            const slides = document.querySelectorAll('.carousel-img');
            let active = Array.from(slides).findIndex(s => s.classList.contains('active'));
            slides[active].classList.remove('active');
            let next = (active + n + slides.length) % slides.length;
            slides[next].classList.add('active');
        }

        document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
        window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href").replace("#", "");

        if (href === currentSection) {
            link.classList.add("active");
        }

    });

});
