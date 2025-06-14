// Confirmação de agendamento
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  document.getElementById('msg-confirmacao').style.color = '#c9a14a';
  document.getElementById('msg-confirmacao').textContent =
    `Obrigado, ${nome}! Seu agendamento para "${servico}" em ${data.replace('T', ' às ')} foi recebido.`;
  this.reset();
  setTimeout(() => { document.getElementById('msg-confirmacao').textContent = ''; }, 7000);
});

// Avaliação com estrelas
document.getElementById('form-avaliacao').addEventListener('submit', function(e) {
  e.preventDefault();
  const nota = document.querySelector('input[name="nota"]:checked');
  const comentario = document.getElementById('comentario').value;
  if (!nota) {
    document.getElementById('msg-avaliacao').style.color = 'red';
    document.getElementById('msg-avaliacao').textContent = 'Por favor, selecione uma nota.';
    return;
  }
  document.getElementById('msg-avaliacao').style.color = '#c9a14a';
  document.getElementById('msg-avaliacao').textContent =
    `Obrigado pela avaliação (${nota.value} estrelas)!`;
  this.reset();
  setTimeout(() => { document.getElementById('msg-avaliacao').textContent = ''; }, 7000);
});

// Botão voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.onscroll = function() {
  btnTopo.style.display = (window.scrollY > 300) ? 'block' : 'none';
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