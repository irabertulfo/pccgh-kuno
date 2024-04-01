// Function to show the form modal
function showFormModal() {
    var formModal = document.getElementById('form-modal');
    formModal.style.display = 'block';
}

// Function to hide the form modal
function hideFormModal() {
    var formModal = document.getElementById('form-modal');
    formModal.style.display = 'none';
}

// Function to display patient details in the dialog box
function showDetails(patientName, patientID) {
    var dialogBox = document.getElementById("dialog-box");
    var patientNameElement = document.getElementById("modal-patient-name");
    var patientIDElement = document.getElementById("modal-patient-id");

    patientNameElement.textContent = "Patient Name: " + patientName;
    patientIDElement.textContent = "Patient ID: " + patientID;

    dialogBox.style.display = "block";
}

// Function to hide the dialog box
function hideDetails() {
    var dialogBox = document.getElementById("dialog-box");
    dialogBox.style.display = "none";
}

// JavaScript for draggable patient form modal
var formModal = document.getElementById('form-modal');
var formModalContent = document.querySelector('#form-modal .modal-content');

var isDraggingForm = false;
var formPosX = 0;
var formPosY = 0;

// Function to handle mouse down event for the form modal
function dragFormMouseDown(e) {
    e.preventDefault();
    formPosX = e.clientX;
    formPosY = e.clientY;
    isDraggingForm = true;
    document.addEventListener('mousemove', formElementDrag);
    document.addEventListener('mouseup', closeFormDragElement);
}

// Function to handle dragging for the form modal
function formElementDrag(e) {
    e.preventDefault();
    if (isDraggingForm) {
        var deltaX = formPosX - e.clientX;
        var deltaY = formPosY - e.clientY;
        formPosX = e.clientX;
        formPosY = e.clientY;
        formModal.style.top = (formModal.offsetTop - deltaY) + 'px';
        formModal.style.left = (formModal.offsetLeft - deltaX) + 'px';
    }
}

// Function to handle mouse up event for the form modal
function closeFormDragElement() {
    isDraggingForm = false;
    document.removeEventListener('mousemove', formElementDrag);
    document.removeEventListener('mouseup', closeFormDragElement);
}

// Attach event listener for mouse down event on form modal content
formModalContent.addEventListener('mousedown', dragFormMouseDown);
