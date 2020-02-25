import React, {Component} from 'react';
import './styles.css';
import Post from '../Post/';
class PostList extends Component{
  state = {
    posts: [
      {
        id:1,
        author:{
          name: 'William Moreschi',
          avatar: 'https://user-images.githubusercontent.com/2512512/75255441-b75ec480-57c0-11ea-932a-ac1b43267c95.jpg'
        },
        date: '20 Fev 2020',
        text: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        responses:[
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://user-images.githubusercontent.com/2512512/75257406-ac596380-57c3-11ea-98c7-53dd664f0dd7.jpg'
            },
            date: '20 Fev 2020',
            text: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://user-images.githubusercontent.com/2512512/75260433-5d61fd00-57c8-11ea-8179-f4deaa80036f.jpg'
        },
        date: '04 Fev 2020',
        text: 'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        responses: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://user-images.githubusercontent.com/2512512/75260498-74a0ea80-57c8-11ea-89f4-c87240f54cd3.jpg'
            },
            date: '04 Fev 2020',
            text: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://user-images.githubusercontent.com/2512512/75260632-aa45d380-57c8-11ea-89c2-6373ee22b032.jpg'
            },
            date: '04 Fev 2020',
            text: 'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
    ]
  }
  render(){
    return(
      <>
      <div class="container">
        { this.state.posts.map(post => (<Post key={post.id} data={post} />) ) }
      </div>
      </>
    )
  }
}
export default PostList;