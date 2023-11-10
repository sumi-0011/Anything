import PopoverButton from "./Button";
import PopoverOverlay from "./Overlay";
import PopoverPanel from "./Panel";
import PopoverRoot from "./Root";

export default Object.assign(PopoverRoot, {
  Button: PopoverButton,
  Overlay: PopoverOverlay,
  Panel: PopoverPanel,
});
