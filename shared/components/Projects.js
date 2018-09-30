import React from 'react';

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            projectsList: []
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.projects.status !== prevProps.projects.status) {
            const { projects: { data: { projects: projectsList}}} = this.props;
            this.setState({
                projectsList
            });
        }
    }
    
    render() {
        if(!this.props.projects.data && this.state.projectsList.length === 0){
            return null;
        }
        return (
            <div className="fdt-row">
                {this.state.projectsList.length && this.state.projectsList.map((item, index) => {
                    return (<a href="# " className="fdt-col" key={item.id}>
                            <div>Titile: {item.title}</div>
                    </a>);
                })}
            </div>
        );
    }
}