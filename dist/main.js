'use strict';

window.onload = function () {
    //React component Slider
    class Slider extends React.Component {
        constructor(props) {
            super(props);
            this.state = { sliderValue: 16 };
            this.handleSlide = this.handleSlide.bind(this);
        }
        handleSlide(event, ui) {
            this.setState({ sliderValue: ui.value });
        }
        componentDidMount() {
            $('#slider').on('slide', this.handleSlide);
        }
        componentWillUnmount() {
            $('#slider').off('slide', this.handleSlide);
        }
        render() {
            return React.createElement(
                'div',
                { id: 'sliderContainer' },
                React.createElement(
                    'div',
                    { id: 'sliderTextContainer' },
                    React.createElement(TextContent, null),
                    React.createElement(ValueContent, { sliderValue: this.state.sliderValue })
                ),
                React.createElement(
                    'div',
                    { id: 'sliderFirst' },
                    React.createElement('div', { id: 'slider' })
                )
            );
        }
    }
    function ValueContent(props) {
        return React.createElement(
            'div',
            { id: 'sliderValue' },
            React.createElement(
                'span',
                { id: 'money' },
                '$',
                props.sliderValue
            ),
            ' ',
            React.createElement(
                'span',
                null,
                '/month'
            )
        );
    }
    function TextContent(props) {
        return React.createElement(
            'div',
            { id: 'text' },
            React.createElement(
                'p',
                props,
                '100K pageviews'
            )
        );
    }
    ReactDOM.render(React.createElement(Slider, null), document.getElementById('reactSlider'));

    //settings jQuery
    $('#slider').slider({
        min: 0,
        max: 32,
        value: 15,
        range: "min",
        animate: "fast"
    });

    //React Text & Button component

    class Text_Button extends React.Component {
        render() {
            let url = 'images/icon-check.svg';
            let text = ["Unlimited websites", "100% data ownership", "Email reports"];
            return React.createElement(
                'div',
                { id: 'flex_text_button' },
                text.map(v => {
                    return React.createElement(Text, { src: url, text: v });
                })
            );
        }
    }
    function Text(props) {
        return React.createElement(
            'div',
            null,
            React.createElement('img', { src: props.src }),
            React.createElement(
                'span',
                null,
                props.text
            )
        );
    }
    ReactDOM.render(React.createElement(Text_Button, null), document.getElementById('text_button'));
    //React switcher and text component
    function Switcher(props) {
        return React.createElement(
            'div',
            { className: 'switch-container' },
            React.createElement('input', { type: 'checkbox', id: 'switch' }),
            React.createElement('div', { className: 'switch-color' }),
            React.createElement(
                'label',
                { htmlFor: 'switch' },
                React.createElement('i', { className: 'switch-off' }),
                React.createElement('i', { className: 'switch-on' })
            )
        );
    }
    class Switcher_Text extends React.Component {
        render() {
            let arr = ['Monthly Beeling', React.createElement(Switcher, null), 'Yearly Beeling', '25% discount'];
            return React.createElement(
                'div',
                { id: 'switcher_react' },
                arr.map((v, i) => {
                    return React.createElement(
                        'div',
                        { key: i, id: 'switcherText_' + i },
                        v
                    );
                })
            );
        }
    }
    ReactDOM.render(React.createElement(Switcher_Text, null), document.getElementById('switcher'));
};