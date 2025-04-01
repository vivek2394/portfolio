import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="vivekduttbudhodi@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8770441275" Image={FiPhone} />
      <SingleInfo text="Jabalpur ,Madhya Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;