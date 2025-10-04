'use client';
import { useEffect, useRef } from "react";
import ContactButtonWithModal from "./ContactButtonWithModal";

const ScrollLayout = () => {
    const scrollTargetRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (e: WheelEvent) => {
            if (scrollTargetRef.current) {
                scrollTargetRef.current.scrollTop += e.deltaY;
            }
        };

        const sidebar = document.getElementById("sidebar");
        sidebar?.addEventListener("wheel", handler);

        return () => {
            sidebar?.removeEventListener("wheel", handler);
        };
    }, []);

    return (
        <div className="flex h-screen">
            {/* Left side with margins, centered content */}
            <div className="w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-base-200 flex justify-end">
                <div className="w-1/2">
                    <div className="mt-[15vh]">
                        <h1 className="text-6xl font-bold text-left p-1">
                            <a href="https://heruavila.com">Heru Avila</a>
                        </h1>
                        <p className="text-xl text-left p-1 mb-2">Recent CS Graduate From UVa</p>
                        <p className="text-xl text-left p-1">I need a job please!!!</p>
                    </div>
                    <div className="mt-[10vh]">
                        <h1 className="text-m text-left font-bold uppercase">About</h1>
                    </div>
                    <div className="mt-[30vh]">
                        <p>links here</p>
                    </div>
                </div>
            </div>
            <div>
                <ContactButtonWithModal/>
            </div>

            {/* Right scrollable section full width, no padding */}
            <div
                ref={scrollTargetRef}
                className="w-1/2 h-full overflow-y-auto p-6 space-y-6 bg-base-200"
            >
                <div className="w-1/2">
                    <div className="mt-[15vh]" aria-label="About me" id="about">
                        <p className="text-xl mb-4">
                            Lorem ipsum dolor sit amet, sea aeterno eligendi persecuti id, detracto posidonium an est.
                            Sea possit scaevola an, at nec dico invenire pericula. Primis dicunt cu usu, vis ea sumo utroque constituam.
                            Te mel enim mazim praesent, vidit fastidii cum in. In has consetetur consectetuer.
                        </p>
                        <p className="text-xl mb-4">
                            Sed recteque explicari forensibus ad, antiopam temporibus eum ad. Ne pri diceret fierent, ex omnes pericula democritum qui.
                            Ut case deseruisse interesset sed. Pro numquam omnesque te, vim ex congue noster euismod, pri in omnium labores interesset.
                            Sea atqui deseruisse intellegam eu. Id ius dicunt nonumes insolens, dolor persius vivendo eu duo. Oratio oblique eum id.
                        </p>
                        <p className="text-xl mb-4">
                            Suas vituperata nam et. At discere gubergren assueverit nec, nonumes apeirian vituperatoribus pro te.
                            Sea ad exerci appellantur, an cum aperiam complectitur, ex duo unum persius sanctus.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>


    );
};

export default ScrollLayout;
