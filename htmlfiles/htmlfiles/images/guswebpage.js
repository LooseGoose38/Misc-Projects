document.addEventListener('DOMContentLoaded', () => {
    const modal= document.getElementById('popup-modal');
    const closeModalButton=document.getElementById('close-modal');

    modal.style.display='flex';

    closeModalButton.addEventListener('click', () => {
        modal.style.display='none';
    });
});