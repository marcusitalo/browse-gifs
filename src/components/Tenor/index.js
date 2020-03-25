import React, { Fragment } from 'react';
import CardGif from '../CardGif';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Row  } from 'reactstrap';
import '../../assets/css/flip-card.css'

class Tenor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        word : "",
        gifs: []
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const myValue = event.target.value;
        console.log(myValue);
        this.setState({
            word: myValue
        })
        this.componentDidMount();
      }
  
    componentDidMount() {
      fetch("https://api.tenor.com/v1/search?q="+this.state.word)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              gifs: result.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, gifs } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <Fragment>
                <InputGroup size="sm">
                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                    <Input onChange={this.handleChange}/>
                </InputGroup>
                <Row>
                    {gifs.map((gif, index) => (
                    <CardGif key={index} url={gif.media[0].tinygif.url}/>
                    ))}
                </Row>  
            </Fragment>          
        );
      }
    }
  }

  
export default Tenor;