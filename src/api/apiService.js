const API_URL = "/BTLMS/ALPAS_TEST.do";

export const fetchApiData = async (name = "송성우") => {
  try {
    console.log("API 호출 시작:", `${API_URL}?name=${name}`); // URL 확인용 로그

    const response = await fetch(`${API_URL}?name=${name}`);

    if (!response.ok) {
      throw new Error("API 호출에 실패했습니다.");
    }

    const data = await response.json();
    console.log("받은 데이터:", data); // 받은 데이터 확인

    return data;
  } catch (error) {
    console.error("API 오류:", error);
    throw error;
  }
};
