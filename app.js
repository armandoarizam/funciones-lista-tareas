let chalk;
try {
    chalk = require('chalk');
} catch (err) {
    console.error('Error al cargar chalk:', err);
}

const readline = require('readline-sync');

let tasks = [];

function addTask() {
    const indicator = readline.question('Ingrese el indicador de la tarea: ');
    const description = readline.question('Ingrese la descripción de la tarea: ');
    tasks.push({ indicator, description, completed: false });
    console.log('Tarea añadida correctamente.');
}

function deleteTask() {
    const index = readline.questionInt('Ingrese el índice de la tarea a eliminar: ');
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('Tarea eliminada correctamente.');
    } else {
        console.log('Índice de tarea no válido.');
    }
}

function completeTask() {
    const index = readline.questionInt('Ingrese el índice de la tarea completada: ');
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log('Tarea marcada como completada.');
    } else {
        console.log('Índice de tarea no válido.');
    }
}

function showTasks() {
    console.log(chalk.green('Tareas completadas:'));
    tasks.filter(task => task.completed).forEach((task, index) => {
        console.log(chalk.green(`${index + 1}. ${task.indicator} - ${task.description}`));
    });

    console.log(chalk.red('Tareas pendientes:'));
    tasks.filter(task => !task.completed).forEach((task, index) => {
        console.log(chalk.red(`${index + 1}. ${task.indicator} - ${task.description}`));
    });
}

while (true) {
    console.log('\n1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const choice = readline.questionInt('Seleccione una opción: ');

    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            deleteTask();
            break;
        case 3:
            completeTask();
            break;
        case 4:
            showTasks();
            break;
        case 5:
            console.log('Saliendo del programa.');
            process.exit(0);
        default:
            console.log('Opción no válida.');
    }
}
