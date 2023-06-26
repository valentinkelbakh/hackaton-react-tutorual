function Footer() {
    return (
        <footer>
            <h1>Footer</h1>
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} My Website</p>
            </div>
            <div className="footer-right">
                <a href="https://github.com/valentinkelbakh">
                </a>
            </div>
        </footer>
    )
}

export default Footer