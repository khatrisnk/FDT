import React from 'react';
export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: 'g1kJfSk73hj',
            password: 'uH83M9qK713bczD18'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getLogin(this.state);
    }

    componentDidUpdate(prevProps) {
        if (this.props.userData.status !== prevProps.userData.status) {
            this.props.history.push( "/projects");
        }
    }
    
    render() {
        return (
            <div className="fdt-row">
                <form className="fdt-login-form" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            autoComplete={this.state.password.toString()}
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}