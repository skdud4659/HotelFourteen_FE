# 🧚🏻‍♀️항해99 미니프로젝트 14조 - 프론트(김나영, 이원교)

와이어프레임 : https://www.figma.com/file/O4IB0kbXsRz8xi6oZrjNLI/Untitled?node-id=0%3A1

## 🙌🏻member
### view
#### 나영
- 로그인 & 회원가입 / 리뷰 작성(+수정) / 선택 예약 확인 / 마이페이지
#### 원교
- 메인(룸타입 이미지 슬라이드 / 일정 선택 캘린더 / 리뷰 목록)
### function
#### 나영
- 리뷰게시판 CRUD / 로그인 상태에서만 리뷰 Create 가능 / 내가 쓴 리뷰에서만 Update,Delete 가능 / 마이페이지 - 현재 예약 Road
#### 원교
- 로그인&회원가입(토큰,쿠키 사용) / 선택 예약 확인 페이지 - 메인 페이지에서 선택한 예약 일정, 인원, 룸타입 확인 후 예약 Create / 마이페이지 - 현재 예약 Delete

## ✍🏻 프로젝트 소스
@최소단위 엘리먼트
- Grid
- Text
- Button - 로그인/회원가입/커뮤니티/예약 확인
- Image - 슬라이드
- Input (type : date) - 예약 일정 선택 **
- (ttl) index.js

@ 컴포넌트
- RoomTimeChk
- ReviewCard
- Review
- Detail
- Write
- Calendar
- SearchRoom
- Book_Calender
- CardDetail
- CountCustomer
- RoomTypeSelector
- Slider

@shared
- Thema
- Header
- App
- cookie
- Permit

