import React, { Component } from 'react';
import Input from '../../../../Components/Input/Input';
import List from '../../../../Components/List/List';
import Table from '../../../../Components/Table/Table';
import TableContent from '../../../../Components/Table/TableContent';
import JOIN_LIST from '../../../../data/JoinListData';

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
    const { onChange, onClick } = this.props;

    return (
      <form className="JoinForm">
        <section>
          <div className="header">
            <span className="joinInfo">가입정보</span>
            <span className="requiredInfo">필수입력 항목</span>
            <div className="infoForm">
              <Table
                tableClassName={'JoinBasicTable'}
                colClassName={'JoinBasicCol'}
              >
                <TableContent tableHead={'기본정보'}>
                  <ul>
                    <List data={JOIN_LIST.first} onChange={onChange} />
                    <li className="joinList">
                      {JOIN_LIST.sec.map(input =>
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
                      )}
                    </li>
                    <li className="joinList">
                      {JOIN_LIST.third.map(input =>
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
                      )}
                    </li>
                    <List data={JOIN_LIST.fou} onChange={onChange} />
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
