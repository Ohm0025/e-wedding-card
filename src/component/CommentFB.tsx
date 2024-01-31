const CommentFB = () => {
  return (
    <div className="flex flex-col items-center text-[24px] mt-[70px]">
      <div className="flex flex-col text-center">
        <span className="text-[36px] font-semibold text-primary">
          ชวนส่งคำอวยพรให้บ่าวสาว
        </span>
        <span>อยากฝากข้อความถึงบ่าวสาว คอมเม้นท์ได้เลย!</span>
      </div>
      <div
        className="fb-comments"
        data-href="https://ohm0025.github.io/e-wedding-card/"
        data-width="320"
        data-numposts="5"></div>
    </div>
  );
};

export default CommentFB;
