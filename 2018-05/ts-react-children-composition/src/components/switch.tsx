import './switch.css'
import React, { Component } from 'react'

// STOP! You should not have to change anything in this file to
// make it through the workshop. If tests are failing because of
// this switch not having properties set correctly, then the
// problem is probably in your implementation. Tip: Check
// your `render` method or the `getTogglerProps` method
// (if we've gotten to that part)

type Props = {
  on: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}
class Switch extends Component<Props> {
  render() {
    const { on, className = '', ...props } = this.props
    const btnClassName = [className, 'toggle-btn', on ? 'toggle-btn-on' : 'toggle-btn-off']
      .filter(Boolean)
      .join(' ')
    return (
      <div>
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={() => {
            // changing is handled by clicking the button
          }}
        />
        <button className={btnClassName} aria-label="Toggle" {...props} />
      </div>
    )
  }
}

export { Switch }
