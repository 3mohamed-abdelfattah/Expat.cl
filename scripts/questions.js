document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');
            const isActive = question.getAttribute('data-active') === 'true';

            // Toggle the data-active attribute
            question.setAttribute('data-active', !isActive);

            // Toggle the visibility of the answer
            if (isActive) {
                answer.classList.add('hidden');
                answer.classList.remove('opacity-100');
                answer.classList.add('opacity-0');
                question.classList.remove('bg-custom-blue');
                icon.textContent = '+';
            } else {
                answer.classList.remove('hidden');
                setTimeout(() => {
                    answer.classList.remove('opacity-0');
                    answer.classList.add('opacity-100');
                }, 10);
                question.classList.add('bg-custom-blue');
                icon.textContent = '–';
            }
        });
    });
});