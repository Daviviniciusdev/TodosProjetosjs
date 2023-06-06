let  frases = [
    "tá nas hora de você tomar vergonha na cara e ir trabalhar",
    "Não deixe para amanhã o que pode ser feito hoje.",
    " procrastinação é o ladrão do tempo.",
    "A procrastinação é o inimigo da produtividade.",
    "Não adie o que é importante para você.",
    "A procrastinação é um hábito que pode ser quebrado.",
    "Não deixe que a procrastinação atrapalhe seus objetivos.",
    "A procrastinação é uma escolha, escolha ser produtivo.",
    "Não deixe que a procrastinação roube sua motivação.",
    "A procrastinação é um obstáculo para o sucesso.",
    "Não adie o que pode ser feito agora.",
    "A procrastinação é uma armadilha que pode te prender.",
    "Não deixe que a procrastinação te impeça de alcançar seus sonhos.",
    "A procrastinação é um hábito que pode ser mudado com esforço.",
    "Não adie o que pode ser feito em um curto prazo.",
    "A procrastinação é um desperdício de tempo e energia.",
    "Não deixe que a procrastinação te faça perder oportunidades.",
    "A procrastinação é um hábito que pode ser substituído por ação.",
    "Não adie o que pode ser feito com facilidade.",
    "A procrastinação é um hábito que pode ser superado com disciplina.",
    "Não deixe que a procrastinação te faça perder o foco."]


function exibirFrase(){
    const frase = frases[Math.floor(Math.random() * frases.length)];

    if('Notification' in window){
        if(Notification.permission === 'granted'){
            new Notification ('ANTI-PROCRASTINAÇÃO', {body: frase});
        }else if(Notification.permission !== 'denied'){
            Notification.requestPermission().then(function (permission){
                if(permission === 'granted'){
                    new Notification('ANTI-PROCRASTINAÇÃO', {body:frase})
                }
            });
        }
    }else{
        alert(frase)
    }
}

exibirFrase();

setInterval(()=>{
    exibirFrase();
}, 20 * 60 * 1000 )