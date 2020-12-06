import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  form: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    width: 300,
    padding: '50px 50px'
  }
});

export default useStyles;