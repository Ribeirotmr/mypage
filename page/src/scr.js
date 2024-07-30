function enviarSugestao(event) {
    event.preventDefault(); 


    const nome = document.getElementById('nome').value;
    const sugestao = document.getElementById('sugestao').value;

    console.log(`Enviando email com nome: ${nome} e sugestão: ${sugestao}`);

    document.getElementById('sugestaoForm').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('homeSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('skills').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('skillsSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projetos').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('projetosSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('contato').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contatoSection').scrollIntoView({ behavior: 'smooth' });
    });
});
