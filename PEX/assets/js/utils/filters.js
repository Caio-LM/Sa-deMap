import { typeNames } from './constants.js';
import { renderHealthPoint } from './render.js';

export function filterResults(type, currentResults) {
    const filteredPoints = type === 'all' ? currentResults : currentResults.filter(point => point.type === type);
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsTitle = document.getElementById('resultsTitle');
    
    const typeLabel = type === 'all' ? 'pontos de saúde' : typeNames[type].toLowerCase() + 's';
    resultsTitle.textContent = `${filteredPoints.length} ${typeLabel} encontrados`;
    resultsContainer.innerHTML = filteredPoints.map(renderHealthPoint).join('');
    
    return filteredPoints;
} 