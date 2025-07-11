import { faInstagram, faLinkedin, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = () => {
  return (
    <div className=' flex flex-col gap-8 items-center mx-auto py-[112px] w-[607px]'>
      <h2 className='text-[#252B42] w-[479px] text-center text-4xl font-bold'>Get answers to all your questions.</h2>
      <h4 className='text-[#737373] text-center'>Problems trying to resolve the conflict between the two major realms of Classical physics:</h4>
      <button className='border-4 rounded-xl bg-[#23A6F0] text-white px-[40px] py-[15px]'>CONTACT OUR COMPANY</button>
      <div className='flex gap-8'>
        <FontAwesomeIcon icon={faTwitter}  size='2xl' color='#BDBDBD'/>
        <FontAwesomeIcon icon={faSquareFacebook} size='2xl' color='#BDBDBD' />
        <FontAwesomeIcon icon={faInstagram} size='2xl' color='#BDBDBD' />
        <FontAwesomeIcon icon={faLinkedin} size='2xl' color='#BDBDBD' />
      </div>
    </div>
  )
}

export default ContactPage