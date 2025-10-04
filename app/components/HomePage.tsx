'use client'
const HomePage = () => {
    return (
        <div className="relative min-h-screen flex justify-center">
            <div className="absolute left-4 top-20 space-y-4 hidden lg:block">
                <img src="/images/DSC06008.jpg" className="w-32" />
            </div>
            <div className="max-w-6xl w-full p-6 bg-sky-800">
                <div>
                    <div className="navbar bg-sky-300 shadow-lg rounded-xl max-w-5xl mx-auto mt-4 px-4 sticky top-4 z-50">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><a>Homepage</a></li>
                                    <li><a>Portfolio</a></li>
                                    <li><a>About</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <a className="btn btn-ghost text-3xl">Heru Avila</a>
                        </div>
                        <div className="navbar-end">
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                            </button>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Main Content</h1>
                    <p className="text-lg">The images sit in the side margins without pushing the content inward.</p>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                </div>
                <div className="absolute right-4 top-20 space-y-4 hidden lg:block">
                    <img src="/images/DSC06008.jpg" className="w-32 rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;