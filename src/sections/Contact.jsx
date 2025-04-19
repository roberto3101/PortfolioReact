import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20 px-4 sm:px-8"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent text-center">
            Ponte en contacto!
          </h2>

          <form
            action="https://formsubmit.co/jose0686534@gmail.com"
            method="POST"
            className="flex flex-col gap-8 items-center"
          >
            <div className="w-full max-w-2xl">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre completo"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:border-teal-400 focus:bg-white/5 placeholder:text-white/70 transition"
              />
            </div>

            <div className="w-full max-w-2xl">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:border-teal-400 focus:bg-white/5 placeholder:text-white/70 transition"
              />
            </div>

            <div className="w-full max-w-2xl">
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Escribe tu mensaje..."
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:border-teal-400 focus:bg-white/5 placeholder:text-white/70 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full max-w-2xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl text-lg shadow-lg transition hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Contact;