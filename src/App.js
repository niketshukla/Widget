import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: "What's React?",
        content: "React is a front end javascript library"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "We use React by creating components"
    }
]

const options = [
    {
        label: 'Colour Red',
        value: 'red'
    },
    {
        label: 'Colour Green',
        value: 'green'
    },
    {
        label: 'Colour Blue',
        value: 'blue'
    }
]

export default () => {
    const  [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            {/* <Accordion items={items} />
            <Search />
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
            <Translate /> */}
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
};