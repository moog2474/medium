// import Tredingsec from "./Tredingsec"
import Card from "./Card"
const news = [
    {
        id: "1",
        img: require('../images/profile.jpeg'),
        head: "Understanding Long Covid",
        title: "We know more now than before, and it’s still alarming",
        isTrending: false,
        date: "Nov 25, 2022",
        category: "",
        key: "Long Covid",
        read: "9 min read",
        createdUser: { Name: "Dr. Tom Frieden", userId: "1", img: "require('../images/profile.jpeg')" }
    },

    {
        id: "2",
        img: require('../images/profile.jpeg'),
        head: "Braiding Past into Future",
        title: "Nican Huehcatlahtolli, a New Futurism",
        date: "Nov 25, 2022",
        isTrending: true,
        category: "",
        key: "Futurism",
        read: "11 min read",
        createdUser: { Name: "David Bowles", userId: "2", img: "require('../images/profile.jpeg')" }
    },

    {
        id: "3",
        img: require('../images/profile.jpeg'),
        head: "Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
        title: "An estranged father reflects on the stigma and surprising prevalence of these family rifts.",
        date: "Aug 21, 2022",
        isTrending: true,
        category: "",
        key: "Parental Alienation",
        read: "6 min read",
        createdUser: { Name: "Ed Erginziger", userId: "3", img: "require('../images/profile.jpeg')" }
    },

    {
        id: "4",
        img: require('../images/profile.jpeg'),
        head: "ChatGPT Is Having a Thomas Edison Moment",
        title: "Why breakthrough technologies need to be accessible",
        date: "Dec  8, 2022",
        isTrending: false,
        category: "",
        key: "Gpt 3",
        read: "4 min read",
        createdUser: { Name: "Thomas Smith", userId: "4", img: "require('../images/profile.jpeg')" }
    },

    {
        id: "5",
        img: require('../images/profile.jpeg'),
        head: " Spotify’s Year-End Lists Are the Ultimate Personality Test",
        title: "Why the mass sharing of the music streaming service’s year-end lists is uniquely telling",
        date: "Dec 6, 2022",
        isTrending: false,
        category: "",
        key: "Music",
        read: "3 min read",
        createdUser: { Name: "Allegra Hobbs", userId: "5", img: "require('../images/profile.jpeg')" }
    },
    {
        id: "6",
        img: require('../images/profile.jpeg'),
        head: "Understanding Long Covid",
        title: "What You Probably Don’t Know About Your Pastor When Preachesg",
        isTrending: true,
        date: "Nov 25, 2022",
        category: "",
        key: "Long Covid",
        read: "9 min read",
        createdUser: { Name: "Kenny Kuykendall", userId: "6", img: "require('../images/profile.jpeg)" }
    },

    {
        id: "7",
        img: require('../images/profile.jpeg'),
        head: "Braiding Past into Future",
        title: "Nican Huehcatlahtolli, a New Futurism",
        date: "Nov 25, 2022",
        isTrending: true,
        category: "",
        key: "Futurism",
        read: "11 min read",
        createdUser: { Name: "David Bowles", userId: "2", img: "require('../images/profile.jpeg')" }
    },

    {
        id: "8",
        img: require('../images/profile.jpeg'),
        head: "Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
        title: "An estranged father reflects on the stigma and surprising prevalence of these family rifts.",
        date: "Aug 21, 2022",
        isTrending: true,
        category: "",
        key: "Parental Alienation",
        read: "6 min read",
        createdUser: { Name: "Ed Erginziger", userId: "3", img: "require('../images/profile.jpeg')" }
    },

    {
        id: "9",
        img: require('../images/profile.jpeg'),
        head: "ChatGPT Is Having a Thomas Edison Moment",
        title: "Why breakthrough technologies need to be accessible",
        date: "Dec  8, 2022",
        isTrending: false,
        category: "",
        key: "Gpt 3",
        read: "4 min read",
        createdUser: { Name: "Thomas Smith", userId: "4", img: "require('../images/profile.jpeg')" }
    },
]

export default function Data() {
    return (
        <div className="col-2">
            
            <Card newsList={news}/>
        </div>
    )
}
