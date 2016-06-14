import React, { Component } from 'react';
import API from '../api';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
  return { links: LinkStore.getAll() };
}

class Main extends Component {
  constructor(props){
    super(props);

    this.state = _getAppState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    API.fetchLinks();
    LinkStore.on("change", this.onChange);
  }

  componentWillUnmount(){
    LinkStore.removeListener("change", this.onChange);
  }

  onChange(){
    this.setState(_getAppState());
  }

  render() {
    let linkContent = this.state.links.map(link => {
      return <li key={link._id}><a href={link.url}>{link.title}</a></li>;
    });

    return (
      <div>
        <h1>Links</h1>
        <ul>
          {linkContent}
        </ul>
      </div>
    );
  }
}

export default Main;
