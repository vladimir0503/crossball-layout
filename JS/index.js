
const table = document.querySelector('table');
const columnName = document.querySelectorAll('.column-name');
const columnNameMobile = document.querySelectorAll('.column-name-mobile');
const popupBtn = document.querySelector('.statistics__popup-btn');
const popupMenu = document.querySelector('.statistics__popup-menu');

let popupInit = false;

const tableItems = [
    {
        season: 'Сезон 2021/20',
        quantity: 5,
        goal: 5,
        pass: 2,
        ['goal + pass']: 1,
        rating: 89.40
    },
    {
        season: 'Сезон 2021/19',
        quantity: 5,
        goal: 5,
        pass: 2,
        ['goal + pass']: 1,
        rating: 89.40
    },
    {
        season: 'Сезон 2021/18',
        quantity: 5,
        goal: 5,
        pass: 2,
        ['goal + pass']: 1,
        rating: 89.40
    },
    {
        season: 'Сезон 2021/17',
        quantity: 5,
        goal: 5,
        pass: 2,
        ['goal + pass']: 1,
        rating: 89.40
    },
    {
        season: 'Сезон 2021/16',
        quantity: 5,
        goal: 5,
        pass: 2,
        ['goal + pass']: 1,
        rating: 89.40
    }
];

const columnNameAll = [...columnName, ...columnNameMobile];

const createTable = () => {
    const tbody = document.createElement('tbody');

    tableItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td><p>${item.season}</p></td>
        <td><p>${item.quantity}</p></td>
        <td><p>${item.goal}</p></td>
        <td><p>${item.pass}</p></td>
        <td><p>${item['goal + pass']}</p></td>
        <td><p>${item.rating}</p></td>
    `;
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
};

columnNameAll.forEach(i => i.addEventListener('click', () => {
    table.removeChild(document.querySelector('tbody'));
    tableItems.reverse();
    createTable();
}));

createTable();

popupBtn.addEventListener('click', () => {
    if (popupInit) {
        popupInit = false;
        popupMenu.style.display = 'none';
        popupBtn.classList.remove('btnActive');
    } else {
        popupInit = true;
        popupMenu.style.display = 'block';
        popupBtn.classList.add('btnActive');
    };
});