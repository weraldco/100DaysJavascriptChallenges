
const showModal = document.getElementById('showModal')
const modalElement = document.getElementById('modalElement')
const closeModal = document.getElementById('closeModal')

showModal.addEventListener('click',()=> {
    modalElement.showModal()
})

closeModal.addEventListener('click',()=>{
    modalElement.close()
})