'use client'
import CustomNavbar from "./CustomNavbar";

const HomePage = () => {
    return (
        <div className="relative min-h-screen flex justify-center">
            <div className="absolute left-4 top-20 space-y-4 hidden lg:block">
                <img src="/images/DSC06008.jpg" className="w-32" />
            </div>
            <div className="max-w-6xl w-full p-6 bg-sky-800">
                <div>
                    <CustomNavbar/>
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
                <div className="absolute right-0 top-0 hidden lg:block">
                    <img src="/images/DSC06008.jpg" className="w-94" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;