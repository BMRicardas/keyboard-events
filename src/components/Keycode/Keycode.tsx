import { FC } from "react";
import useKeyPress from "../../hooks/useKeyPress";
import Card from "../../ui/Card/Card";
import StartingScreen from "../StartingScreen/StartingScreen";
import classes from "./Keycode.module.scss";

const aboutInfo = {
  key: "The KeyboardEvent interface's key read-only property returns the value of the key pressed by the user",
  keyCode:
    "The deprecated KeyboardEvent.keyCode read-only property represents a system and implementation dependent numerical code identifying the unmodified value of the pressed key.",
  code: "The KeyboardEvent.code property represents a physical key on the keyboard (as opposed to the character generated by pressing the key). In other words, this property returns a value that isn't altered by keyboard layout or the state of the modifier keys.",
  shift:
    "The KeyboardEvent.shiftKey read-only property is a boolean value that indicates if the shift key was pressed (true) or not (false) when the event occurred.",
  ctrl: "The KeyboardEvent.ctrlKey read-only property returns a boolean value that indicates if the control key was pressed (true) or not (false) when the event occurred.",
  alt: "The KeyboardEvent.altKey read-only property is a boolean value that indicates if the alt key (Option or ⌥ on macOS) was pressed (true) or not (false) when the event occurred.",
};

const Keycode: FC = () => {
  const data = useKeyPress();

  if (!data) {
    return <StartingScreen />;
  }

  const keys = Object.keys(data);

  return (
    <div className={classes["key-code"]}>
      <div className={classes["key-code__cards"]}>
        <Card
          name={`event.${keys[0]}`}
          value={data.key === " " ? "Space" : data.key}
          about={aboutInfo.key}
        />
        <Card
          name={`event.${keys[1]}`}
          value={data.keyCode}
          about={aboutInfo.keyCode}
        />
        <Card
          name={`event.${keys[2]}`}
          value={data.code}
          about={aboutInfo.code}
        />
        <Card name="SHIFT" value={`${data.shift}`} about={aboutInfo.shift} />
        <Card name="CTRL" value={`${data.ctrl}`} about={aboutInfo.ctrl} />
        <Card name="ALT" value={`${data.alt}`} about={aboutInfo.alt} />
      </div>
    </div>
  );
};

export default Keycode;