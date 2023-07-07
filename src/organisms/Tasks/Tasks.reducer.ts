import { TaskProps } from "@/molecules/Task"

type StateType = {
  tasks: TaskProps['task'][]
}

// Actions
type SetTasksActionType = {
  type: 'SET_TASKS',
  payload: {
    tasks: TaskProps['task'][]
  }
};

type OnArchivePayloadType = {
  id: string
  action: 'onArchive'
  isArchive: boolean
}

type OnPinPayloadType = {
  id: string
  action: 'onPin'
}

type SetTaskStateActionType = {
  type: 'SET_TASK_STATE',
  payload: OnPinPayloadType | OnArchivePayloadType
};

type ActionsType = SetTaskStateActionType | SetTasksActionType;

// Reducer
const taskReducer = (state: StateType, action: ActionsType): StateType => {

  switch (action.type) {
    case 'SET_TASKS': {
      return {
        ...state,
        tasks: [...action.payload.tasks]
      }
    }
    case 'SET_TASK_STATE': {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (action.payload.id === task.id) {
            if (action.payload.action === 'onPin') {
              return {
                ...task,
                state: task.state === 'TASK_PINNED' ? 'TASK_INBOX' : 'TASK_PINNED'
              }
            }
            if (action.payload.action === 'onArchive') {
              return {
                ...task,
                state: action.payload.isArchive ? 'TASK_ARCHIVED' : 'TASK_INBOX'
              }
            }
          }
          return task
        })
      }
    }
    default:
      return state
  }
}

export default taskReducer