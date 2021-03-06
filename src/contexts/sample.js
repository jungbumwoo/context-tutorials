import React, { Component, createContext } from "react";

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
    state = {
        value: "기본값입니다."
    }

    action = {
        setValue: (value) => {
            this.setState({ value });
        }
    }

    render() {
        const { state, action } = this;
        const value = { state, action };
        return (
            <Provider value= {value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    SampleProvider,
    SampleConsumer,
};