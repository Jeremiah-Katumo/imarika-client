import '../../assets/css/main.css'

function Navigation() {
    return (
        <>
        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a class="nav-link scrollto" href="#team">Team</a></li>
                <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li class="dropdown"><a href="a"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="a">Drop Down 1</a></li>
                        <li class="dropdown"><a href="a"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a href="b">Deep Drop Down 1</a></li>
                                <li><a href="c">Deep Drop Down 2</a></li>
                                <li><a href="d">Deep Drop Down 3</a></li>
                                <li><a href="e">Deep Drop Down 4</a></li>
                                <li><a href="f">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="a">Drop Down 2</a></li>
                        <li><a href="b">Drop Down 3</a></li>
                        <li><a href="c">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        </>
    )
}

export default Navigation;