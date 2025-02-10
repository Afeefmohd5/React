
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can send this data to your backend or use a service like Formspree.
    // For now, just log the data to the console.
  };

  return (
    <div className='bg-slate-950 w-full h-screen md:flex md:items-center md:justify-center p-10 rounded-3xl '>
    <div className="mx-auto w- max-w-7xl w-full py-2">
    <div class="mx-auto my-4 max-w-2xl  md:my-6">
     
      <div class="overflow-hidden rounded-xl  bg-white text-black p-4 shadow">
       
        <p class="text-sm font-bold text-gray-400">Personal Info</p>
        <div class="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          <div class="w-full">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="firstName"
            >
              First Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your first name"
              id="firstName"
            />
          </div>
          <div class="w-full">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="lastName"
            >
              Last Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your last name"
              id="lastName"
            />
          </div>
          <div class="col-span-2 gap-4 grid">
            <div class="w-full">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
               Phone Number
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your Number"
                id="email"
              />
            </div>
            <div class="w-full">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email Address
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </div>
          </div>
          <div class="col-span-2 grid">
            <button
              type="button"
              class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default ContactForm;
