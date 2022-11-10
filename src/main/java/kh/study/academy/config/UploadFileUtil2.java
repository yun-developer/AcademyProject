package kh.study.academy.config;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import kh.study.academy.board.vo.BoardImgVO;


public class UploadFileUtil2 {
	//final : 변수 값 바꾸는 것이 안 됨
	//상수(변하지 않고 항상 같은 값을 가지는 수)는 웬만하면 다 대문자로 이름 짓기
	//파일이 첨부될 경로 지정. 보통 static 폴더 밑에.. 복붙하고 뒤에 \\ 추가!!
	private static final String UPLOAD_PATH = "D:\\workspaceSTS\\AcademyProject\\src\\main\\resources\\static\\images\\board\\";
	
	
	//단일 파일 첨부
	//static : 이 메소드 쓸 때는 클래스명. 으로 접근 가능
//	public static BoardImgVO uploadFile(MultipartFile img) {
//		//if문 밖에서 인식시켜서 리턴 가능하게 하기 위해서 if문 전에 선언
//		String fileName = null;
//		String originFileName = null;
//		
//		//실제 첨부 파일이 있을 때만 첨부 기능 실행. 이거 없으면 이미지 첨부 안하고 입력 버튼 누를 시 오류 남
//		//이미지 첨부 안 하고 입력 버튼 누르면 mainImg.getOriginalFilename()에 빈 문자열 들어옴. null 말고~
//		if(!img.isEmpty()) {
//			//첨부하려는 원본 파일명
//			originFileName = img.getOriginalFilename();
//			
//			//파일명 중복을 막기 위해 랜덤한 문자열 형성해 줌
//			String uuid = UUID.randomUUID().toString();
//			
//			//원본파일명의 확장자
//			String extension = originFileName.substring(originFileName.lastIndexOf("."));  // -> 글자가 달라져도 확장자인 .jpg 만 들고 옴
//			
//			//첨부될 파일명 생성
//			fileName = uuid + extension;
//			
//			
//			try {
//				//파일 객체 생성
//				//File file = new File(파일 경로 + 파일명);   겹치는 걸 보호하기 위해 원본파일과 첨부파일명 다르게 해야 함  
//				File file = new File(UPLOAD_PATH + fileName); 
//				
//				img.transferTo(file);  //예외처리 꼭 해줘야 함. 설정한 경로 없을 수도 있으니까. Surround with try/catch 클릭
//			} catch (Exception e) {
//				e.printStackTrace();
//			} 
//		}
//		
//		//컨트롤러에서 쓰기 위해서 리턴시켜줌
//		
//		//리턴해야 하는 데이터를 저장하기 위한 객체
//		BoardImgVO imgVO = new BoardImgVO();
//		imgVO.setOriginFileName(originFileName);
//		imgVO.setStoredFileName(fileName);
//		
//		return imgVO;
//	}
	
	//다중 파일 첨부
	public static List<BoardImgVO> multiUploadFile(List<MultipartFile> boardImgs) {
		//subImgs.size();  첨부파일 하나도 안 넣어도 콘솔 찍어보면 1 나옴. 빈값도 개수 세기 때문
		List<BoardImgVO> list = new ArrayList<>();
		
		//첨부된 파일의 개수만큼 첨부를 반복
		for(MultipartFile boardImg : boardImgs) {
			//IS_MAIN이 다 Y로 들어와 있음. 근데 서브 이미지는 N이여야 함
			String fileName = null;
			String originFileName = null;
			
			//실제 첨부 파일이 있을 때만 첨부 기능 실행. 이거 없으면 이미지 첨부 안하고 입력 버튼 누를 시 오류 남
			//이미지 첨부 안 하고 입력 버튼 누르면 mainImg.getOriginalFilename()에 빈 문자열 들어옴. null 말고~
			if(!boardImg.isEmpty()) {
				//첨부하려는 원본 파일명
				originFileName = boardImg.getOriginalFilename();
				
				//파일명 중복을 막기 위해 랜덤한 문자열 형성해 줌
				String uuid = UUID.randomUUID().toString();
				
				//원본파일명의 확장자
				String extension = originFileName.substring(originFileName.lastIndexOf("."));  // -> 글자가 달라져도 확장자인 .jpg 만 들고 옴
				
				//첨부될 파일명 생성
				fileName = uuid + extension;
				
				
				try {
					//파일 객체 생성
					//File file = new File(파일 경로 + 파일명);   겹치는 걸 보호하기 위해 원본파일과 첨부파일명 다르게 해야 함  
					File file = new File(UPLOAD_PATH + fileName); 
					
					boardImg.transferTo(file);  //예외처리 꼭 해줘야 함. 설정한 경로 없을 수도 있으니까. Surround with try/catch 클릭
				} catch (Exception e) {
					e.printStackTrace();
				} 
			}
			
			BoardImgVO imgVO = new BoardImgVO();
			imgVO.setOriginFileName(originFileName);
			imgVO.setStoredFileName(fileName);
			list.add(imgVO);
		}
		
		//컨트롤러에서 쓰기 위해서 리턴시켜줌
		return list;
	}
}
