import { useTaskContext } from "../../contexts/TaskContext/useTaskContex";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque na tarefa por <b>{state.config.workTime}</b>min.
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}</b>min.
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <b>{state.config.longBreakTime}</b>min.
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo de trabalho <b>{state.config.workTime}</b>min.
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo de descanso <b>{state.config.shortBreakTime}</b>min.
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo de descanso <b>{state.config.longBreakTime}</b>min.
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
