const Variavel = "Treinamento";

switch (Variavel){
    case "aula":
        console.log("Entrou na aula")
        break;

    case "Treinamento":
    case "Video":
        console.log("Entrou no TREINAMENTOR ou video")
        break;
        
    default:
        console.log('Nenhum dos valores acima')
        break; 
    }