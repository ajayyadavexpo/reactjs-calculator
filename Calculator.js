import React from 'react';
import Button from './Button.js';
import OutputScreenRow from './outputScreenRow.js';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.total = 0;
        this.state = {
            inputnumber:''
        }
        this.getClick = this.getClick.bind(this);
    }
    
    getClick(e){
        e.preventDefault();
        var key = e.target.value;
        if (this.state.inputnumber !== '' && key === '=') {
            try {
                this.setState({ inputnumber: this.parse(this.state.inputnumber) });
            } catch (error) {
                console.log(error);
            }
        }else if(key === 'AC'){
            this.setState({ inputnumber: '' });
        }
        else{
            this.setState({ inputnumber: this.state.inputnumber + key }); 
        }
    }
    parse(str) {
        return Function(`'use strict'; return (${str})`)()
    }
    render(){
        return(
            <div className="container">
                 <div className="screen-layout P-4">

                        {this.state.inputnumber === '' ? <OutputScreenRow value="0" /> : <OutputScreenRow value={this.state.inputnumber} /> }
                        <Button label="AC" className="zero" getClick={this.getClick}/>
                        <Button label="%" getClick={this.getClick}/>
                        <Button label="/" getClick={this.getClick} className="orange"/>
                        <Button label="7" getClick={this.getClick}/>
                        <Button label="8" getClick={this.getClick}/>
                        <Button label="9" getClick={this.getClick}/>
                        <Button label="*" getClick={this.getClick} className="orange"/>
                        <Button label="4" getClick={this.getClick}/>
                        <Button label="5" getClick={this.getClick}/>
                        <Button label="6" getClick={this.getClick}/>
                        <Button label="-" getClick={this.getClick} className="orange"/>
                        <Button label="1" getClick={this.getClick}/>
                        <Button label="2" getClick={this.getClick}/>
                        <Button label="3" getClick={this.getClick}/>
                        <Button label="+" getClick={this.getClick} className="orange"/>
                        <Button label="0" className="zero" getClick={this.getClick}/>
                        <Button label="." getClick={this.getClick}/>
                        <Button label="=" getClick={this.getClick} className="orange"/>
                </div>
            </div>
        )
    }
}

export default Calculator;