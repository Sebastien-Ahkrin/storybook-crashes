import Component, { Icon } from "./component";

export default {
  title: "Component/Crashes",
};

const icon = <Icon />;

export function WithoutCrashes(props) {
  return (
    <Component
      handleClick={props.handleClick}
      options={[{ label: "a", value: icon }]}
    />
  );
}
