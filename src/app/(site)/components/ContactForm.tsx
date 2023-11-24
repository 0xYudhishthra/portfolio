export default async function ContactForm() {
  return (
    <section className="contact-section my-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's talk!</h2>
      <p className="mb-4">
        I'm interested in freelance opportunities - especially projects that
        create real-world impact. However, if you'd like to just say hello,
        don't hesitate to drop your message!
      </p>
      <form className="flex flex-col items-center">
        <textarea
          className="border p-2 mb-4 w-1/2"
          placeholder="Your message"
        ></textarea>
        <button type="submit" className="bg-black text-white px-6 py-2">
          Send message
        </button>
      </form>
    </section>
  );
}
