// Função para abrir o modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    // Lista de IDs dos seus modais
    const modalIds = ['mamae-a-bordo-modal', 'smartflow-modal']; 
    
    modalIds.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}