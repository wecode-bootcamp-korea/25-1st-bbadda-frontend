import React, { Component } from 'react';
import RadioInput from '../../../../Components/RadioInput/RadioInput';
import BirthdayInput from '../../../../Components/BirthdayInput/BirthdayInput';
import PhoneInput from '../../../../Components/PhoneInput/PhoneInput';
import Input from '../../../../Components/Input/Input';
import List from '../../../../Components/List/List';
import Table from '../../../../Components/Table/Table';
import TableContent from '../../../../Components/Table/TableContent';
import JOIN_LIST from '../../../../data/JoinListData';
import MOBILE_NUM from '../../../../data/MobileNumList';

import './JoinForm.scss';

class JoinForm extends Component {
  constructor() {
    super();
    this.state = {
      checkPw: '',
      inputList: [],
    };
  }

  render() {
    const { errorMessage, onChange, onClick } = this.props;
    console.log(this.state.inputList);
    return (
      <form className="JoinForm">
        <section>
          <div>
            <span>가입정보</span>
            <span className="requiredInfo">필수입력 항목</span>
            <div className="infoForm">
              <Table
                tableClassName={'JoinBasicTable'}
                colClassName={'JoinBasicCol'}
              >
                <TableContent trClassName={'basicInfo'} tableHead={'기본정보'}>
                  <ul>
                    <List
                      data={JOIN_LIST.first}
                      onChange={onChange}
                      errorMessage={errorMessage}
                    />
                    <li className="joinList">
                      <Input
                        className="name"
                        placeholder="이름(실명입력)"
                        name="name"
                        onChange={onChange}
                      />
                      <RadioInput
                        name="foreigner"
                        onClick={onClick}
                        firstText="외국인"
                        secondText="내국인"
                      />
                    </li>
                    <li className="joinList">
                      <BirthdayInput onChange={onChange} />
                      <RadioInput
                        name="gender"
                        onClick={onClick}
                        firstText="남자"
                        secondText="여자"
                      />
                      {/* {JOIN_LIST.third.map(input =>
                        input.radio ? (
                          <label className="radioLabel">
                            <Input
                              key={input.id}
                              className={input.className}
                              type={input.type}
                              name={input.name}
                              value={input.value}
                              onClick={onClick}
                            />
                            {input.radioName}
                          </label>
                        ) : (
                          <Input
                            id={input.id}
                            className={input.className}
                            placeholder={input.placeHolder}
                            type={input.type}
                            name={input.name}
                            onChange={onChange}
                          />
                        )
                      )} */}
                    </li>
                    <List data={JOIN_LIST.fou} onChange={onChange} />
                    <li className="joinListLast">
                      <PhoneInput
                        firstInputName="firstNum"
                        secondInputName="secondNum"
                        thirdInputName="thirdNum"
                        onChange={onChange}
                        None=""
                      />
                      {/* <List data={MOBILE_NUM} /> */}
                    </li>
                  </ul>
                </TableContent>
              </Table>
            </div>
          </div>
        </section>
      </form>
    );
  }
}

export default JoinForm;
