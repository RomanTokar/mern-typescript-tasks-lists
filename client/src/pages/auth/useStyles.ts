import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    [theme.breakpoints.up('xs')]: {
      alignItems: 'center',
      display: 'flex',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    width: '100%',
    padding: '50px 50px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
    },
  },
}))

export default useStyles
