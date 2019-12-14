import React from "react";

import { TipProps } from "../index";
import { Icon } from "./";

const Text: React.SFC<TipProps> = ({
  className = "",
  children,
  iconName,
  iconColor
}) => {
  return (
    <div className={`onboarding-tip ${className}`}>
      {iconName && (
        <div className="onboarding-tip__icon">
          <Icon name={iconName} color={iconColor} />
        </div>
      )}
      <div className="onboarding-tip__msg">{children}</div>
    </div>
  );
};

export default Text;
