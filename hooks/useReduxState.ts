import { useAppSelector } from "@/redux/hook";

const useReduxState = () => {
  const state = useAppSelector((state) => state);

  const { modal, setting, singleTime, timer, toolBar } = state;

  return {
    modal,
    setting,
    singleTime,
    timer,
    toolBar,
  };
};

export default useReduxState;
