const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / speed;

    const updateCount = () => {
        const current = +counter.innerText;
        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 15);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCount();
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => startCounting(counter));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.impact'));
