export const Education = () => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b-2 border-gray-800 mb-4 text-center">
        학력사항 및 자격사항
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {" "}
        {/* gap-4에서 gap-8로 변경해서 좌우 간격 늘림 */}
        {/* 왼쪽: 학력사항 */}
        <div>
          <h3 className="font-semibold mb-2 text-center">학력사항</h3>
          <div className="space-y-2">
            <div className="text-center">
              <div>청담 고등학교</div>
              <div>(2016.02 졸업)</div>
            </div>
            <div className="text-center">
              <div>홍익대학교 컴퓨터공학과</div>
              <div>(2024.02 졸업)</div>
            </div>
          </div>
        </div>
        {/* 오른쪽: 자격사항 */}
        <div>
          <h3 className="font-semibold mb-2 text-center">자격사항</h3>
          <div className="space-y-2">
            <div className="text-center">
              <div>정보처리기사</div>
              <div>(2021.08 취득)</div>
            </div>
            <div className="text-center">
              <div>OPIC IH</div>
              <div>(2024.03 취득)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
