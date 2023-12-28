vue와 git연습용

실행방법 
터미널열고 npm install -> npm run dev

1. 목표: 네이버 클론코딩
2. 환경: 1) front: vue.js, vuex, scss 기반  2) back: node.js 기반
3. 구현순서 1) 네이버 화면 적응형 퍼블리싱 2) 네이버 화면 기능(스와이퍼, 모달창 등) 3) node이용 로그인구현

요청사항: 
1.협업할때 gir 상태 확인을 위해 git graph 사용할 생각이라 설치 요청 부탁드립니다.
![협업 gir graph](https://github.com/survive-it/PracticeGit/assets/72345833/74fe1561-ab2f-4bf5-a49f-4597cf791302)

2. 제가 올린 파일 클론 방법
   https://ittrue.tistory.com/91 참고하셔도 좋고 어려우시다면
   ![git clone](https://github.com/survive-it/PracticeGit/assets/72345833/e7039f41-aa09-4b67-91c0-2702d0bb9745)
   클릭후 받으려고하고자 하는 파일명 찾아서 누르시면되세요
   위 방법대로하시면 깃에있는 파일을 본인pc에서 사용가능합니다.


깃 브랜치 사용할 방법 <br>
main : 최종병합할 브랜치 <br>
develop : 기타 여러브랜치를 합쳐서 이 브랜치에 병합 <br>
기타 여러브랜치 : 팀원들이 각각 개발할 브랜치 <br> <br>


git 명령어  <br>
현재 깃 상태확인 : git status <br>
git 저장소 생성하기 : git init <br>
현재 위치에 깃 복제 : git clone [https: ~~~~ ] <br>
현재 브랜치 확인 : git branch <br>
브랜치 생성 : git branch 브랜치이름 <br>
원하는 브랜치로 이동 : git checkout 브랜치이름 <br>
원하는 브랜치 제거 : git branch -d 브랜치이름 <br>
저장소 코드추가 : git add <br>
커밋(나의 저장소에 저장) : git commit -m "message"  (message 부분은 수정내용이나 추가된 코드내용 적어주면됩니다) <br>
푸쉬(원격저장소로 보내기) : git push origin 브랜치명 <br>
풀(나의 저장소로 가져오기) : git pull origin 브랜치명 <br>
현재 브랜치에 다른브랜치 수정사항 합치기 : git merge 다른브랜치이름 <br>












