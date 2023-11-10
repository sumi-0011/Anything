import { createContext, PropsWithChildren, useContext } from "react";

interface State {
  onClose: VoidFunction;
}

const BottomSheetContext = createContext<State | null>(null);

interface Props {
  onClose: VoidFunction;
}

export default function BottomSheetProvider({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <BottomSheetContext.Provider value={props}>
      {children}
    </BottomSheetContext.Provider>
  );
}

export const useBottomSheetState = () => {
  const state = useContext(BottomSheetContext);
  if (!state) throw new Error("Cannot find BottomSheetProvider");
  return state;
};
