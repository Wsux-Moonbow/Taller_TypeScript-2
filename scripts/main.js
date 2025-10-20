import { series } from './data.js';
function renderSeriesTable() {
    const tbody = document.getElementById('seriesTableContent');
    if (!tbody) {
        console.error('No se encontró el tbody de la tabla');
        return;
    }
    console.log('Series cargadas:', series);
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.platform}</td>
            <td>${serie.seasons}</td>
        `;
        row.addEventListener("click", () => {
            createSerieDetailCard(serie);
        });
        tbody.appendChild(row);
    });
}
function addAverageSeasons() {
    const tfoot = document.getElementById('seriesTableFoot');
    if (!tfoot) {
        console.error('No se encontró el tbody de la tabla');
        return;
    }
    let seasonsAmount = 0;
    let totalSeries = 0;
    for (const serie of series) {
        seasonsAmount += serie.seasons;
        totalSeries++;
    }
    const average = seasonsAmount / totalSeries;
    const avgRow = document.createElement('tr');
    avgRow.innerHTML = `<td colspan="4">Cantidad promedio de temporadas: ${average}</td>`;
    tfoot.appendChild(avgRow);
}
function createSerieDetailCard(serie) {
    let serieCard = document.getElementById("seriesCardDetailContent");
    if (!serieCard) {
        console.error("No se encontró el elemento seriesCardDetailContent");
        return;
    }
    serieCard.innerHTML = `<div class="card">

                            <div class="card-header bg-primary text-white">
                                Detalle de la Serie:
                            </div>
                            <img src="${serie.portraitLink}" alt="${serie.name}">
                            <div class="card-body">
                                <h5 class="card-title">${serie.name}</h5>
                                <p class="card-text">${serie.description}</p>
                                <a href="${serie.serieLink}" "target="_blank">${serie.serieLink}</a>
                            </div>

                        </div>`;
}
document.addEventListener('DOMContentLoaded', renderSeriesTable);
document.addEventListener('DOMContentLoaded', addAverageSeasons);
//# sourceMappingURL=main.js.map