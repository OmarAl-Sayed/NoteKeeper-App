import Footer from "./Footer"
import Heading from "./Heading"
import notes from "./notes.js"
import Note from "./Note.jsx"

let x="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, temporibus? Veniam, fuga sed nihil delectus iste eaque magni eveniet, ex sint explicabo perferendis velit. Temporibus fugiat odit qui delectus? Maiores consequuntur unde dolores soluta illum hic quidem sunt nesciunt culpa. Iste temporibus dicta vel asperiores eum odio nihil, magnam reiciendis? Totam quam vitae quia provident earum quod dolorum. Placeat dolor maxime qui nisi optio enim illum quasi debitis veniam autem ea impedit provident voluptas, soluta eius sunt similique sequi distinctio repellendus quia. Eum deleniti nesciunt vel nihil error repellendus recusandae hic placeat atque qui corporis ea architecto, saepe quas sunt?"

console.log(notes);



function App() {
    return (<>
        <Heading />
        {notes.map(nt => <Note key={nt.key} title={nt.title} content={nt.content} />)}
        <Footer/>
        </>
)
}
export default App