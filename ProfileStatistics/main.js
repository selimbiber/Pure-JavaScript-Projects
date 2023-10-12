const STATS_COUNTS = document.querySelectorAll('.stats-count');
STATS_COUNTS.forEach(statsCount => {
    statsCount.textContent = 0;
    incrementCounter();
    function incrementCounter() {
        let currentNumber =+ statsCount.textContent;
        const STATS_COUNT = statsCount.getAttribute('data-stats-count');
        const COUNT_INCREMENT = STATS_COUNT / 9;
        currentNumber = Math.ceil(currentNumber + COUNT_INCREMENT);

        if (currentNumber < STATS_COUNT) {
            statsCount.textContent = currentNumber;
            setTimeout(incrementCounter, 90);
        } else {
            statsCount.textContent = STATS_COUNT;
        }
    }
})