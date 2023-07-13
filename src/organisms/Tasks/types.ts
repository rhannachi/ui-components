import { TaskType } from "@/molecules/Task"

export type StateType = {
  tasks: TaskType[]
}

// Actions
type SetTasksActionType = {
  type: 'SET_TASKS',
  payload: {
    tasks: TaskType[]
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

export type ActionsType = SetTaskStateActionType | SetTasksActionType;
