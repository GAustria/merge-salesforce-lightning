import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from "@salesforce/design-system-react";


/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-button--docs
 */
function Button(props) {
    return (
    <ButtonM {...props}/>
    )
} 

Button.propTypes = {
  /**
   * The content of the component.
   */
  assistiveText: PropTypes.shape,
  buttonRef: PropTypes.func,
  disabled: PropTypes.bool,
  hint: PropTypes.bool,
  iconCategory: PropTypes.string,
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  variant: PropTypes.oneOf(['base', 'link', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'text-destructive', 'icon']),
  label: PropTypes.string,
}

export default Button