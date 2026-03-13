import { FaEnvelope} from 'react-icons/fa'; 

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                    Contact Us
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                    If you have any questions about the conference, submissions, or the venue, please don't hesitate to reach out to our team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Correo */}
                    <a
                        href="mailto:MCYRA2026@fi-b.unam.mx"
                        className="flex items-center gap-3 bg-blue-50 dark:bg-slate-800/80 text-blue-700 dark:text-blue-400 px-8 py-4 rounded-full hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-slate-700 dark:hover:text-blue-300 transition-all duration-300 shadow-sm"
                    >
                        <FaEnvelope className="text-xl" />
                        <span className="font-semibold tracking-wide">MCYRA2026@fi-b.unam.mx</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;