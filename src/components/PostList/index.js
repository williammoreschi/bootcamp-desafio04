import React, {Component} from 'react';
import './styles.css';
class PostList extends Component{
  render(){
    return(
      <div class="container">
        <section class="post">
          <div class="question">
            <div class="box">
              <img class="maskcircle" src="https://user-images.githubusercontent.com/2512512/75255441-b75ec480-57c0-11ea-932a-ac1b43267c95.jpg" alt="William Moreschi"/>
              <div class="inf">
              <h1>William Moreschi</h1>
              <span>20 Fev 2020</span>
              </div>
            </div>
              <article>
                <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
              </article>
          </div>
          <div class="response">
            <img class="maskcircle" src="https://user-images.githubusercontent.com/2512512/75257406-ac596380-57c3-11ea-98c7-53dd664f0dd7.jpg" alt="Diego Fernandes"/>
            <article>
              <p><strong>Diego Fernandes</strong> A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)</p>
            </article>
          </div>
        </section>
        
        
        <section class="post">
          <div class="question">
            <div class="box">
              <img class="maskcircle" src="https://user-images.githubusercontent.com/2512512/75260433-5d61fd00-57c8-11ea-8179-f4deaa80036f.jpg" alt="Gabriel Lisboa"/>
              <div class="inf">
              <h1>Gabriel Lisboa</h1>
              <span>04 Fev 2020</span>
              </div>
            </div>
              <article>
                <p>Fala galera, beleza?</p>
                <p>Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.</p>
              </article>
          </div>
          <div class="response">
            <img class="maskcircle" src="https://user-images.githubusercontent.com/2512512/75260498-74a0ea80-57c8-11ea-89f4-c87240f54cd3.jpg" alt="Clara Lisboa"/>
            <article>
              <p><strong>Clara Lisboa</strong> Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!</p>
            </article>
          </div>
          <div class="response">
            <img class="maskcircle" src="https://user-images.githubusercontent.com/2512512/75260632-aa45d380-57c8-11ea-89c2-6373ee22b032.jpg" alt="Cézar Toledo"/>
            <article>
              <p><strong>Cézar Toledo</strong> Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!</p>
            </article>
          </div>
        </section>
      </div>
    )
  }
}
export default PostList;