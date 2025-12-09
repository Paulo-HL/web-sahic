// Configuração do Carrossel
class Carousel {
  constructor() {
    this.currentIndex = 0
    this.images = document.querySelectorAll(".carousel-img")
    this.prevBtn = document.querySelector(".carousel-btn.prev")
    this.nextBtn = document.querySelector(".carousel-btn.next")
    this.dotsContainer = document.querySelector(".carousel-dots")

    this.initDots()
    this.addEventListeners()
    this.autoSlide()
  }

  initDots() {
    this.images.forEach((_, index) => {
      const dot = document.createElement("button")
      dot.classList.add("carousel-dot")
      if (index === 0) dot.classList.add("active")
      dot.addEventListener("click", () => this.goToSlide(index))
      this.dotsContainer.appendChild(dot)
    })
  }

  addEventListeners() {
    this.prevBtn?.addEventListener("click", () => this.prevSlide())
    this.nextBtn?.addEventListener("click", () => this.nextSlide())
  }

  showSlide(index) {
    this.images.forEach((img, i) => {
      img.classList.remove("active")
      if (i === index) img.classList.add("active")
    })

    const dots = document.querySelectorAll(".carousel-dot")
    dots.forEach((dot, i) => {
      dot.classList.remove("active")
      if (i === index) dot.classList.add("active")
    })
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length
    this.showSlide(this.currentIndex)
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    this.showSlide(this.currentIndex)
  }

  goToSlide(index) {
    this.currentIndex = index
    this.showSlide(this.currentIndex)
  }

  autoSlide() {
    setInterval(() => this.nextSlide(), 5000)
  }
}

// Menu Mobile
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector(".menu-toggle")
    this.nav = document.querySelector(".nav")
    this.init()
  }

  init() {
    this.toggle?.addEventListener("click", () => this.toggleMenu())
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => this.closeMenu())
    })
  }

  toggleMenu() {
    this.nav?.classList.toggle("active")
  }

  closeMenu() {
    this.nav?.classList.remove("active")
  }
}

// Formulário de Contato
class ContactForm {
  constructor() {
    this.form = document.querySelector(".contato-form")
    this.init()
  }

  init() {
    this.form?.addEventListener("submit", (e) => this.handleSubmit(e))
  }

  handleSubmit(e) {
    e.preventDefault()

    const data = {
      nome: this.form.querySelector('input[type="text"]').value,
      email: this.form.querySelector('input[type="email"]').value,
      mensagem: this.form.querySelector("textarea").value,
    }

    console.log("[v0] Dados do formulário:", data)
    alert("Obrigado! Em breve entraremos em contato.")
    this.form.reset()
  }
}

// Scroll Suave
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
}

// Animação ao Scroll
class ScrollAnimation {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        }),
      { threshold: 0.1 },
    )

    this.init()
  }

  init() {
    document.querySelectorAll(".servico-card, .projeto-card").forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "all 0.6s ease-out"
      this.observer.observe(el)
    })
  }
}

// Configuração do Banner
let bannerCurrentSlide = 0 // Renamed currentSlide to bannerCurrentSlide
const slides = document.querySelectorAll(".banner-slide")
const dots = document.querySelectorAll(".dot")

function bannerAutoSlide() {
  // Renamed autoSlide to bannerAutoSlide
  bannerCurrentSlide = (bannerCurrentSlide + 1) % slides.length
  bannerUpdateSlide()
}

setInterval(bannerAutoSlide, 5000) // Updated setInterval to use bannerAutoSlide

function bannerChangeSlide(n) {
  // Renamed changeSlide to bannerChangeSlide
  bannerCurrentSlide = (bannerCurrentSlide + n + slides.length) % slides.length
  bannerUpdateSlide()
}

function bannerSetCurrentSlide(n) {
  // Renamed currentSlide to bannerSetCurrentSlide
  bannerCurrentSlide = n
  bannerUpdateSlide()
}

function bannerUpdateSlide() {
  // Renamed updateSlide to bannerUpdateSlide
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === bannerCurrentSlide)
  })
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === bannerCurrentSlide)
  })
}

function filterProjects(categoria) {
  const cards = document.querySelectorAll(".projeto-card")
  const buttons = document.querySelectorAll(".filtro-btn")

  buttons.forEach((btn) => {
    btn.classList.remove("ativo")
  })

  if (event && event.target) {
    event.target.classList.add("ativo")
  }

  cards.forEach((card) => {
    if (categoria === "all" || card.dataset.categoria === categoria) {
      card.classList.remove("hidden")
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "scale(1)"
      }, 10)
    } else {
      card.classList.add("hidden")
    }
  })
}

window.addEventListener("scroll", () => {
  document.querySelector(".nav")?.classList.remove("active")
})

// Inicializar tudo quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  new Carousel()
  new MobileMenu()
  new ContactForm()
  new ScrollAnimation()
  smoothScroll()

  console.log("[v0] ✨ Website Sahic carregado com sucesso!")
})
function changeSlide(slideIndex) {
    // lógica para mudar o slide
    console.log("Mudando para o slide:", slideIndex);
}
document.getElementById("btnNext").addEventListener("click", function() {
    changeSlide(1);
});
document.getElementById("btnPrev").addEventListener("click", function() {
    changeSlide(-1);
});
