import { Message } from "@/components/LeaveMesssage";
export default function ContactPage() {
  return (
    <div className="w-full  justify-center flex flex-col items-center gap-[40px] mb-[100px]">
      <div className="container flex flex-col justify-center items-center gap-[80px]">
        <div className="w-[65%] h-fit flex gap-[40px] flex-col justify-center items-center">
          <div className="  flex text-start justify-start ">
            <h5>Contact Us</h5>
          </div>
          <div className="w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            necessitatibus nulla suscipit deleniti molestias iusto id corporis
            aperiam eos blanditiis magnam, inventore autem at animi laboriosam,
            voluptas quibusdam sint voluptatibus?
          </div>
          <div className="flex gap-[40px] w-[80%] h-[100px] *:rounded-[16px] *:border">
            <div className="w-[400px] h-[100px] flex py-[10px] px-[16px] flex-col">
              <h3>Address</h3>
              <p>Ulaanbaater , Mongolia</p>
            </div>
            <div className="w-[400px] h-[100px] flex py-[10px] px-[16px] flex-col">
              <h3>Contact</h3>
              <div>+97688011167</div>
              <div>info@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 w-[55%] py-[20px] px-[20px] rounded-[6px]">
          <Message></Message>
        </div>
      </div>
    </div>
  );
}
