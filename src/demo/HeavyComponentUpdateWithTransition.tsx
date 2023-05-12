import styles from "./index.module.css";
import React from "react";

const HeavyComponentUpdate = () => {
  return (
    <iframe
      src="https://codesandbox.io/embed/heavy-update-as-non-urgent-ifobc?fontsize=14&hidenavigation=1&theme=dark"
      className={styles.codeSandbox}
      title="heavy-update-as-non-urgent"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default HeavyComponentUpdate;
