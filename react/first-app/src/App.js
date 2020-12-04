import './App.css';
import jocko from "./jocko.jpg"

function Header(props){
  return (
    <header>
      <h1>{props.name}'s Way</h1>
    </header>
  )
}

function Main(props){
  return (
    <section>
      <p>Read these books {props.adjective}.</p>
      <img 
        src={jocko} 
        height={600} 
        alt="the face of jocko"
      />

      <ul style={{textAlign: "left"}}>
        {props.books.map ((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props){
  return (
    <footer>
      <p>Get on the path. Time is ticking: {props.year}</p>
    </footer>
  )
}

const books = [
  "Discipline Equals Freedom", 
  "Extreme Ownership", 
  "Leadership Strategy and Tactics", 
  "The Dichotomy of Leadership" 
];

//books.map ((book) => console.log(book));
const bookObjects = books.map((book, i) => ({id:i, title:book}));

function App() {
  return (
    <div className="App">
    <Header name="Jocko" />
    <Main adjective="NOW" books={bookObjects}/>
    <Footer year={new Date().getDate()+ "-" + (new Date().getMonth()+1) + "-" + new Date().getFullYear()}/>
    </div>
  );
}

export default App;
