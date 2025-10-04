'use client'
import CustomNavbar from "./CustomNavbar";

const HomePage = () => {
    return (
        <div className="relative min-h-screen flex justify-center">
            <div className="fixed left-0 top-0 space-y-4 h-full w-94 hidden lg:block z-0">
                <img src="/images/DSC06008.jpg" className="h-full w-full object-cover" />
            </div>
            <div className="max-w-6xl w-full p-6 bg-sky-800 z-40">
                <div>
                    <CustomNavbar />
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
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                    <h1 className="text-9xl">BRUHHHHHH</h1>
                </div>
            </div>
            <div className="fixed right-0 top-0 space-y-4 h-full w-94 hidden lg:block z-0">
                    <img src="/images/DSC06008.jpg" className="h-full w-full object-cover" />
                </div>
        </div>
    );
};

export default HomePage;