const Card = () => {
  return (
    <div>
      <div class="w-[400px] h-[124px] p-3 bg-neutral-700 rounded justify-start items-center gap-2 inline-flex">
        <div class="w-[100px] h-[100px] bg-white rounded flex-col justify-center items-center gap-2.5 inline-flex">
          <div class="text-center text-black text-xs font-normal font-['Inter']">
            Photo
          </div>
        </div>
        <div class="grow shrink basis-0 self-stretch flex-col justify-center items-start inline-flex">
          <div class="text-white text-xs font-normal font-['Inter']">
            Name: Curiosity
          </div>
          <div class="text-white text-xs font-normal font-['Inter']">
            Total photos: 500
          </div>
          <div class="text-white text-xs font-normal font-['Inter']">
            Date: 12.12.2000
          </div>
          <div class="text-white text-xs font-normal font-['Inter']">
            Camera: ZCAM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
