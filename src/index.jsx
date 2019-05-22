import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//   return (
//     <div>
//       Hello,
//       Jacob
//     </div>
//   );
// };

class Hello extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick() {
    //we want to change the state!
    this.state.clicked = !this.state.clicked;
    //the ! before the statement just means you change it to the opposite.
  }

  render() {
    //build and return HTML components
    return (<div className={this.state.clicked ? 'clicked' : null}
    onClick={this.handleClick}>
    Hello {this.props.name}
    </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Jacob" />, root);
}
