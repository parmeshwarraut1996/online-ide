import React, { Component } from 'react';
import { Input, Menu, Select, Icon, Button } from 'antd'
const { TextArea } = Input;
const { Option } = Select;
const languages = ['c', 'c++', 'java', 'python', 'c#']
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondCity: [],
            selectedOption:''
        }
    }

    handleCut = (event) => {
        event.preventDefault();
    }
    handleCopy = (event) => {
        event.preventDefault()
    }
    handlePaste = (event) => {
        event.preventDefault();
    }
    handleDrag = (event) => {
        event.preventDefault();
    }
    handleDrop = (event) => {
        event.preventDefault();
    }
    handleSelect = (event) => {
        event.preventDefault();

    }
    onChange(value) {
        console.log(`selected ${value}`);
    }



    onFocus() {
        console.log('focus');
    }

    onSearch(val) {
        console.log('search:', val);
    }
    handleOptionChange=(event)=>{
        console.log("event ",event.target.value);
        this.setState({
            selectedOption:event.target.value
        })
    }


    render() {
        return (
            <div className="dashboard-container">
                <div className="appbar">
                    <div className="logo-div">
                        <img id="logo" src={require('../assets/BridgeLabz New Logo.svg')} />

                    </div>
                    <span className="title">online-ide</span>
                </div>

                <div className="text-area-div">
                    <span className="input-output-title">Code</span>
                    <TextArea id='text' onSelect={(event) => this.handleSelect(event)} onPaste={(event) => this.handlePaste(event)} onCopy={(event) => this.handleCopy(event)}
                        onCut={(event) => this.handleCut(event)} onDrag={(event) => this.handleDrag(event)} onDrop={(event) => this.handleDrop(event)}>
                    </TextArea>
                    <span className="input-output-title">Output</span>
                    <div>
                        <TextArea id='text'>
                        </TextArea>
                    </div>
                    <div className="compiler-div">
                        <span>Language : </span>
                        <select className="select"
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                            <option value="jack">C</option>
                            <option value="lucy">C++</option>
                            <option value="tom">Java</option>
                            <option value="tom">Python</option>

                        </select>
                        <div className="radio-group">
                            <span>Compile with input</span>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="yes"
                                        checked={this.state.selectedOption === 'yes'}
                                        onChange={this.handleOptionChange} />
                                    Yes                                
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="no"
                                        checked={this.state.selectedOption === 'no'}
                                        onChange={this.handleOptionChange} />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="submit-div">
                        <button id="submit">Submit</button>
                    </div>
                   
                </div>
            </div>

        )
    }
}

export default Dashboard
