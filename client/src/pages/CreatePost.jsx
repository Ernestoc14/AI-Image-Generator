import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'  

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader  } from '../components'

const CreatePost = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const generateImage = () => {

    }

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSurpriseMe = () => {
    
    }

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
                <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-16 max-w-3xl'>
                <div className='flex flex-col gap-5'>
                    <FormField
                        labelName='Your Name'
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        value={form.name}
                        hanleChange={handleChange}
                    />
                    <FormField
                        labelName='Prompt'
                        type='text'
                        name='prompt'
                        placeholder='Enter your prompt'
                        value={form.prompt}
                        hanleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />
                    <div className='relative  flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3'
                    >
                        {form.photo ? (
                            <img 
                                src={form.photo}
                                alt={form.prompt}
                                className='w-full h-full object-contain'
                            />
                        ) : (
                            <img
                                src={preview}
                                alt='preview'
                                className='w-9/12 h-9/12 object-contain opacity-40'
                            />
                        )}
                        {generatingImg && (
                            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                                <Loader />
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-6 gap-5 flex'>
                    <button
                        type='submit'
                        onClick={generateImage}
                        className=' text-white bg-slate-800 hover:bg-slate-700 w-full py-3 rounded-md shadow-lg font-medium '
                    >
                        {generatingImg ? 'Generating...' : 'Generate Image'}
                    </button>
                </div>
                <div>
                    <p>Once you have created the Image, you can share it in the community with others.</p>
                </div>
            </form>
        </section>
    )
}

export default CreatePost