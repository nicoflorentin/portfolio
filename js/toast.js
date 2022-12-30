import toast from 'siiimple-toast'

document.getElementById('projects-btn').addEventListener('click', () => {
    toast.message('💻 Projects section is under development but you can check my GitHub clicking in the sidebar 💻', {
        container: 'body',
        class: 'siiimpleToast',
        position: 'bottom|center',
        margin: 15,
        delay: 0,
        duration: 3000,
        style: {
            fontSize: 'var(--font-l)',
            backgroundColor: 'darkred',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            borderRadius: 0,
        }
    });
})