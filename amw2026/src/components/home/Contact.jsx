import { FaEnvelope, FaTwitter } from 'react-icons/fa'; // Importa los íconos que necesitas

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Contact</h2>
                <div className="flex items-center gap-4">
                    {/* Correo */}
                    <a
                        href="mailto:amw2024news@groups.google.com"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <FaEnvelope className="mr-2 text-xl" />
                        amw2024news@groups.google.com
                    </a>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    {/* Twitter */}
                    <a
                        href="https://twitter.com/amw2024news"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <FaTwitter className="mr-2 text-xl" />
                        @amw2024news
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;