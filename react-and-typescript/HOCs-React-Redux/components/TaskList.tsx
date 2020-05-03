import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducer';
import { fetchTasks } from '../actions';
import { Dispatch } from 'redux';

interface OwnProps {}

interface DispatchProps {
  fetchTasks: () => void;
}

interface AllProps extends AppState, DispatchProps, OwnProps {}

export class TaskList extends React.Component<AllProps> {
  onClick = () => {
    const { fetchTasks } = this.props;
    fetchTasks();
  };

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task.title}</li>;
          })}
        </ul>
        <button onClick={this.onClick}>Fetch Tasks</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
  };
};
export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
