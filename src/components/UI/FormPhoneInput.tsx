 import { useState } from "react";
 
 export default function FormPhoneInput() {
    const [phone, setPhone] = useState<string>('');

    const phoneRegexp = /^(?:(?:\+|00)33|0)[1-9]{1}\d{2}\d{2}\d{2}\d{2}$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const cleaned = value.replace(/[^0-9]/g, '');

    const formatted = cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');

    setPhone(formatted);
    };

    const isValid = phoneRegexp.test(phone.replace(/\s/g, ''));

    return <div 
        className="
        relative 
        z-0 
        w-full 
        mb-5 
        group"
    >
        <input 
            type="tel" 
            value={phone} 
            onChange={handleChange} 
            pattern={phoneRegexp.source} 
            name="floating_phone" 
            id="floating_phone" 
            title='Entrez un numéro de téléphone valide par exemple +33 1 23 45 67 89 ou 01 23 45 67 89' 
            aria-invalid={!isValid}
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
            htmlFor="floating_phone" 
            className="
                peer-focus:font-medium 
                absolute 
                top-5 
                right-12
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
                peer-focus:-translate-y-6
                "
            >
            téléphone (+33 1 23 45 67 89)
        </label>
        {
            ! isValid && 
            phone && 
            <p 
                className="
                mt-2 
                text-md  
                text-red-400"
            >
                <span 
                    className="
                        font-medium 
                        mx-2"
                >Le numéro de téléphone n'est pas valide. 
                </span>
                Veuillez taper un numéro au format 01 23 45 67 89 s'il vous plaît.
            </p>
        }
    </div>
  }