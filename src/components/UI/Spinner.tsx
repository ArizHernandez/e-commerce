import classes from './Spinner.module.css';

function Spinner() {
  return (
    <div className={classes['spinner-view']}>
      <div className={classes['sk-cube-grid']}>
        <div className={`${classes['sk-cube']} ${classes['sk-cube1']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube2']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube3']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube4']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube5']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube6']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube7']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube8']}`} />
        <div className={`${classes['sk-cube']} ${classes['sk-cube9']}`} />
      </div>
    </div>
  );
}

export default Spinner;
