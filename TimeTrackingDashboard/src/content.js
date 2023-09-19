import { createUserReportCard } from "./layout";

export default async function fetchData() {
    const REPORT_FETCH = await fetch('../json/data.json');
    const REPORT_DATA = await REPORT_FETCH.json();
    
    document.querySelectorAll('.user-report-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            
            document.querySelectorAll('.user-report-btn').forEach( btn => btn.classList.remove('active-btn') );
            btn.classList.add('active-btn');

            document.querySelector('.report-cards-subsection').innerHTML = '';

            REPORT_DATA.forEach(item => {
                document.querySelector('.report-cards-subsection').appendChild(
                    createUserReportCard(
                        btn.textContent,

                        item.title,

                        item.timeframes[btn.textContent.toLowerCase()]['current'],

                        btn.dataset.time,

                        item.timeframes[btn.textContent.toLowerCase()]['previous']
                    )
                );
            });
        });
        document.querySelector('.nav-items-container').firstElementChild.nextElementSibling.click(); // -> Default
    });

}