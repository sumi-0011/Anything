import PopoverOverlay from "./Overlay";
import PopoverPanel from "./Panel";
import PopoverRoot from "./Root";
import PopoverTrigger from "./Trigger";

export default Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Overlay: PopoverOverlay,
  Panel: PopoverPanel,
});
