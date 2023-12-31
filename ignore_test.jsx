class Toggle extends React.Component {
    comstructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };

        // callbackdptj this를 사용하기 위해서는 바인딩 필수
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        });
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleO ? 'on' : 'off'}</button>
        );
    }
}