import React, { Component } from "react";

class Select extends Component {

    state = {
        value: '',
        label: this.props.label,
        name: this.props.name,
        options: this.props.options,
        error: this.props.error,
        getValue: this.props.getValue // callback when the value is changed
        // handle default value?
    }

    constructor(props) {
        super(props);
    }

    // New props were passed in to indicate there was an error, for a re-render using setState
    // This is an function (event) that's built into React, it runs when new props are received
    componentWillReceiveProps = (props) => {
        // If the props have actually changed
        if (props.error !== this.state.error) {
            this.setState({ error: props.error });
        }
    }

    // When a select value is changed (dropdown)
    handleChange = (event) => {
        this.state.getValue(event.target.value);
        // BETTER TO USE A PROMISE/THEN HERE TO SYNC? (CAN BE LOOKED INTO LATER)
        this.setState({value: event.target.value, error: false});
        // CAN WE JUST ALLOW "CHANGE" TO PROPEGATE? PROBABLY (CAN BE LOOKED INTO LATER)
    }

    render() {
        return (
            <div>
                <label>{this.state.label}
                    <select name={this.state.name} value={this.state.value} onChange={this.handleChange} className={(this.state.error) ? 'error' : undefined}>
                        <option disabled value="">Select an option</option>
                        {this.state.options.map(opt => <option key={opt.key} value={opt.key}>{opt.option}</option>)}
                    </select>
                </label>
            </div>
        );
    }
}

export default Select;
