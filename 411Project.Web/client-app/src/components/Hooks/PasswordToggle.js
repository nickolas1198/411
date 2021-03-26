import React, { useState } from "react";

const PasswordToggle = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <i
      class={visible ? "fas fa-eye-slash" : "fas fa-eye"}
      onClick={() => setVisiblity((visiblity) => !visiblity)}
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default PasswordToggle;
