const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: -340,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: 340,
        behavior: 'smooth'
    });
});

// Funcionalidad de la barra de navegación
document.querySelector('.favoritos').addEventListener('click', () => {
    alert('Aquí aparecerán tus hoteles favoritos.');
});

document.querySelector('.idioma').addEventListener('click', (e) => {
    const current = e.target.textContent.trim();
    e.target.textContent = current === 'ES' ? 'EN' : 'ES';
});

document.querySelector('.login').addEventListener('click', () => {
    alert('Redirigiendo a la página de inicio de sesión...');
});

document.querySelector('.menu').addEventListener('click', () => {
    alert('Aquí se mostraría un menú con más opciones.');
});




//fotter

document.getElementById("register").addEventListener("click", () => {
    const email = document.querySelector(".newsletter input").value;
    if (email.trim() === "") {
        alert("Por favor ingresa un correo electrónico válido.");
    } else {
        alert("¡Gracias por suscribirte!");
    }
});

//sección 2
// Datos de precios por ciudad
const cityPrices = {
    cartagena: [
        { month: 'Abril', price: '$ 188.145 - $ 744.535' },
        { month: 'Octubre', price: '$ 226.375 - $ 789.645' },
        { month: 'Mayo', price: '$ 196.720 - $ 686.050' },
        { month: 'Noviembre', price: '$ 206.070 - $ 771.330' },
        { month: 'Junio', price: '$ 196.480 - $ 666.720', highlight: true },
        { month: 'Diciembre', price: '$ 288.880 - $ 1.012.820' },
        { month: 'Julio', price: '$ 192.940 - $ 671.855' },
        { month: 'Enero', price: '$ 311.750 - $ 1.006.715' },
        { month: 'Agosto', price: '$ 196.525 - $ 679.170' },
        { month: 'Febrero', price: '$ 350.705 - $ 995.860' },
        { month: 'Septiembre', price: '$ 202.485 - $ 720.985' },
        { month: 'Marzo', price: '$ 330.065 - $ 1.108.565' }
    ],
    'santa-marta': [
        { month: 'Abril', price: '$ 165.220 - $ 620.340' },
        { month: 'Mayo', price: '$ 178.450 - $ 645.280', highlight: true },
        { month: 'Junio', price: '$ 182.680 - $ 658.920' },
        { month: 'Julio', price: '$ 195.830 - $ 682.540' },
        { month: 'Agosto', price: '$ 188.920 - $ 669.380' },
        { month: 'Septiembre', price: '$ 175.640 - $ 635.720' },
        { month: 'Octubre', price: '$ 198.750 - $ 695.840' },
        { month: 'Noviembre', price: '$ 201.350 - $ 708.960' },
        { month: 'Diciembre', price: '$ 285.470 - $ 998.650' },
        { month: 'Enero', price: '$ 295.680 - $ 1.035.880' },
        { month: 'Febrero', price: '$ 320.550 - $ 1.121.925' },
        { month: 'Marzo', price: '$ 305.840 - $ 1.070.440' }
    ],
    'san-andres': [
        { month: 'Enero', price: '$ 450.000 - $ 1.200.000' },
        { month: 'Febrero', price: '$ 480.000 - $ 1.350.000' },
        { month: 'Marzo', price: '$ 420.000 - $ 1.100.000' },
        { month: 'Abril', price: '$ 380.000 - $ 950.000', highlight: true },
        { month: 'Mayo', price: '$ 390.000 - $ 980.000' },
        { month: 'Junio', price: '$ 410.000 - $ 1.050.000' },
        { month: 'Julio', price: '$ 520.000 - $ 1.450.000' },
        { month: 'Agosto', price: '$ 500.000 - $ 1.380.000' },
        { month: 'Septiembre', price: '$ 400.000 - $ 1.000.000' },
        { month: 'Octubre', price: '$ 415.000 - $ 1.080.000' },
        { month: 'Noviembre', price: '$ 435.000 - $ 1.150.000' },
        { month: 'Diciembre', price: '$ 580.000 - $ 1.650.000' }
    ],
    bogota: [
        { month: 'Enero', price: '$ 120.000 - $ 450.000' },
        { month: 'Febrero', price: '$ 115.000 - $ 420.000' },
        { month: 'Marzo', price: '$ 125.000 - $ 480.000' },
        { month: 'Abril', price: '$ 110.000 - $ 380.000' },
        { month: 'Mayo', price: '$ 95.000 - $ 350.000', highlight: true },
        { month: 'Junio', price: '$ 100.000 - $ 365.000' },
        { month: 'Julio', price: '$ 130.000 - $ 520.000' },
        { month: 'Agosto', price: '$ 125.000 - $ 490.000' },
        { month: 'Septiembre', price: '$ 105.000 - $ 390.000' },
        { month: 'Octubre', price: '$ 115.000 - $ 430.000' },
        { month: 'Noviembre', price: '$ 120.000 - $ 460.000' },
        { month: 'Diciembre', price: '$ 140.000 - $ 580.000' }
    ],
    medellin: [
        { month: 'Enero', price: '$ 135.000 - $ 520.000' },
        { month: 'Febrero', price: '$ 140.000 - $ 550.000' },
        { month: 'Marzo', price: '$ 130.000 - $ 490.000' },
        { month: 'Abril', price: '$ 120.000 - $ 450.000' },
        { month: 'Mayo', price: '$ 110.000 - $ 420.000' },
        { month: 'Junio', price: '$ 115.000 - $ 435.000' },
        { month: 'Julio', price: '$ 145.000 - $ 580.000' },
        { month: 'Agosto', price: '$ 140.000 - $ 560.000' },
        { month: 'Septiembre', price: '$ 105.000 - $ 380.000', highlight: true },
        { month: 'Octubre', price: '$ 125.000 - $ 470.000' },
        { month: 'Noviembre', price: '$ 130.000 - $ 500.000' },
        { month: 'Diciembre', price: '$ 160.000 - $ 650.000' }
    ],
    barranquilla: [
        { month: 'Enero', price: '$ 150.000 - $ 480.000' },
        { month: 'Febrero', price: '$ 180.000 - $ 590.000' },
        { month: 'Marzo', price: '$ 175.000 - $ 570.000' },
        { month: 'Abril', price: '$ 145.000 - $ 450.000' },
        { month: 'Mayo', price: '$ 140.000 - $ 430.000', highlight: true },
        { month: 'Junio', price: '$ 155.000 - $ 480.000' },
        { month: 'Julio', price: '$ 170.000 - $ 550.000' },
        { month: 'Agosto', price: '$ 165.000 - $ 520.000' },
        { month: 'Septiembre', price: '$ 150.000 - $ 470.000' },
        { month: 'Octubre', price: '$ 160.000 - $ 500.000' },
        { month: 'Noviembre', price: '$ 155.000 - $ 485.000' },
        { month: 'Diciembre', price: '$ 195.000 - $ 650.000' }
    ],
    madrid: [
        { month: 'Enero', price: '€ 85 - € 250' },
        { month: 'Febrero', price: '€ 90 - € 270' },
        { month: 'Marzo', price: '€ 95 - € 290' },
        { month: 'Abril', price: '€ 110 - € 320' },
        { month: 'Mayo', price: '€ 120 - € 350' },
        { month: 'Junio', price: '€ 115 - € 340' },
        { month: 'Julio', price: '€ 130 - € 380' },
        { month: 'Agosto', price: '€ 125 - € 365' },
        { month: 'Septiembre', price: '€ 105 - € 310' },
        { month: 'Octubre', price: '€ 100 - € 290' },
        { month: 'Noviembre', price: '€ 80 - € 240', highlight: true },
        { month: 'Diciembre', price: '€ 95 - € 280' }
    ],
    cali: [
        { month: 'Enero', price: '$ 125.000 - $ 420.000' },
        { month: 'Febrero', price: '$ 130.000 - $ 450.000' },
        { month: 'Marzo', price: '$ 120.000 - $ 400.000' },
        { month: 'Abril', price: '$ 115.000 - $ 380.000' },
        { month: 'Mayo', price: '$ 100.000 - $ 350.000', highlight: true },
        { month: 'Junio', price: '$ 110.000 - $ 370.000' },
        { month: 'Julio', price: '$ 135.000 - $ 480.000' },
        { month: 'Agosto', price: '$ 130.000 - $ 460.000' },
        { month: 'Septiembre', price: '$ 105.000 - $ 360.000' },
        { month: 'Octubre', price: '$ 120.000 - $ 390.000' },
        { month: 'Noviembre', price: '$ 125.000 - $ 410.000' },
        { month: 'Diciembre', price: '$ 150.000 - $ 520.000' }
    ],
    bucaramanga: [
        { month: 'Enero', price: '$ 110.000 - $ 380.000' },
        { month: 'Febrero', price: '$ 115.000 - $ 400.000' },
        { month: 'Marzo', price: '$ 105.000 - $ 360.000' },
        { month: 'Abril', price: '$ 100.000 - $ 340.000' },
        { month: 'Mayo', price: '$ 90.000 - $ 320.000', highlight: true },
        { month: 'Junio', price: '$ 95.000 - $ 330.000' },
        { month: 'Julio', price: '$ 120.000 - $ 420.000' },
        { month: 'Agosto', price: '$ 115.000 - $ 400.000' },
        { month: 'Septiembre', price: '$ 100.000 - $ 350.000' },
        { month: 'Octubre', price: '$ 110.000 - $ 370.000' },
        { month: 'Noviembre', price: '$ 105.000 - $ 365.000' },
        { month: 'Diciembre', price: '$ 130.000 - $ 450.000' }
    ],
    pereira: [
        { month: 'Enero', price: '$ 95.000 - $ 320.000' },
        { month: 'Febrero', price: '$ 100.000 - $ 340.000' },
        { month: 'Marzo', price: '$ 90.000 - $ 310.000' },
        { month: 'Abril', price: '$ 85.000 - $ 290.000' },
        { month: 'Mayo', price: '$ 80.000 - $ 270.000', highlight: true },
        { month: 'Junio', price: '$ 85.000 - $ 280.000' },
        { month: 'Julio', price: '$ 105.000 - $ 360.000' },
        { month: 'Agosto', price: '$ 100.000 - $ 340.000' },
        { month: 'Septiembre', price: '$ 85.000 - $ 300.000' },
        { month: 'Octubre', price: '$ 95.000 - $ 320.000' },
        { month: 'Noviembre', price: '$ 90.000 - $ 315.000' },
        { month: 'Diciembre', price: '$ 115.000 - $ 390.000' }
    ],
    manizales: [
        { month: 'Enero', price: '$ 85.000 - $ 290.000' },
        { month: 'Febrero', price: '$ 90.000 - $ 310.000' },
        { month: 'Marzo', price: '$ 80.000 - $ 280.000' },
        { month: 'Abril', price: '$ 75.000 - $ 260.000' },
        { month: 'Mayo', price: '$ 70.000 - $ 240.000', highlight: true },
        { month: 'Junio', price: '$ 75.000 - $ 250.000' },
        { month: 'Julio', price: '$ 95.000 - $ 330.000' },
        { month: 'Agosto', price: '$ 90.000 - $ 315.000' },
        { month: 'Septiembre', price: '$ 75.000 - $ 270.000' },
        { month: 'Octubre', price: '$ 85.000 - $ 290.000' },
        { month: 'Noviembre', price: '$ 80.000 - $ 285.000' },
        { month: 'Diciembre', price: '$ 105.000 - $ 360.000' }
    ],
    armenia: [
        { month: 'Enero', price: '$ 90.000 - $ 310.000' },
        { month: 'Febrero', price: '$ 95.000 - $ 330.000' },
        { month: 'Marzo', price: '$ 85.000 - $ 300.000' },
        { month: 'Abril', price: '$ 80.000 - $ 280.000' },
        { month: 'Mayo', price: '$ 75.000 - $ 260.000', highlight: true },
        { month: 'Junio', price: '$ 80.000 - $ 270.000' },
        { month: 'Julio', price: '$ 100.000 - $ 350.000' },
        { month: 'Agosto', price: '$ 95.000 - $ 335.000' },
        { month: 'Septiembre', price: '$ 80.000 - $ 290.000' },
        { month: 'Octubre', price: '$ 90.000 - $ 310.000' },
        { month: 'Noviembre', price: '$ 85.000 - $ 305.000' },
        { month: 'Diciembre', price: '$ 110.000 - $ 380.000' }
    ],
    ibague: [
        { month: 'Enero', price: '$ 95.000 - $ 330.000' },
        { month: 'Febrero', price: '$ 100.000 - $ 350.000' },
        { month: 'Marzo', price: '$ 90.000 - $ 320.000' },
        { month: 'Abril', price: '$ 85.000 - $ 300.000' },
        { month: 'Mayo', price: '$ 80.000 - $ 280.000', highlight: true },
        { month: 'Junio', price: '$ 85.000 - $ 290.000' },
        { month: 'Julio', price: '$ 105.000 - $ 370.000' },
        { month: 'Agosto', price: '$ 100.000 - $ 355.000' },
        { month: 'Septiembre', price: '$ 85.000 - $ 310.000' },
        { month: 'Octubre', price: '$ 95.000 - $ 330.000' },
        { month: 'Noviembre', price: '$ 90.000 - $ 325.000' },
        { month: 'Diciembre', price: '$ 115.000 - $ 400.000' }
    ],
    pasto: [
        { month: 'Enero', price: '$ 85.000 - $ 280.000' },
        { month: 'Febrero', price: '$ 90.000 - $ 300.000' },
        { month: 'Marzo', price: '$ 80.000 - $ 270.000' },
        { month: 'Abril', price: '$ 75.000 - $ 250.000' },
        { month: 'Mayo', price: '$ 70.000 - $ 230.000', highlight: true },
        { month: 'Junio', price: '$ 75.000 - $ 240.000' },
        { month: 'Julio', price: '$ 95.000 - $ 320.000' },
        { month: 'Agosto', price: '$ 90.000 - $ 305.000' },
        { month: 'Septiembre', price: '$ 75.000 - $ 260.000' },
        { month: 'Octubre', price: '$ 85.000 - $ 280.000' },
        { month: 'Noviembre', price: '$ 80.000 - $ 275.000' },
        { month: 'Diciembre', price: '$ 100.000 - $ 350.000' }
    ],
    neiva: [
        { month: 'Enero', price: '$ 90.000 - $ 320.000' },
        { month: 'Febrero', price: '$ 95.000 - $ 340.000' },
        { month: 'Marzo', price: '$ 85.000 - $ 310.000' },
        { month: 'Abril', price: '$ 80.000 - $ 290.000' },
        { month: 'Mayo', price: '$ 75.000 - $ 270.000', highlight: true },
        { month: 'Junio', price: '$ 80.000 - $ 280.000' },
        { month: 'Julio', price: '$ 100.000 - $ 360.000' },
        { month: 'Agosto', price: '$ 95.000 - $ 345.000' },
        { month: 'Septiembre', price: '$ 80.000 - $ 300.000' },
        { month: 'Octubre', price: '$ 90.000 - $ 320.000' },
        { month: 'Noviembre', price: '$ 85.000 - $ 315.000' },
        { month: 'Diciembre', price: '$ 110.000 - $ 390.000' }
    ],
    villavicencio: [
        { month: 'Enero', price: '$ 100.000 - $ 350.000' },
        { month: 'Febrero', price: '$ 105.000 - $ 370.000' },
        { month: 'Marzo', price: '$ 95.000 - $ 340.000' },
        { month: 'Abril', price: '$ 90.000 - $ 320.000' },
        { month: 'Mayo', price: '$ 85.000 - $ 300.000', highlight: true },
        { month: 'Junio', price: '$ 90.000 - $ 310.000' },
        { month: 'Julio', price: '$ 110.000 - $ 390.000' },
        { month: 'Agosto', price: '$ 105.000 - $ 375.000' },
        { month: 'Septiembre', price: '$ 90.000 - $ 330.000' },
        { month: 'Octubre', price: '$ 100.000 - $ 350.000' },
        { month: 'Noviembre', price: '$ 95.000 - $ 345.000' },
        { month: 'Diciembre', price: '$ 120.000 - $ 420.000' }
    ],
    monteria: [
        { month: 'Enero', price: '$ 110.000 - $ 380.000' },
        { month: 'Febrero', price: '$ 125.000 - $ 430.000' },
        { month: 'Marzo', price: '$ 120.000 - $ 410.000' },
        { month: 'Abril', price: '$ 105.000 - $ 360.000' },
        { month: 'Mayo', price: '$ 95.000 - $ 330.000', highlight: true },
        { month: 'Junio', price: '$ 100.000 - $ 350.000' },
        { month: 'Julio', price: '$ 115.000 - $ 400.000' },
        { month: 'Agosto', price: '$ 110.000 - $ 385.000' },
        { month: 'Septiembre', price: '$ 100.000 - $ 360.000' },
        { month: 'Octubre', price: '$ 110.000 - $ 380.000' },
        { month: 'Noviembre', price: '$ 105.000 - $ 375.000' },
        { month: 'Diciembre', price: '$ 130.000 - $ 450.000' }
    ],
    valledupar: [
        { month: 'Enero', price: '$ 105.000 - $ 370.000' },
        { month: 'Febrero', price: '$ 120.000 - $ 420.000' },
        { month: 'Marzo', price: '$ 115.000 - $ 400.000' },
        { month: 'Abril', price: '$ 100.000 - $ 350.000' },
        { month: 'Mayo', price: '$ 90.000 - $ 320.000', highlight: true },
        { month: 'Junio', price: '$ 95.000 - $ 340.000' },
        { month: 'Julio', price: '$ 110.000 - $ 390.000' },
        { month: 'Agosto', price: '$ 105.000 - $ 375.000' },
        { month: 'Septiembre', price: '$ 95.000 - $ 350.000' },
        { month: 'Octubre', price: '$ 105.000 - $ 370.000' },
        { month: 'Noviembre', price: '$ 100.000 - $ 365.000' },
        { month: 'Diciembre', price: '$ 125.000 - $ 440.000' }
    ],
    sincelejo: [
        { month: 'Enero', price: '$ 95.000 - $ 330.000' },
        { month: 'Febrero', price: '$ 110.000 - $ 380.000' },
        { month: 'Marzo', price: '$ 105.000 - $ 360.000' },
        { month: 'Abril', price: '$ 90.000 - $ 320.000' },
        { month: 'Mayo', price: '$ 80.000 - $ 290.000', highlight: true },
        { month: 'Junio', price: '$ 85.000 - $ 310.000' },
        { month: 'Julio', price: '$ 100.000 - $ 350.000' },
        { month: 'Agosto', price: '$ 95.000 - $ 335.000' },
        { month: 'Septiembre', price: '$ 85.000 - $ 320.000' },
        { month: 'Octubre', price: '$ 95.000 - $ 330.000' },
        { month: 'Noviembre', price: '$ 90.000 - $ 325.000' },
        { month: 'Diciembre', price: '$ 115.000 - $ 390.000' }
    ],
    popayan: [
        { month: 'Enero', price: '$ 80.000 - $ 270.000' },
        { month: 'Febrero', price: '$ 85.000 - $ 290.000' },
        { month: 'Marzo', price: '$ 75.000 - $ 260.000' },
        { month: 'Abril', price: '$ 70.000 - $ 240.000' },
        { month: 'Mayo', price: '$ 65.000 - $ 220.000', highlight: true },
        { month: 'Junio', price: '$ 70.000 - $ 230.000' },
        { month: 'Julio', price: '$ 90.000 - $ 310.000' },
        { month: 'Agosto', price: '$ 85.000 - $ 295.000' },
        { month: 'Septiembre', price: '$ 70.000 - $ 250.000' },
        { month: 'Octubre', price: '$ 80.000 - $ 270.000' },
        { month: 'Noviembre', price: '$ 75.000 - $ 265.000' },
        { month: 'Diciembre', price: '$ 95.000 - $ 330.000' }
    ]
};

// Variables globales
let currentCity = 'cartagena';
let showingAllCities = false;
const initialVisibleCount = 7;

// Elementos del DOM
const cityButtons = document.querySelectorAll('.city-btn');
const priceGrid = document.getElementById('priceGrid');
const toggleButton = document.getElementById('toggleCities');
const arrowIcon = document.getElementById('arrowIcon');
const citiesContainer = document.getElementById('citiesContainer');

// Función para actualizar los precios
function updatePrices(city) {
    const prices = cityPrices[city] || cityPrices.cartagena;

    // Añadir clase de loading
    priceGrid.classList.add('loading');

    setTimeout(() => {
        priceGrid.innerHTML = '';

        prices.forEach((item, index) => {
            const priceItem = document.createElement('div');
            priceItem.className = `price-item ${item.highlight ? 'highlight' : ''}`;
            priceItem.style.animationDelay = `${index * 0.1}s`;
            priceItem.innerHTML = `
                <div class="month">${item.month}</div>
                <div class="price-range">${item.price} <span class="arrow">›</span></div>
            `;

            // Agregar efectos de interacción
            priceItem.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });

            priceItem.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
            });

            priceItem.addEventListener('click', function () {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    // Aquí se podría agregar navegación real
                    console.log(`Navegando a precios de ${item.month} en ${city}`);
                }, 100);
            });

            priceGrid.appendChild(priceItem);
        });

        // Remover clase de loading
        priceGrid.classList.remove('loading');
    }, 200);
}

// Función para mostrar/ocultar ciudades adicionales
function toggleCities() {
    const hiddenCities = document.querySelectorAll('.city-btn.hidden');

    if (!showingAllCities) {
        // Mostrar ciudades ocultas
        hiddenCities.forEach((city, index) => {
            setTimeout(() => {
                city.classList.remove('hidden');
                city.classList.add('showing');
            }, index * 50);
        });

        arrowIcon.textContent = '‹';
        toggleButton.classList.add('expanded');
        showingAllCities = true;
    } else {
        // Ocultar ciudades adicionales
        const visibleCities = document.querySelectorAll('.city-btn.showing');

        visibleCities.forEach((city, index) => {
            setTimeout(() => {
                city.classList.add('hiding');
                setTimeout(() => {
                    city.classList.remove('showing', 'hiding');
                    city.classList.add('hidden');
                }, 300);
            }, index * 30);
        });

        arrowIcon.textContent = '›';
        toggleButton.classList.remove('expanded');
        showingAllCities = false;
    }
}

// Función para cambiar ciudad activa
function setActiveCity(cityButton, cityKey) {
    // Remover clase active de todos los botones
    cityButtons.forEach(btn => btn.classList.remove('active'));

    // Agregar clase active al botón clickeado
    cityButton.classList.add('active');

    // Actualizar ciudad actual
    currentCity = cityKey;

    // Actualizar precios con animación
    updatePrices(currentCity);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar con precios de la ciudad por defecto
    updatePrices(currentCity);

    // Event listeners para botones de ciudad
    cityButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cityKey = this.dataset.city;
            setActiveCity(this, cityKey);
        });
    });

    // Event listener para el botón de toggle
    toggleButton.addEventListener('click', toggleCities);

    // Efecto de parallax sutil
    document.addEventListener('mousemove', function (e) {
        const bookingSection = document.querySelector('.booking-section');
        const rect = bookingSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const moveX = x * 10;
        const moveY = y * 10;

        bookingSection.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Resetear transform cuando el mouse sale del área
    document.querySelector('.booking-section').addEventListener('mouseleave', function () {
        this.style.transform = 'translate(0px, 0px)';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('citySearchInput');
    const noResultsMessage = document.getElementById('noResultsMessage');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        let found = false;

        cityButtons.forEach(button => {
            const cityName = button.textContent.toLowerCase();
            if (cityName.includes(searchTerm)) {
                button.style.display = 'inline-block';
                found = true;
            } else {
                button.style.display = 'none';
            }
        });

        noResultsMessage.style.display = found ? 'none' : 'block';
    });
});
