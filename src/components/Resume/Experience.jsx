import React from "react";

export const Experience = () => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b-2 border-gray-800 mb-4">
        관련경험
      </h2>
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2">
          <div>2024.09 - 2024.11</div>
          <div className="col-span-2">
            캐시 서버 리팩토링(사이드 프로젝트)
            <br />
            - 기술 스택: Spring Boot, Redis, AWS, Prometheus
            <br /> 모니터링 체계 구축, AWS 클라우드 마이그레이션
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>2024.07 - 2024.08</div>
          <div className="col-span-2">
            OpenAI를 활용한 교열 자동화 서비스(조선일보 IT팀 인턴)
            <br />
            - 기술 스택: Spring Boot, FastAPI, Assistants API
            <br />- 데이터 분석 및 AI 시스템 설계
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>2024.03 - 2024.05</div>
          <div className="col-span-2">
            우리 동네 랭킹(사이드 프로젝트)
            <br />
            - 기술 스택: Spring Boot, Redis, WebSocket, MongoDB
            <br />- 실시간 채팅 시스템 개발 및 성능 최적화
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>2023.11 - 2024.01</div>
          <div className="col-span-2">
            캐시 서버 개발(기업 프로젝트)
            <br />
            - 기술 스택: Spring Boot, Redis, WebClient, AWS
            <br />- Redis를 활용하여 캐시 서버 구축 및 성능 80% 개선
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>2023.03 - 2023.09</div>
          <div className="col-span-2">
            시각 장애인을 위한 뉴스 대독 서비스(졸업 프로젝트)
            <br />
            - 기술 스택: Spring Boot, JPA, Google Cloud API
            <br />- 뉴스 음성 변환 서비스 구현
          </div>
        </div>
      </div>
    </section>
  );
};
