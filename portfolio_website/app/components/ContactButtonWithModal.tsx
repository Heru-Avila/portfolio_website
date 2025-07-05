import ContactForm from "./ContactForm";

const ContactButtonWithModal = () => {
  return (
    <>
      {/* Button to open the modal */}
      <label htmlFor="contact-modal" className="btn btn-primary">
        Contact Me
      </label>

      {/* Modal */}
      <input type="checkbox" id="contact-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-lg">
          <h3 className="font-bold text-lg mb-4">Send Me a Message</h3>
          <ContactForm />
          <div className="modal-action">
            <label htmlFor="contact-modal" className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactButtonWithModal;
