import React, { useEffect, useContext } from "react";
import Link from "next/link";
import {
  Task,
  useDeleteTaskMutation,
  TasksQuery,
  TasksQueryVariables,
  TasksDocument,
  TaskStatus,
  useChangeStatusMutation,
  DeleteTaskMutation,
} from "../generated/graphql";
import { TaskFilterContext } from "../pages/[status]";
import { MutationUpdaterFn } from "apollo-client";

interface Props {
  task: Task;
}

const TaskListItem: React.FC<Props> = ({ task }) => {
  const { status } = useContext(TaskFilterContext);

  const updateCache = (): MutationUpdaterFn<DeleteTaskMutation> => (
    cache,
    result
  ) => {
    const data = cache.readQuery<TasksQuery, TasksQueryVariables>({
      query: TasksDocument,
      variables: { status },
    });
    if (data) {
      cache.writeQuery<TasksQuery, TasksQueryVariables>({
        query: TasksDocument,
        variables: { status },
        data: {
          tasks: data.tasks.filter(
            ({ id }) => id !== result.data?.deleteTask?.id
          ),
        },
      });
    }
  };
  const [deleteTask, { loading, error }] = useDeleteTaskMutation({
    update: updateCache(),
  });

  const handleDeleteClick = () => {
    deleteTask({ variables: { id: task.id } });
  };

  const [
    changeStatus,
    { loading: changingStatus, error: changeStatusError },
  ] = useChangeStatusMutation();

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus =
      task.status === TaskStatus.Active
        ? TaskStatus.Completed
        : TaskStatus.Active;
    changeStatus({ variables: { id: task.id, status: newStatus } });
  };

  useEffect(() => {
    if (error) {
      alert("An error occurred.");
    }

    if (changeStatusError) {
      alert("Could not change the task status.");
    }
  }, [error, changeStatusError]);

  return (
    <li className="task-list-item" key={task.id}>
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={handleChangeStatus}
          checked={task.status === TaskStatus.Completed}
          disabled={changingStatus}
        />
        <span className="checkbox-mark">&#10003;</span>
      </label>
      <Link href="/update/[id]" as={`/update/${task.id}`}>
        <a className="task-list-item-title">{task.title}</a>
      </Link>
      <button
        disabled={loading}
        onClick={handleDeleteClick}
        className="task-list-item-delete"
      >
        &times;
      </button>
    </li>
  );
};

export default TaskListItem;
