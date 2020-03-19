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
}