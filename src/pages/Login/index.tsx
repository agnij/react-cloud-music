import React, { useState, useRef } from 'react';

import AuthContainer from 'containers/AuthContainer';
import ScaleInWrapper from 'components/ScaleInWrapper';
import CheckBox from 'components/CheckBox';

import StyledLogin, { LogoContainer, LogoImg, Button, FormWrapper, Input, ButtonMin } from './style';

function Login() {
  const { loginAction } = AuthContainer.useContainer();

  const checkboxRef = useRef<HTMLDivElement>(null);
  const [checked, setChecked] = useState(false);
  let phoneInput: any;
  let passwordInput: any;

  return (
    <ScaleInWrapper
      fromScale={0.6}
      duration={150}
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
      }}>
      <StyledLogin>
        <LogoContainer>
          <div>
            <LogoImg />
          </div>
        </LogoContainer>
        <FormWrapper>
          <Input placeholder="请输入手机号码" type="tel" maxLength={11} ref={(input) => phoneInput = input}/>
          <Input placeholder="请输入密码" ref={(input) => passwordInput = input}/>
          <div style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between'
          }}>
            <Input placeholder="请输入密码"/>
            <ButtonMin>获取验证码</ButtonMin>
          </div>
          <Button
            onClick={() => {
              if (!checked) {
                if (checkboxRef.current) {
                  checkboxRef.current.classList.add('shake-admin');
                  setTimeout(() => {
                    checkboxRef.current!.classList.remove('shake-admin');
                  }, 500);
                }
                return;
              }
              loginAction({ phone: phoneInput.value, password: passwordInput.value });
            }}>
            登录
          </Button>
          <CheckBox ref={checkboxRef} name="secret" checked={checked} onChange={(s) => setChecked(s)}>
            <span>同意{'<<隐私政策>>'}</span>
          </CheckBox>
        </FormWrapper>
      </StyledLogin>
    </ScaleInWrapper>
  );
}
export default React.memo(Login);
