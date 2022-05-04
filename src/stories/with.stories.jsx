import Component, { Icon } from "./component";

export default {
  title: "Component/Crashes",
};

export function WithCrashes(props) {
  return (
    <Component
      handleClick={props.handleClick}
      options={[{ label: "a", value: <Icon /> }]}
    />
  );
}
