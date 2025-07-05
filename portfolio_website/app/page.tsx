import ContactButtonWithModal from "./components/ContactButtonWithModal";

export default function Home() {
  return (
    <main>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="https://Google.com/">Heru Avila</a>
        </div>
        <div className="flex-none">
          <ContactButtonWithModal />
        </div>
      </div>
      <div>
        <p>Hello!</p>
      </div>
    </main>
  );
}
