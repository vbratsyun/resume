const projects = document.querySelectorAll('.sorting-list__item');

const filter= document.querySelector('.sorting-type__select');

const onFilterChange = () => {
    projects.forEach((project) => {
        if(project.dataset.category !== filter.value && filter.value !== 'all') {
            project.classList.add('sorting-list__item--hidden');
        } else {
            project.classList.remove('sorting-list__item--hidden');
        }
    });
}

filter.addEventListener('change', onFilterChange);