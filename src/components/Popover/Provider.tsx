import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

interface Props {}

interface Values {
  isOpen: boolean;
}

interface Actions {
  onClose: () => void;
  onOpen: () => void;
  toggleOpen: () => void;
}

const PopoverValuesContext = createContext<Values | undefined>(undefined);
const PopoverActionsContext = createContext<Actions | undefined>(undefined);

export default function PopoverProvider({
  children,
}: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
    }),
    [isOpen],
  );

  const actions = useMemo(
    () => ({
      onClose: () => setIsOpen(false),
      onOpen: () => setIsOpen(true),
      toggleOpen: () => setIsOpen((prev) => !prev),
    }),
    [],
  );

  return (
    <PopoverActionsContext.Provider value={actions}>
      <PopoverValuesContext.Provider value={value}>
        {children}
      </PopoverValuesContext.Provider>
    </PopoverActionsContext.Provider>
  );
}

export const usePopoverValue = () => {
  const context = useContext(PopoverValuesContext);
  if (context === undefined) {
    throw new Error("usePopoverValue must be used within a PopoverProvider");
  }
  return context;
};

export const usePopoverActions = () => {
  const context = useContext(PopoverActionsContext);
  if (context === undefined) {
    throw new Error("usePopoverActions must be used within a PopoverProvider");
  }
  return context;
};
