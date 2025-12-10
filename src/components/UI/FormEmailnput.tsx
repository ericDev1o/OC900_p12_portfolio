 import { useState } from "react";
 
 export default function FormEmailInput() {
    const [email, setEmail] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return <div 
        className="
        relative 
        z-0 
        w-full 
        mb-5 
        group"
    >
        <input 
            type="email" 
            value={email} 
            onChange={handleChange} 
            name="floating_email" 
            id="floating_email" 
            title='Entrez un courriel valide par exemple a@b.c'
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
            htmlFor="floating_email" 
            className=" 
              absolute 
              top-5 
              right-14
              -z-10 
              origin-left 
              w-full 
              text-xl 
              text-gray-300 
              duration-300 
              transform 
              -translate-y-6 
              scale-75 
              peer-focus:font-medium 
              peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 
              rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 
              peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 
              peer-focus:-translate-y-6"
          >
            courriel (a@b.c obligatoire)
          </label>
    </div>
  }