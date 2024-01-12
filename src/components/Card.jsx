import "./Card.css";

const Card = ({ text, id }) => {
  return (
    <a href={`/${id}`}>
      <div className="Card">
        <div class="w-[400px] h-[124px] p-3 bg-neutral-700 rounded justify-start items-center gap-2 inline-flex">
          <div class="w-[100px] h-[100px] bg-white rounded flex-col justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-black text-md font-normal font-['Inter']">
              Photo
            </div>
          </div>
          <div class="grow shrink basis-0 self-stretch flex-col justify-center items-start inline-flex">
            <div class="text-white text-md font-normal font-['Inter']">
              {text}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
