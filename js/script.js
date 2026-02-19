//----------------------------------------SETA----------------------------------------
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

let lastX = null;
let lastY = null;
let particles = [];

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (lastX === null) {
        lastX = x;
        lastY = y;
        return;
    }

    const dx = x - lastX;
    const dy = y - lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const steps = Math.max(1, Math.floor(dist / 1));

    for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const px = lastX + dx * t;
        const py = lastY + dy * t;

        particles.push({
            x: px - 1,
            y: py,
            size: 5,
            color: "cyan",
            alpha: 0.5
        });

        particles.push({
            x: px + 1,
            y: py,
            size: 5,
            color: "violet",
            alpha: 0.5
        });
    }

    lastX = x;
    lastY = y;
});

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, index) => {
        p.alpha -= 0.015;

        if (p.alpha <= 0) {
            particles.splice(index, 1);
            return;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
}

animate();


//----------------------------------------SELEÇÃO DE ELEMENTOS----------------------------------------
const ftp = document.getElementById("ftp");
const bti = document.querySelector(".ti");
const logo = document.querySelector(".logo");
const barra = document.querySelector(".barra");
const tmet = document.getElementById("tmet");
const bmet = document.querySelector(".met");
const tti = document.getElementById("tti");
const texto = document.getElementById("texto");
const opmenu = document.getElementById("opmenu");
const gh = document.querySelector(".gh");
const list = document.querySelector(".container-projetos");
const menu = document.getElementById("menu");
const bTema = document.querySelector('.tema');
const bIdioma = document.querySelector('.idioma');
const ngh = document.querySelector('.ghi');
const temaSalvo = localStorage.getItem('tema');
const itensProjeto = document.querySelectorAll(".item-projeto");
const previewBox = document.getElementById("preview-projeto");
const descPreview1 = document.getElementById("desc-preview1");
const descPreview2 = document.getElementById("desc-preview2");
const imgPreview = document.getElementById("img-preview");

//----------------------------------------TEMA----------------------------------------

if (temaSalvo === 'claro') {
    document.body.classList.add('ntema');
    if (bTema) bTema.src = 'imagens/lua.png';
    if (bIdioma) bIdioma.src = 'imagens/idiomap.png';
    if (ngh) ngh.src = 'imagens/ghb.png';
}

if (bTema) {
    bTema.addEventListener('click', () => {
        document.body.classList.toggle('ntema');

        if (document.body.classList.contains('ntema')) {
            localStorage.setItem('tema', 'claro');
            if (bTema) bTema.src = 'imagens/lua.png';
            if (bIdioma) bIdioma.src = 'imagens/idiomap.png';
            if (ngh) ngh.src = 'imagens/ghb.png';
        } else {
            localStorage.setItem('tema', 'escuro');
            if (bTema) bTema.src = 'imagens/sol.png';
            if (bIdioma) bIdioma.src = 'imagens/idiomab.png';
            if (ngh) ngh.src = 'imagens/ghp.png';
        }
    });
}
//----------------------------------------MENU----------------------------------------

if (menu) {
    menu.addEventListener("click", () => {
        menu.classList.toggle("ativo");

        if (menu.classList.contains('ativo')) {
            if (texto) texto.classList.add("esconder");
            if (opmenu) opmenu.classList.add("aparecer");
            if (ftp) ftp.classList.add("esconder");
            if (bti) bti.classList.add("esconder");
            if (bmet) bmet.classList.add("esconder");
            if (gh) gh.classList.add("esconder");
            if (list) list.classList.add("esconder");
            if (tmet) tmet.classList.remove("aparecer");
            if (gh) gh.style.opacity = ""
            if (tti) tti.classList.remove("aparecer");
            if (barra) barra.classList.remove("alt1");
            if (barra) barra.classList.remove("alt2");
            if (logo) logo.classList.remove("arrastar");
            if (bmet) bmet.classList.remove("alterar");
            if (bti) bti.classList.remove("alterar");
            if (texto) texto.classList.remove("arrastar");
            if (bti) bti.innerText = "TI";
            if (bmet) bmet.innerText = "Metrologia";
        } else {
            if (texto) texto.classList.remove("esconder");
            if (opmenu) opmenu.classList.remove("aparecer");
            if (ftp) ftp.classList.remove("esconder");
            if (bti) bti.classList.remove("esconder");
            if (bmet) bmet.classList.remove("esconder");
            if (gh) gh.classList.remove("esconder");
            if (list) list.classList.remove("esconder");
        }
    });
}

//----------------------------------------Metrologia----------------------------------------
if (bmet) {
    bmet.addEventListener("click", () => {
        bmet.classList.toggle("bma");

        if (bmet.classList.contains('bma')) {
            if (ftp) ftp.classList.add("esconder");
            if (bti) bti.classList.add("esconder");
            if (texto) texto.classList.add("arrastar");
            if (logo) logo.classList.add("arrastar");
            if (barra) barra.classList.add("alt1");
            if (tmet) tmet.classList.add("aparecer");
            if (bmet) bmet.classList.add("alterar");
            if (bmet) bmet.innerText = "X";
        } else {
            if (ftp) ftp.classList.remove("esconder");
            if (bti) bti.classList.remove("esconder");
            if (texto) texto.classList.remove("arrastar");
            if (logo) logo.classList.remove("arrastar");
            if (barra) barra.classList.remove("alt1");
            if (tmet) tmet.classList.remove("aparecer");
            if (bmet) bmet.classList.remove("alterar");
            if (bmet) bmet.innerText = "Metrologia";
        }
    })
}
//----------------------------------------TI----------------------------------------
if (bti) {
    bti.addEventListener("click", () => {
        bti.classList.toggle("bta");

        if (bti.classList.contains('bta')) {
            if (ftp) ftp.classList.add("esconder");
            if (bmet) bmet.classList.add("esconder");
            if (texto) texto.classList.add("arrastar");
            if (logo) logo.classList.add("arrastar");
            if (barra) barra.classList.add("alt2");
            if (tti) tti.classList.add("aparecer");
            if (bti) bti.classList.add("alterar");
            if (bti) bti.innerText = "X";
        } else {
            if (ftp) ftp.classList.remove("esconder");
            if (bmet) bmet.classList.remove("esconder");
            if (texto) texto.classList.remove("arrastar");
            if (logo) logo.classList.remove("arrastar");
            if (barra) barra.classList.remove("alt2");
            if (tti) tti.classList.remove("aparecer");
            if (bti) bti.classList.remove("alterar");
            if (bti) bti.innerText = "TI";
        }
    })
}

//----------------------------------------PREVIEW PROJETOS----------------------------------------

if (itensProjeto.length > 0 && previewBox) {
    itensProjeto.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (!menu.classList.contains("ativo")) {
                const info1 = item.getAttribute("data-info1");
                const info2 = item.getAttribute("data-info2");
                const imagem = item.getAttribute("data-img");

                if (descPreview1) descPreview1.innerText = info1;
                if (descPreview2) descPreview2.innerText = info2;

                if (imgPreview && imagem) {
                    imgPreview.src = imagem;
                    imgPreview.style.display = "block";
                } else if (imgPreview) {
                    imgPreview.style.display = "none";
                }

                previewBox.classList.add("visivel");

                if (gh) {
                    gh.style.opacity = "0";
                    gh.style.pointerEvents = "none";
                }
            }
        });

        item.addEventListener("mouseleave", () => {
            previewBox.classList.remove("visivel");

            if (gh && !menu.classList.contains("ativo")) {
                gh.style.opacity = "1";
                gh.style.pointerEvents = "auto";
            } else if (gh && menu.classList.contains("ativo")) {
                gh.style.opacity = "";
                gh.style.pointerEvents = "";
            }
        });
    });
}