import React from 'react';


class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: this.props.name }
    }
    render() {
        return (
            <div>
                {this.state.task}
            </div>
        );
    }


}

export default TaskList;