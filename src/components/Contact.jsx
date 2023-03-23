import React , {useState,useRef} from 'react'
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser'
import {styles} from "../styles.js";
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {slideIn} from "../utils/motion.js";

const Contact = () => {
  const formRef = useRef();
  const [form , setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading ,setLoading] = useState(false);
  const handleChange = (e)=>{
    const {name , value } = e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
        "service_93mtmdp",
        "template_f9mc3rk",
        {
          from_name:form.name,
          to_name:"Orzubek",
          from_email:form.email,
          to_email:'samsunga40uzb@gmail.com',
          message:form.message
        },
        "ltOFjXKq1DVJYvsjM"

    ).then(()=>{
      setLoading(false);
      alert("Rahmat sizga! Sizga albatta jb yozaman")
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false)
      console.log(error)
      alert("Nimadir xato, iltimos qaytadan urining!")
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants = {slideIn('left' , 'right' , 0.2 , 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sizning Ismingiz:</span>
          </label>
          <input
            type="text"
            name = "name"
            value = {form.name}
            onChange={handleChange}
            placeholder= "Sizning ismingiz nima?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"

          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sizning Emailingiz:</span>
          </label>
          <input
              type="email"
              name = "email"
              value = {form.email}
              onChange={handleChange}
              placeholder= "Sizning emailingiz nima?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"

          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sizning Xabaringiz:</span>
          </label>
          <textarea
              rows = "7"
              name = "message"
              value = {form.message}
              onChange={handleChange}
              placeholder= "Siz bizga nima deyishni xoxlaysiz?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"

          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl "
          >
            Send
          </button>
        </form>
      </motion.div>
      <motion.div
          variants = {slideIn('right' , 'tween' , 0.2 , 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , "contact");