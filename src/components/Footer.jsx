function Footer() {
    let year= new Date()
    return <footer>
        <p>
           Copyright &copy; 2026{new Date().getFullYear() > 2026 && ("-" + new Date().getFullYear())},by Omar.
        </p>

     </footer>
}
 export default Footer