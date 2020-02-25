import React, {Component} from 'react';
import './styles.css';
class Response extends Component{
  render(){
    const {data} = this.props;
    return(
    <>
      <div class="response" key={data.id} >
      <img class="maskcircle" src={data.author.avatar} alt={data.author.name}/>
      <article>
      <p><strong>{data.author.name}</strong> {data.text}</p>
      </article>
      </div>
    </>
    );
  }
}
export default Response;