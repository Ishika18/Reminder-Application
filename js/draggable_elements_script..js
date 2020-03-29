// functionality to have andy .draggable class able to dragged and dropped
const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

draggableElements.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
});

droppableElements.forEach(droppable => {
    droppable.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(droppable, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            droppable.appendChild(draggable)
        } else {
            droppable.insertBefore(draggable, afterElement)
        }
    })
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}