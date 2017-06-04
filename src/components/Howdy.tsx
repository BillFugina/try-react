import * as React from 'react'
import './Howdy.scss'
export interface Props {
  name: string
  enthusiasmLevel?: number
}

class Howdy extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    return (
      <div className="hello">
        <div className="greeting">
          Howdy, {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Howdy;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}