import React, { Component } from 'react'
import { Select } from 'antd';

const Option = Select.Option;
class FirstTab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let periods = [];
        const from = 2017;
        const to = (new Date()).getFullYear();
        console.log(to);
        let arr = [];
        for (let i = from; i <= to; i++) { arr.push(i) }

        return (
            <div>
                <p>First Tab</p>

                <Select  style={{ width: 120 }} >
                    {arr.map((el, index) => (
                        <Option key={'s' + index} value={el}>{el}</Option>
                    ))}

                </Select>
            </div>
        )
    }
}

export default FirstTab