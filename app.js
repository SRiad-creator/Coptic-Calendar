// ============================================================
// COPTIC ORTHODOX CALENDAR 2026 — RENDERING ENGINE
// ============================================================

/**
 * Calculate the Coptic day for a given Gregorian day in the month.
 * Special handling for September (Mesore → Nesi → Thoout transition).
 */
function getCopticDay(monthData, gregDay) {
    if (monthData.isSeptember) {
        if (gregDay < 6) {
            return { day: 25 + gregDay, month: monthData.copticStart.month };
        } else if (gregDay < 11) {
            return { day: gregDay - 5, month: 'Nesi' };
        } else {
            return { day: gregDay - 10, month: monthData.copticNext };
        }
    }

    const startDay = monthData.copticStart.day;
    const copticDay = ((startDay + gregDay - 2) % 30) + 1;
    const isInFirst = gregDay < monthData.copticTransitionDay;
    const monthName = isInFirst ? monthData.copticStart.month : monthData.copticNext;
    return { day: copticDay, month: monthName };
}

/**
 * Build the sidebar HTML for a given month.
 * Wisdom of the Fathers moved to main footer.
 * Fasting guide removed.
 * Prayer of the Month is now a blank box.
 */
function buildSidebar(monthData) {
    const synaxItems = monthData.synaxarium
        .map(s => `<li>${s}</li>`)
        .join('');

    return `
        <div class="sidebar">
            <div class="sidebar-cross">✝</div>
            <div class="sidebar-section-label">Synaxarium</div>
            <ul class="synaxarium-list">${synaxItems}</ul>

            <div class="sidebar-divider"></div>
            <div class="sidebar-section-label" style="color: var(--text-muted);">Scripture for the Season</div>
            <div class="scripture-text">${monthData.scripture}</div>

            <div class="sidebar-icon">
                <img src="icon_${monthData.month.toLowerCase()}.png" alt="${monthData.month} feast" class="watercolour-cross">
            </div>

            <div class="prayer-month">
                <div class="prayer-month-label">☦ Prayer of the Month</div>
                <div class="prayer-box"></div>
            </div>

            <div class="legend">
                <div class="legend-label">Legend</div>
                <div class="legend-items">
                    <div class="legend-item">
                        <div class="legend-swatch" style="background: rgba(178,34,34,0.15);"></div>
                        <span class="legend-text">Major Feast</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-swatch" style="background: rgba(135,190,230,0.20);"></div>
                        <span class="legend-text">Minor Feast</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-swatch" style="background: rgba(109,40,217,0.12);"></div>
                        <span class="legend-text">Fast Period</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-swatch" style="background: rgba(243,244,246,0.9);"></div>
                        <span class="legend-text">Commemoration</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Build the calendar grid for a given month.
 * Now includes tiny saint icons next to commemoration names.
 * Supports multiple feasts per day with priority-based coloring.
 */
function buildCalendarGrid(monthData) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthToIndex = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11 };
    const mIdx = monthToIndex[monthData.month];

    // Build header row
    let gridHTML = dayNames.map(d =>
        `<div class="day-header">${d}</div>`
    ).join('');

    // Build feast lookup — multiple feasts per day
    const feastMap = {};
    monthData.feasts.forEach(f => {
        if (!feastMap[f.day]) feastMap[f.day] = [];
        feastMap[f.day].push(f);
    });

    // Feast type priority (higher = takes precedence for cell color)
    const typePriority = { 'M': 6, 'f': 5, 'm': 4, 'P': 3, 'e': 2, 'c': 1 };

    // Calculate total cells needed (6 rows × 7 cols = 42)
    const totalCells = 42;

    for (let i = 0; i < totalCells; i++) {
        const dayNum = i - monthData.firstWeekday + 1;

        if (dayNum < 1 || dayNum > monthData.days) {
            gridHTML += `<div class="day-cell empty"></div>`;
            continue;
        }

        const coptic = getCopticDay(monthData, dayNum);
        const feasts = feastMap[dayNum] || [];

        // Determine day of week: 0=Sun, 1=Mon, ... 6=Sat
        const dayOfWeek = (monthData.firstWeekday + dayNum - 1) % 7;
        const isSunday = dayOfWeek === 0;

        // Sunday Gospel reading periods with faint background colors
        // Only applied on Sundays within each liturgical period
        const m = mIdx;
        let liturgicalClass = '';
        let gospelLabel = '';

        if (isSunday) {
            // Coptic week label for ALL Sundays
            const copticWeekNum = Math.ceil(coptic.day / 7);
            const ordinals = ['', '1st', '2nd', '3rd', '4th', '5th'];
            const copticWeekLabel = `${ordinals[copticWeekNum] || copticWeekNum + 'th'} Sunday of ${coptic.month}`;

            // Great Lent Sundays (faint purple) — with Gospel titles
            if ((m === 1 && dayNum >= 16) || (m === 2) || (m === 3 && dayNum <= 11)) {
                liturgicalClass = ' period-lent';
                const lentStart = new Date(2026, 1, 16);
                const thisDay = new Date(2026, m, dayNum);
                const weekNum = Math.ceil((thisDay - lentStart + 1) / (7 * 86400000));
                const lentTitles = [
                    '', 'Treasures in Heaven', 'Temptation', 'Prodigal Son',
                    'Samaritan Woman', 'Paralytic Man', 'Man Born Blind', 'Palm Sunday'
                ];
                const title = lentTitles[weekNum] || '';
                const ordSuffix = ['','st','nd','rd'][weekNum] || 'th';
                const lentLabel = `${weekNum}${ordSuffix} Sunday of Lent`;
                gospelLabel = `<div class="gospel-label">${lentLabel}${title ? ' — ' + title : ''}</div>`;
            }
            // Holy 50 Sundays (faint gold) — with Gospel titles
            else if ((m === 3 && dayNum >= 12) || (m === 4)) {
                liturgicalClass = ' period-holy50';
                const h50Start = new Date(2026, 3, 12);
                const thisDay = new Date(2026, m, dayNum);
                const weekNum = Math.ceil((thisDay - h50Start + 1) / (7 * 86400000));
                const h50Titles = [
                    '', 'Resurrection', 'Thomas Sunday', 'Bread of Life',
                    'Water of Life', 'Light of the World', 'The Way, The Truth, The Life',
                    'Conqueror of the World', 'Pentecost'
                ];
                const title = h50Titles[weekNum] || '';
                const ordSuffix = ['','st','nd','rd'][weekNum] || 'th';
                const h50Label = `${weekNum}${ordSuffix} Sunday of Holy 50`;
                gospelLabel = `<div class="gospel-label">${h50Label}${title ? ' — ' + title : ''}</div>`;
            }
            // Kiahk Sundays (faint green) — with Gospel titles
            else if ((m === 11 && dayNum >= 10) || (m === 0 && dayNum <= 8)) {
                liturgicalClass = ' period-kiahk';
                const kiahkStart = new Date(2025, 11, 10);
                const thisDay = new Date(m === 0 ? 2026 : 2025, m, dayNum);
                const weekNum = Math.ceil((thisDay - kiahkStart + 1) / (7 * 86400000));
                const kiahkTitles = [
                    '', 'Annunciation to Zechariah', 'Annunciation to Mary',
                    'Visitation', 'Birth of John'
                ];
                const title = kiahkTitles[weekNum] || '';
                gospelLabel = `<div class="gospel-label">${title ? title + ' · ' : ''}${copticWeekLabel}</div>`;
            }
            // All other Sundays — just Coptic week label
            else {
                gospelLabel = `<div class="gospel-label">${copticWeekLabel}</div>`;
            }
        }

        // Check if we're in the Holy 50 period
        const inHoly50 = (m === 3 && dayNum >= 12) || (m === 4);

        // Check monthly commemorations
        // Skip 29th for Toba and Meshir; during Holy 50 only show Resurrection
        let monthlyFeast = null;
        const skip29th = coptic.day === 29 && (coptic.month === 'Tobe' || coptic.month === 'Meshir');
        if (dayNum !== monthData.excludeMonthly && MONTHLY_COMMEMORATIONS[coptic.day] && !skip29th) {
            if (coptic.day === 29 && inHoly50) {
                monthlyFeast = { name: 'Resurrection' };
            } else {
                monthlyFeast = MONTHLY_COMMEMORATIONS[coptic.day];
            }
        }

        // Sort feasts by priority (highest first) so feast color wins
        const sorted = [...feasts].sort((a, b) =>
            (typePriority[b.type] || 0) - (typePriority[a.type] || 0)
        );

        // Determine cell class — use highest priority feast type for color
        let cellClass = 'day-cell' + liturgicalClass;
        if (sorted.length > 0) {
            cellClass += ` feast-${sorted[0].type}`;
        } else if (monthlyFeast) {
            cellClass += ' monthly-commem';
        }

        // Coptic month label (show on day 1)
        let copticMonthLabel = '';
        if (coptic.day === 1) {
            copticMonthLabel = `<div class="coptic-month-label">${coptic.month}</div>`;
        }

        // Build feast labels — icon + name at bottom, same format for all days
        let feastLabel = '';
        if (sorted.length > 0) {
            const hasNonSaint = sorted.some(f => f.type !== 'c');
            const display = hasNonSaint ? sorted.filter(f => f.type !== 'c') : sorted;
            feastLabel = display.slice(0, 1).map(f => {
                const saintKey = f.icon || null;
                const iconHTML = saintKey ? `<img src="${saintKey}.png" class="saint-tiny-icon" alt="">` : '';
                return `<div class="feast-label">${iconHTML}${f.name}</div>`;
            }).join('');
        } else if (monthlyFeast) {
            const mIcon = monthlyFeast.icon ? `<img src="${monthlyFeast.icon}.png" class="saint-tiny-icon" alt="">` : '';
            feastLabel = `<div class="feast-label">${mIcon}${monthlyFeast.name}</div>`;
        }

        gridHTML += `
            <div class="${cellClass}">
                <div class="day-number">${dayNum}</div>
                ${copticMonthLabel}
                <div class="coptic-day">${coptic.day}</div>
                ${feastLabel}
                ${gospelLabel}
            </div>
        `;
    }

    return gridHTML;
}


/**
 * Build a complete month page.
 * Wisdom of the Fathers now at the bottom, fasting guide removed.
 */
function buildMonthPage(monthData) {
    const sidebar = buildSidebar(monthData);
    const grid = buildCalendarGrid(monthData);

    return `
        <div class="month-page" data-month="${monthData.month.toLowerCase()}">
            ${sidebar}
            <div class="main-content">
                <div class="month-header-row">
                    <div class="month-header-text">
                        <div class="month-title">${monthData.month}</div>
                        <div class="month-subtitle">Year of Our Lord 2026</div>
                        <div class="month-church">The Orthodox Church of Alexandria</div>
                    </div>
                    <div class="month-cross">
                        <img src="coptic_cross.png" alt="Coptic Cross">
                    </div>
                </div>
                <div class="calendar-grid">
                    ${grid}
                </div>
                <div class="wisdom-footer">
                    <span class="wisdom-quote">"${monthData.quote}"</span>
                    <span class="wisdom-author">— ${monthData.quoteAuthor}</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Remove near-white backgrounds from images using canvas pixel manipulation.
 * Only pushes near-white pixels to pure white — preserves artwork colours.
 * @param {HTMLImageElement} img - The image element to process.
 * @param {number} threshold - RGB threshold (pixels with all channels above this become white). Default 235.
 */
function whitenBackground(img, threshold = 235) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        if (data[i] > threshold && data[i + 1] > threshold && data[i + 2] > threshold) {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
}

/**
 * Render all 12 months.
 */
function renderCalendar() {
    const container = document.getElementById('calendar-container');
    let html = '';
    CALENDAR_DATA.forEach(monthData => {
        html += buildMonthPage(monthData);
    });
    container.innerHTML = html;

    // Process sidebar icons (watercolor on light paper — threshold 235)
    document.querySelectorAll('.watercolour-cross').forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            whitenBackground(img, 235);
        } else {
            img.addEventListener('load', () => whitenBackground(img, 235), { once: true });
        }
    });

    // Process saint icons (photos of physical art with darker paper — threshold 215)
    document.querySelectorAll('.saint-tiny-icon').forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            whitenBackground(img, 215);
        } else {
            img.addEventListener('load', () => whitenBackground(img, 215), { once: true });
        }
    });

    // Process header cross images
    document.querySelectorAll('.month-cross img').forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            whitenBackground(img, 220);
        } else {
            img.addEventListener('load', () => whitenBackground(img, 220), { once: true });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', renderCalendar);
