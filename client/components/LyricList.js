import React , {Component} from 'react'

class LyricList extends Component {
 constructor(props) {
  super(props)
  this.renderLyrics=this.renderLyrics.bind(this)
 }
 renderLyrics() {
  return this.props.lyrics.map(({id, content}) => {
   return (
    <li key={id} className="collection-item">{content}</li>
   )
  })
 }
 render() {
  return (<ul className="collection">
  {this.renderLyrics()}
  </ul>)
 }
}

export default LyricList;