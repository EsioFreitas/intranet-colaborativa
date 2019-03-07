import JuliaPhoto from "../assets/images/perfil3.jpg";
import AnaPhoto from "../assets/images/perfil5.jpg";
import LucasPhoto from "../assets/images/perfil4.jpg";
import ComentarioPhoto from "../assets/images/reuniao.jpg";

const posts = [
  {
    person: {
      name: "Ana Clara",
      photoPerfil: AnaPhoto
    },
    content: "Mais um dia de trabalho muito produtivo",
    photoPost: ComentarioPhoto,
    time: "1h",
    comentarios: [
      {
        nome: "Lucas Amorim",
        comentario: "Foi um grande dia!",
        photoComentario: LucasPhoto
      },
      {
        nome: "Julia Gomes",
        comentario: "Muito feliz por trabalhar com essa equipe!",
        photoComentario: JuliaPhoto
      }
    ]
  }
];

export default posts;
