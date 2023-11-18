import classes from './App.module.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>2</main>
      <footer className="footer">3</footer>
    </div>
  );
}

export default App;
