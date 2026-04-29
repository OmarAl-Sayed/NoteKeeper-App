function Footer() {
    let year= new Date()
    return <footer>
         copyright &copy; {year.getFullYear()}
     </footer>
}
 export default Footer