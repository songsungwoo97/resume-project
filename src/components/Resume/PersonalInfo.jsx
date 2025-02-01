import React from "react";

export const PersonalInfo = () => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b-2 border-gray-800 mb-4">
        인적사항
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="font-semibold">성명</div>
            <div className="col-span-2 text-left">송성우</div>
            <div className="font-semibold">생년월일</div>
            <div className="col-span-2 text-left">1997.04.12</div>
            <div className="font-semibold">연락처</div>
            <div className="col-span-2 text-left">010-3927-0412</div>
            <div className="font-semibold">이메일</div>
            <div className="col-span-2 text-left">
              songsungwoo9200@gmail.com
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/song.jpg"
            alt="증명사진"
            className="w-32 h-40 border-2 border-gray-300"
          />
        </div>
      </div>
    </section>
  );
};
