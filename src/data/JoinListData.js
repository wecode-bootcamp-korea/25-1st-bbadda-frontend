const JOIN_LIST = {
  first: [
    {
      id: 1,
      classNameA: 'firstInput',
      classNameB: 'halfInput',
      placeHolder: '아이디 (6~15자 영문 소문자.숫자)',
      type: 'text',
      name: 'account',
      single: true,
    },
    {
      id: 2,
      classNameA: 'joinList',
      classNameB: 'basicInput',
      placeHolder: '비밀번호 ( 8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합',
      type: 'password',
      name: 'password',
      single: true,
    },
    {
      id: 3,
      classNameA: 'joinList',
      classNameB: 'basicInput',
      placeHolder: '비밀번호 확인',
      type: 'password',
      name: 'checkPw',
      single: true,
    },
  ],
  sec: [
    {
      id: 1,
      className: 'name',
      placeHolder: '이름(실명입력)',
      type: 'text',
      name: 'name',
    },
    {
      id: 2,
      className: 'button1',
      value: 'false',
      type: 'radio',
      name: 'foreigner',
      radio: true,
      radioName: '내국인',
    },
    {
      id: 3,
      className: 'button2',
      value: 'true',
      type: 'radio',
      name: 'foreigner',
      radio: true,
      radioName: '외국인',
    },
  ],
  third: [
    {
      id: 1,
      className: 'year',
      placeHolder: '생년(4자)',
      type: 'text',
      name: 'year',
    },
    {
      id: 2,
      className: 'month',
      placeHolder: '월',
      type: 'text',
      name: 'month',
    },
    {
      id: 3,
      className: 'date',
      placeHolder: '일',
      type: 'text',
      name: 'date',
    },
    {
      id: 4,
      className: 'button1',
      value: 'true',
      type: 'radio',
      name: 'gender',
      radio: true,
      radioName: '남자',
    },
    {
      id: 5,
      className: 'button2',
      value: 'false',
      type: 'radio',
      name: 'gender',
      radio: true,
      radioName: '여자',
    },
  ],
  fou: [
    {
      id: 1,
      classNameA: 'joinList',
      classNameB: 'basicInput',
      placeHolder: 'E-mail',
      type: 'email',
      name: 'email',
      single: true,
    },
    {
      id: 2,
      classNameA: 'joinList',
      classNameB: 'basicInput',
      placeHolder: '전화번호',
      type: 'tel',
      name: 'mobile_number',
      single: true,
    },
  ],
};

export default JOIN_LIST;
