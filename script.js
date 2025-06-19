document.getElementById('form-agendamento').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const servico = document.getElementById('servico').value;
  const barbeiro = document.getElementById('barbeiro').value;
  const data = document.getElementById('data').value;
  const whatsapp = document.getElementById('whatsapp').value;


  const dataFormatada = new Date(data).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });


  const mensagem = 
    `Olá! Gostaria de agendar um horário na Barbearia Imperium:%0A` +
    `*Nome:* ${nome}%0A` +
    `*WhatsApp:* ${whatsapp}%0A` +
    `*Serviço:* ${servico}%0A` +
    `*Barbeiro:* ${barbeiro}%0A` +
    `*Data e Hora:* ${dataFormatada}`;


  window.open(`https://wa.me/554430257890?text=${mensagem}`, '_blank');
});


document.getElementById('form-avaliacao').addEventListener('submit', function(e) {
  e.preventDefault();
  const nota = document.querySelector('input[name="nota"]:checked');
  const comentario = document.getElementById('comentario').value.trim();

  if (!nota) {
    document.getElementById('msg-avaliacao').style.color = 'red';
    document.getElementById('msg-avaliacao').textContent = 'Por favor, selecione uma nota.';
    return;
  }

  
  const estrelas = '★'.repeat(Number(nota.value));

  
  const mensagem = 
    `Nova avaliação para Barbearia Imperium:%0A` +
    `*Nota:* ${estrelas}%0A` +
    `*Comentário:* ${comentario ? comentario : 'Sem comentário.'}`;


  
  window.open(`https://wa.me/554430257890?text=${mensagem}`, '_blank');
});


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