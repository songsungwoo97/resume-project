import React from "react";
import { useApiData } from "../../hooks/useApiData";

export const Footer = () => {
  const { apiData, loading, error } = useApiData();

  // 디버깅을 위한 로그 추가
  console.log("Footer 렌더링");
  console.log("apiData:", apiData);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  if (!apiData) {
    return <div className="text-center p-4">데이터가 없습니다.</div>;
  }

  return (
    <footer className="mt-8 text-center">
      {apiData?.img && (
        <img
          src={`data:image/jpeg;base64,${apiData.img}`}
          alt="API 이미지"
          className="mx-auto mb-4"
        />
      )}
      {apiData?.text && <p className="text-lg italic">{apiData.text}</p>}
    </footer>
  );
};
