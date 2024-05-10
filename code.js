class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}

const carsListElement = document.getElementById('cars-list');
const carForm = document.getElementById('car-form');
const carNameInput = document.getElementById('car-name');
const carModelInput = document.getElementById('car-model');

let cars = [];

function renderCars() {
    carsListElement.innerHTML = '';
    cars.forEach((car, index) => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <h3>${car.name} ${car.model}</h3>
            <button class="edit-button">Изменить</button>
            <button class="delete-button">Удалить</button>
        `;
        carsListElement.appendChild(carElement);

        const editButton = carElement.querySelector('.edit-button');
        const deleteButton = carElement.querySelector('.delete-button');

        editButton.addEventListener('click', () => editCar(index));
        deleteButton.addEventListener('click', () => deleteCar(index));
    });
}

carForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = carNameInput.value.trim();
    const model = carModelInput.value.trim();
    if (name && model) {
        const car = new Car(name, model);
        cars.push(car);
        renderCars();
        carNameInput.value = '';
        carModelInput.value = '';
    }
});

function editCar(index) {
    const name = prompt('Введите новое название автомобиля:', cars[index].name);
    const model = prompt('Введите новую модель автомобиля:', cars[index].model);
    if (name && model) {
        cars[index] = new Car(name, model);
        renderCars();
    }
}

function deleteCar(index) {
    if (confirm('Вы уверены, что хотите удалить этот автомобиль?')) {
        cars.splice(index, 1);
        renderCars();
    }
}

renderCars();