export default function AddButtons() {
  return (
    <div className="w-[449px] h-[47px] flex flex-row  items-center gap-[16px]">
      {/* Add Listing Button */}
      <button className="w-[230px] h-[47px] flex items-center justify-center  rounded-[10px] bg-[#f93b1d] text-white hover:bg-[#e12d14] transition-all duration-200">
        + ლისტინგის დამატება
      </button>

      {/* Add Agent Button */}
      <button className="w-[203px] h-[47px] flex items-center justify-center rounded-[10px] border border-[#f93b1d] text-[#f93b1d] bg-white hover:bg-[#f93b1d] hover:text-white hover:border-[#f93b1d] transition-all duration-300">
        + აგენტის დამატება
      </button>
    </div>
  );
}
