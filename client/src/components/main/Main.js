import classes from './Main.module.css';

function Main() {
  return (
    <main className={classes.main}>
      <Book bookDetails={data[0]} />
      <Book bookDetails={data[1]} />
      <Book bookDetails={data[2]} />
      <Book bookDetails={data[3]} />
    </main>
  );
}

export default Main;
