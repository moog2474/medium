import Header from './components/Header';
import './App.css';
import Trendingsec from "./components/Trendingsec"
import News from './components/News';
import Cat from './components/Cat';
import Cot from './components/Cot';

const nav = [
  { id: 1, name: "Our story" },
  { id: 2, name: "Membership" },
  { id: 3, name: "Write" },
  { id: 4, name: "Sign in" },
]
const cat = [
  { id: 1, name: "Programming" },
  { id: 2, name: "Data science" },
  { id: 3, name: "Technology" },
  { id: 4, name: "Self Improvement" },
  { id: 5, name: "Writing" },
  { id: 6, name: "Relationship" },
  { id: 7, name: "Machine learning" },
  { id: 8, name: "Productivity" },
  { id: 9, name: "Politics" },
]

const cot = [
  { id: 1, name: "Help" },
  { id: 2, name: "Status" },
  { id: 3, name: "Writers" },
  { id: 4, name: "Blog" },
  { id: 5, name: "Careers" },
  { id: 6, name: "Privacy" },
  { id: 7, name: "Terms" },
  { id: 8, name: "About" },
  { id: 9, name: "Text to speech" },
]
const news = [
  {
    id: "1",
    image: require('./images/img.png'),
    head: "Understanding Long Covid",
    title: "We know more now than before, and it’s still alarming",
    isTrending: true,
    date: "Nov 25, 2022",
    category: "",
    key: "Long Covid",
    read: "9 min read",
    createdUser: { Name: "Dr. Tom Frieden", userId: "1", img: require('./images/prof01.jpeg') }
  },

  {
    id: "2",
    image: require('./images/img.png'),
    head: "Braiding Past into Future",
    title: "Nican Huehcatlahtolli, a New Futurism",
    date: "Nov 25, 2022",
    isTrending: true,
    category: "",
    key: "Futurism",
    read: "11 min read",
    createdUser: { Name: "David Bowles", userId: "2", img: require('./images/prof01.jpeg') }
  },

  {
    id: "3",
    image: require('./images/img.png'),
    head: "Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
    title: "An estranged father reflects on the stigma and surprising prevalence of these family rifts.",
    date: "Aug 21, 2022",
    isTrending: true,
    category: "",
    key: "Parental Alienation",
    read: "6 min read",
    createdUser: { Name: "Ed Erginziger", userId: "3", img: require('./images/prof03.jpeg') }
  },

  {
    id: "4",
    image: require('./images/img.png'),
    head: "ChatGPT Is Having a Thomas Edison Moment",
    title: "Why breakthrough technologies need to be accessible",
    date: "Dec  8, 2022",
    isTrending: true,
    category: "",
    key: "Gpt 3",
    read: "4 min read",
    createdUser: { Name: "Thomas Smith", userId: "4", img: require('./images/prof04.jpeg') }
  },

  {
    id: "5",
    image: require('./images/img.png'),
    head: "Understanding Long Covid",
    title: "What You Probably Don’t Know About Your Pastor When Preachesg",
    isTrending: true,
    date: "Nov 25, 2022",
    category: "",
    key: "Long Covid",
    read: "9 min read",
    createdUser: { Name: "Kenny Kuykendall", userId: "6", img: require('./images/prof02.jpeg') }
  },

  {
    id: "6",
    image: require('./images/img.png'),
    head: "Braiding Past into Future",
    title: "Nican Huehcatlahtolli, a New Futurism",
    date: "Nov 25, 2022",
    isTrending: true,
    category: "",
    key: "Futurism",
    read: "11 min read",
    createdUser: { Name: "David Bowles", userId: "2", img: require('./images/prof03.jpeg') }
  },
]

function App() {
  return (
    <section>
      <Header navs={nav} />
      <Trendingsec datas={news} />
      <div className=' container lol'>
        <News data={news} />
        <div className='pine'>
          <Cat cats={cat} />
          <Cot cots={cot} />
        </div>
      </div>
    </section>
  );
}

export default App;
