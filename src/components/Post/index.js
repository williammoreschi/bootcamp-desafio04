import React, {Component} from 'react';
import './styles.css';
import Response from '../response';
class Post extends Component {
  render(){
    const {data} = this.props;
    return(
    <>
    <section class="post">
        <div class="question">
          <div class="box">
            <img class="maskcircle" src={data.author.avatar} alt={data.author.name}/>
            <div class="inf">
            <h1>{data.author.name}</h1>
            <span>{data.date}</span>
            </div>
          </div>
            <article>
              <p>{data.text}</p>
            </article>
        </div>
        { data.responses.map(response => ( 
            <Response key={response.id} data={response} /> 
          )
        )}
      </section>
    </>
    );
  }
}
export default Post;