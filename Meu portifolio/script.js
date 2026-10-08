
const temaSalvo = localStorage.getItem('tema') || 'escuro';
if (temaSalvo === 'claro') {
  document.body.classList.add('claro');
}


const botaoTema = document.createElement('button');
botaoTema.className = 'botao-tema';
botaoTema.setAttribute('aria-label', 'Trocar tema');

const iconeTema = document.createElement('img');
botaoTema.appendChild(iconeTema);
document.body.appendChild(botaoTema);

// no modo escuro mostra o sol (pra ir pro claro) e vice-versa
function atualizarIcone() {
  const claro = document.body.classList.contains('claro');
  iconeTema.src = claro ? 'lua.png' : 'sol.png';
  iconeTema.alt = claro ? 'Ativar modo escuro' : 'Ativar modo claro';
}
atualizarIcone();

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('claro');
  const claro = document.body.classList.contains('claro');
  localStorage.setItem('tema', claro ? 'claro' : 'escuro');
  atualizarIcone();
});

const tituloOriginal = document.title;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = 'Volta aqui ;(';
  } else {
    document.title = tituloOriginal;
  }
});