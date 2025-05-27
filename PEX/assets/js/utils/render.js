import { typeNames, typeColors } from './constants.js';

export function renderHealthPoint(point) {
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

export function showResults(points, location = "sua localização") {
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