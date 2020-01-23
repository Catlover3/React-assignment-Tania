import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        
        
        this.initalState = {
            name: "",
            job: "",
        }
        
        this.state = this.initalState
    }
    
    
    handleChange = event => {
        const {name, value} = event.target
        
        this.setState({
            [name]: value,
        })
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render(){
        
        const {name, job} = this.state;

        
        return (
            <form>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />

                  <label for="job">Job</label>
                  <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                    <input type="button" value="Submit" onClick={this.submitForm} />
                </form>                
              );
            }
            
        }//End of class
            
        export default Form