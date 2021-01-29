import { SpinnerOverlay, Animation } from './spinner.styles'

const Spinner = ({ overlay=true, color='#42B560' }) => {
  return overlay ? (
    <SpinnerOverlay>
      <Animation overlay={overlay} color={color}/>
    </SpinnerOverlay>
  ) : <Animation overlay={overlay} color={color}/>
}

export default Spinner