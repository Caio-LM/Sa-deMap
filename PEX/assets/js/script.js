import { healthPoints } from './data/healthPoints.js';
import { showResults } from './utils/render.js';
import { filterResults } from './utils/filters.js';

let currentResults = [];
let currentFilter = 'all';

const typeNames = {
    hospital: 'Hospital',
    posto: 'Posto de Saúde',
    farmacia: 'Farmácia',
    clinica: 'Clínica'
};

const typeColors = {
    hospital: '#dc3545',
    posto: '#28a745',
    farmacia: '#007bff',
    clinica: '#6f42c1'
};

function renderHealthPoint(point) {
    return `
        <div class="health-point" data-type="${point.type}">
            <div class="health-point-header">
                <div>
                    <div class="health-point-title">${point.name}</div>
                    <span class="health-point-type" style="background: ${typeColors[point.type]}">${typeNames[point.type]}</span>
                </div>
                <span class="distance">${point.distance} km</span>
            </div>
            <div class="health-point-info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${point.address}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <span>${point.phone}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>${point.hours}</span>
                    <span class="status ${point.status}">${point.status === 'open' ? 'Aberto' : 'Fechado'}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-stethoscope"></i>
                    <span>${point.services.join(', ')}</span>
                </div>
            </div>
            <div class="actions">
                <a href="#" class="btn-small btn-route">
                    <i class="fas fa-route"></i>
                    Como chegar
                </a>
                <a href="#" class="btn-small btn-info">
                    <i class="fas fa-info-circle"></i>
                    Mais informações
                </a>
            </div>
        </div>
    `;
}

function showResults(points, location = "sua localização") {
    currentResults = [...points];
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsTitle = document.getElementById('resultsTitle');
    
    resultsTitle.textContent = `${points.length} pontos de saúde encontrados próximos a ${location}`;
    resultsContainer.innerHTML = points.map(renderHealthPoint).join('');
    resultsSection.style.display = 'block';
    
    // Scroll suave para os resultados
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function filterResults(type) {
    const filteredPoints = type === 'all' ? currentResults : currentResults.filter(point => point.type === type);
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsTitle = document.getElementById('resultsTitle');
    
    const typeLabel = type === 'all' ? 'pontos de saúde' : typeNames[type].toLowerCase() + 's';
    resultsTitle.textContent = `${filteredPoints.length} ${typeLabel} encontrados`;
    resultsContainer.innerHTML = filteredPoints.map(renderHealthPoint).join('');
}

// Event Listeners
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;
    
    if (!location.trim()) {
        alert('Por favor, digite uma localização');
        return;
    }
    
    // Simular busca
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin fa-2x"></i><br><br>Buscando pontos de saúde...</div>';
    document.getElementById('resultsSection').style.display = 'block';
    
    setTimeout(() => {
        currentResults = showResults(healthPoints, location);
    }, 1500);
});

document.getElementById('useLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        const btn = this;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Obtendo localização...';
        btn.disabled = true;
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                btn.innerHTML = '<i class="fas fa-location-arrow"></i> Usar minha localização';
                btn.disabled = false;
                
                // Simular busca com localização atual
                const resultsContainer = document.getElementById('resultsContainer');
                resultsContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin fa-2x"></i><br><br>Buscando pontos de saúde próximos...</div>';
                document.getElementById('resultsSection').style.display = 'block';
                
                setTimeout(() => {
                    currentResults = showResults(healthPoints);
                }, 1500);
            },
            function(error) {
                btn.innerHTML = '<i class="fas fa-location-arrow"></i> Usar minha localização';
                btn.disabled = false;
                alert('Não foi possível obter sua localização. Verifique as permissões do navegador.');
            }
        );
    } else {
        alert('Geolocalização não é suportada pelo seu navegador');
    }
});

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        currentResults = filterResults(currentFilter, currentResults);
    });
});

// Demonstração inicial com João Pessoa
setTimeout(() => {
    document.getElementById('location').value = 'João Pessoa, PB';
    currentResults = showResults(healthPoints, 'João Pessoa, PB');
}, 1000); 