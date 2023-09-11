import React, { useState } from "react";
import { sendEmail } from "../pages/api/send";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail({email: formData.email, subject: formData.subject, message: formData.message})
    console.log(formData);
  };

  return (
    <section class="bg-white dark:bg-neutral-800">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contate-nos</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Precisa de detalhes sobre nosso plano de negócios? Nos informe.</p>
            <form onSubmit={handleSubmit} class="space-y-8">
              <div>
                <label for="email" htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
              </div>
              <div>
                <label for="subject" htmlFor="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assunto</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe-nos saber como podemos ajudá-lo" required/>
              </div>
              <div class="sm:col-span-2">
                <label for="message" htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua mensagem</label>
                <textarea id="message" rows="6" name="message" value={formData.message} onChange={handleChange} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deixe seu mensagem..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
           </form>
          </div>
        </section>
  );

}

export default ContactForm;
        
        
        
        
        
        