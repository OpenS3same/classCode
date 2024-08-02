//drag and drop

const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")

draggables.forEach((draggables) => {
  draggables.addEventListener("dragstart", () =>{
    draggables.classList.add("dragging");
  });

  draggables.addEventListener("dragend", () => {
    draggables.classList.remove("dragging");
  })
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) =>{
    e.preventDefault(); //명확하게, 깔끔하게 나옴
    const afterElement = getDragAfterElement(container, e.clientX); //마우스 위치
      const draggable = document.querySelector(".dragging");
      if(afterEelement === undefined){
        container.appendChild(draggable)
      }else{
        container.insertBefore(draggable, afterElement)
      }
  })
});

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelector(".draggable:not(.dragging)")
  ];

  return draggableElements.reduce((child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2 ;
    if(offset < 0 && offset > slosest.offset) {
      return {offset: offset, element: child};
    }else {
      return closest;
    }
  }, {offset: Number.NEGATIVE_INFINITY}
)
}

