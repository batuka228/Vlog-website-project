export const Message = () => {
  return (
    <div className="flex flex-col gap-[20px] w-[80%]">
      <div className="text-3xl">Leave Message</div>
      <div className="*:rounded-[6px] flex gap-[20px] *:w-[140px] *:text-[14px]">
        <input type="text" name="Your name " placeholder="Your name" />
        <input type="text" name="Your Email" placeholder="Your Email" />
      </div>
      <div className="bg-white rounded-[6px] flex gap-[40px] text-[14px]">
        <input type="text " name="Subject" placeholder="Subject" />
      </div>
      <div className="bg-white text-gray-300 rounded-[6px] flex gap-[40px] h-[200px] items-start py-[8px] ">
        <input type="text" name="Write message" placeholder="Write message" />
      </div>
      <div className="text-center bg-blue-600 text-white text-[12px] w-[120px] rounded-[6px] py-[8px] px-[16px]">
        Send Message
      </div>
    </div>
  );
};
