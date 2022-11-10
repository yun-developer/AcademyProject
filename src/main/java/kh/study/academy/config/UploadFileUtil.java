package kh.study.academy.config;

import java.io.File;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import kh.study.academy.teacher.vo.ProfileImgVO;



public class UploadFileUtil {
	
	//파일이 첨부될 경로
	//final 상수 -> 값 변경 불가
	private static final String UPLOAD_PATH = "D:\\workspaceSTS\\AcademyProject\\src\\main\\resources\\static\\images\\";
	
	//파일 첨부
	//static -> class명. 으로 접근 가능
	public static ProfileImgVO uploadFile(MultipartFile profileImg) {
		
		String fileName = null;
		String originalFilename = null;
		
		//첨부파일이 있을 때만 첨부 기능 실행
		if(!profileImg.isEmpty()) {

			//첨부파일 등록
			
			//첨부하려는 원본 파일명
			originalFilename = profileImg.getOriginalFilename();
			
			//이름이 같은 img를 넣으면 덮어버리는 문제 발생;;;
			//파일명 중복을 막기 위해 랜덤한 파일명을 문자열로 생성
			//UUID : 랜덤 문자열 생성
			String uuid = UUID.randomUUID().toString();
			//확장자 추출 [ ㅁㅁㅁ."jpg" ] substring -> 첫글자가 0 부터 시작
			String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
				
			
			//실제 첨부될 파일명 생성
			fileName = uuid + extension;
				
			
			//  반드시 예외 처리 해야함.
			try {
				//파일 객체 생성
				//File file = new File("파일경로 + 파일명");
				File file = new File(UPLOAD_PATH + fileName);
				
				profileImg.transferTo(file);
			} catch (Exception e) {
				e.printStackTrace();
			} 
			
		}
		
			//리턴해야하는 데이터를 저장하기 위한 객체
			ProfileImgVO profileImgVO = new ProfileImgVO();
			profileImgVO.setStoredFileName(fileName);
			profileImgVO.setOriginFileName(originalFilename);
			
			//첨부 된 파일명을 담은 VO 리턴
			return profileImgVO;
	}
	
	

	
	
	
}
