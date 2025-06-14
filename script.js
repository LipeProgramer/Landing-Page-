// Agendamento - simulação simples
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const servico = document.getElementById('servico').value;
    const barbeiro = document.getElementById('barbeiro').value;
    const data = document.getElementById('data').value;
    if (nome && whatsapp && servico && barbeiro && data) {
        document.getElementById('msg-confirmacao').textContent =
            `Obrigado, ${nome}! Seu agendamento para ${servico} com ${barbeiro} está confirmado para ${new Date(data).toLocaleString()}.`;
        this.reset();
    } else {
        document.getElementById('msg-confirmacao').textContent = 'Por favor, preencha todos os campos.';
    }
});


document.getElementById('form-avaliacao').addEventListener('submit', function(e) {
    e.preventDefault();
    const nota = document.querySelector('input[name="nota"]:checked');
    const comentario = document.getElementById('comentario').value;
    if (nota) {
        document.getElementById('msg-avaliacao').textContent = 'Obrigado pela sua avaliação!';
        this.reset();
    } else {
        document.getElementById('msg-avaliacao').textContent = 'Por favor, selecione uma nota.';
    }
});

const btnTopo = document.getElementById('btn-topo');
window.onscroll = function() {
    btnTopo.style.display = (window.scrollY > 200) ? 'block' : 'none';
};
btnTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});