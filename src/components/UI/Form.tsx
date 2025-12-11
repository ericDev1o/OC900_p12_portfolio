import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

import FormPhoneInput from "./FormPhoneInput";
import FormEmailInput from "./FormEmailnput";

export default function Form() {
  const [value, setValue] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => 
  {
    const textarea = event.target;
    setValue(textarea.value);

    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  useEffect(() => {
    emailjs.init('wG_rFHDu2lGjUzGmU');
  }, []);

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    try{
      const result = await emailjs.sendForm('service_berhm4r', 'template_pw30xmq', form);
      console.log('Courriel envoyé: ', result.text);
      alert('Message bien envoyé');
      form.reset();
      setPhone('');
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch(error: any) {
        console.error('Erreur: ', error.text);
        alert("Erreur à l'envoi du courriel");
    }
  }

  return <form 
        className="
          max-w-md 
          mx-auto
          pt-12"
        onSubmit={sendEmail}
      >
        <FormEmailInput email={email} setEmail={setEmail}  />
        <div 
          className="
            relative 
            z-0 
            w-full 
            mb-5 
            group"
        >
          <input 
            type="text" 
            name="floating_first_name" 
            id="floating_first_name" 
            className="
              block 
              py-2.5 
              px-0 
              w-full 
              text-xl  
              bg-transparent 
              border-0 
              border-b-2 
              border-gray-600 
              text-white 
              focus:border-blue-500 
              focus:outline-none
              focus:ring-0
              peer" 
              placeholder=" " 
              required 
          />
          <label 
            htmlFor="floating_first_name" 
            className="
              peer-focus:font-medium 
              absolute 
              top-5 
              right-23 
              -z-10 
              origin-left 
              w-full 
              text-xl not-[]:
              text-gray-300 
              duration-300 
              transform 
              -translate-y-6 
              scale-75 
              peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 
              peer-focus:text-blue-600 
              peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 
              peer-focus:-translate-y-6"
          >
            Prénom (a obligatoire)
          </label>
        </div>
        <div 
          className="
            relative 
            z-0 
            w-full 
            mb-5 
            group"
        >
          <input 
            type="text" 
            name="floating_last_name" 
            id="floating_last_name" 
            className="
              block 
              py-2.5 
              px-0 
              w-full 
              text-xl 
              bg-transparent 
              border-0 
              border-b-2 
              border-gray-600 
              text-white 
              focus:border-blue-500 
              focus:outline-none 
              focus:ring-0 
              peer" 
            placeholder=" " 
            required 
          />
          <label 
            htmlFor="floating_last_name" 
            className="
              peer-focus:font-medium 
              absolute 
              top-5 
              right-27 
              -z-10 
              origin-left 
              w-full 
              text-xl 
              text-gray-300 
              duration-300 
              transform 
              -translate-y-6 
              scale-75 
              peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 
              peer-focus:text-blue-600 
              peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 
              peer-focus:-translate-y-6"
          >
            Nom (a obligatoire)
          </label>
        </div>
        <FormPhoneInput phone={phone} setPhone={setPhone} />
        <div 
          className="
            relative 
            z-0 
            w-full 
            mb-5 
            group"
        >
          <input 
            type="text" 
            name="floating_company" 
            id="floating_company" 
            className="
              block 
              py-2.5 
              px-0 
              w-full 
              text-xl 
              bg-transparent 
              border-0 
              border-b-2 
              border-gray-600 
              text-white 
              focus:border-blue-500 
              focus:outline-none 
              focus:ring-0 
              peer" 
            placeholder=" "
          />
          <label 
            htmlFor="floating_company" 
            className="
              peer-focus:font-medium 
              absolute 
              top-5 
              right-45 
              -z-10 
              origin-left 
              w-full 
              text-xl 
              text-gray-300 
              duration-300 
              transform 
              -translate-y-6 
              scale-75 
              peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 
              peer-focus:text-blue-600 
              peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 
              peer-focus:-translate-y-6"
          >
            Société
          </label>
        </div>
        <div 
          className="
            relative 
            z-0 
            w-full 
            mb-5 
            group"
        >
          <label 
            htmlFor="message" 
            className="
              block 
              mb-2 
              text-xl 
              text-gray-300 
              font-medium"
          >
            Précisez votre besoin de site web s'il vous plaît
          </label>
          <textarea 
            id="message"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="
              block 
              p-2.5 
              min-h-24 
              w-full 
              text-xl 
              text-white 
              bg-gray-700 
              rounded-lg 
              border 
              border-gray-600 
              focus:ring-blue-500 
              focus:border-blue-500 
              placeholder-gray-400" 
              placeholder="contexte, public visé, fonctionnalités attendues..."
          >
          </textarea>
        </div>
         <div 
          className="
            relative 
            z-0 
            w-full 
            mb-5 
            group 
            flex 
            items-center 
            space-x-2"
        >
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="sr-only"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
          />
          <span
            onClick={() => setConsent(!consent)}
            className=
              {`
                w-5 
                h-5 
                inline-flex 
                items-center 
                justify-center 
                border-2 
                rounded-sm 
                cursor-pointer 
                select-none 
                ${
                  consent ? 
                  'border-blue-600 bg-blue-600 text-white' : 
                  'border-gray-600'
                }`
              }
          >
            {consent && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            )}
          </span>
          <label
            htmlFor="consent"
            className="
              cursor-pointer 
              select-none 
              text-xl 
              text-gray-300"
          >
            J’accepte la politique de confidentialité.
          </label>
        </div>
        <input 
          type="text" 
          name="sujet" 
          className="hidden" 
          autoComplete="off" 
          tabIndex={-1}
        />  
        <div 
          className="cf-turnstile" 
          data-sitekey="0x4AAAAAACF5yTHgjpa90foy"
        >
          </div>
        <button 
          type="submit" 
          className="
            mt-2 
            px-5 
            py-2.5 
            w-full 
            text-2xl 
            text-center
            font-medium 
            text-gray-200
            bg-blue-600 
            hover:bg-blue-700 
            cursor-pointer 
            focus:ring-4 
            focus:outline-none 
            focus:ring-blue-800 
            rounded-lg 
            sm:w-auto"
        >
          Envoyer
        </button>
      </form>
}