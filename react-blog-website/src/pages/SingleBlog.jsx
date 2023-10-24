import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar';

const SingleBlog = () => {

  const data = useLoaderData();
  const { title, image, category, author, published_data, reading_time, content } = data[0];

  return (
    <div>
      <div className='bg-black py-40 text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      {/* BLOG DETAILS */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />
          </div>
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600 '><FaUser className='inline-flex items-center mr-2 ' />
            {author} | {published_data}
          </p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
          <p className='text-base text-gray-600 mb-6'>{content}</p>
          <div className='text-base text-gray-500'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus expedita, architecto dolorem, perferendis, dicta earum molestias quas sunt neque eaque illum consequatur? Corporis doloribus nemo repellat dolore quam vel.</p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium reprehenderit alias, eos numquam consectetur debitis fugit ducimus hic? Iusto ab tenetur ex rem unde, rerum illo magni laboriosam reprehenderit odio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam, dolore harum adipisci aliquam, optio impedit sunt qui nesciunt accusamus, sit magnam eius voluptatibus eum. Unde sequi sint quia impedit?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus expedita, architecto dolorem, perferendis, dicta earum molestias quas sunt neque eaque illum consequatur? Corporis doloribus nemo repellat dolore quam vel.</p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium reprehenderit alias, eos numquam consectetur debitis fugit ducimus hic? Iusto ab tenetur ex rem unde, rerum illo magni laboriosam reprehenderit odio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam, dolore harum adipisci aliquam, optio impedit sunt qui nesciunt accusamus, sit magnam eius voluptatibus eum. Unde sequi sint quia impedit?</p><br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus expedita, architecto dolorem, perferendis, dicta earum molestias quas sunt neque eaque illum consequatur? Corporis doloribus nemo repellat dolore quam vel.</p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium reprehenderit alias, eos numquam consectetur debitis fugit ducimus hic? Iusto ab tenetur ex rem unde, rerum illo magni laboriosam reprehenderit odio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam, dolore harum adipisci aliquam, optio impedit sunt qui nesciunt accusamus, sit magnam eius voluptatibus eum. Unde sequi sint quia impedit?</p><br />
          </div>
        </div>

        <div className='lg:w-1/3'>
          <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog